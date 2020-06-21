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

        localStorage.setItem(this.KEY_USER_LOGGED, false);
        localStorage.setItem(this.KEY_USER_LOGGED_EMAIL, null);

        sessionStorage.setItem(this.KEY_USER_LOGGED, false);
        sessionStorage.setItem(this.KEY_USER_LOGGED_EMAIL, null);

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

    writeUserAuthenticated() {

        var sessionStorageEmail = sessionStorage.getItem(this.KEY_USER_LOGGED_EMAIL);
        var localStorageEmail = localStorage.getItem(this.KEY_USER_LOGGED_EMAIL);

        $('#email_user_logged').html(sessionStorageEmail != "" ? sessionStorageEmail : localStorageEmail)

    }


}