const Post = require('../models/post');
const slugify = require('slugify');

exports.create = (req, res) => {
    // console.log(req.body)
    const { title, content, user } = req.body;
    const slug = slugify(title);
    //validate
    switch(true){
        case !title:
        return res.status(400).json({error: 'Title is required'})
        break;
        case !content:
        return res.status(400).json({error: 'Content is required'})
        break;
    }
    
    //create post
    Post.create({title,content,user,slug}, (error,post) => {
        if (error){
            console.log(error);
            res.status(400).json({error: 'Duplicate post. Try another Title'});
        }
        res.json(post);
    });
};