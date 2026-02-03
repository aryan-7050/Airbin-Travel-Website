const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const listingController = require("../controllers/listings.js");
const multer = require('multer');
const path = require("path");
const fs = require('fs');

// --- ENSURE DIRECTORY EXISTS ---
// This prevents the ENOENT error automatically
const uploadDir = path.join(__dirname, "../public/uploads");
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir, { recursive: true });
}

// --- LOCAL STORAGE CONFIGURATION ---
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); 
    },
    filename: (req, file, cb) => {
        // Use a unique suffix to prevent overwriting files with same name
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage }); 

// --- MIDDLEWARE ---
// Note: Usually these are imported from a middleware.js file to keep routes clean
const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in!");
        return res.redirect("/login");
    }
    next();
};

const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        const ExpressError = require("../utils/ExpressError.js");
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

// --- ROUTES ---

router.route("/")
    .get(wrapAsync(listingController.index))
    .post(
        isLoggedIn, 
        upload.single('listing[image]'), // Multer must come BEFORE validation to parse req.body
        validateListing,                 
        wrapAsync(listingController.createListing)
    );

// New form route must stay above /:id
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(
        isLoggedIn, 
        upload.single('listing[image]'), 
        validateListing,                 
        wrapAsync(listingController.updateListings)
    )
    .delete(isLoggedIn, wrapAsync(listingController.distroyListings));

router.get("/:id/edit", isLoggedIn, wrapAsync(listingController.renderEditForm));

module.exports = router;