require('dotenv').config();
const express = require('express');
const blizzardRoutes = require('./routes/blizzard');
const cors = require('cors');
const app = express();

app.use(cors());
app.use('/api', blizzardRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
