const TestService = require('./testService')
const fastifyPlugin = require('fastify-plugin')

async function ServicePlugin(fastify,options){
    fastify.decorate('testService', new TestService());
}

module.exports = fastifyPlugin(ServicePlugin);