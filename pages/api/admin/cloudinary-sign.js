const cloudinary = require('cloudinary').v2;
export default function signature(req, res) {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp,
    },
    "Wpa3J1CQCNSrZ-EA5w2npqPsyo0" //process.env.CLOUDINARY_SECRET
  );

  res.statusCode = 200;
  res.json({ signature, timestamp });
}
