module.exports = patchMethod = (app, usersCollection) => {
    // user updata api
    app.put("/user-update", async (req, res) => {
        const role = req.body;
        const userEmail = req.query.email;
        const query = {email: userEmail};
        const options = {upsert: true}
        const update = {
            $set: {
                "role": role.role
            }
        }
        const result = await usersCollection.updateOne(query, update, options);
        console.log(role.role);
        res.send(result);

    })
}