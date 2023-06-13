const fs = require('fs');
const path = require('path');

module.exports ={
    main: (req,res) =>{
        return res.render('main', {
            title: "HOME"
        });
    },
    formCreate: (req,res) =>{
        return res.render('formCreate',{title: "CREAR"} );
    },
    favoritas: (req,res) =>{
      return res.render('favoritas',{title: "FAVORITAS"}
      );
  },
    formUpdate: (req, res) => {
        const id = req.query.id;
        return res.render('formulario', {
          title: "ACTUALIZAR",
          id: id
        });
      }
    };