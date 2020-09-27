const {
    app,
    startDatabase
} = require('./app-common.js')

app.get('/', async (req, res) => {
    res.send({
        message: "You have reached the Pregnancy Weekly Size Tracking App."
    });
});

app.use('/firstTrimester', require('./routes/firstTrimesterRoutes'))
app.use('/secondTrimester', require('./routes/secondTrimesterRoutes'))
app.use('/thirdTrimester', require('./routes/thirdTrimesterRoutes'))

startDatabase().then(async () => {
    app.listen(9000, async () => {
        console.log('Web server has started on port 9000 http://localhost:9000');
    });
});