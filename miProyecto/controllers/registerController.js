const registerController = {
    prueba4: function(req, res) {
        res.render('register', { title: 'Proyecto' });
      },

    resultadosForm: function (req, res) {
        resultados = []
        let queryString = location.search;
        let queryStringObj = new URLSearchParams(queryString);
        queryStringObj.get('email');        
    }
}

module.exports = registerController