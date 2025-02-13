const express = require('express');
const createError = require('http-errors');
const path = require('path');

// Routers
const taskRouter = require('./routers/Task.router');
const statusRouter = require('./routers/Status.router');
const personRouter = require('./routers/Person.router');
const chartsRouter = require('./routers/Charts');
const stockRouter = require('./routers/stock');

const tradeRouter = require('./routers/trades');
const limitOrderRouter = require('./routers/limitOrder');

const loginRegisterRouter = require('./routers/Login.register.router');
const referralRouter = require('./routers/referral');
const dashboardRouter = require('./routers/Dashboard');
const blogRouter = require('./routers/Blog');
const chatHandler = require('./routers/chat');
const profileRouter = require('./routers/Profile');
const userRoutes = require('./routers/user.router');
const userRouter = require("./routers/user.router");
const rewardRouter = require("./routers/reward");
const goalsRouter = require("./routers/Goals"); 
const quizRouter = require("./routers/Quiz"); 

const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// Debug middleware to log incoming request body
app.use((req, res, next) => {
    console.log('Request method:', req.method);
    console.log('Request path:', req.path);
    console.log('Request body:', req.body);
    next();
});

// Debug route
app.post('/api/test', (req, res) => {
    console.log('Test route hit with body:', req.body);
    res.status(200).json({ message: 'Test route works!', received: req.body });
});

// API Routes
app.use('/api', loginRegisterRouter);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Additional Routes
app.use('/tasks', taskRouter);
app.use('/statuses', statusRouter);
app.use('/persons', personRouter);
app.use('/charts', chartsRouter);
app.use('/stocks', stockRouter);
app.use('/limit', limitOrderRouter);

app.use('/trade', tradeRouter);


app.use('/stats', referralRouter);
app.use('/dashboard', dashboardRouter);
app.use('/api/blog', blogRouter)
// app.use('/api/chat', chatHandler);
app.use('/profile', profileRouter);
app.use('/api/user', userRoutes);
// Register the router
app.use("/api", userRouter);
app.use("/rewards", rewardRouter);
app.use("/api/quiz", quizRouter);
app.use("/api/goals", goalsRouter); 

// Handle unknown resources
app.use((req, res, next) => {
    next(createError(404, `Unknown resource ${req.method} ${req.originalUrl}`));
});

// Global error handler
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
    console.error('Error:', error.message);
    res.status(error.status || 500).json({ error: error.message || 'Unknown Server Error!' });
});

module.exports = app;