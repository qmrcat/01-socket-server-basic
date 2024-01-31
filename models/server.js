const express  = require('express');
const http     = require('http');
const socketio = require("socket.io");
const path     = require('node:path');
const cors     = require('cors');
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

        // cors
        // this.app.use( cors({
        //     origin: (origin, callback) => {
        //         console.log( "Origin: ", origin );
                
        //         return callback(null, true)
        //     }
        // }) ) ;


        this.app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
          });

    }

/*

 app.use(cors({
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = [
        'http://127.0.0.1',
        'http://127.0.0.1:5500',
        'http://localhost',
        'http://localhost:8080',
        'http://localhost:1234',
        'https://movies.com',
        'https://midu.dev'
      ]
  
      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true)
      }
  
      if (!origin) {
        return callback(null, true)
      }
  
      return callback(new Error('Not allowed by CORS'))
    }
  }))


*/



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