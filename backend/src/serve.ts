import express, { request } from 'express';
import './database/connection';

const app = express();
app.use(express.json());

//Rota = conjunto
//Resurso = usuario 
//Metodos HTTP = GET , POST, PUT , DELETE

// -----GET = Buscar uma informação 
// -----POST = Criar Uma informação 
// -----PUT = editar uma informação
// -----Delete = deletando uma informação
//Parametros
//---- Querry Params: http://localhost:3333/users?search=jerry
//---- Route Params: http://localhost:3333/users/1 (indentificar um rercurso)
//---- Body : http://localhost:3333/users

app.get('/users',(resquest,response)=>{
   
    console.log(resquest.query);
    console.log(resquest.params);
    console.log(request.body);

    return response.send({message: 'Hello word'});
});

app.listen(3333);

//REQ / RES

