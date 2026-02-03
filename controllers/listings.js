const Listing = require("../models/listing.js");

// Index Route
module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

// Render New Form
module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

// Show Listing
module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate("owner") // <--- THIS MUST BE ADDED
        .populate({
            path: "reviews",
            populate: { path: "author" }
        });
    
    if (!listing) {
        req.flash("error", "Listing does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
};

// Create Listing
module.exports.createListing = async (req, res) => {
    // Check if a file was actually uploaded
    if (!req.file) {
        req.flash("error", "Please upload an image!");
        return res.redirect("/listings/new");
    }

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;

    newListing.image = {
        url: `/uploads/${req.file.filename}`, 
        filename: req.file.filename
    };
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};
// Render Edit Form
module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
};

// Update Listing
module.exports.updateListings = async (req, res) => {
    let { id } = req.params;
    
    // Update text fields
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    // Update image only if a new file is uploaded
    if (req.file) {
        listing.image = { url: req.file.path, filename: req.file.filename };
        await listing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

// Destroy Listing
module.exports.distroyListings = async (req, res) => {
    let { id } = req.params;
    // findByIdAndDelete triggers the 'findOneAndDelete' middleware in your Schema
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};