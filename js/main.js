var MyUser = new User();

$(document).ready(function() {


    $("#buttonSignIn").click(function() {

        var inputEmail = $("#inputEmail").val();

        var inputPassword = $("#inputPassword").val();

        MyUser.login(inputEmail, inputPassword);

    });



})