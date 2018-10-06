    // the variable that says in which stage of the game are we
    var stage=0;
    var player1="";
    var player2="";
    // Initialize Firebase.
    var config = {
        apiKey: "AIzaSyD1awtD7hsBExVY6EbxvaiAJgAJmhnmIpk",
        authDomain: "rockpaperscissors-8af32.firebaseapp.com",
        databaseURL: "https://rockpaperscissors-8af32.firebaseio.com",
        projectId: "rockpaperscissors-8af32",
        storageBucket: "rockpaperscissors-8af32.appspot.com",
        messagingSenderId: "899575368450"
    };

    firebase.initializeApp(config);

    // Alias database and sub-levels.
    var database = firebase.database();



    $("#player1").on("click", function(event) {
        event.preventDefault();
      
        // Get the input values
        var player = $("#playerName").val().trim();
        
        // Log the Bidder and Price (Even if not the highest)
        console.log(player);
      
          // Save the new player in Firebase
          database.ref("/players").push({
            playerName:player,
            connected: true
          });
      
      });
      





    function rockpaperscissors(){

        if (stage===0){
      
          //  $('#localplayer').html(' <input type="text" class="form-control" placeholder="Nombre Jugador Local" aria-label="Nombre Jugador Local" aria-describedby="basic-addon2">');
           // $('#localplayer').append('<button class="btn btn-outline-secondary" id="player1" type="button">Jugar</button>');
        }
        else {
            $('#localplayer').html();
        }
    }

    rockpaperscissors();