///////////////////////////////////////////////
const express = require('express');
const app = express()
app.use(express.static(__dirname + '/public'));
const bodyParser = require('body-parser');
// Middlewares
app.use(bodyParser.json({
  limit: '1mb'
}));
app.use(bodyParser.urlencoded({
  extended : false
}))
////////////////////////////////////////////////

//Rutas
const teamRoutes = require("./routes/teamRoutes")
app.use('/equipos',teamRoutes)

app.get('*',(req,res)=>{
  res.send('<h1>Oops parece que te haz perdido!</h1> <h2>Clickea aqui para regresar al <a href="/">inicio</a></h2>'
  );
})
app.listen(9000, () => {
  console.log(`Example app listening at localhost:9000`)
})