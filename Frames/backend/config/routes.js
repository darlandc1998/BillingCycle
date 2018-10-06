const express = require('express');

module.exports = function (server){

  const router = express.Router();
  server.use('/api', router);


// ROTAS DAS APIS
  const billingCycleService = require('../api/billingCycle/billingCycleService')
  billingCycleService.register(router,'/billingCycles');

// ROTAS DAS APIS DE USUARIO
 const userService = require('../api/user/userService');
 userService.register(router, '/user');  
};
