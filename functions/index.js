const functions = require('firebase-functions');

// const AddComment = require('./src/rest/index')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.addComment = functions.https.onRequest((req, resp) => {
    console.log('Add comment function got called ', req, resp)
    const name = req.query.name
    const email = req.query.email
    const review = req.query.review
    const imageUrl = req.query.review
    console.log(' params parsed = ', name, email, review, imageUrl)
    resp.send("this is response ")
})