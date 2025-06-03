const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/blizzard-token', async (req, res) => {
  try {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    const auth = Buffer.from(`${process.env.BLIZZARD_CLIENT_ID}:${process.env.BLIZZARD_CLIENT_SECRET}`).toString('base64');
    const response = await axios.post(
      'https://eu.battle.net/oauth/token',
      params,
      { headers: { Authorization: `Basic ${auth}` } }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Could not get token' });
  }
});

module.exports = router;
