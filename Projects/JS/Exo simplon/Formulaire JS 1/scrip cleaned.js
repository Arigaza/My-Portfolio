"use strict";

// function getNameAll(test) {
//     // Sélectionner l'élément input et retourner sa valeur
//     return document.getElementById(test).value;
// }

function displayNameAll(nom, id) {
    document.getElementById(id).value = nom;
}
function calculAll(input, output, reverse) {
    // var nom = getNameAll(input);
    var nom = document.getElementById(input).value;
    
    if (reverse) {
        // using split & reverse

        // let date = nom.split("-").reverse().join("-");
        // displayNameAll(date, output);

        // using Date

        // let d = new Date(nom)
        // console.log(Date.parse(nom))
        // displayNameAll(d.toLocaleDateString("fr"), output)
        // console.log("todate " + d.toDateString())
        //     console.log("toISO " + d.toISOString())
        //     console.log("toUTC " + d.toUTCString())
        //     console.log("toLocaleDateString in French " + d.toLocaleDateString("fr", { year:"numeric", month:"long", day: "2-digit" }))

            // correction 

            var tms = Date.parse(nom);
            console.log("tms " + tms)
            const fDate = new Date(tms);
            console.log("fDate " + fDate)
            var frenchDate = fDate.toLocaleDateString("fr") ;
            
            displayNameAll(frenchDate, output);
    }
    else {
        displayNameAll(nom, output);
   
    }   
}

function displayRadioValue(input, output) {
    var ele = document.getElementsByName(input);
    document.getElementById(output).value = null
    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked)
        document.getElementById(output).value
        = document.getElementById(output).value + " " + ele[i].value;
    }
}


var resultValue= 10;

        function sliderValue(x, name) {
            document.getElementById(name).value = x;
            resultValue = document.getElementById(name).value
            return resultValue
        }


        function sliderResult(name) {
            document.getElementById(name).value = resultValue
        }

// function reset(name) {
//     resultValue = null
//     sliderResult(name)
//     // resultValue = 10 
//     // sliderValue(this.value, )
//     // sliderValue(10, name)
//     // not sure if needed
//     // document.getElementById("suiviCurseur7").value = resultValue
//     // return resultValue = 10
// }

function reset2(input, trueOrFalse) {
    resultValue = 10;
    if (trueOrFalse) {
        document.getElementById(input).value = resultValue;
    }
  else {
    document.getElementById(input).value = null ;
  }  
}

function test2() {
    // document.getElementsByClassName("test2").reset();
//    let today = new Date('20 Nov 2022 00:12:00 GMT');
//     console.log("today " + today.parse('20 Nov 2022 00:12:00 GMT'));
//     console.log("start " + today.parse('01 Jan 1970 00:00:00 GMT'));
console.log("today " + Date.parse('20 Nov 2022 00:12:00 GMT'));
    console.log("start " + Date.parse('01 Jan 1970 00:00:00 GMT'));
}