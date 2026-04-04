const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const userRoutes = require('./routes/userRoutes');
const clientRoutes = require('./routes/clients');
const projectRoutes = require('./routes/projects');
const timeEntryRoutes = require('./routes/timeEntries');
const reportRoutes = require('./routes/reportRoutes');
const contactRoutes = require('./routes/contactRoutes');
const rateLimit = require('express-rate-limit');
const compression = require('compression');

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(compression());

// Trust the proxy (Render load balancer) to ensure express-rate-limit works correctly
app.set('trust proxy', 1);

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use('/api/users', userRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/time-entries', timeEntryRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
