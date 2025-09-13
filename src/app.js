const fastifyPlugin = require('fastify-plugin');
const repopsitoryPlugin = require('./repositories/repositoryPlugin')
const servicePlugin = require('./services/servicePlugin');

async function app(fastify,options){
//if i have to use a plugin i need to register it 

    fastify.register(require('@fastify/cors'));
    fastify.register(require(repopsitoryPlugin));
    fastify.register(require(servicePlugin));


    // register test routes 
    fastify.register(require('./routes/api/v1/test/testRoutes'),{prefix:'/test'});
}

module.exports = fastifyPlugin(app);