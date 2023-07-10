// App Imports
import { Express } from 'express';
import databaseConnection from '../setup/databaseConnection';
import * as dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3000;
// Sync database tables and start server
export default function(server: Express): void {
    console.info('SETUP - Syncing database tables...')

    // Create tables
    databaseConnection.sync({})
        .then(() => {
            console.info('INFO - Database sync complete.')

            console.info('SETUP - Starting server...')

            // Start web server
            server.listen(port, () => {
                
                    console.info(`INFO - Server started on port ${ port }.`)
                
            })
        })
        .catch(() => {
            console.error('ERROR - Unable to sync database.')
            console.error('ERROR - Server not started.')
        })
}