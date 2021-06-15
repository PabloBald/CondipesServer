///////////////////////////////////////////////
const express = require('express');
const app = express()
app.use(express.static(__dirname + '/public'));
const bodyparser = require('body-parser');
// Middlewares
app.use(bodyparser.urlencoded({
  extended: false
}));
app.use(bodyparser.json({
  limit: '1mb'
}));
////////////////////////////////////////////////

//Rutas
const teamControllersRoutes = require("./routes/teamRoutes")

app.get('/equipos',teamControllers.getTeams)
app.post('/equipos/jugadores',teamControllers.getPlayers)
app.post('/equipos/jugadores/atributos',teamControllers.getStats)
app.get('*',(req,res)=>{
  res.send('<h1>Oops parece que te haz perdido!</h1> <h2>Clickea aqui para regresar al <a href="/">inicio</a></h2>'
  );
})
app.listen(9000, () => {
  console.log(`Example app listening at localhost:9000`)
})