export default class userController{

    constructor(){
        this.routes = [
            { method: "post", path: "/", handler: this.#user_create, priv: false},
            { method: "get", path: "/", handler: this.#user_get },
            { method: "put", path: "/", handler: this.#user_update },
            { method: "delete", path: "/", handler: this.#user_delete }
        ]
    }

    async #user_create(req, res) {

        try {

            const { username, name, age } = req.body

            this.db.query(`
            INSERT INTO user
            VALUES ( ?, ?, ?)
            `, [username, name, age])
                .then( ()=> {
                    console.log("user successfully created")
                    res.status(200)
                })

        } catch(err) {
            res.send("An error has occured")
        }

    }

    async #user_get(req, res) {

    }

    async #user_update(req, res) {

    }

    async #user_delete(req, res) {

    }
}