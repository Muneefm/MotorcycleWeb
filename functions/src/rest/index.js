const addComment = async (req, resp) => {
    console.log('Add comment function got called ', req, resp)
    const name = req.query.name
    const email = req.query.email
    const review = req.query.review
    const imageUrl = req.query.review
    console.log(' params parsed = ', name, email, review, imageUrl)
    resp.send("this is response ")
}

export default addComment