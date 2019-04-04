import express from 'express';
import skill from './skill'

const router = express.Router();
router.use('/skill', skill);

export default router;
