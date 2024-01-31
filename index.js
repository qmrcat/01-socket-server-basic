const Server = require( "./models/server" );

require('dotenv').config();


const server = new Server();
server.execute();


/*
const express = require('express'); //>class
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => { 
    console.log('Client conectat: ', socket.id );

    ////socket.emit('mensaje-bienvenida', { msg: "Benvingut al servidor", data: new Date(), elTeuId: socket.id } )

    socket.on('msg-al-servidor', ( data )=> {
        console.log('msg-al-servidor del client: ', socket.id)
        console.log(data)

        //socket.emit('msg-del-servidor', { ...data, id: socket.id }) // a un unic client
        io.emit('msg-del-servidor', { ...data, id: socket.id }) // tots els clients
    })
});

const PORT = process.env.PORT ?? 8080;

server.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`) 
});
*/

/*
// const express = require('express');
// const app = express();
// const server = require('http').createServer(app);
// const io = require('socket.io')(server);
// app.use( express.static( __dirname + '/public') )
// io.on('connection', (socket) => { 
//     console.log('Client conectat');
// });
// const PORT = process.env.PORT ?? 8080;
// console.log(PORT);
// app.listen(PORT, () => {
//     console.log(`server listening on port http://localhost:${PORT}`) 
//   })
*/