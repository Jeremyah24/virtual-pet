var dog;
var database
var stock
function setup(){
    createCanvas(500,500);
    database=firebase.database()
    dog = createSprite(250,250,10,10);
    dog.shapeColor = "red";
    var totalfood=database.ref('food/count')
    totalfood.on("value",readfood)
    
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        
    }
    else if(keyDown(RIGHT_ARROW)){
        
    }
    else if(keyDown(UP_ARROW)){
     food(1)   
    }
    else if(keyDown(DOWN_ARROW)){
        
    }
    text("remainingfood "+stock,200,100)
    if(stock<0)
    {
      food(-50)
    }
    drawSprites();
}

function readfood(data){
 stock=data.val ()  
}
function food(a)
{
   database.ref('food') .update({
     'count' :stock-a 
   })
}