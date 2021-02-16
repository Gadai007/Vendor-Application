const { Update } = require("../models/Update");
const fs = require('fs')
const formidable = require('formidable')

const getAllUpdate = async (req, res) => {
  const updates = await Update.findAll();
  if (updates) {
    res.status(200).json(updates);
  } else {
    res.status(400).json({ error: "update form doesn't exist" });
  }
};

const createUpdate = async (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, async (err, fields, file) => {
    if (err) {
      return res.status(400).json({ error: "problem with files"});
    }

    const update = await Update.create(fields);
    Object.entries(file).map((f) => {
      let oldPath = f[1].path
      let newPath =   './uploads/' + Math.floor(Math.random() * 600000) + '_' + f[1].name
      let rawData = fs.readFileSync(oldPath)
      fs.writeFile(newPath, rawData, function(err){
        if(err) console.log(err)
      })
      update[f[0]] = newPath;
    });
    await update.save();
    res.status(200).json(update);
  });
};

module.exports = { getAllUpdate, createUpdate };
