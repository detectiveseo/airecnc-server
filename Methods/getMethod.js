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

    //user get method
    app.get("/user/:email", async (req, res) => {
        console.log("hitted")
        const email = req.params.email;
        console.log(email);
        const query = {email: email};
        const result = await usersCollection.findOne(query);
        console.log(result);
        res.send(result);
    })
}