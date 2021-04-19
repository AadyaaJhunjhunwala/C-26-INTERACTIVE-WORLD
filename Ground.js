class Ground
{
    constructor(x,y,width,height)
    {
        var option={
            'isStatic':true   
            }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }

    display()
    {
        fill("red")
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);    
    }
}