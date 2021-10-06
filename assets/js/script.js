/*jshint esversion:6*/

function getLength() {

    document.getElementById("displayLength").innerHTML = "waiting...";
    // Fetch faz a requisição e retorna uma "promise"
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function(result){

            //Aqui o "result" será um objecto do tipo "response"
            return result.json();
        })

        // Objectos do tipo "response" retornam sempre uma "promise"
        // ...sempre que nos é retornado uma "promise" usamos um ".then()"
        .then(function(json){

            document.getElementById("displayLength").innerHTML = "<br>"+json.length+" posts";
            for(let x = 0; x < json.length; x++) {
                document.getElementById("displayLength").innerHTML += "<br><br>"+Object.entries(json[x]);
            } 
        })
        .catch(function(error){
            console.log(`Ops! Something went wrong... <br><br>` + error);
        });
}