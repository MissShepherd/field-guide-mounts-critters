const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mountsRoute = require('./routes/mounts');

dotenv.config();
const app = express();
app.use(cors());

app.use('/api/mounts', mountsRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
