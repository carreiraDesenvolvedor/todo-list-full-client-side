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

}