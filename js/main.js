var MyUser = new User();
var MyDatabase = new Database();

function showTodoListContainer() {
    $("#login_container").hide('slow');
    $("#todolist_container").show('slow');
}

function hideTodoListContainer() {
    $("#login_container").show('slow');
    $("#todolist_container").hide('slow');
}

$(document).ready(function() {

    var resultIsAuthenticated = MyUser.isAuthenticated();
    if (resultIsAuthenticated) {
        showTodoListContainer();
        MyUser.writeUserAuthenticated();
    } else {
        $("#login_container").show('slow');
    }

    $("#btnExit").click(function() {
        MyUser.logout();
        hideTodoListContainer();
    });

    $("#buttonSignIn").click(function() {

        var inputEmail = $("#inputEmail").val();

        var inputPassword = $("#inputPassword").val();

        var rememberMe = $("#remember_me").is(":checked");

        var resultLogin = MyUser.login(inputEmail, inputPassword, rememberMe);

        if (resultLogin == true) {
            alert("Usuario Logado com Sucesso");
            showTodoListContainer();
            MyUser.writeUserAuthenticated();
        } else {
            alert("Por favor verifique seus dados e tente novamente!")
        }

    });

    $("#buttonAddTodo").click(function() {
        var inputElement = $("#input_todo");
        var inputVal = inputElement.val();
        if (inputVal != "") {
            MyDatabase.insertRow(inputVal);
            inputElement.val('');
            MyDatabase.clearHtmlList();
            MyDatabase.readRows();
        }
    })



    $(document).bind('change', '.checkbox-todo-list', function(e) {

        var checkbox = $(e.target);

        var id = checkbox.attr('data-id');
        var status = checkbox.is(":checked");

        MyDatabase.updateRow(id, status);
        MyDatabase.clearHtmlList();
        MyDatabase.readRows();

    })




})