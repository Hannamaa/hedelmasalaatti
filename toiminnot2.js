        //Muuttujien määrittely
        // const addRow = document.getElementById("addRow")
        
        
        const tuote = document.getElementById("tuote");
        const hinta = document.getElementById("hinta");
        const taulu = document.getElementById("taulu");
        const output = document.getElementById("output");

        //lista jonne käyttäjän syöttämät tuotteet tulee
        var hedelmat = [];
           
       //funktio, tuotteita lisätään ja ne tulevat listalle näkyviin hintoineen  
       function addRow() {
        taulu.innerHTML += '<tr><td>'+tuote.value+' '+hinta.value+'</td></tr>'; 
        
        
         hedelmat.push({tuote:tuote.value, hinta: parseInt(hinta.value)});
         console.log(hedelmat);
        };

        //funktio, kallein tuote esiin
        function kallis(){

            let kallein = hedelmat.reduce(function (prev, current){
                if (prev.hinta>current.hinta){
                    return prev
                } else {
                    return current
                }
            
                }
                );

            output.innerHTML ="";
            output.innerHTML = kallein.tuote + ' ' + kallein.hinta;
            console.log(kallein);
            
        };
       
        //funktio, edullisin tuote esiin
        function halpa(){

            let edullisin = hedelmat.reduce(function (prev, current){
                if (prev.hinta<current.hinta){
                    return prev
                } else {
                    return current
                }
            
                }
                );

            output2.innerHTML ="";
            output2.innerHTML = edullisin.tuote + ' ' + edullisin.hinta;
            console.log(edullisin);
            
        };

        //valmis, huh huh! 



        