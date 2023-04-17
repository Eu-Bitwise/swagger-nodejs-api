const express = require('express');
const router = express.Router();

let value = 'Initial value';

/**
 * @swagger
 * /value:
 *   get:
 *     summary: Returns the current value
 *     tags: [Get & Set Value]
 *     responses:
 *       200:
 *         description: Current value
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 value:
 *                   type: string
 *                   example: Initial value
 */
router.get('/value', (req, res) => {
    res.json({ value });
});

/**
 * @swagger
 * /value/{newValue}:
 *   get:
 *     summary: Updates the value
 *     tags: [Get & Set Value]
 *     parameters:
 *       - in: path
 *         name: newValue
 *         required: true
 *         description: The new value
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Message confirming the update
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Value updated
 */
router.get('/value/:newValue', (req, res) => {
    value = req.params.newValue;
    res.json({ message: 'Value updated' });
});

module.exports = {
    router
};
