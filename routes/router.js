const express = require('express');

const {
  vistaPricipal,
  vistaNotifications,
  vistaTables,
  vistaIcons,
  vistaMap,
  vistaRtl,
  vistaTypography,
  vistaUser,
} = require('../controllers/PageControllers.js');

const router = express.Router();

router.get('/', vistaPricipal);
router.get('/tables', vistaTables);
router.get('/notifications', vistaNotifications);
router.get('/icons', vistaIcons);
router.get('/map', vistaMap);
router.get('/rtl', vistaRtl);
router.get('/typography', vistaTypography);
router.get('/user', vistaUser);

module.exports = {
  routes: router,
};
