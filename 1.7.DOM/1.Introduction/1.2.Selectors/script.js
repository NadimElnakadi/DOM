list_important = document.querySelectorAll(".important");
for(let element of list_important){
    element.title = "This is an important item"
}
console.log(document.querySelectorAll(".important"));


//images
list_image = document.querySelectorAll('img')
for(let images of list_image){
    if(images.className != "important"){
        images.style.display = "none";
    }
    
}
//loop
list_paragraphe = document.querySelectorAll('p');
for(let para of list_paragraphe){

    if(para.classname != ""){
        console.log(para.className, para.innerText)
    }
    else {
        console.log(para.innerText)
    }

}

//couleur
function random_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var Color = "rgb(" + x + "," + y + "," + z + ")";
    return Color;
}

list_paragraphe = document.querySelectorAll('p');
for(let para of list_paragraphe){
    if(para.className == ""){
        para.style.color = random_color();
    }


}