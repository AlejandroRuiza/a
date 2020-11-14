const express = require('express');
const app = express();
const path = require('path');

//Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, '/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//midelewares


// routes
app.get('/', (req, res) => {
    res.render('index.html', {
        navbar: 'partials/navbar.html',
        footer: 'partials/footer.html',
        head: 'partials/head.html',
        title: '!Now'
    });
});

app.get('/about-us', (req, res) => {
    res.render('about-us.html', {
        navbar: 'partials/navbar.html',
        footer: 'partials/footer.html',
        head: 'partials/head.html',
        member_card: 'partials/member-card.html',
        title: 'About us'
    });
});

app.get('/nowProfe', (req, res) => {
    res.render('nowProfe.html', {
        navbar: 'partials/navbar.html',
        footer: 'partials/footer.html',
        head: 'partials/head.html',
        title: 'NowProfe'
    });
});




//static files
app.use(express.static(path.join(__dirname, 'public')));
///listening the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
