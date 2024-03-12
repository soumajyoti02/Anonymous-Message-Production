const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
    mess: {
        type: String,
        required: true,
    },
}, { timestamps: true })

const Message = mongoose.model('Message', MessageSchema)
module.exports = Message;