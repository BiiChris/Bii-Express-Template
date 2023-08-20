import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import express, { Router } from 'express';
import bodyParser from 'body-parser';

/* CONFIG IMPORT */
import mySQL from './config/sql.js';
import authentication from './config/admin.js';
import userController from './controllers/user.js';

export default class App {

    constructor(env) {
        this.env = env
        this.server = express()
        this.db = new mySQL(this.env).db;
        this.#startExpressServer();
    }

    #RouteTable(controller) {

        const router = Router();

        controller.routes.forEach(route => {

            const {method, path, handler, priv = true} = route
            if (priv == true) {
                router[method](path, authentication.verifyToken, handler.bind(this))
            } else {
                router[method](path, handler.bind(this))
            }

        });

        return router
    }

    async #startExpressServer() {

        //await new authentication(this.env);

        /* MIDDLEWARE */
        this.server.use(helmet());
        this.server.use(morgan('dev'));
        this.server.use(cors());
        this.server.use(bodyParser.json({ limit: '30mb', extended: true }));
        this.server.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
        this.server.use(helmet.crossOriginResourcePolicy({ policy: 'same-site' }));
        

        /* ROUTE CONFIG */
        this.server.use("/user", this.#RouteTable(new userController()));
        
        /* START LISTENING */
        const PORT = this.env.PORT || 6000;
        this.server.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`));
    }
}