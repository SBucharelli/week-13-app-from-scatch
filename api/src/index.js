const {
    app,
    startDatabase
} = require('./app-common.js')

const port = process.env.PORT || 9000;

const MONGO_URL = process.env.MONGO_URL;

if (MONGO_URL) {
    app.get('/', async (req, res) => {
        res.send({
            message: "You have reached the Pregnancy Weekly Size Tracking App."
        });
    });

    app.use('/firstTrimester', require('./routes/firstTrimesterRoutes'))
    app.use('/secondTrimester', require('./routes/secondTrimesterRoutes'))
    app.use('/thirdTrimester', require('./routes/thirdTrimesterRoutes'))

    startDatabase().then(async () => {
        app.listen(port, async () => {
            console.log(`Web server has started on port ${port}`);
        });
    });
} else {

    // endpoint to return top level api
    // much like a switch statement
    app.all('*', async (req, res) => {
        res.send({
            message: "MONGO_URL not configured. See documentation."
        });
    });

    app.listen(port, async () => {
        console.log(`Web server has started on port ${port}`);
    });
}