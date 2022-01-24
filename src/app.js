/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".es", ".net"];

  let dominio = (arr1, arr2, arr3, arr4) => {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        for (let h = 0; h < arr3.length; h++) {
          for (let m = 0; m < arr4.length; m++) {
            console.log(`${arr1[i]}${arr2[j]}${arr3[h]}${arr4[m]}`);
          }
        }
      }
    }
  };

  dominio(pronoun, adj, noun, ext);
};
