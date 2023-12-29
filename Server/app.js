const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors'); 

app.use(cors()); 
app.use(express.json());

const mainRoutes = require('./routes/mainRoutes');
const manageVehicle = require('./routes/manageVehicle');
const reportRoutes = require('./routes/reportRoutes');
const contactRoutes = require('./routes/contactRoutes');
const searchRoutes = require('./routes/searchRoutes');
const ListRoutes = require('./routes/VehicleListRoutes');
const ParkUserRoutes = require('./routes/manageUserRoutes');
const UserLoginRoutes = require('./routes/UserLoginRoutes');
const AdminLoginRoutes = require('./routes/AdminLoginRoutes');

app.use('/register', mainRoutes);
app.use('/login', mainRoutes);
app.use('/vehicleList', mainRoutes);
app.use('/vehicleSearch', searchRoutes);
app.use('/manage-brand', manageVehicle);
app.use('/reports', reportRoutes);
app.use('/contact', contactRoutes);
app.use('/vehicleList', ListRoutes);
app.use('/parkUser', ParkUserRoutes);
app.use('/userLogin', UserLoginRoutes);
app.use('/adminLogin', AdminLoginRoutes);

// Replace wuth your connection string
const DB = 'mongodb+srv://abc:Ru0hk40@cluster0.joqh69w.mongodb.net/VehicleAtPark?retryWrites=true&w=majority';

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000, 
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

app.set('view engine', 'ejs');

app.use(express.static('views'));

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
