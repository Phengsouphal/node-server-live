const express = require('express'),
    path = require('path'),
    // bodyParse = require('body-parser'),
    config = require('./config/default'),
    flash = require('connect-flash'),
    port = config.server.port,
    app = express(),
    node_media_server = require('./media_server'),
    thumbnail_generator = require('./cron/thumbnails');


app.use(express.static('public'));
app.use('/thumbnails', express.static('server/thumbnails'));
// app.use(flash());

// app.use(bodyParse.urlencoded({extended: true}));
// app.use(bodyParse.json({extended: true}));
console.log('dddd')
app.get('*', (req, res) => {
    res.render('index');
});

app.listen(port, () => console.log(`App listening on ${port}!`));
node_media_server.run();
// thumbnail_generator.start();