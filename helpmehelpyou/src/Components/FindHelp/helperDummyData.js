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
    skills_needed: "Gardening",
    skills_offered: "Dog Walking",
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
    borough_name: "Camden",
    skills_needed: "Cleaning",
    skills_offered: "Dog Walking",
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
    borough_name: "Lewisham",
    skills_needed: "Dog Walking",
    skills_offered: "DIY",
    about_me:
      "I'm a dog lover through and through, and am around for pet sitting and dog walking when I'm not travelling",
    rating: "⭐️⭐️⭐️",
  },

  {
    user_id: "161c1137-c0a3-42ed-a5ef-2d0c6fd09535",
    display_name: "Jack Dee",
    profile_picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxL1TUydVgdQtkNBOh0lgCKJsGaS_AJZUnqw&usqp=CAU",
    email_address: "deejack@mod.gov",
    borough_name: "Hounslow",
    skills_needed: "Yoga",
    skills_offered: "Get Fit",
    about_me:
      "Ex-Army, I was a Personal Trainer. Really enjoyed my time so looking to get more people into being fit and being the best they can be. I'm getting old so would love someone to teach me about Yoga as that helps with flexibility",
    rating: "⭐️⭐️⭐️⭐️",
  },

  {
    user_id: "bcca149d-f623-4986-ac7e-4a23d9a72b35",
    display_name: "Robinson Crusoe",
    profile_picture:
      "https://static.demilked.com/wp-content/uploads/2016/06/60-year-old-man-becomes-fashion-model-philippe-dumas-6.jpg",
    email_address: "crusoe@hotmail.com",
    borough_name: "Barnet",
    skills_needed: "Just a cup of tea",
    skills_offered: "Get fit",
    about_me:
      "I can help people to get a personal best on their 5K, 10K and Half-Marathon.",
    rating: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
    user_id: "bcca149d-f623-4986-ac7e-4a23d9a72b36",
    display_name: "Maye Musk",
    profile_picture:
      "https://www.shutterstock.com/image-photo/elderly-woman-have-ride-boat-260nw-209025709.jpg",
    email_address: "mayemusk@mail.com",
    borough_name: "Hackney",
    skills_needed: "English",
    skills_offered: "Italian",
    about_me:
      "I've just moved to London from Italy and would love to improve my English. I can offer Italian conversation in return!",
    rating: "⭐️⭐️⭐️",
  },
  {
    user_id: "bcca149d-f623-4986-ac7e-4a23d9a72b34",
    display_name: "Travis B",
    profile_picture:
      "https://imgix.bustle.com/uploads/getty/2021/2/14/80f51fdb-aba9-4897-ab25-58881b172174-getty-1301828732.jpg?w=800&fit=crop&crop=focalpoint&auto=format%2Ccompress&q=50&fp-x=0.5251017639077341&fp-y=0.439918533604888&dpr=2",
    email_address: "travisb@gmail.com",
    borough_name: "Bromley",
    skills_needed: "Proof reading",
    skills_offered: "Household",
    about_me:
      "I'm a stay at home dad who used to be a teacher. I'm happy to help with any academic struggles that anybody might be having, and all I ask in return is a little help around the house",
    rating: "⭐️⭐️⭐️",
  },

  {
    user_id: "bcca149d-f623-4986-ac7e-4a23d9a7555",
    display_name: "Steven",
    profile_picture:
      "https://media.istockphoto.com/id/501277671/photo/since-opportunity-didnt-knock-he-decided-to-build-a-door.jpg?s=612x612&w=0&k=20&c=2xGM5620uwHWpQsS52Sb_v1le8ChM3AYIL9OOjSzVSM=",
    email_address: "steven@gmail.com",
    borough_name: "Wandsworth",
    skills_needed: "Accounting Help",
    skills_offered: "DIY",
    about_me:
      "I'm a carpenter and have every tool imaginable if anybody ever needs to borrow one! I can even come and drop it off in my van. My carpentry business has taken off recently, so if anybody could help me to get my books in order than that would be amazing, but not essential!",
    rating: "⭐️⭐️⭐️",
  },
];

export default helperDummyData;
