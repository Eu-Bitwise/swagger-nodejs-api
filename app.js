const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const helloRoutes = require('./routes/hello').router;
const valueRoutes = require('./routes/value').router;

const app = express();
const port = process.env.PORT || 3000;

// Setting up Swagger configuration
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Simple Swagger API',
            version: '1.0.0',
        },
    },
    apis: ['./routes/*.js'],
};

// Generating the Swagger doc specifications
const specs = swaggerJsdoc(options);

// Setting up the Swagger UI endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/', (req, res) => {
    res.redirect('/api-docs');
});

// Setting up our custom routes
app.use('/', helloRoutes);
app.use('/', valueRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
