/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

function generate_excuse() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let randwho = parseInt(Math.random() * 9991) % who.length;
  let randaction = parseInt(Math.random() * 9991) % action.length;
  let randwhat = parseInt(Math.random() * 9991) % what.length;
  let randwhen = parseInt(Math.random() * 9991) % when.length;
  let frase =
    who[randwho] +
    " " +
    action[randaction] +
    " " +
    what[randwhat] +
    " " +
    when[randwhen];
  document.querySelector("#excuse").innerHTML = frase;
}

window.onload = function() {
  //write your code here
  generate_excuse();
};

var button = document.getElementById("my_button");
button.addEventListener("click", generate_excuse);
