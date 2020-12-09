class Rope {
    constructor(body1,body2,offsetX,offsetY) {
      
      this.offsetX=offsetX
      this.offsetY=offsetY

      var options = {
        bodyA:body1,
        bodyB:body2,
         pointB:{x:this.offsetX , y:this.offsetY}

      }
      this.Rope = Constraint.create(options);
      World.add(world, this.Rope);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(84,39,15);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };