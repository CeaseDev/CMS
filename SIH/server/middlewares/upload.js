const fs = require("fs") ; 
const path = require("path") ; 

exports.createDirectory = (req, res, next) => {
    const id = req.header('id');

    if (!id) {
      return res.status(400).send('ID not provided in the header');
    }
  
    const directoryPath = `./public/${id}`;
  
    if (fs.existsSync(directoryPath)) {
      return next();
    }
  
    fs.mkdir(directoryPath, (err) => {
      if (err) {
        return res.status(500).send('Failed to create directory');
        console.log(error) ; 
        process.exit(1) ; 
      }
      next();
    });
  };
  
 


