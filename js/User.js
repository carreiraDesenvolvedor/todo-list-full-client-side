class User {

    KEY_USER_LOGGED = "user_logged"
    KEY_USER_LOGGED_EMAIL = "user_logged_email"

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

    login(email, password, rememberMe) {

        var result = false;

        var self = this;

        this.usersAllowed.map(function(item, index) {

            /* 

            console.log("----------------------------------------------")

            console.log(index)

            console.log(item)
            console.log(item.email + " " + email)
            console.log(item.password + " " + password)

            console.log("----------------------------------------------")
            */

            if (item.email == email) {
                if (item.password == password) {

                    result = true;

                    if (rememberMe == true) {
                        localStorage.setItem(self.KEY_USER_LOGGED, true);
                        localStorage.setItem(self.KEY_USER_LOGGED_EMAIL, email);
                    } else {
                        sessionStorage.setItem(self.KEY_USER_LOGGED, true);
                        sessionStorage.setItem(self.KEY_USER_LOGGED_EMAIL, email);
                    }

                }
            }

        });

        return result;

    }

    logout() {

    }

    isAuthenticated() {

        var sessionStorageLogged = sessionStorage.getItem(this.KEY_USER_LOGGED);
        var localStorageLogged = localStorage.getItem(this.KEY_USER_LOGGED);

        if (sessionStorageLogged == "true") {
            return true;
        }

        if (localStorageLogged == "true") {
            return true;
        }

    }


}