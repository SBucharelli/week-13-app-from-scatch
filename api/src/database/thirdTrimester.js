const { getDatabase } = require('./mongo-common');
const { ObjectID } = require('mongodb');

const collectionName = 'thirdTrimester';

async function createWeek(week) {
    const database = await getDatabase();
    const { insertedId } = await database.collection(collectionName).insertOne(week);
    return insertedId;
}

async function getWeeks() {
    const database = await getDatabase();
    return await database.collection(collectionName).find({}).toArray();
}

async function deleteWeek(id) {
    const database = await getDatabase();
    await database.collection(collectionName).deleteOne({
        _id: new ObjectID(id),
    });
}

async function updateWeek(id, week) {
    const database = await getDatabase();
    delete week._id;
    await database.collection(collectionName).update(
        { _id: new ObjectID(id), },
        {
            $set: {
                ...week,
            },
        },
    );
}

module.exports = {
    createWeek,
    getWeeks,
    deleteWeek,
    updateWeek,
};
