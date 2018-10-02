/**  File: generateForms.js
* 
* @author: Aaceves
* @created: 9/24/2018
* @description: This generates Files for a Specifiv verb, reads from tag.txt
*/
const fs = require('fs');
const TAG_FILE = "tag.json";
const template_controller = "templates/controller.js";
const target_file_controller = "build/controller.js";

const template_routes = "templates/routes.js";
const target_file_routes = "build/routes.js";

const template_model = "templates/model.js";
const target_file_model = "build/model.js";

var TAG = "Proveedor";

console.log('Generating scaffolding...');

//  GET JSON from Fie / src: https://www.codementor.io/codementorteam/how-to-use-json-files-in-node-js-85hndqt32
var json_contents = fs.readFileSync(TAG_FILE);
// Define to JSON type
var configuration = JSON.parse(json_contents);
// Get Value from JSON
console.log("Nombre:", configuration.nombre);
//console.log("Data:", configuration.data);
console.log("Data: ");

var campos =[];
var tipos = [];
for(var exKey in configuration.data) {
  
  campos.push(configuration.data[exKey].nombre);
  tipos.push(configuration.data[exKey].tipo); 
  //  TODO: Validar Tipos String, Number, Boolean, null, undefined...
  
console.log("#"+exKey+" Property => "+ configuration.data[exKey].nombre + " : " + configuration.data[exKey].tipo ); 

}
var functionParameters = campos.join();

if(configuration.nombre!='')
{
    console.log('Usando valores de Archivo: '+TAG_FILE);
    TAG = configuration.nombre;
    console.log("TAG = "+TAG);
}

//Prepare :verticalUpdate
var verticalUpdateStr = '';
for(var i in campos)
{
  verticalUpdateStr +=   TAG.toLowerCase()+'.'+campos[i]+' = data.'+  campos[i]+ "\n\t\t\t";
}

// Prepare :verticalDataTypeForModel
// nombre : String[,...]
var verticalDataTypeForModel = '';
var arrayDataTypes = [];

for(var i in campos)
{
  arrayDataTypes[i] =   campos[i]+': '+  tipos[i];
}
verticalDataTypeForModel = arrayDataTypes.join(",\n\t");

// Prepare :constDataPostAssignation
// const nombre    = req.body.nombre
var constDataPostAssignation = '';
for(var i in campos)
{
  constDataPostAssignation +=   'const '+campos[i]+"\t\t\t\t"+'= req.body.'+  campos[i]+ "\n\t\t\t\t";
}

// Prepare :constDataPutAssignation
//nombre    : req.body.nombre,
var constDataPutAssignation = '';
for(var i in campos)
{
  constDataPutAssignation +=   campos[i]+"\t\t\t\t"+': req.body.'+  campos[i]+ ",\n\t\t\t\t";
}


//***  Creating Controller <TAG>.js File
fs.readFile(template_controller, 'utf8', function (err,data) {
    
  if (err) {
    return console.log(err);
  }

  var result = data.replace(/Cliente/g, TAG );  //CamelCase
  result = result.replace(/cliente/g, TAG.toLowerCase()); //lowercase
  // Replace :functionParameters
  result = result.replace(/:functionParameters/g, functionParameters);
  result = result.replace(/:verticalParameters/g, campos.join(",\n\t\t\t"));
  result = result.replace(/:verticalUpdate/g, verticalUpdateStr);
  
  
  
  fs.writeFile(target_file_controller, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
  
});


//***  Creating Routes <TAG>.js File
fs.readFile(template_routes, 'utf8', function (err,data) {

  if (err) {
    return console.log(err);
  }

  var result = data.replace(/Cliente/g, TAG );  //CamelCase
  result = result.replace(/cliente/g, TAG.toLowerCase()); //lowercase
  result = result.replace(/:constDataPostAssignation/g, constDataPostAssignation);
  result = result.replace(/:constDataPutAssignation/g, constDataPutAssignation);
  result = result.replace(/:functionParameters/g, functionParameters);


  fs.writeFile(target_file_routes, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
  
});


//  Creating Model <TAG>.js File
fs.readFile(template_model, 'utf8', function (err,data) {

  if (err) {
    return console.log(err);
  }

  var result = data.replace(/Cliente/g, TAG );  //CamelCase
  result = result.replace(/cliente/g, TAG.toLowerCase()); //lowercase
  result = result.replace(/:verticalDataTypeForModel/g, verticalDataTypeForModel);

  fs.writeFile(target_file_model, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
  
});

//  TODO: Revisar FrontEnd Files para aplicar la misma

console.log('Build Completed!!!  (Check folder: forms/build/ )');
console.log('...Add the parameter in /src/routes/route.js to the new TAG...');