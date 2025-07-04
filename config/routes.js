const express = require('express')

const route = express('Router')

const pageController = require('../controller/pageController')

route.get('/',pageController.HomePage)
route.get('/seemore/',pageController.SeeMore)


route.post('/delete/:id', pageController.DeletePost);
route.get('/edit/:id', pageController.Editpost);
route.post('/edit/:id', pageController.UpdatePost);
route.post('/Add', pageController.savePost);



module.exports= route