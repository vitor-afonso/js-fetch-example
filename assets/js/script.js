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

            document.getElementById("displayLength").innerHTML = "<br/>"+json.length+" posts";
            displayList(json); 
        })
        .catch(function(error){
            console.log(`Ops! Something went wrong... <br/><br/>` + error);
        });
}

function displayList(myList) {

    let html = '';
    for (let i in myList) {
        html += "<br><h3>"+myList[i].title+"</h3><br/>";
        html += myList[i].body+"<br/>";
        html += "<hr/>";
        document.getElementById("displayLength").innerHTML += html;
    }
}