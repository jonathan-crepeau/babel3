require('dotenv').config();

import express from 'express';
const app = express();
const PORT = process.env.PORT || 3001;
import {router as viewRouter} from './routes/views'


// SECTION - Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Serve Static Files
app.use(express.static('public'));

// SECTION View Routes
app.use('/', viewRouter);

app.listen(PORT, () => console.log(`App listening on ${PORT}`));