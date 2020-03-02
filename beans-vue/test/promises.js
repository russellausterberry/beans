/* Examples of PROMISES to achieve asynchronous code in JS
as opposed to CALLBACKS which do away with 'return', 'throw',
and 'guarantee' of single call only.

Keywords: 'then' 

'then' takes 2 arguments: 
1) fulfilment handler (the first function). Parellel: 'return' 
2) rejection handler (the second function). Parellel: 'throw'
Calling either one halts execution of main function (like throw).
*/


///////////////////////////////////////////////////////////////////////
// synchronous (getUser is defined function)
var user = getUser('mjackson');
var name = user.name;

// asynchronous (getUser is defined function):
getUser('mjackson').then(function (user) {
    return user.name;   /* equivalent to 'return' in a function */
})


///////////////////////////////////////////////////////////////////////
// synchronous
var user = getUser('mjackson');
if (!user) throw new Error('no user!');
var name = user.name;

// asynchronous:
getUser('mjackson').then(function (user) {
    if (!user) throw new Error('no user!');
    return user.name;
})


///////////////////////////////////////////////////////////////////////
// synchronous:
try {
    deliverTweetTo(tweet, 'mjackson');
} catch (error) {
    handleError(error);
}

// asynchronous:
deliverTweetTo(tweet, 'mjackson')
    .then(undefined, handleError); /* equivalent to 'catch' */


///////////////////////////////////////////////////////////////////////
// synchronous:
try {
    var user = getUser('mjackson');
} catch (error) {
    throw new Error('ERROR: ' + error.message); /* re-trhow */
}

// asynchronous:
getUser('mjackson').then(undefined, function (error) {
    throw new Error('ERROR: ' + error.message); /* re-throw */
});


///////////////////////////////////////////////////////////////////////
// synchronous:
var user = getUser('mjackson');
var tweets = getNewTweets(user);
updateTimeline(tweets);

// callbacks:
getUser('mjackson', function(user) {
    getNewTweets(user, function(tweets) {
        updateTimeline(tweets);
    });
});

// promises:
getUser('mjackson')
    .then(getNewTweets)
    .then(updateTimeline);  /* very simple chaining */

///////////////////////////////////////////////////////////////////////
// synchronous:
try {
    var user = getUser('mjackson');
    var tweets = getNewTweets(user);
    updateTimeline(tweets);
} catch (error) {
    handleError(error);
}

// callbacks:
getUser('mjackson', function (error, user) {
    if (error) {
        handleError(error);
    } else {
        getNewTweets(user, function (error, tweets) {
            if (error) {
                handleError(error);
            } else {
                updateTimeline(tweets, function (error) {
                    if(error) handleError(error);
                });
            }
        });
    }
}); /* manual handling because we have lost call stack */

// promises:
getUser('mjackson')
    .then(getNewTweets)     /* if getUser succeeds, run this */
    .then(updateTimeline)   /* if getNewTweets succeeds, run this */
    .then(undefined, handleError);  /* catch errors "rejected promise" */
    /* terse syntax possible because of promises callstack - 
    you don't have to manually handle errors 
    
    any rejection propogates back up to first "catch" */


///////////////////////////////////////////////////////////////////////
// async wrapper around synchronous code
var q = require('q'); 

var getUser = q.async(function * (name) {
    var sql = 'SELECT * FROM users WHERE name=?';
    var user = yield query(sql, name); /* yield halts execution until promise fulfilled */
    if (!user) throw new Error('no user!');
    return user;
});


///////////////////////////////////////////////////////////////////////
// synchronous:
function getNewTweetsForUsers(users) {
    return users.map(getNewTweets);
}

// asynchronous: demonstrating parallel usage
var q = require('q');

function getNewTweetsForUsers(users) {
    var promises = users.map(getNewTweets);
    return q.all(promises); /* take array of promises & AGGREGATE */
    /* any single failure = rejected promise */
}


///////////////////////////////////////////////////////////////////////
var http = require('http');
var q = require('q');

var server = http.createServer(function(req, res) {
    handleRequest(req).then(function(response) {        /* handle a promise */
        res.writeHead(response.status, response.headers);
        res.end(response.content);
    }, function (error){
        console.error(error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    });
});

server.listen(3000);
/* this allows error propogation to top of stack 
note: servers are very good match for functional paradigm:
stateless, input/output
*/