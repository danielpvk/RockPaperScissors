variables globales
    seleccionRemota
    seleccionLocal
    readyLocal=false
    readyRemoto=false
    quiensoy=""
    win=""  (even, win, lost)
    
Leer el jugador
Verificar si ya hay un jugador
Si hay un jugador entonces dar de alta jugador 2
    Agregar el jugador2
    quiensoy = jugador 2
sino 
    agregar jugador 1
    quiensoy = jugador 1

Listeners locales
    RockLocal
        seleccionLocal=rock
        readyLocal=true
    PaperLocal
        seleccionLocal=paper
        readyRemoto=true
    ScissorsLocal
        seleccionLocal=Scissors
        readyLocal=true

Listeners remotos

    jugador1 "value"
         whois (jugador)
         if (readyLocal&readyRemoto=true)
            ganador
            actualizar firebase   
    jugador2 "value
         whois (jugador)
         if (readyLocal&readyRemoto=true)
            ganador
            actualizar firebase


funciones juego
    whois  (jugador)
        si jugador=quiensoy
            seleccionLocal=jugador.seleccion
            readyLocal=true
        else
            seleccionRemota=jugador.seleccion
            readyRemoto=true
    ganador
        var g=""
        var g=seleccionLocal[1]+seleccionRemota[2]
        switch (g)
            case rr win=even
            case rs win=win
            case rp win=lost
            case sr
            case ss
            case sp
            case pr
            case ps
            case pp
    actualizar firebase
        readyLocal=false
        readyRemote=false
        escribir firebase jugadorResult = win
        actualizar firebase jugadorReady = readyLocal = false

    disconnected 
        after 1min without playing disconnected

base de datos
    /players
        player1
            nombre
        player2
            nombre
        ready1
        ready2
    /lista ganados
        juego1  
            resultado 1
            resultado 2
        juego2
            resultado 1
            resultado 2

        

