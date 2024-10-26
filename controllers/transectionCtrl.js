const transectionModel = require('../models/transectionModel');

const getAllTransection = async (req,res) => {
    try{
        const transections = await TransectionModel.find({})
        res.status(200).json(transections);
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};
const addTransection = async (req,resy)  => {
    try{
        const newTransection =new transectionModel(req.body)
        await newTransection.save()
        resy.status(201).send('Transection Created')
    } catch(error){
        console.log(error);
        resy.status(500).json(error);
    }
};

module.exports = {getAllTransection, addTransection}
