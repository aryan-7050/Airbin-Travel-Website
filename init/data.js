const sampleListing = [
    {
        title: "Mountain Retreat",
        description: "A cozy wooden cabin with panoramic Himalayan views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 3500,
        location: "Manali, Himachal Pradesh",
        country: "India"
    },
    {
        title: "Beachfront Bliss Villa",
        description: "A stunning private villa located right on the white sands of North Goa, featuring a private pool and sunset deck.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 12000,
        location: "Morjim, Goa",
        country: "India"
    },
    {
        title: "Desert Rose Glamping",
        description: "Luxury tent experience under the stars in the Thar Desert with traditional Rajasthani dinner and folk music.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 4500,
        location: "Sam Sand Dunes, Jaisalmer",
        country: "India"
    },
    {
        title: "Mist & Tea Plantation Stay",
        description: "A heritage bungalow tucked away in a 100-year-old tea garden. Perfect for hikers and tea lovers.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 3800,
        location: "Munnar, Kerala",
        country: "India"
    },
    {
        title: "Skyline Luxury Apartment",
        description: "Stay in the clouds with this 45th-floor penthouse offering unmatched views of the Arabian Sea and city lights.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 6500,
        location: "Worli, Mumbai",
        country: "India"
    },
    {
        title: "Riverview Glass House",
        description: "A modern architectural marvel with floor-to-ceiling glass walls overlooking the Ganges.",
        image: { 
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
        },
        price: 5200,
        location: "Rishikesh, Uttarakhand",
        country: "India"
    },
    {
        title: "The Colonial Estate",
        description: "Spend your summers in this British-era cottage with a private garden and fireplace.",
        image: { 
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 4200,
        location: "Shimla, Himachal Pradesh",
        country: "India"
    },
    {
        title: "Backwater Bamboo Studio",
        description: "An eco-friendly cottage built entirely of bamboo, floating on the serene Alleppey backwaters.",
        image: { 
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 3200,
        location: "Alappuzha, Kerala",
        country: "India"
    },
    {
        title: "French Quarter Boutique Home",
        description: "A vibrant yellow-walled studio in the heart of White Town, just minutes from the Promenade Beach.",
        image: { 
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 3900,
        location: "Pondicherry",
        country: "India"
    },
    {
        title: "Wild Flower Farmstay",
        description: "Experience organic farming and a quiet life in this rustic farmhouse near the capital.",
        image: { 
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 2500,
        location: "Chhatarpur, Delhi",
        country: "India"
    },
    {
        title: "Vintage Goa Portuguese Home",
        description: "A charming blue-and-white colonial home with high ceilings, antique furniture, and a lush garden.",
        image: { 
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 5500,
        location: "Anjuna, Goa",
        country: "India"
    },
    {
        title: "Infinity Pool Safari Lodge",
        description: "Experience the wild in luxury. Watch tigers from the safety of your private deck overlooking the national park.",
        image: { 
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 15000,
        location: "Ranthambore, Rajasthan",
        country: "India"
    },
    {
        title: "Cloud-Nine Treehouse",
        description: "An adventurous escape perched high in the rainforest canopy. Wake up to the sounds of exotic birds.",
        image: { 
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 7200,
        location: "Wayanad, Kerala",
        country: "India"
    },
    {
        title: "Lakeside Glamping Pods",
        description: "Futuristic glass pods on the banks of Pangong Lake. Witness the clearest night skies in the country.",
        image: { 
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 9000,
        location: "Leh, Ladakh",
        country: "India"
    },
    {
        title: "Golden Desert Fortress",
        description: "Stay inside a living fort. This sandstone suite offers a glimpse into medieval history with modern amenities.",
        image: { 
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 5800,
        location: "Jaisalmer Fort, Rajasthan",
        country: "India"
    },
   
    {
        title: "The Floating Lotus Houseboat",
        description: "A hand-carved cedar wood houseboat anchored in the quietest corner of Dal Lake.",
        image: { 
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1543968996-ee822b8176ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 6200,
        location: "Srinagar, Jammu & Kashmir",
        country: "India"
    },
   
    {
        title: "Zen River Meditation Hut",
        description: "Simple, elegant living on the banks of the Kaveri. Designed for those seeking silence and spiritual rejuvenation.",
        image: { 
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 2200,
        location: "Hampi, Karnataka",
        country: "India"
    },
    {
        title: "Orchard View Estate",
        description: "Surround yourself with apple and cherry blossoms in this stone-and-glass cottage located in a private orchard.",
        image: { 
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 4100,
        location: "Mukteshwar, Uttarakhand",
        country: "India"
    },
];

module.exports = { data: sampleListing };