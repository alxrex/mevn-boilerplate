# MEVN boilerplate

based on [this tutorial](https://medium.com/@anaida07/mevn-stack-application-part-1-3a27b61dcae0)


## prerequisites
- mongodb [installation instructions](https://docs.mongodb.com/manual/administration/install-community/)

## running
api:
```
$ cd api/
$ npm install
$ npm run start
```
web interface:
```
$ cd web/
$ npm install
$ npm run dev
```

start mongodb
```
"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\Datos\db"
```


Generate Backend
1. Create the tag.json file (api/src/forms/) whit the Json for a new Object
2. Execute the below command:
```
$ cd api/src/forms/
$ node generateForms.js
```
3: Rename each file generated on api/src/forms/build/ and place in the corresponding folder
controller.js 	> api/src/controllers/ObjectName.js
model.js 		> api/src/models/ObjectName.js
routes.js 		> api/src/routes/ObjectName.js


