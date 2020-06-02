class User {

    usersAllowed = [

        {
            email: "desenvolvedor.jonathan@gmail.com",
            password: "123456"
        },

        {
            email: "felipe@gmail.com",
            password: "123456"
        }

    ];

    login(email, password) {

        this.usersAllowed.map(function(item, index) {

            if (item.email == email) {

                if (item.password == password) {
                    alert("Usuario tem permissao de acessar");
                } else {
                    alert("O email esta correto, porem a senha esta errada");
                }

            }

        });

        // alert("metodo login chamado com sucesso.")
    }

    logout() {

    }

}