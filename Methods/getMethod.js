const { ObjectId } = require("mongodb");

module.exports = getMethod = (app, usersCollection, roomsCollection) => {
    app.get("/all-rooms", async (req, res) => {
        const result = await roomsCollection.find().toArray();
        res.send(result);
    })

    //get single room data 
    app.get("/room/:id", async(req, res) => {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await roomsCollection.find(query).toArray();
        res.send(result);
    })
}