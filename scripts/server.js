'use strict'

const express = require('express');
const logger = require('morgan');
const open = require('open')
const app = express();

app.disable("x-powered-by");
app.use(logger('dev'));
app.use(express.static('./dist'));

const port = '3000';

app.listen(port);
console.log(`listening on port ${port}`);

app.get('/404', function(req, res, next){
    // trigger a 404 since no other middleware
    // will match /404 after this one, and we're not
    // responding here
    next();
  });

  app.get('/403', function(req, res, next){
    // trigger a 403 error
    var err = new Error('Access not allowed');
    err.status = 403;
    next(err);
  });

  app.get('/500', function(req, res, next){
    // trigger a generic (500) error
    next(new Error('Server error'));
  });


app.use(function(req, res, next){
res.status(404);

res.format({
    html: function () {
    res.render('404', { url: req.url })
    },
    json: function () {
    res.json({ error: 'Not found' })
    },
    default: function () {
    res.type('txt').send('Not found')
    }
})
});

// error-handling middleware, take the same form
// as regular middleware, however they require an
// arity of 4, aka the signature (err, req, res, next).
// when connect has an error, it will invoke ONLY error-handling
// middleware.

// If we were to next() here any remaining non-error-handling
// middleware would then be executed, or if we next(err) to
// continue passing the error, only error-handling middleware
// would remain being executed, however here
// we simply respond with an error page.

app.use(function(err, req, res, next){
// we may use properties of the error object
// here and next(err) appropriately, or if
// we possibly recovered from the error, simply next().
res.status(err.status || 500);
res.render('500', { error: err });
});

open(`http://localhost:${port}`)
