const a = document.getElementById('clickable');
const image = document.getElementById('imagebtm');
const down = document.getElementById('btmdown');
const p = document.getElementById('btmpara');

const a2 = document.getElementById('clickable2');
const image2 = document.getElementById('imagebtm2');
const down2 = document.getElementById('btmdown2');
const p2 = document.getElementById('btmpara2');

const a3 = document.getElementById('clickable3');
const image3 = document.getElementById('imagebtm3');
const down3 = document.getElementById('btmdown3');
const p3 = document.getElementById('btmpara3');

const a4 = document.getElementById('clickable4');
const image4 = document.getElementById('imagebtm4');
const down4 = document.getElementById('btmdown4');
const p4 = document.getElementById('btmpara4');




a.addEventListener("click", ()=>{
if(image.style.width==='30px'){
    image.style.transform = 'rotate(0deg)';
    image.style.width = '29px';
    down.style.height = '0vh';
    setTimeout(function(){
        p.style.opacity = '0';
    }, 400);
  
    
    
}
else{
    image.style.transform = 'rotate(180deg)';
    image.style.width = '30px';
    down.style.height = '30vh';
   
    p.style.opacity = '1';
}

})

// -----------------------------------------------------------------

a2.addEventListener("click", ()=>{
if(image2.style.width==='30px'){
    image2.style.transform = 'rotate(0deg)';
    image2.style.width = '29px';
    down2.style.height = '0vh';
    setTimeout(function(){
        p2.style.opacity = '0';
    }, 400);
  
    
    
}
else{
    image2.style.transform = 'rotate(180deg)';
    image2.style.width = '30px';
    down2.style.height = '30vh';
   
    p2.style.opacity = '1';
}

})
// -----------------------------------------------------------------

a3.addEventListener("click", ()=>{
    if(image3.style.width==='30px'){
        image3.style.transform = 'rotate(0deg)';
        image3.style.width = '29px';
        down3.style.height = '0vh';
        setTimeout(function(){
            p3.style.opacity = '0';
        }, 400);
      
        
        
    }
    else{
        image3.style.transform = 'rotate(180deg)';
        image3.style.width = '30px';
        down3.style.height = '30vh';
       
        p3.style.opacity = '1';
    }
    
    })

    // ----------------------------------------------------------------4

    a4.addEventListener("click", ()=>{
        if(image4.style.width==='30px'){
            image4.style.transform = 'rotate(0deg)';
            image4.style.width = '29px';
            down4.style.height = '0vh';
            setTimeout(function(){
                p4.style.opacity = '0';
            }, 400);
          
            
            
        }
        else{
            image4.style.transform = 'rotate(180deg)';
            image4.style.width = '30px';
            down4.style.height = '30vh';
           
            p4.style.opacity = '1';
        }
        
        })