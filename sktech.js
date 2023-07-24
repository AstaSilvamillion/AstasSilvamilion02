function setup() {

    createCanvas(600, 600);
    
    background("white");
    
    }
    
    function draw() {
    
    stroke("red");
    
    fill("black");
    
    if(mouseIsPressed){
    
    rect(mouseX, mouseY, 20, 35);
    
    }
    
    }