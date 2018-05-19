var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index');
});

router.get("/form", function(req,res){
	res.render("form.handlebars");
 })

 router.get("/strength", function(req,res){
	res.render("strength.handlebars");
 })

 router.get("/yoga", function(req,res){
	res.render("yoga.handlebars");
 })

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;