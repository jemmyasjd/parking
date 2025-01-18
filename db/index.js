const express = require('express');
const bodyParser = require('body-parser');
const visitorRoutes = require('./routes/visitorRoutes');
const cors = require('cors');

const app = express();


const PORT = process.env.PORT || 3000;

// Middleware
// app.use(bodyParser.json());.
app.use(express.json());
app.use(cors());

// Routes
app.use('/visitors', visitorRoutes);
// app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
