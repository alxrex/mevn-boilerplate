
const fs = require('fs');
const TAG = "Proveedor";

const template_controller = "templates/controller.js";
const target_file_controller = "build/controller.js";

const template_routes = "templates/routes.js";
const target_file_routes = "build/routes.js";

const template_model = "templates/model.js";
const target_file_model = "build/model.js";


console.log('Generating scaffolding...');

//  Creating Controller <TAG>.js File
fs.readFile(template_controller, 'utf8', function (err,data) {
    
  if (err) {
    return console.log(err);
  }

  var result = data.replace(/Cliente/g, TAG );  //CamelCase
  result = result.replace(/cliente/g, TAG.toLowerCase()); //lowercase

  fs.writeFile(target_file_controller, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
  
});


//  Creating Routes <TAG>.js File
fs.readFile(template_routes, 'utf8', function (err,data) {

  if (err) {
    return console.log(err);
  }

  var result = data.replace(/Cliente/g, TAG );  //CamelCase
  result = result.replace(/cliente/g, TAG.toLowerCase()); //lowercase

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

  fs.writeFile(target_file_model, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
  
});


console.log('Build Completed!!!');

/*
function readMyData(fd) {
    console.log(fd);
    
    var result = fd.replace(/Cliente/g, TAG ); //CamelCase
    result.replace(/cliente/g, TAG.toLowerCase()); //lowercase

    fs.writeFile(target_file, result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
  
};
fs.open(template_controller, 'r', (err, fd) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('File: ' + template_controller + ' does not exist');
      return;
    }

    throw err;
  }

  readMyData(fd);
});*/