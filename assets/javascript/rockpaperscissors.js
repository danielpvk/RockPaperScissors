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
            {   var score2=[];
                var win2="";
                var player2="";
                if (whoIAm==0){
                    var g=dataArr[0].choose[0]+dataArr[1].choose[0];
                    if (dataArr[0].score!=null){
                        debugger;
                        score1=dataArr[0].score;
                        score2=dataArr[1].score;
                    }
                    player2=dataArr[1].key;
                }
                else{
                    var g=dataArr[1].choose[0]+dataArr[0].choose[0];
                    if (dataArr[1].score!=null){
                        score1=dataArr[1].score;
                        score2=dataArr[0].score;
                    }
                    player2=dataArr[0].key;    
                }
               
                var win="";
                
                switch (g) {
                    case ("rr"): win="even";win2="even";break;           
                    case ("rs"): win="win";win2="lost";break;
                    case ("rp"): win="lost";win2="win";break;
                    case ("sr"): win="lost";win2="win";break;
                    case ("ss"): win="even";win2="even";break;
                    case ("sp"): win="win";win2="lost";break;
                    case ("pr"): win="win";win2="lost";break;
                    case ("ps"): win="lost";win2="win";break;
                    case ("pp"): win="even";win2="even";break;
                }
                score1.push(win);
                score2.push(win2);
                tableFill("#localScore",score1,player);
                tableFill("#remoteScore",score2,player2);
                
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
     $("#paper1").on("click",function(){
        database.ref("players").child(player).update({
            choose:"paper",
            play:true,
      
        })
        .then(function(){
            console.log("Document successfully updated!");
        });

     });
     $("#scissors1").on("click",function(){
        database.ref("players").child(player).update({
            choose:"scissors",
            play:true,
      
        })
        .then(function(){
            console.log("Document successfully updated!");
        });

     });

    function tableFill(table,score,p){
        $(table).html("<tr><th><h2>"+p+"</h2></th></tr>");
        $.each( score, function( key, value ) {
            debugger;
            $(table).append("<tr><td><h2>"+value+"</h2></td></tr>");
          });

    }
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