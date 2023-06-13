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
    listing_id: "9r8q7p6o5n4m3l2k1j0i9h8g7f6e5d4c3b2a1",
    borough_id: "Croydon",
    ssc_name: "Gardening",
    about_me:
      "I'm retired and love meeting new people and staying active, I can help with anything outdoorsy and I'm available during working hours",
    rating: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
    user_id: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s",
    display_name: "Jane Smith",
    profile_picture:
      "https://media.istockphoto.com/id/517234226/photo/i-see-no-good-reason-to-act-my-age.jpg?s=612x612&w=0&k=20&c=qx2j21ZtwPWJuvrLD8uvegXz9z4YSQQnflUyGlBkyic=",
    email_address: "jane_smith@pretendemail.com",
    listing_id: "8s7r6q5p4o3n2m1l0k9j8i7h6g5f4e3d2c1b0a",
    borough_id: "Camden",
    ssc_name: "Cleaning",
    about_me:
      "I've recently sold my business to take a step back to focus on myself and my community. I can help with household tasks, and I'm also available for general chat and companionship",
    rating: "⭐️⭐️⭐️⭐️",
  },
  {
    user_id: "1a9b2c8d7e3f6g5h4i0j1k2l3m4n5o6p7q8r",
    display_name: "Mike Johnson",
    profile_picture:
      "https://media.istockphoto.com/id/499781775/photo/positive-attitudes-are-the-way-to-go.jpg?s=612x612&w=0&k=20&c=E0_pJaRiiSBh9ZTOMScxRMQgb1tp1-_OrZRRja04Liw=",
    email_address: "mikejo@heresanemail.com",
    listing_id: "9r8q7p6o5n4m3l2k1j0i9h8g7f6e5d4c3b2a1",
    borough_id: "Lewisham",
    ssc_name: "Dog Walking",
    about_me:
      "I'm a dog lover through and through, and am around for pet sitting and dog walking when I'm not travelling",
    rating: "⭐️⭐️⭐️",
  },
];

export default helperDummyData;
