
const express = require('express')
const InternProject = require('../model/ReactIntern');
const router = express.Router();


router.post("/add", async (req, resp) => {
    try {
        const addData = new InternProject(req.body);
        let result = await addData.save();
        resp.status(201).send(result);
    } catch (err) {
        resp.status(400).send(err);
    }
})

module.exports = router;
