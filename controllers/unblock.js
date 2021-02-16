const { Unblock } = require("../models/Unblock");
const formidable = require("formidable");
const fs = require('fs')

const getAllUnblock = async (req, res) => {
  const unblocks = await Unblock.findAll();
  if (unblocks) {
    res.status(200).json(unblocks);
  } else {
    res.status(400).json({ error: "unblock form doesn't exist" });
  }
};

const createUnblock = async (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, async (err, fields, file) => {
    if (err) {
      return res.status(400).json({ error: "problem with files" });
    }

    const unblock = await Unblock.create(fields);
    Object.entries(file).map((f) => {
      let oldPath = f[1].path
      let newPath =   './uploads/' + Math.floor(Math.random() * 600000) + '_' + f[1].name
      let rawData = fs.readFileSync(oldPath)
      fs.writeFile(newPath, rawData, function(err){
        if(err) console.log(err)
      })
      unblock[f[0]] = newPath;
    });
    await unblock.save();
    res.status(200).json(unblock);
  });
};

module.exports = { getAllUnblock, createUnblock };
