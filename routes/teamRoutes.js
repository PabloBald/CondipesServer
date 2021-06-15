const express = require('express')
const router = express.Router();

const teamControllers = require("../controllers/teamControllers");

router.get('/equipos',teamControllers.getTeams);
router.post('/equipos/jugadores',teamControllers.getPlayers);
router.post('/equipos/jugadores/atributos',teamControllers.getStats);

module.exports = router;