const router = (app) => {
    app.route("/").get((req, res) => {
        res.json({hai: 'hai'})
    })
};
module.exports = router;
