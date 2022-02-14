/*-------------------- Configure My Serverv --------------------------*/

const express = require('express');
const { param } = require('express/lib/request');
const server = express();
// server.engine('html', require('ejs').renderFile);
// server.set('view engine', 'html');
server.set('view engine', 'ejs');
server.use(express.static('public'));
server.listen(7000);

/*--------------------- Object Store Title of each page ---------------*/

const args = {
    home: 'Home Page',
    blog: 'Blogs Page',
    admin: 'Admin Page',
    login: 'Login Page',
    post: 'Post Page',
    error: '404 Page Not Found'
};


/*-------------------- Rout Middlewares --------------------------*/

server.get('/', (_, res) => {
    res.render('home', { title: args.home });
});


server.get('/home', (_, res) => {
    res.render('home', { title: args.home });
});

server.get('/blog', (_, res) => {
    res.render('blog', { title: args.blog });
});

server.get('/post', (_, res) => {
    res.render('post', { title: args.post });
});

server.get('/login', (_, res) => {
    res.render('login', { title: args.login });
});

server.get('/admin', (req, res) => {

    if (req.url.includes("?role")) {
        if (req.query.role.toLocaleLowerCase() == 'admin')
            res.render('admin', { title: args.admin, message: " hellow admin" });
        else
            res.render('login', { title: args.login });
    } else
        res.render('login', { title: args.login });
});



server.use((req, res) => {
    res.render('404', { title: args.error });
});