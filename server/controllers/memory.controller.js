const Memory = require('../models/memory.model');
const jwt = require('jsonwebtoken');

const createMemory = (req, res) => {
    // const NewMemory = new Memory(req.body);
    // const decodedJWT = jwt.decode(req.cookies.utoken,{complete: true});
    // NewMemory.creatorUser = decodedJWT.payload.user_id;
    // NewMemory.statuses.push('In Book')
    // NewMemory
    //     .save()
    //     .then(async (NewMemory) => {
    //         await NewMemory.populate('creatorUser','email');
    //         res.json({ Memory: NewMemory })
    //     })
    //     .catch(err => res.status(400).json({ message: 'Something went wrong (create)', error: err }));
    Memory
        .create(req.body)
        .then((newMemory) => {res.json(newMemory)})
        .catch((err) => res.status(400).json(err));
}

const getAllMemories = (req, res) => {
    Memory
        .find()
        .then((allMemories) => {(res.json(allMemories))})
        .catch((err) => res.status(400).json(err));
}

const getOneMemory = (req, res) => {
    Memory
        .findOne({_id: req.params.id})
        .then((oneMemory) => {res.json(oneMemory)})
        .catch((err) => res.status(400).json(err));
}

const deleteMemory = (req, res) => {
    Memory
        .deleteOne({_id: req.params.id})
        .then((mongooseResponse) => res.json(mongooseResponse))
        .catch((err) => res.status(400).json(err));
}

module.exports = {
    createMemory,
    getAllMemories,
    getOneMemory,
    deleteMemory
}