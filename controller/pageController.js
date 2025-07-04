const Postmo = require('../model/pageModel')


const HomePage = (req, res)=>{
    Postmo.find()
    .then(Data => {res.render('homepage', {posts:Data}) })
    .catch (err=> console.log(err))
}
const SeeMore = (req, res)=>{
    Postmo.find()
    .then(Data => {res.render('seemore', {posts:Data}) })
    .catch (err=> console.log(err))
}


const DeletePost = (req, res) => {
    Postmo.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/'))
        .catch(err => console.log(err));
};


const Editpost = (req, res) => {
    Postmo.findById(req.params.id)
        .then(post => res.render('editpost', { post }))
        .catch(err => console.log(err));
};


const UpdatePost = (req, res) => {
    Postmo.findByIdAndUpdate(req.params.id, { post: req.body.post })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err));
};
const savePost = (req, res) => {
  const newpost = new Postmo(req.body); 
  newpost.save()
    .then(() => res.redirect('/')) 
    .catch(err => console.log(err));
};



module.exports ={
    HomePage,
    SeeMore,
    DeletePost,
    Editpost,
    UpdatePost,
    savePost
    
    
}
