class Database {

    connection;

    settings = {
        name: "todo_list_cv",
        version: "1.0",
        describe: "Database about todo list course",
        size: 2 * 1024 * 1024
    }

    constructor() {
        this.connection = this.connect();
        this.createTable();
        this.readRows();
    }

    connect() {
        return openDatabase(this.settings.name, this.settings.version, this.settings.describe, this.settings.size);
    }

    createTable() {

        this.connection.transaction(function(tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS LIST (id unique, task, done)');
        });
    }

    insertRow(task) {

        var id = new Date().getTime();

        this.connection.transaction(function(tx) {

            var query = 'INSERT INTO LIST (id, task, done) VALUES (';

            query += id + ',';
            query += '"' + task + '",';
            query += '0)';

            tx.executeSql(query);

        })

    }

    readRows() {

        var self = this;

        this.connection.transaction(function(tx) {

            tx.executeSql('SELECT * FROM LIST', [], function(tx, results) {

                var currentItem = 0;

                var totalItens = results.rows.length;

                while (currentItem < totalItens) {

                    var row = results.rows[currentItem];

                    self.writeRowInHtml(row);

                    currentItem++;

                }

            }, null);

        });

    }

    writeRowInHtml(row) {

        console.log(row);

        var ul_todo_list = $("#ul_todo_list");

        var li_item_to_clone = $("#li_item_to_clone").clone().attr('id', null);

        if (row.done == "1") {
            li_item_to_clone.find(".checkbox-todo-list").prop("checked", 1);
        }

        li_item_to_clone.find(".label-todo-list").html(row.task);

        ul_todo_list.append(li_item_to_clone);

    }

    clearHtmlList() {

        var ul_todo_list = $("#ul_todo_list");

        ul_todo_list.find("li:not(#li_item_to_clone)").remove();

    }

}