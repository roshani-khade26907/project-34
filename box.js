class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.5,
            density:0.2,
            friction:1

        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

        console.log(this.body.speed);

        if(this.body.speed>3 && this.body.position.x>940 ){
            score++;
        }
    
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
        strokeWeight(4);
        stroke("black")
        rect(0,0,this.width,this.height);
        pop();
    
    }

}