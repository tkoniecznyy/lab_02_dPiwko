let nav = '<nav><a href="index.html">Home</a>' + '<a href="contact.html">Contact</a></nav>';

let elem = document.getElementById("identyfikator");
let elem2 = document.getElementsByTagName("tag");
let elem3 = document.getElementsByClassName("class");
let elem4 = document.querySelector(".klasa");
let elems = document.querySelectorAll("a.link");



let navbarElem = document.querySelector(".navbar");
navbarElem.innerHTML = nav;
