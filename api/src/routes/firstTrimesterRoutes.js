const router = require('express').Router();
const { deleteWeek, updateWeek, createWeek, getWeeks } = require('../database/firstTrimester');

router.get('/', async (req, res) => {
    res.send(await getWeeks());
});

router.post('/', async (apiRequest, apiResponse) => {
    const newWeek = apiRequest.body;
    await createWeek(newWeek);
    apiResponse.send({
        message: 'New week created.',
        allWeeks: await getWeeks(),
    });
});

router.delete('/:weekId', async (apiRequest, apiResponse) => {
    await deleteWeek(apiRequest.params.weekId);
    apiResponse.send({ message: 'Week deleted.' });
});

router.put('/:id', async (apiRequest, apiResponse) => {
    const updatedWeek = apiRequest.body;
    console.log({ updatedWeek })
    await updateWeek(apiRequest.params.id, updatedWeek);
    apiResponse.send({ message: 'Week updated.' });
});

module.exports = router;
