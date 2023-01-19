import app from "./app";
import env from "./util/validateEnv"
import mongoose from "mongoose";

const port = env.PORT;

// setting strictQuery
mongoose.set('strictQuery', true);
// connectiong to mongoose db
mongoose.connect(env.MONGO_CONNECTION_STRING)
.then(() => {
    console.log("Mongoose connection established");
    app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
    }) 
}).catch(console.error);
