window.addEventListener('DOMContentLoaded', (event) => {
    
    
    let item=document.querySelectorAll("#board>div");
    let button= document.querySelector(".btn");
    let status= document.getElementById("status");
    let gamerX=true;
    let gamerO=false;
    
    

    item.forEach((i)=> {
        i.classList.add("square");
        i.innerHTML = " ";
    
    });

    item.forEach((i)=> {
        
        i.onclick = (event)=>{
            if (gamerX && i.innerHTML == " "){
                i.classList.add("X");
                i.innerHTML = 'X';
                gamerX= false;
                gamerO = true;
            }
            else if (gamerO && i.innerHTML == " "){
                i.classList.add("O");
                i.innerHTML = 'O';
                gamerO = false;
                gamerX = true;
            }
               
            if (
                item[0].innerHTML=="X" && item[1].innerHTML=="X" && item[2].innerHTML=="X" ||
                item[0].innerHTML=="X" && item[4].innerHTML=="X" && item[8].innerHTML=="X" ||
                item[6].innerHTML=="X" && item[7].innerHTML=="X" && item[8].innerHTML=="X" ||
                item[0].innerHTML=="X" && item[3].innerHTML=="X" && item[6].innerHTML=="X" ||
                item[1].innerHTML=="X" && item[4].innerHTML=="X" && item[7].innerHTML=="X" ||
                item[2].innerHTML=="X" && item[5].innerHTML=="X" && item[8].innerHTML=="X" ||
                item[0].innerHTML=="X" && item[4].innerHTML=="X" && item[8].innerHTML=="X" ||
                item[3].innerHTML=="X" && item[4].innerHTML=="X" && item[5].innerHTML=="X" ||
                item[2].innerHTML=="X" && item[4].innerHTML=="X" && item[6].innerHTML=="X"){
                status.innerHTML="Congrajulations! X is the Winner!"
                status.classList.add("you-won");
            }
            else if(

                item[0].innerHTML=="O" && item[1].innerHTML=="O" && item[2].innerHTML=="O" ||
                item[0].innerHTML=="O" && item[4].innerHTML=="O" && item[8].innerHTML=="O" ||
                item[6].innerHTML=="O" && item[7].innerHTML=="O" && item[8].innerHTML=="O" ||
                item[0].innerHTML=="O" && item[3].innerHTML=="O" && item[6].innerHTML=="O"||
                item[1].innerHTML=="O" && item[4].innerHTML=="O" && item[7].innerHTML=="O"||
                item[2].innerHTML=="O" && item[5].innerHTML=="O" && item[8].innerHTML=="O" ||
                item[0].innerHTML=="O" && item[4].innerHTML=="O" && item[8].innerHTML=="O" ||
                item[3].innerHTML=="O" && item[4].innerHTML=="O" && item[5].innerHTML=="O" ||
                item[2].innerHTML=="O" && item[4].innerHTML=="O" && item[6].innerHTML=="O"){
                status.innerHTML="Congrajulations! O is the Winner!"
                status.classList.add("you-won");
                
            }
            
        }
        i.addEventListener('mouseover', function handleMouseOver() {
            i.classList.add('hover')
            
          });
          
          
          i.addEventListener('mouseout', function handleMouseOut() {
            i.classList.remove('hover')
          });
        
        
        
    });


const restartGame = () => {
  location.reload();
}

button.addEventListener('click', restartGame)

    
});