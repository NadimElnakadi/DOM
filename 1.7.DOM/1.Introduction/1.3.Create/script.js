
let Keller5= ["Arno Volts" ,"Aurélien Mariaule" ,"Aurore Lemaire" ,"Benjamin Porsont" ,"Céline Verreydt" ,"Corentin Miserque" ,"Dominique Coppée" ,"Edouard de Romrée de Vichenet" ,"Hugo Goorickx ","Jofrey Houyoux" ,"Jonathan Manes" ,"jonathan bajoux" ,"Laura Wilhelmi" ,"Lysie Soyez" ,"Marnie Benalia" ,"Mathilde Cornelis" ,"Milo Bonnet" ,"Nadim El Nakadi" ,"Nathalie Vanden Abeele" ,"Nathalie Goffette" ,"Nour Everaert" ,"Pierre Mauriello" ,"Quentin Bource ","Virginie Dourson"];

function randomcolor(){
    r=Math.floor(Math.random()*256)
    g=Math.floor(Math.random()*256)
    b=Math.floor(Math.random()*256)
    color="rgb(" + r + "," + g + "," + b + ")"
    return color;
}
i=0
for (elem of Keller5){
    learner_elem = document.createElement("section");
    learner_elem.style.backgroundColor= randomcolor();
    para=document.createElement("p")
    para.innerText=elem
    document.getElementsByTagName('article')[0].appendChild(learner_elem);
    document.getElementsByTagName('section')[i].appendChild(para)
    i++;
    
}

function getTextColor(rgba){
    rgba = rgba.match(/\d+/g);
    if((rgba[0]*0.299)+(rgba[1]*0.587)+(rgba[2]*0.114)>186) {
      return 'black';
    } else {
      return 'white';
    }
  }