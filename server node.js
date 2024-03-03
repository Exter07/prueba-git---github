const http = require('http');
const cursos = require('./cursos node.js');
const servidor = http.createServer((req,res) => {
    const {method} = req;

    switch (method) {
        case 'GET':
            return manejarSolicitudGet(req,res);
        case 'POST':
            return manejarSolicitudPOST(req,res); 
        default:
            console.log(`El metodo no puede ser manejado en el servidor: ${method}`);
    }
});

function manejarSolicitudGet(req,res){
    const path =req.url;
    if(path === '/'){
        res.statusCode = 200;
        return res.end('Bienvenido a mi primer servidor creado con Node.js');
    } else if(path === '/cursos'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos));
    } else if (path === '/cursos/programacion') {
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    } else if(path === '/cursos/matematica'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.matematica));
    }
    res.statusCode = 404;
    return res.end('El recurso no ha sido encontrado');
}

function manejarSolicitudPOST (req,res){
    const path = req.url;
    if(path === '/cursos/programacion'){
        res.statusCode= 200;
        return res.end('El servidor recibio una solicitud POST para cursos/programacion');
    }
}

const PUERTO = 3000;
servidor.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto: ${PUERTO}`);
})