class Ball {
  constructor (x,y,r){
 
   var options = {
       isStatic : false,
       restitution : 0.3,
       friction : 1.0,
       density : 1.2
   }


   this.body = Bodies.circle(x,y,r,options);
   this.r = r
   World.add(world,this.body)


  }





display () {
var pos = this.body.position
var angle = this.body.angle
push()
    translate(pos.x,pos.y)
    rotate(angle)
    strokeWeight ("2")
    stroke ("grey")
    fill ("lightgrey")
    ellipseMode(RADIUS);
    ellipse(0, 0 ,this.r,this.r)
  pop();
    
}
}