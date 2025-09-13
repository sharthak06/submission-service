const SubmissionService = require('./submissionService');

const fastifyPlugin = require('fastify-plugin')

async function ServicePlugin(fastify,options){
    fastify.decorate('submissionService', new SubmissionService(this.submissionRepository));
}

module.exports = fastifyPlugin(ServicePlugin);