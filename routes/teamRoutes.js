const express = require('express')
const router = express.Router();
const teamControllers = require("../controllers/teamControllers");

router.get('/',teamControllers.getTeams);
router.post('/jugadores',teamControllers.getPlayers);
router.post('/jugadores/atributos',teamControllers.getStats);

module.exports = router;