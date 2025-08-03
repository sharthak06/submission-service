const fastifyPlugin = require('fastify-plugin');
const servicePlugin = require('./services/servicePlugin');

async function app(fastify,options){

    fastify.register(require('@fastify/cors'));
    fastify.register(require(servicePlugin))


    // register test routes 
    fastify.register(require('./routes/api/v1/test/testRoutes'),{prefix:'/test'});
}

module.exports = fastifyPlugin(app);