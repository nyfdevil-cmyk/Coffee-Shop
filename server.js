const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const contactRoutes = require('./routes/contactRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const orderRoutes = require('./routes/orderRoutes');
app.use('/api/orders', orderRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('Coffee Shop Backend Running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});