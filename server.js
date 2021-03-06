const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { connectdb } = require('./src/db');
const authRoute = require('./src/routes/auth');
const goalsRoute = require('./src/routes/goals');
const orgRoute = require('./src/routes/org');
const salesRoute = require('./src/routes/sales');
require('dotenv').config({ path: './.env' });

const app = express();

const corsOptions = {
  origin: [process.env.FRONTEND_URL, process.env.GE_NP_S_FRONTEND],
  optionsSuccessStatus: 200,
};

const PORT = process.env.PORT;

// Connect DB
connectdb();

// Middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));

// Routing
app.use('/api/auth', authRoute);
app.use('/api/goals', goalsRoute);
app.use('/api/org', orgRoute);
app.use('/api/sales', salesRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
