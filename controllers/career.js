const { Career } = require("../models/Career");

const getAllCareer = async (req, res) => {
  const careers = await Career.findAll();
  if (careers) {
    res.status(200).json(careers);
  } else {
    res.status(400).json({ error: "career form doesn't exist" });
  }
};

const createCareer = async (req, res) => {
    const career =await Career.create(req.body)
    if(career){
        res.status(200).json(career)
    }else{
        res.status(400).json({ error: 'failed to create career form'})
    }
}

module.exports = { getAllCareer, createCareer }
