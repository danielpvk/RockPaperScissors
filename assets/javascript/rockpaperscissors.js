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
    var clickCounter = 0;
    // Functions
    // ================================================================================
    // On Click
    $("#rock1").on("click", function() {
        clickCounter++;
        debugger;
        // **** Store Click Data to Firebase in a JSON property called clickCount *****
        // **** Note how we are using the Firebase .set() method ****
        // **** .ref() refers to the path you want to save your data to
        // **** Since we left .ref() blank, it will save to the root directory
        database.ref().set({
         clickCount: clickCounter
        });
    });
    $('#localplayer').on('click',function(event){
      
        var button1="#"+$(event.target).attr("id");
        var player=event.delegateTarget.childNodes[1].value;

//in this line of code we are deciding if we are player1 or player2 in firebase
    database.ref().on("value", function(snapshot) {
    // If Firebase has a player1, the new player will be player2
        debugger;
        if (snapshot.child("player1").exists()) {
        // Set the variables for highBidder/highPrice equal to the stored values.
        database.ref().set({
            player2: player
            });    
        }
    });
    });
    function rockpaperscissors(){

        if (stage===0){
      
            $('#localplayer').html(' <input type="text" class="form-control" placeholder="Nombre Jugador Local" aria-label="Nombre Jugador Local" aria-describedby="basic-addon2">');
            $('#localplayer').append('<button class="btn btn-outline-secondary" id="player1" type="button">Jugar</button>');
        }
        else {
            $('#localplayer').html();
        }
    }

    rockpaperscissors();