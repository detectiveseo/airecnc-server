module.exports = putMethod = (app, usersCollection) => {
    //save user rool on database
    app.put('/user/:email', async (req, res) => {
        const email = req.params.email;
        const user = req.body;
        const query = { email: email }
        const options = { upsert: true }
        const updateDoc = {
            $set: user
        }
        const result = await usersCollection.updateOne(query, updateDoc, options);
        res.send(result);
    })
}