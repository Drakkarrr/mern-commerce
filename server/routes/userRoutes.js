import express from 'express';

const router = express.Router();

router.post('/').post(createUser);

export default router;
