//snoeflake
setInterval(createSnowFlake, 50);

function createSnowFlake() {
    const snow_flake = document.createElement('i');
    snow_flake.classList.add('fas');
    snow_flake.classList.add('fa-snowflake');
    snow_flake.style.left = Math.random() * window.innerWidth + 'px';
    snow_flake.style.animationDuration = Math.random() * 2 + 2 + 's';
    //between 2 - 5bseconds
    snow_flake.style.opacity = Math.random();
    snow_flake.style.fontSize = Math.random() * 5 + 10 + 'px';

    document.body.appendChild(snow_flake);

    setTimeout(() => {
        snow_flake.remove();
    }, 5000)
}
//snowflake end



//shopping cart
var form = document.getElementById("form");
var input = document.getElementById("input");
var shop = document.getElementById("shop");
var shopList = [];

form.addEventListener("submit", function(e){
    e.preventDefault();
    addShop()
})

function addShop(){
     var newShop = input.value; //get input
     console.log(newShop)
     if(!newShop) return; //return back if nothing was entered

     shopList.push({
         text:newShop,
         complete:false
     })

     console.log(shopList);
     input.value = "";
     render();
     
}


function render(){
    shop.innerHTML = null;
    for(let i=0;i<shopList.length;i++){
        const item = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        checkbox.addEventListener("click",function(e){
            console.log(e,target.checked);
            shopList[i].complete = e.target.checked;

           if(shopList[i].complete){
               console.log("completed");
               item.classList.add("completed");
               item.classList.remove("uncompleted");
           }else{
               console.log("uncompleted");
               item.classList.add("uncompleted");
               item.classList.remove("completed");
           }
        })

        const text = document.createElement("p");
        text.innerText = shopList[i].text;

        const button = document.createElement("button");
        button.innerText = "X";

        button.addEventListener("click",function(e){
             console.log("delete", e); 
            shopList.splice(i,1);
            console.log(shopList);
            render();
        })

        item.appendChild(checkbox);
        item.appendChild(text);
        item.appendChild(button);

        shop.appendChild(item);
        
    }
}