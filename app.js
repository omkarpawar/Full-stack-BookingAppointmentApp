const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models/booking');
const bookingRoutes = require('./routes/booking');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/bookings', bookingRoutes);

sequelize.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log(`SERVER RUNNING ON {$PORT}`);
    });
}).catch(err => console.error('Error',err));