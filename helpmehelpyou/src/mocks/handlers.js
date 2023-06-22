import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://arachnides-backend.onrender.com/api/listings",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            borough_name: "Hammersmith and Fulham",
            created_at: "2023-06-21T16:30:13.968168+00:00",
            display_name: "vgh",
            email_address: "olga84h@gmail.com",
            listing_details: "ghghg",
            listing_id: "beee3ec6-cbf8-4c79-8610-db7a9a0f2223",
            listing_title: "ghgh",
            skills_offered: "Photography 📸",
            skills_wanted: "Gardening 🌻",
            timescale: "",
          },
          {
            borough_name: "Hammersmith and Fulham",
            created_at: "2023-06-21T16:30:13.968168+00:00",
            display_name: "vgh",
            email_address: "olga84h@gmail.com",
            listing_details: "ghghg",
            listing_id: "beee3ec6-cbf8-4c79-8610-db7a9a0f2223",
            listing_title: "ghgh",
            skills_offered: "Photography 📸",
            skills_wanted: "Gardening 🌻",
            timescale: "",
          },
          {
            borough_name: "Hammersmith and Fulham",
            created_at: "2023-06-21T16:30:13.968168+00:00",
            display_name: "vgh",
            email_address: "olga84h@gmail.com",
            listing_details: "ghghg",
            listing_id: "beee3ec6-cbf8-4c79-8610-db7a9a0f2223",
            listing_title: "ghgh",
            skills_offered: "Photography 📸",
            skills_wanted: "Gardening 🌻",
            timescale: "",
          },
        ])
      );
    }
  ),
];
