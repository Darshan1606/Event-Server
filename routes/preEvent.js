const express = require("express");
const router = express.Router();
const preEvent = require("../models/preEvent");
const postEvent = require("../models/postEvent");
const User = require("../models/user");
const requireLogin = require("../middleware/requireLogin");
//requireLogin,
router.post("/preevent", (req, res) => {
  //console.log('details received', req.headers)
  const { eID, eName, eType, eDateF, eDateT, timeF, timeT, locat, eLevel, orgIn, dName, cName, cEmail, cNumber} = req.body;
  //console.log("USER : ",req.user)
  const pre = new preEvent({    
    eventId: eID,
    eventName: eName,
    eventType: eType,
    eventDate: eDateF,
    eventDateTo:  eDateT,
    timeFrom: timeF,
    timeTo:  timeT,
    location: locat,
    eventLevel: eLevel,
    orgInst: orgIn,
    deptName: dName,
    cordName:cName,
    cordEmail:cEmail,
    cordNumber: cNumber,
    // createdBy: req.user._id,
  });
  //preEvent.create(req.body)
  pre
    .save()
    .then((response) => {
      console.log("ENTRY MADE");
      //res.json(response)
      res.json({ message: "PreEvent Details Saved" });
    })
    .catch((err) => {
      console.log(err);
    });
  //console.log(preDetails)
});

router.get("/getdetails/:id", async (req, res) => {
  let evnts = [];
  //console.log(req.params)
  const id = req.params.id;
  //console.log(id)
  // preEvent.findOne({ eventId: req.body.eventId })
  preEvent
    .findOne({ eID: id })
    .populate("createdBy", "_id userName email")
    .then((data) => {
      //console.log(data);
      //evnts.push(data)
      postEvent
        .findOne({ eID: data._id })
        .populate("eventId")
        .then((post) => {
          evnts.push(post);
          //console.log("all Details \n",evnts);
          //res.json(evnts)
          let x = post;
          //console.log("X", x);
          User.findById(x.eID.createdBy)
            .then((data) => {
              console.log(data);
              res.json({ postDetails: post, user: data });
            })
            .catch((err) => {
              console.log(err);
              res.json({ error: "Something Went Wrong!!" });
            });
        })
        .catch((err) => {
          console.log(err);
          res.json({ error: "Make Sure The Post Event Is Added" });
        });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: "Something Went Wrong!! Make Sure The Event ID is correct",
      });
    });
});

module.exports = router;
