// import json-server

const jsonServer=require('json-server')

// create an application in the backaend using jsonServer(variable)

const drServer=jsonServer.create()

//setup path for db.json

const router=jsonServer.router('db.json')

//return a middleware

const middleware=jsonServer.defaults()

// to setup a port

const port=3001

//use in server

drServer.use(middleware)
drServer.use(router)

// to run port

drServer.listen(port,()=>{
    console.log('drServer listening on the port',port);
})