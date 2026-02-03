module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        // Save the URL the user was trying to access
        req.session.redirectUrl = req.originalUrl; 
        req.flash("error", "You must be logged in!");
        return res.redirect('/login');
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        // Transfer the URL from session to locals so Passport can access it
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next(); 
};