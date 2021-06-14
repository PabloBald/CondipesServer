const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'password',
    database:'newdb',
})

//Conectar
connection.connect((err) =>{
    if(err) throw err;
    console.log('La conexion funciona');
})

///////////////////////////////////////////////
const express = require('express');
const { query } = require('express');
const app = express()
const port = 9000
const ip = "http://localhost"//"http://201.179.59.172";
app.use(express.static(__dirname + '/public'));
////////////////////////////////////////////////

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})
app.get('/equipos',(req,res)=>{
  
  let query = "SELECT DISTINCT `CLUB TEAM` FROM db WHERE `CLUB TEAM` != '0' ORDER BY `CLUB TEAM` ASC;"

    connection.query(query,(err,rows)=>{
      if(err) throw err;
      res.send(rows)
    }) 
  }
)
app.post('/jugadores',(req,res)=>{
   const equipo = req.body.equipo
   let query = "SELECT `NAME` FROM db WHERE `CLUB TEAM` = '"+equipo+"' AND `CLUB TEAM` != '  ';"
   connection.query(query,(err,rows)=>{
    if(err) throw err;
    res.send(rows)
  })
}
)

app.post('/jugadores/stats',(req,res)=>{
  const jugador = req.body.jugador
  const equipo = req.body.equipo
  let query = 'SELECT `ATTACK`,`DEFENSE`,`BALANCE`,`STAMINA`,`TOP SPEED`,`ACCELERATION`,`RESPONSE`,`AGILITY`,`DRIBBLE ACCURACY`,`DRIBBLE SPEED`,`SHORT PASS ACCURACY`,`SHORT PASS SPEED`,`LONG PASS ACCURACY`,`LONG PASS SPEED`,`SHOT ACCURACY`,`SHOT POWER`,`SHOT TECHNIQUE`,`FREE KICK ACCURACY`,`SWERVE`,`HEADING`,`JUMP`,`TECHNIQUE`,`AGGRESSION`,`MENTALITY` FROM db WHERE `CLUB TEAM` = "'+equipo+'" AND `NAME` = "'+jugador+'";'
  connection.query(query,(err,rows)=>{
    if(err) throw err;
    res.send(rows[0])
  })
})

app.listen(port, () => {
  console.log(`Example app listening at ${ip}:${port}`)
})