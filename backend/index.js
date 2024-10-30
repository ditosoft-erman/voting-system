const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const userRoutes = require('./routes/userRoutes');
const userRoleRoutes = require('./routes/userRoleRoutes');
const userAuthenticationRoutes = require('./routes/authenticationRoute');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/userRoles', userRoleRoutes);
app.use('/api/userAuthentication', userAuthenticationRoutes);

// Test endpoint
app.get('/', (req, res) => {
  res.status(200).send("Hello World");
});


const db = require('./models/main');
db.sequelize.sync()
  .then(()=>console.log("Sync db."))
  .catch(err=>console.log("Failed: " + err.message))

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
