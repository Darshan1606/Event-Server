const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const PreEventSchema = mongoose.Schema({
    eventId: {
        type: String
    },
    eventName: {
        type: String
    },
    eventType: {
        type: String
    },
    eventDate: {
        type: String
    },
    eventDateTo: {
        type: String
    },
    timeFrom: {
        type: String
    },
    timeTo: {
        type: String
    },
    location: {
        type: String
    },
    eventLevel: {
        type: String
    },
    orgInst: {
        type: String
    },
    deptName: {
        type: String
    },
    cordName: {
        type: String
    },
    cordEmail: {
        type: String
    },
    cordNumber: {
        type: String
    },
    
    createdBy:{
        type: ObjectId,
        ref: "User"
    }
})

const PreEventModel = mongoose.model('PreEvent', PreEventSchema)

module.exports = PreEventModel