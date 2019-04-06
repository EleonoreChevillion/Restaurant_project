// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var reservations = [];
var waitinglist = [];

// Routes
// =============================================================

//Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "view.html"));
// });

// app.get("/index", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// Displays all characters
app.get("/api/reservations", function(req, res) {
  return res.json(reservations);
});
app.get("/api/waitinglist", function(req, res) {
  return res.json(waitinglist);
});

// // Displays a single character, or returns false
// app.get("/api/reservations/:reservation", function(req, res) {
//   var chosen = req.params.reservation;

//   console.log(chosen);

//   for (var i = 0; i < reservations.length; i++) {
//     if (chosen === reservations[i].routeName) {
//       return res.json(reservations[i]);
//     }
//   }

//   return res.json(false);
// });

// Create New Characters - takes in JSON input
app.post("/api/reservations", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newreservation = req.body;

  console.log(newreservation);

  if (reservations.length < 5) {
    //   return res.json(reservations[i]);
    reservations.push(newreservation);
  } else {
    waitinglist.push(newreservation);
  }
  res.json(newreservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
