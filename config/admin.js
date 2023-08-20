import { getAuth } from "firebase-admin/auth"
import { cert, initializeApp } from "firebase-admin/app";

export default class authentication {

    constructor(env){
        initializeApp({ credential: cert(env.GOOGLE_APPLICATION_CREDENTIALS)})
    }

    static async verifyToken(req, res, next) {

        const token = req.headers.authorization
        getAuth().verifyIdToken(token)
            .then(decodeValue => {
                req.uid = decodeValue.uid
                if (decodeValue) {
                    next();
                } else {
                    res.status(500).send("There has been an error decoding your Token")
                }
            })
            .catch( err => {
                console.log(err)
                res.status(404).json({ message: "Invalid Token"})
            })
    };
    
}