let section=document.querySelector(".place");
openedCards = [];
numCardMatched = [];
    let ar= [
        {
            src: "./img/band.png",
            name:"band1"
        },
        {
            src: "./img/band.png",
            name:"band2"
        },
        {
            src: "./img/farbe.png",
            name:"farbe1"
        },
        {
            src: "./img/farbe.png",
            name:"farbe2"
        },
        {
            src: "./img/holz.png",
            name:"holz1"
        },
        {
            src: "./img/holz.png",
            name:"holz2"
        },
        {
            src: "./img/kleben.png",
            name:"kleben1"
        },        
        {
            src: "./img/kleben.png",
            name:"kleben2"
        },
        {
            src: "./img/kunst.png",
            name:"kunst1"
        },        
        {
            src: "./img/kunst.png",
            name:"kunst2"
        },
        {
            src: "./img/pinsel-malen.png",
            name:"pinsel-malen1"
        },        
        {
            src: "./img/pinsel-malen.png",
            name:"pinsel-malen2"
        },
        {
            src: "./img/schurze.png",
            name:"schurze1"
        },        
        {
            src: "./img/schurze.png",
            name:"schurze2"
        },
        {
            src: "./img/zange.png",
            name:"zange1"
        },        
        {
            src: "./img/zange.png",
            name:"zange2"
        }
            ]
document.addEventListener('DOMContentLoaded', function(){  
    ar.sort(()=> Math.random()-0.5);
ar.forEach(element => {
    var div = document.createElement('div');
    var div1 = document.createElement('div');
    var img = document.createElement('img');
    img.className="pic";
    div.className="mem";   
    div1.className="memback";     
    img.src=element.src
    div.addEventListener('click',op);
    section.appendChild(div);
    div.appendChild(img);
    div.appendChild(div1);
    div.addEventListener("click",(e)=>{
        div.classList.toggle('toggleCard')
});


        })
        // div.innerHTML=ar[index];

        //asa let cl= document.getElementsByClassName("mem")[index].addEventListener("click", () =>{
        //     while(numCardOpend.length<2)
        //     {
        //         let firstclick=null;
        //         firstclick=document.getElementsByClassName("mem")[index];
        //         firstclick.style.backgroundColor="#9AD00E";  
        //         console.log(firstclick.textContent);
        //         numCardOpend.push(firstclick);
        //     }
        //         if(numCardOpend[0]==numCardOpend[1])
        //         {
        //             numCardMatched.push(numCardOpend[0]);
        //             numCardMatched.push(numCardOpend[1]);
        //             console.log("they match")

        //         }
        //         else
        //         {
        //             console.log("they dont match")
        //         }

        // });    

});
function op(){
    opencard(this);
}
function opencard(item)
{
    item.classList.add("flipped");
    if(openedCards.length<2)
    {
        if(openedCards[0] != item)
        {
            openedCards.push(item)
        // setTimeout(() => {
        //     item.style.backgroundColor="#0047BB";item.style.backgroundColor="#9AD00E";
        // }, 2000); 
        item.style.backgroundColor="#9AD00E";  
        }
        console.log(openedCards[0]);
        console.log(openedCards[1]);
        if(openedCards.length==2)
        {
            //sconsole.log("DGHX",openedCards[0].getElementsByTagName('img').src);

            if(openedCards[0].querySelector("img").src==openedCards[1].querySelector("img").src)
            {   
                // openedCards[0].style.backgroundColor="#00FF7F"
                openedCards[0].style.backgroundColor="#00FF7F"
                openedCards[1].style.backgroundColor="#00FF7F"
                // openedCards[0].parentElement.style.backgroundColor="#00FF7F"
                // openedCards[1].parentElement.style.backgroundColor="#00FF7F"
                // openedCards[1].style.backgroundColor="#00FF7F"
                openedCards[0].removeEventListener("click",op);
                openedCards[1].removeEventListener("click",op);

                numCardMatched.push(openedCards[0]);
                numCardMatched.push(openedCards[1]);
                openedCards.pop()
                openedCards.pop()
                console.log("THEY MATCH!!!!")
                numCardMatched.forEach(element => 
                {
                    element.classList.remove("flipped");
                    element.style.pointerEvents ="none";

                });   
                numCardMatched.forEach(element => {
                    console.log("a")
                });             
            }
            else{               
                openedCards[0].style.backgroundColor="#FF0000";  
                openedCards[1].style.backgroundColor="#FF0000";  
                setTimeout(() => {
                    openedCards[0].style.backgroundColor="#7B459E";  
                    openedCards[1].style.backgroundColor="#7B459E";
                    openedCards.pop()
                    openedCards.pop()
                }, 500);
                openedCards.forEach(el => {
                    el.classList.remove("flipped");
                    setTimeout(() => {
                        el.classList.remove("toggleCard")
                        
                    }, 1000);
                });
                


 
                console.log("THEY DONT MATCH!!!!")
                }
                
        }
    if(numCardMatched.length==16){
        alert("you win");
        }}}