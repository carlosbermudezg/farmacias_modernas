const app = require('./app');

const port = 3001
const server = async ()=>{
    app.listen(port)
    console.log('Server Running')
}

server()