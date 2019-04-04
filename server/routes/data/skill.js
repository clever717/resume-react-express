import express from 'express';
const router = express.Router();
const Skill = require('./../../models/skill');

router.get('/', function (req, res) {
  Skill.find(function (err, skills) {
    if (err) {
      return res.status(500).send({error: 'database failure'});
    }
    res.json(skills);
  })

});
export default router;
