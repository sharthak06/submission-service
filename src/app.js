const fastifyPlugin = require('fastify-plugin');
const repositoryPlugin = require('./repositories/repositoryPlugin')
const servicePlugin = require('./services/servicePlugin');

async function app(fastify,options){
 

     await fastify.register(require('@fastify/cors'));
     await fastify.register(require(repositoryPlugin));
     await fastify.register(require(servicePlugin));


   await fastify.register(require('./routes/api/apiRoutes'), {prefix: '/api'});
}

module.exports = fastifyPlugin(app);