const mongoose = require('mongoose');

const questionsSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
})

module.export = mongoose.model('Questions', questionsSchema);
