/*
Vamos a crear un servidor estático Nativo
Es decir un software que a futuro funcionará desde el hardware del servidor y contestará
a las peticiones que realiza el cliente
*/

//1- Importación del módulo http
const http = require('http');

// 2- Creación del servidor estático
// 2.1- Crearemos una función (función expresada) se llama server, 
// esta función se activa ante una petición 
const server = http.createServer((req, res)=>{
    // en el método writeHead() del objeto res el segundo parámetro
    // espera un objeto que contiene pares clave-valor 
    // que representan los encabezados HTTP que se enviarán junto con la respuesta.
    res.writeHead(200, {
        // 'Content-Type': 'text/plain', //--> pasamos un texto plano
        /*Devolvemos un elemento HTML*/
        'Content-Type': 'text/html; charset=UTF-8'
    });
    //El método res.end() en Node.js se utiliza para finalizar la respuesta HTTP 
    // y enviar cualquier dato opcional al cliente. 
    // res.end('Hola Mundo'); //--> pasamos un mensaje
    /*Devolvemos un elemento HTML*/
    
    res.end('<h1>Hola Mundo</h1><p>Esto es un párrafo</p>')
});

// LLamamos a la función server, esta quedará escuchando permanentemente en el puerto asignado
server.listen(3000, ()=>{
    console.log('Servidor escuchando en puerto http://localhost:3000')
});

//fin