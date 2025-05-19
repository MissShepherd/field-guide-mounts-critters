const axios = require('axios');

async function getBlizzardToken() {
  const { BLIZZARD_CLIENT_ID, BLIZZARD_CLIENT_SECRET } = process.env;

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');

  const response = await axios.post(
    'https://eu.battle.net/oauth/token',
    params,
    {
      auth: {
        username: BLIZZARD_CLIENT_ID,
        password: BLIZZARD_CLIENT_SECRET
      },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
  );

  return response.data.access_token;
}

module.exports = { getBlizzardToken };
