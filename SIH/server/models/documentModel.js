const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    file : { type: String, required: true }
});
const document = mongoose.model('Document', documentSchema);

module.exports = Case;
