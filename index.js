const fs = require("fs");

fs.writeFile("message.txt", "Hello World", function (err) {
  if (err) throw err;
  console.log("File Created");
});

fs.readFile("message.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

fs.readdir("F:/Nodejs", { withFileTypes: true }, async function (err, files) {
  if (err) throw await err;
  files.forEach((file) => {
    // const value = file.isFile();
    console.log(file);
    if(file.isFile()){
        console.log("File");
    }else if(!file.isFile()){
        console.log("Folder");
    }
    
  });
});

// const notes = require('./notes.js');

// const yargs = require("yargs");

// // var command = process.argv[2];
// // console.log("Process",process.argv);
// console.log("Yargs",yargs.argv);
// var argv = yargs.argv;

// var command = argv._[0];

// if(command === 'list'){
//     notes.getAllNotes();
//     // console.log('List All Notes');
// }else if(command === 'read'){
//     notes.readNote(argv.title);
//     // console.log('Read Notes');
// }
// else if(command === 'create'){
//     notes.createNote(argv.title,argv.body)
// }else if(command === 'remove'){
//     notes.removeNote(argv.title);
//     // console.log('Notes Removed');
// }else{
//     console.log('Command Not Found');
// }

//  fs.writeFile("message.txt", "Hello World", function(err){
//      if(err) throw err;
//      console.log("File Created")
//  });

//  fs.readFile("message.txt", "utf8", function(err, data){
//     if(err) throw err;
//     console.log(data);
// });

// fs.readdir("F:/Nodejs", {withFileTypes : true}, function(err, files){
//     if(err) throw err;
//     console.log(files);
// });
