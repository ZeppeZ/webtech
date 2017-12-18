
const express = require('express')
const router = express.Router()
var contactList = [
  {"name": "Ned Stark", "email": "ned@winterfell.com", "phone": "123-456-7890", "url": "www.google.com", "notes": "Winter is coming."},
  {"name": "Theon Greyjoy", "email": "tgreyjoy@winterfell.com", "phone": "123-456-7890", "url": "www.google.com", "notes": "Reluctant to pay iron price."},
  {"name": "Samwell Tarly", "email": "starly@castleblack.com", "phone": "123-456-7890", "url": "www.google.com", "notes": "Loyal brother of the watch."},
  {"name": "Jon Snow", "email": "jsnow@castleblack.com", "phone": "123-456-7890", "url": "www.google.com", "notes": "Knows nothing."},
  {"name": "Arya Stark", "email": "waterdancer@winterfell.com", "phone": "123-456-7890", "url": "www.google.com", "notes": "Has a list of names."},
  {"name": "Jora Mormont", "email": "khaleesifan100@gmail.com", "phone": "123-456-7890", "url": "www.google.com", "notes": "Lost in the friend-zone."},
  {"name": "Tyrion Lannister", "email": "tyrion@lannister.com", "phone": "123-456-7890", "url": "www.google.com", "notes": "Currently drunk."},
  {"name": "Stannis Baratheon", "email": "onetrueking@dragonstone.com", "phone": "123-456-7890", "url": "www.google.com", "notes": "Nobody expects the Stannish inquisition."},
  {"name": "Hodor", "email": "hodor@hodor.com", "phone": "123-456-7890", "url": "www.google.com", "notes": "Hodor? Hodor... Hodor!"},
  {"name": "Margaery Tyrell", "email": "mtyrell@highgarden.com", "phone": "123-456-7890", "url": "www.google.com", "notes": "Keeper of kings."},
  {"name": "Brienne of Tarth", "email": "oathkeeper@gmail.com", "phone": "123-456-7890", "url": "www.google.com", "notes": "Do not cross her."},
  {"name": "Petyr Baelish", "email": "petyr@baelishindustries.com", "phone": "123-456-7890", "url": "www.google.com", "notes": "Do not trust anyone."},
  ];

findcontacts = function () {
    return contactList;
};
findname = function (name) {
    for (var i = 0; i < contactList.length; i++) {
        if (contactList[i].name == name) return contactList[i];
    }
};
router.get('/contacts', function (req, res) {
    res.json(findcontacts());
})
router.get('/contacts/:name', (req, res) => {
    var name = req.params.name;
    res.json(findname(name));
})
router.post('/contacts/', (req, res) => {
    var contacts = req.body
    contactList.push(contacts)
    res.status(201).send(contacts)
})
router.put('/contacts/:name', (req, res) => {
    var edit = req.body
    var name = req.params.name
    for (var i = 0; i < contactList.length; i++) {
        if (contactList[i].name == name){
           contactList[i] = edit
        res.status(200).json('Complete!')
        }
    }
    
})
router.delete('/contacts/:name', (req, res) => {
    var name = req.params.name
    contactList.splice(name, 1)
    res.status(204).json()

})

module.exports = router



