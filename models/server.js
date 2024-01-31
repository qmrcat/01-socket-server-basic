const express  = require('express');
const http     = require('http');
const socketio = require("socket.io");
const path     = require('node:path');
const Socket   = require('./sockets');


/////app.use(express.static(__dirname + '/public'));

class Server {
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT ?? 8080;

        //HTTP Server
        this.server = http.createServer( this.app );
        
        //Configuració dels sockets (endolls)
        this.io = socketio( this.server, { 
            //Configuracions

        } );

    }

    middlewares() { // Ponts o intermediaris
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );
    }

    configSockets(){
        new Socket( this.io );
    }

    execute() {

        this.middlewares();

        this.configSockets();

        this.server.listen( this.port, () => {
            console.log( `(QMRcat) server listening on port http://localhost:${this.port}` ) 
        });

    }


} 

module.exports = Server;