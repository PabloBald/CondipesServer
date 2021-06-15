///////////////////////////////////////////////
const express = require('express');
const app = express()
const port = 9000
const ip = "http://localhost"//"http://201.179.59.172";
app.use(express.static(__dirname + '/public'));
const bodyparser = require('body-parser');
// Middlewares
app.use(bodyparser.urlencoded({
  extended: false
}));
app.use(bodyparser.json({
  limit: '200mb'
}));
////////////////////////////////////////////////

//Rutas
const teamControllersRoutes = require("./routes/teamRoutes")

app.get('/equipos',teamControllers.getTeams)
app.post('/equipos/jugadores',teamControllers.getPlayers)
app.post('/equipos/jugadores/atributos',teamControllers.getStats)

app.listen(port, () => {
  console.log(`Example app listening at ${ip}:${port}`)
})