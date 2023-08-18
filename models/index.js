import mongoose from "mongoose";
import dbConfig from "../config/db.config.js";

import tutorialModel from "./tutorialModal.js";
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = tutorialModel(mongoose);

export default db;