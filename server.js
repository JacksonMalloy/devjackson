const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

//Dialogflow routes
const dialogFlowRoutes = require('./routes/dialogFlow');
const fulfillmentRoutes = require('./routes/fulfillment');

app.use(bodyParser.json());

app.use(dialogFlowRoutes);
app.use(fulfillmentRoutes);

//Serves up production build assets
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
