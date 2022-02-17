let section=document.querySelector(".place");

openedCards = [];
numCardMatched = [];

document.addEventListener('DOMContentLoaded', function(){  
    let ar= [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    ar.sort(()=> Math.random()-0.5);
    for (let index = 0; index < 16; index++) {
        var div = document.createElement('div');
        div.className="mem";
        div.addEventListener('click',flip);
        section.appendChild(div);
        div.innerHTML=ar[index];

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

}});
function flip(){
    opencard(this);
}
function opencard(a)
{

    if(openedCards.length<2)
    {
        openedCards.push(a)
        // setTimeout(() => {
        //     a.style.backgroundColor="#0047BB";a.style.backgroundColor="#9AD00E";
        // }, 2000); 
        a.style.backgroundColor="#9AD00E";  
        console.log(openedCards[0].textContent);
        console.log(openedCards[1].textContent);
        if(openedCards.length==2)
        {
            if(openedCards[0].textContent==openedCards[1].textContent)
            {   openedCards[0].style.backgroundColor="#00FF7F"
                openedCards[1].style.backgroundColor="#00FF7F"
                numCardMatched.push(openedCards[0]);
                numCardMatched.push(openedCards[1]);
                openedCards.pop()
                openedCards.pop()
                console.log("THEY MATCH!!!!")
                numCardMatched.forEach(element => 
                {
                    console.log(element);
                });
            }
            
            else{                        
                openedCards[0].style.backgroundColor="#FF0000";  
                openedCards[1].style.backgroundColor="#FF0000";  
                setTimeout(() => {
                    openedCards[0].style.backgroundColor="#0047BB";  
                    openedCards[1].style.backgroundColor="#0047BB";
                    openedCards.pop()
                    openedCards.pop()
                }, 1000);


 
                console.log("THEY DONT MATCH!!!!")
                }
                
    }
    if(numCardMatched.length==16){
        alert("you win");
    }
}
}