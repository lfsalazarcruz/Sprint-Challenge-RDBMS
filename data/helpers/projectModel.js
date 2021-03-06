const db = require('../dbConfig');
const mappers = require('./mappers');

function getProjectActions (projectId) {
   return db('actions')
      .where('project_id', projectId)
      .then(actions => actions.map(action => mappers.actionToBody(action)));
}

module.exports = {
   getProjectActions
}