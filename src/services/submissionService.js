const SubmissionProducer = require('../producers/submissionQueueProducer')
class SubmissionService {

   constructor(submissionRepository){
      this.submissionRepository = submissionRepository;
   }

   async  PingCheck() {
    return 'pong';
    
   }
   async addSubmission(submission){
      const submission = this.submissionRepository.createSubmission(submission);
      if(!submission){
         // add error handling here
         throw {message : "Not able to create submission"}
      }
      console.log(submission)
      const response = await SubmissionProducer(submission);
      return {queueResponse : response, submission}

   }

}

module.exports = SubmissionService;