    // the variable that says in which stage of the game are we
    var stage=0; //0=no players 1=1 player  2=2 players
    var player="";
    var whoIAm=-1;
    var score1=[];
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
    var ref = firebase.database().ref("/players");

    function snapshotToArray(snapshot) {
        var returnArr = [];
    
        snapshot.forEach(function(childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
    
            returnArr.push(item);
        });
    
        return returnArr;
    };



    $("#player1").on("click", function(event) {
        event.preventDefault();
      
        // Get the input values
        player = $("#playerName").val().trim();
        //WE LOAD THE 
       
        console.log(ref);
       // debugger;

       database.ref("/players").child(player).set({
           choose:"",
           play:false,
          
        });




    });

    
  
 
    ref.on("value", function(snapshot) {
        console.log(snapshot.val());
        debugger;
        var dataArr=snapshotToArray(snapshot);
        for (var i=0; i<dataArr.length;i++)
        {
            if (dataArr[i].key===player)
            {
                whoIAm=i;
            }
        }
        if (dataArr.length==1){
            stage=1;
        }
        if (dataArr.length==2){
            stage=2;
            if (dataArr[0].play&&dataArr[1].play)
            {
                var g=dataArr[0].choose[0]+dataArr[1].choose[0];
                if (dataArr[0].score!=null){
                    score1=dataArr[0].score;
                }
                var win="";
                switch (g) {
                    case ("rr"): win="even";break;           
                    case ("rs"): win="win";break;
                    case ("rp"): win="lost";break;
                    case ("sr"): win="lost";break;
                    case ("ss"): win="even";break;
                    case ("sp"): win="win";break;
                    case ("pr"): win="win";break;
                    case ("ps"): win="lost";break;
                    case ("pp"): win="even";break;
                }
                score1.push(win);
                database.ref("players").child(player).update({
                    score:score1,
                    play:false
                })
                .then(function(){
                    console.log("Document successfully updated!");
                });
            }
        }
        if (dataArr.lenght>2){
            
        }
     }, function (error) {
        //console.log("Error: " + error.code);
     }); 

     $("#rock1").on("click",function(){
        database.ref("players").child(player).update({
            choose:"rock",
            play:true,
      
        })
        .then(function(){
            console.log("Document successfully updated!");
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