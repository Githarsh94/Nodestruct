// GLOBALS NO WINDOW !!!!

// _dirname - path to current directory
//_filename - file name
// require -function to use modules (Common35)
// module - info about current module (file)
// process info about env where the program is being executed
console.log(__dirname);
console.log(__filename);
setInterval(() => {
    console.log("hello world");
}, 250);