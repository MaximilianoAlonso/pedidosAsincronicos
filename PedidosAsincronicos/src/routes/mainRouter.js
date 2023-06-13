var express = require('express');
const {main,favoritas, formCreate, formUpdate} = require('../controllers/mainController');
var router = express.Router();

/* / */
router
    .get('/', main)
    .get("/formulario", formUpdate)
    .get("/formCreate", formCreate)
    .get("/favoritas", favoritas)
    
  
        
module.exports = router;        