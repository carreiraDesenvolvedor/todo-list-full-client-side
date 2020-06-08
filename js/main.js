var MyUser = new User();
var MyDatabase = new Database();

function showTodoListContainer() {
    $("#login_container").hide('slow');
    $("#todolist_container").show('slow');
}

$(document).ready(function() {

    var resultIsAuthenticated = MyUser.isAuthenticated();
    if (resultIsAuthenticated) {
        showTodoListContainer();
    } else {
        $("#login_container").show('slow');
    }

    $("#buttonSignIn").click(function() {

        var inputEmail = $("#inputEmail").val();

        var inputPassword = $("#inputPassword").val();

        var rememberMe = $("#remember_me").is(":checked");

        var resultLogin = MyUser.login(inputEmail, inputPassword, rememberMe);

        if (resultLogin == true) {
            alert("Usuario Logado com Sucesso");
            showTodoListContainer();
        } else {
            alert("Por favor verifique seus dados e tente novamente!")
        }

    });

    $("#buttonAddTodo").click(function() {
        var input = $("#input_todo").val();
        if (input != "") {
            MyDatabase.insertRow(input);
        }
    })


})