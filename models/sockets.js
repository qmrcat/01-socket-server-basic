

class Socket {

    constructor( io ) {

        this.io = io;

        this.socketEvents();

    }

    socketEvents() {

        this.io.on('connection', ( socket ) => { 
        
            socket.on('msg-al-servidor', ( data )=> {
                console.log( data )
                //socket.emit( 'msg-del-servidor', { ...data, id: socket.id } ) // a un unic client
                this.io.emit( 'msg-del-servidor', { ...data, id: socket.id } ) // tots els clients
            })

        });


    }


}


module.exports = Socket;