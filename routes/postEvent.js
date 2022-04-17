const express = require('express')
const router = express.Router()
const postEvent = require('../models/postEvent')
const preEvent = require('../models/preEvent')
const requireLogin = require('../middleware/requireLogin')

router.post('/postEvent',  (req, res) => {
    let preEventRef
    //console.log(req.body);
    //console.log('details received', req.headers)
    const {  pId, pName, pDate, pDateTo, plocation, pDesc, pnoOfStud, pspeakName, pspeakEmail, pspeakNumber} = req.body
    //console.log("ID : ", eventId)
        //console.log("PREEVNT: ", preEventRef)
        preEvent.findOne({eventId: pId})
        .then( pre => {
            preEventRef = pre
        const post = new postEvent({
            eventId: preEventRef._id,
            eventName:req.body.pName,
            eventDate: req.body.pDate,
            eventTo: req.body.pDateTo,
            eDesc: req.body.pDesc,
            location: req.body.plocation, 
            noOfStud: req.body.pnoOfStud,
            speakName: req.body.pspeakName,
            speakEmail: req.body.pspeakEmail,
            speakNumber: req.body.pspeakNumber,
         })
         //preEvent.create(req.body)
         post
    .save()
    .then((response) => {
      console.log("ENTRY MADE");
      //res.json(response)
      res.json({ message: "PostEvent Details Saved" });
    })
    .catch((err) => {
      console.log(err);
    });
});
  //console.log(preDetails)
});
    
// router.get('/getdetails/:id', async (req, res) => {
//     //console.log(req.params)
//     const id = req.params.id
//     //console.log(id)
//     // preEvent.findOne({ eventId: req.body.eventId })
//     preEvent.findOne({ eventId: id })
//     .then((data) => {
//         console.log(data);
//         res.send(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// })

module.exports = router