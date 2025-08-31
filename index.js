// const express=require("express")
// const cors = require("cors")

// const app=express()

// let user=[{
    
// email:"shifaa",
// password:"123",

// },



// ]

// // app.use(cors())
// app.use(cors({
//   origin: "https://signin-frontend-virid.vercel.app/", // your Vercel frontend URL
//   methods: ["GET","POST"],
//   credentials: true
// }));
// app.use(express.json())

// app.post("/",function(req,res){

// const foundUser = user.find(
//     (u) => u.email === req.body.email && u.password === req.body.password
//   );

//   if (foundUser) {
//     res.send(true);
//   } else {
//     res.send(false);
//   }
// });

// app.post("/signup",function(req,res){
//     const newUser = {
//     email: req.body.email,
//     password: req.body.password,
//   };
//     user.push(newUser);
//      console.log("All Users:", user);
//        res.send("User registered successfully!");

// })

// app.get("/", (req, res) => {
//   res.send("Backend is running 🚀");
// });

// // app.listen(3000,function(){
// //     console.log("Shifaa's Server Started in Port 3000")
// // })

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, function () {
//   console.log(`Shifaa's Server started on port ${PORT}`);
// });



// index.js
const express = require("express");
const cors = require("cors");

const app = express();

// In-memory user storage
let users = [
  {
    email: "shifaa",
    password: "123",
  },
];

// CORS middleware
app.use(
  cors({
    origin: "https://signin-frontend-virid.vercel.app", // your Vercel frontend URL
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// JSON middleware
app.use(express.json());

// Root route (test if backend is running)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Login route
app.post("/", (req, res) => {
  const { email, password } = req.body;

  const foundUser = users.find(
    (u) => u.email === email && u.password === password
  );

  if (foundUser) {
    res.send(true); // login success
  } else {
    res.send(false); // login failed
  }
});

// Signup route
app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  // Check if user already exists
  const exists = users.find((u) => u.email === email);
  if (exists) {
    return res.status(400).send("User already exists!");
  }

  const newUser = { email, password };
  users.push(newUser);
  console.log("All Users:", users);
  res.send("User registered successfully!");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Shifaa's Server started on port ${PORT}`);
});
