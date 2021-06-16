var db = require('../dbconnection');

teamControllers= {
    getTeams: (req,res)=>{
        let query = "SELECT DISTINCT `CLUB TEAM` FROM db WHERE `CLUB TEAM` != '0' AND `CLUB TEAM` != '' ORDER BY `CLUB TEAM` ASC;"
          db.connection.query(query,(err,rows)=>{
            if(err) throw err;
            res.send(rows)
          }) 
        },
    getPlayers: (req,res)=>{
      const params = req.body.equipo
      let query = "SELECT `NAME` FROM db WHERE `CLUB TEAM` = '"+params+"' AND `CLUB TEAM` != '  ';"
      db.connection.query(query,(err,rows)=>{
       if(err) throw err;
       res.send(rows);
     })
   },
   getStats: (req,res)=>{
    const jugador = req.body.jugador
    const equipo = req.body.equipo
    let query = 'SELECT `ATTACK`,`DEFENSE`,`BALANCE`,`STAMINA`,`TOP SPEED`,`ACCELERATION`,`RESPONSE`,`AGILITY`,`DRIBBLE ACCURACY`,`DRIBBLE SPEED`,`SHORT PASS ACCURACY`,`SHORT PASS SPEED`,`LONG PASS ACCURACY`,`LONG PASS SPEED`,`SHOT ACCURACY`,`SHOT POWER`,`SHOT TECHNIQUE`,`FREE KICK ACCURACY`,`SWERVE`,`HEADING`,`JUMP`,`TECHNIQUE`,`AGGRESSION`,`MENTALITY` FROM db WHERE `CLUB TEAM` = "'+equipo+'" AND `NAME` = "'+jugador+'";'
    db.connection.query(query,(err,rows)=>{
      if(err) throw err;
      res.send(rows[0])
    })
  }
}

module.exports = teamControllers;