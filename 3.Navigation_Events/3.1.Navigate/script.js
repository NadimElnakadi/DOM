// Changing the order
const ol = document.querySelector('ol');
const a = ol.children[0];
const b = ol.children[4];
ol.insertBefore(b, a);


//moving h2
const main = document.querySelector('main');
const section_2 = main.children[1];
const section_3 = main.children [2];
const titre_1= section_2.children[0];
const titre_2= section_3.children[0];
section_3.appendChild(titre_1);
section_2.appendChild(titre_2);

//deleting a section

main.removeChild(section_3);
