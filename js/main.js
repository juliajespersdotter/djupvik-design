
import {weather} from "./smhifetch.js";

function init() {
    weather().then(print);
}

function print(result){
    var text = document.createElement("p");
    
    var temp = result.timeSeries[0].parameters[10].values[0]

    text.setAttribute("class", "info" );
    text.innerHTML = 'I Djupvikshamn är det den nästkommande timmen ' + temp + ' grader varmt';

    document.getElementById("väder").append(text);


}
window.addEventListener('load', init)