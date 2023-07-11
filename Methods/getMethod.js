module.exports = getMethod = (app,usersCollection) => {
    app.get("/", async(req, res) => {
        const result = await usersCollection.find().toArray();
        res.send(result)
    })
}