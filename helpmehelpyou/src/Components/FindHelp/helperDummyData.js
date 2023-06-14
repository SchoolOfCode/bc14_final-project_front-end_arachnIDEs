/*
display_name - 
profile_picture
email_address
listing_title
date_posted
borough_id
s-s-c_name - what they need
listing_details
*/

// Below worked, but I've just realised it was fetching listings and trying to display them as users (i.e. I did this in the wrong place).
// const res = await fetch("http://localhost:5000/api/listings");
// const data = await res.json();
// const helperDummyData = data.payload;
// console.log(helperDummyData);

const helperDummyData = [
  {
    user_id: "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r",
    display_name: "John Doe",
    profile_picture:
      "https://www.inmybag.co.za/wp-content/uploads/2015/09/old-man-smiling.jpg",
    email_address: "johndoe@pretendemail.co.uk",

    borough_name: "Croydon",
    skills_offered: "Gardening",
    skills_needed: "Just A Cup Of Tea",
    about_me: "I'm retired and love meeting new people and staying active, I can help with anything outdoorsy and I'm available during working hours. If you have time, a cup of tea and a chat would be fantastic.",
      rating: "⭐️⭐️⭐️⭐️⭐️"

  },
  {
    user_id: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s",
    display_name: "Jane Smith",
    profile_picture:
      "https://media.istockphoto.com/id/517234226/photo/i-see-no-good-reason-to-act-my-age.jpg?s=612x612&w=0&k=20&c=qx2j21ZtwPWJuvrLD8uvegXz9z4YSQQnflUyGlBkyic=",
    email_address: "jane_smith@pretendemail.com",

    borough_name: "Camden",
    skills_offered: "Cleaning",
    skills_needed: "Baking",
    about_me:  "I've recently sold my business to take a step back to focus on myself and my community. I can help with household tasks, and I'm also available for general chat and companionship",
      rating: "⭐️⭐️⭐️⭐️"

  },
  {
    user_id: "1a9b2c8d7e3f6g5h4i0j1k2l3m4n5o6p7q8r",
    display_name: "Mike Johnson",
    profile_picture:
      "https://media.istockphoto.com/id/499781775/photo/positive-attitudes-are-the-way-to-go.jpg?s=612x612&w=0&k=20&c=E0_pJaRiiSBh9ZTOMScxRMQgb1tp1-_OrZRRja04Liw=",
    email_address: "mikejo@heresanemail.com",

    borough_name: "Lewisham",
    skills_offered: "Dog Walking",
    skills_needed: "DIY",
    about_me: "I'm a dog lover through and through, and am around for pet sitting and dog walking when I'm not travelling. Any help with DIY would be brilliant.",
      rating: "⭐️⭐️⭐️"

  },
];

export default helperDummyData;
