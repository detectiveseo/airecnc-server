module.exports = postMethod = (app, roomsCollection) => {
    app.post("/add-room", async(req, res) => {
        const body = req.body;
        const result = await roomsCollection.insertOne(body);
        res.send(result);
    })
}