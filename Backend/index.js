import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import ProjectRoute from "./routes/ProjectRoute.js";
//model
import Daliyreport from "./models/DailyreportModell.js";
import Projects from "./models/ProjectsModel.js";
import Users from "./models/UserModel.js";
import Products from "./models/ProductModel.js";




dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

(async()=>{
    await db.authenticate();
    // await Users.sync();
    // await Projects.sync();
    // await Daliyreport.sync();
    // await Products.sync();

    console.log('Database Connected tooooo..');
})();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));
app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);
app.use(ProjectRoute);

//store.sync();

app.listen(process.env.APP_PORT, ()=> {
    console.log('Server up on port 5000 ');
});
