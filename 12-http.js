const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to the homepage.');
    }
    else if(req.url === '/about'){
        res.end('Welcome to the about page.');
    }
    else{
        res.end(`
            <h1>OOPS!</h1>
            <p>We cant seem to find the page that you are looking for</p>
            <a href="/">Back Home</a>
        `);
    }
});

server.listen(5000);