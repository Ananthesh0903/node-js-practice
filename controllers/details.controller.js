const Detail = require('../models/details');
//Controllers
const getDetails = async(req,res) => {
    try{
        const details = await Detail.find({});
         res.status(200).json({details});
      }
      catch(error){
          res.status(500).json({message:error.message});
      }
}

const getDetail = async(req,res) => {
    try{
        const {id}=req.params;
        const details = await Detail.findById(id);
        res.status(200).json({details});
      }
      catch(error){
          res.status(500).json({message:error.message});
      }
}

const createDetail = async(req,res) => {
    try{
        const details = await Detail.create(req.body);
         res.status(200).json({details});
      }
      catch(error){
          res.status(500).json({message:error.message});
      }
}

const updateDetail = async(req,res) => {
    try{
        const {id}=req.params;
        const details = await Detail.findByIdAndUpdate(id,req.body);
    
        if(!details){
          return res.status(404).json({message:"Product not found"});
        }
    
        const Updateddetail = await Detail.findById(id);
        res.status(200).json({Updateddetail});
      }
      catch(error){
          res.status(500).json({message:error.message});
      }
}

const deleteDetail =  async(req,res) => {
    try{
        const {id}=req.params;
        const details = await Detail.findByIdAndDelete(id,req.body);
    
        if(!details){
          return res.status(404).json({message:"Product not found"});
        }
    
        res.status(200).json({message:"Product deleted sucesfully"});
      }
      catch(error){
          res.status(500).json({message:error.message});
      }
}

module.exports = {
    getDetail,
    getDetails,
    createDetail,
    updateDetail,
    deleteDetail
}