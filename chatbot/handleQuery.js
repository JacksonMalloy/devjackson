const dialogFlow = require("dialogflow");
const structjson = require("./structjson");

require('dotenv').config();

//Bring in Project Keys
const languageCode = process.env.DIALOGFLOW_LANG_CODE;
const sessionID = process.env.DIALOGFLOW_SESSION_ID;
const projectID = process.env.GOOGLE_PROJECT_ID;

const credentials = {
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY
};

const sessionClient = new dialogFlow.SessionsClient({ projectID, credentials });

module.exports = {
  textQuery: async function(text, userID, parameters = {}) {
    let sessionPath = sessionClient.sessionPath(projectID, sessionID + userID);

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: text,
          languageCode: languageCode
        }
      },
      queryParams: {
        payload: {
          data: parameters
        }
      }
    };

    let responses = await sessionClient.detectIntent(request);
    responses = await this.handleAction(responses);
    return responses;
  },

  eventQuery: async function(event, userID, parameters = {}) {
    let sessionPath = sessionClient.sessionPath(projectID, sessionID + userID);

    const request = {
      session: sessionPath,
      queryInput: {
        event: {
          name: event,
          parameters: structjson.jsonToStructProto(parameters),
          languageCode: languageCode
        }
      }
    };

    let responses = await sessionClient.detectIntent(request);
    responses = await this.handleAction(responses);
    return responses;
  },

  handleAction: function(responses) {
    responses[0].queryResult;

    return responses;
  }
};
