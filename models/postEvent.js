const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const PostEventSchema = mongoose.Schema({
    eventId: {
        type: ObjectId,
        ref: "PreEvent"
    },
    eventName: {
        type: String
    },
    eventDate: {
        type: String
    },
    eventDateTo: {
        type: String
    },
    location: {
        type: String
    },
    evntDesc: {
        type: String
    },
    noOfStud: {
        type: String
    },
    speakName: {
        type: String
    },
    speakEmail: {
        type: String
    },
    speakNumber: {
        type: String
    },
    
    
   
})

const PostEventModel = mongoose.model('PostEvent', PostEventSchema)
module.exports = PostEventModel