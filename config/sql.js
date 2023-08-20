import mysql from "mysql2"

export default class mySQL {

    constructor(env){
        this.db = mysql.createPool({
            host: env.MYSQL_HOST,
            user: env.MYSQL_USER,
            password: env.MYSQL_PASSWORD,
            database: env.MYSQL_DATABASE
        }).promise();
    };

}