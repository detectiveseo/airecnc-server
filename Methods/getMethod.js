module.exports = getMethod = (app, usersCollection, roomsCollection) => {
    app.get("/all-rooms", async (req, res) => {
        const result = await roomsCollection.find().toArray();
        res.send(result);
    })
}