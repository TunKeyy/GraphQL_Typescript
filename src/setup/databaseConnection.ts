// Imports
import {Sequelize} from 'sequelize';

// App Imports
import * as dotenv from "dotenv";

dotenv.config();
// Create new database connection
const sequelize = new Sequelize(
    process.env.DB_NAME ? process.env.DB_NAME : "",
    process.env.DB_USER ? process.env.DB_USER : "",
    process.env.DB_PASS ? process.env.DB_PASS : "",
    {
        host: process.env.DB_HOST,
        dialect: "postgres",
        logging: false,
        // schema: "core",
        pool: {
            max: 300,
            idle: 30000,
            acquire: 60000,
        },
        query: { raw: true },
    }
);


// Test connection
console.info('SETUP - Connecting database...')

sequelize
    .authenticate()
    .then(() => {
        console.info('INFO - Database connected.')
    })
    .catch((err: any) => {
        console.error('ERROR - Unable to connect to the database:', err)
    })

export default sequelize