let orange = document.getElementById("orange").style.backgroundColor = "orange";
document.getElementById("red").style.backgroundColor = "red";
document.getElementById("green").style.backgroundColor = "green";
document.getElementById("purple").style.backgroundColor = "purple";
document.getElementById("yellow").style.backgroundColor = "yellow";
document.getElementById("brown").style.backgroundColor = "brown";

const boxes  = document.querySelectorAll(".box");

boxes.forEach((box)=>{
    box.addEventListener("click",function (e){
        if(box= "orange"){
            document.body.style.backgroundColor = e.target.id; 
            
            
        }
        else if(box= "red"){
            document.body.style.backgroundColor = e.target.id; 
          
        }
        else if(box= "green"){
            document.body.style.backgroundColor = e.target.id; 
            
        }
        else if(box= "purple"){
            document.body.style.backgroundColor = e.target.id; 
            
        }
        else if(box= "yellow"){
            document.body.style.backgroundColor = e.target.id; 
           
        }
       else if(box= "brown"){
            document.body.style.backgroundColor = e.target.id; 
            
        }
        else{
            alert("No Box Selected. Please Click on a box")
        }
    })
    
})


        // switch (box){
        //     case "orange":
        //         document.body.style.backgroundColor = e.target.id;
        //         break;
        //         default:
        //         console.log("No box Selected");
        // }