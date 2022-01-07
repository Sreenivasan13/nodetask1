var createNote = (title,body) => {
    console.log("Note Created", title, body)
}


var getAllNotes = () => {
    console.log("Get All Notes");
}

var readNote = (title) => {
    console.log("Reading Notes", title)
}

var removeNote = (title) => {
    console.log("Removing Notes", title)
}
// console.log("Notes Started");
// module.exports.addNote = () => {
//     console.log('Add Note Called');
//     return "New Note Created";
// }
// module.exports.add = (a,b) => {
//     return a + b;
// }

// const os = require("os");
//  console.log(os.platform());
//  console.log(os.cpus().length);
//  console.log(os.arch());
//  console.log(os.uptime());

// const path = require("path");
// console.log(path.join('/folder1', 'folder2'));

// const notes = require('./notes.js');
// var res = notes.addNote();
// var result = notes.add(10,3);
// console.log(result);

// const _ = require('lodash');
// console.log(_.isString('abc'));
// console.log(_.isString(2));
// const filteredarray = _.uniq(['Sreeni', 'Sreeni','Vasan',1,3,3,1]);
// console.log(filteredarray);
module.exports = {
    createNote,
    getAllNotes,
    readNote,
    removeNote
 }