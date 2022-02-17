let section=document.querySelector(".place");
let count=7;
openedCards = [];
numCardMatched = [];
let id= ["1.1","2.1","3.1","4.1","5.1","6.1","7.1","8.1","1.2","2.2","3.2","4.2","5.2","6.2","7.2","8.2"];
function Kästchen(content,id){
    this.content=content;
    this.id=id;
}
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
function opencard(item)
{

    if(openedCards.length<2)
    {
        var randomNumber = Math.floor(Math.random()*id.length);

        openedCards.push(new Kästchen(item,id[randomNumber]))
        item.style.backgroundColor="#9AD00E";  

        console.log(openedCards[0].content);        
        console.log(openedCards[0].id);
        console.log(openedCards[1].content);        
        console.log(openedCards[1].id);

        if(openedCards.length==2)
        {
            if(openedCards[0].content.innerHTML==openedCards[1].content.innerHTML && openedCards[0].id!=openedCards[1].id)
            {   //openedCards[0].style.backgroundColor="#00FF7F"
                //openedCards[1].style.backgroundColor="#00FF7F"
                id = id.filter(function(f) { return f !== openedCards[0].id})
                id = id.filter(function(f) { return f !== openedCards[1].id})
                numCardMatched.push(openedCards[0]);
                numCardMatched.push(openedCards[1]);

                openedCards.pop()
                openedCards.pop()

                console.log("THEY MATCH!!!!")
            }
            else if(openedCards[0].content.innerHTML==openedCards[1].content.innerHTML && openedCards[0].id==openedCards[1].id){
                alert("You clicked the same card 2 Times")
            }
            else{               
                console.log("THEY DONT MATCH!!!!")         
                //openedCards[0].style.backgroundColor="#FF0000";  
                //openedCards[1].style.backgroundColor="#FF0000";
                id.push(openedCards[0].id);  
                id.push(openedCards[1].id)
                setTimeout(() => {
                    //openedCards[0].style.backgroundColor="#0047BB";  
                    //openedCards[1].style.backgroundColor="#0047BB";

                    openedCards.pop()
                    openedCards.pop()
                }, 1000);
                count-=1;
                }
                
    }
    if(numCardMatched.length==16){
        alert("you win");
    }
}
}