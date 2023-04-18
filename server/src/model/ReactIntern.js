const mongoose = require('mongoose');

const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    desc: {
        type: String
    },

    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number
    },

    skuNumber: {
        type: String,
        required: true
    },
    avQTY: {
        type: String,
        required: true
    }

})

const InternProject = new mongoose.model("ReactProject", internSchema);
module.exports = InternProject;