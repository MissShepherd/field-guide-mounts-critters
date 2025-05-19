const express = require('express');
const router = express.Router();
const axios = require('axios');
const { getBlizzardToken } = require('../services/blizzardAuth');

router.get('/', async (req, res) => {
  try {
    const token = await getBlizzardToken();
    const response = await axios.get(
      'https://eu.api.blizzard.com/data/wow/mount/index?namespace=static-eu&locale=en_GB',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch mounts' });
  }
});

module.exports = router;
