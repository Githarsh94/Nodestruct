const os = require('os');

console.log(os.userInfo());

console.log(os.uptime());

const currentos = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentos);
