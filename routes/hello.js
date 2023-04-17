const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Returns a greeting message
 *     tags: [Hello World!]
 *     responses:
 *       200:
 *         description: Greeting message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello, world!
 */
router.get('/hello', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

module.exports = {
    router
};
