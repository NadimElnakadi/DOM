const _initTime = Date.now()

function random_bg_color() {
   var x = Math.floor(Math.random() * 256);
   var y = Math.floor(Math.random() * 256);
   var z = Math.floor(Math.random() * 256);
   var bgColor = "rgb(" + x + "," + y + "," + z + ")";
   return bgColor;
  }


const getElapsedTime = () => {
   return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
   console.log(e.target.classList[1])
   console.log(getElapsedTime())

  section=document.getElementsByTagName('section')[0];

let div=document.createElement('div');
   div.classList.add("displayedsquare", e.target.classList[1]);
   section.appendChild(div);
   ul = document.getElementsByTagName('ul');

let li= document.createElement('li');
   ul[0].appendChild(li);

   li.innerText= getElapsedTime()+ e.target.classList[1];

  
}

document.body.onkeyup= function(e){
    if(e.key == " "){
       document.body.style.background=random_bg_color ();

       ul = document.getElementsByTagName('ul');
  let li= document.createElement('li');
     ul[0].appendChild(li);

   li.innerText=getElapsedTime()+  "coucou hiboux";


    }
   

  }
const actionSquares = document.querySelectorAll('.actionsquare')
 for (let actionSquare of actionSquares) {
   actionSquare.addEventListener('click', clickOnSquare)
}




