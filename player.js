var strokeweight = 3
class Player{
  constructor(a,b,c,d,e,f,g,h){
    this.px = a;
    this.py = b;
    this.prex = this.px;
    this.prey = this.py;
    this.xvel = c;
    this.yvel = d;
    this.velocity = createVector(this.xvel,this.yvel);
    this.acceleration = e;
    this.drag = f;
    this.sizeX = g;
    this.sizeY = h;
    this.ca = e; //current acceleration;
    this.held = false
    this.prevDirection = {x: 0, y: 1};
    this.scaleChase = 1;
    this.heldE = false;
    this.heldMouse = false;
    this.direction;
    this.holdOffset = {x: 0, y: 15};
  }
  move(){
    if(keyIsDown(32)){
      this.ca = this.acceleration * 2
    }else{
      this.ca = this.acceleration
    }
    this.direction = createVector(0,0);
    if (keyIsDown(38)||keyIsDown(87)){
      this.direction.y -= 1
    }
    if (keyIsDown(40)||keyIsDown(83)){
      this.direction.y += 1
    }
    if (keyIsDown(37)||keyIsDown(65)){
     this.direction.x -= 1
    }
    if (keyIsDown(39)||keyIsDown(68)){
      this.direction.x += 1
    }
    this.direction.normalize();
    this.direction.mult(this.ca);
    this.velocity.x += this.direction.x;
    this.velocity.y += this.direction.y;
    this.velocity.x /= this.drag
    this.velocity.y /= this.drag
    this.prex = this.px
    this.prey = this.py
    
    this.px += this.velocity.x
    this.py += this.velocity.y
    this.collide()
    if(this.direction.x!=0||this.direction.y!=0){
         this.prevDirection = this.direction;
    }
    this.work(this.direction);
  }
  collide(){
    let x = this.px
    let y = this.py+this.sizeY/2
    let pry = this.prey+this.sizeY/2
    let xs = this.sizeX/3
    let ys = this.sizeY/6
    push()
    //rect(x,y,xs,ys)
    pop()
    //X
    for(let i = 0;i<blocks.length;i++){
      if(!blocks[i].collider) continue;
      if (this.prex+xs/2+strokeweight/2<=blocks[i].x-blocks[i].xs/2&&
         this.px+xs/2+strokeweight/2>=blocks[i].x-blocks[i].xs/2&&
         pry+ys/2+strokeweight/2>blocks[i].y-blocks[i].ys/2&&
         pry-ys/2-strokeweight/2<blocks[i].y+blocks[i].ys/2){
          this.px=blocks[i].x-blocks[i].xs/2-xs/2-strokeweight/2
          this.velocity.x = 0
      }
      if (this.prex-xs/2-strokeweight/2>=blocks[i].x+blocks[i].xs/2&&
         this.px-xs/2-strokeweight/2<=blocks[i].x+blocks[i].xs/2&&
         pry+ys/2+strokeweight/2>blocks[i].y-blocks[i].ys/2&&
         pry-ys/2-strokeweight/2<blocks[i].y+blocks[i].ys/2){
        this.px=blocks[i].x+blocks[i].xs/2+xs/2+strokeweight/2
        this.velocity.x = 0
      }
    }
    //Y
    for(let i = 0;i<blocks.length;i++){
      if(!blocks[i].collider) continue;
      if (pry+ys/2+strokeweight/2<=blocks[i].y-blocks[i].ys/2&&
         y+ys/2+strokeweight/2>=blocks[i].y-blocks[i].ys/2&&
         this.px+xs/2+strokeweight/2>blocks[i].x-blocks[i].xs/2&&
         this.px-xs/2-strokeweight/2<blocks[i].x+blocks[i].xs/2){
        y=blocks[i].y-blocks[i].ys/2-ys/2-strokeweight/2
        this.py = y-this.sizeY/2
        this.velocity.y=0
      }
      if (pry-ys/2-strokeweight/2>=blocks[i].y+blocks[i].ys/2&&
         y-ys/2-strokeweight/2<=blocks[i].y+blocks[i].ys/2&&
         this.px+xs/2+strokeweight/2>blocks[i].x-blocks[i].xs/2&&
         this.px-xs/2-strokeweight/2<blocks[i].x+blocks[i].xs/2){
        y=blocks[i].y+blocks[i].ys/2+ys/2+strokeweight/2
        this.py = y-this.sizeY/2
        this.velocity.y = 0
      }
      
    }
    
  }
  work(direction){
    if(!keyIsDown(69)){
          this.heldE = false;
        }
    let offsets = [-30,0,15];
    for(let i = 0;i<objects.length;i++){
      let collided = false;
      for(let c = 0; c<offsets.length; c++){
        collided = collided||(dist(this.px+this.holdOffset.x,this.py+this.holdOffset.y+offsets[c],objects[i].x,objects[i].y)<objects[i].sizeX/2+22.5);
      }
      //+this.prevDirection.x*10
      collided = collided||(dist(this.px+this.holdOffset.x+this.prevDirection.x*10,this.py+this.holdOffset.y+this.prevDirection.y*16,objects[i].x,objects[i].y)<objects[i].sizeX/2+20.5);
      if(collided){
        if(keyIsDown(69)&&!this.heldE&&((!this.held&&objects[i].z<=0)||(this.held&&objects[i].held))&&objects[i].grabable){
          this.heldE = true;
          this.held = !this.held;
          for(let c = 0;c<objects.length;c++){
            if(c!=i){
              objects[c].held = false;
            } 
          }
          objects[i].held = !objects[i].held;
          if(!objects[i].held){
             if(this.prevDirection.y<0){
               objects[i].y-=1;
             }else{
               objects[i].y+=1;
             }
          }
          //print(objects[i].held)
          break; }
       
      }
    }
    if(!mouseIsPressed){
      this.heldMouse = false;
    }
    //throwing, must find first
    for(let i = 0;i<objects.length;i++){
      if(objects[i].held){
        if(!this.heldMouse&&mouseIsPressed){
          this.held = false;
          objects[i].held = false;
          let throwV = createVector(mouseX-this.px,mouseY-(this.py+this.sizeY/2));
          throwV.normalize();
          throwV.mult(-dist(mouseX,mouseY,this.px,(this.py+this.sizeY/2))*(1-objects[i].drag)/1.05);
          objects[i].xvel=throwV.x;
          objects[i].yvel=throwV.y;
         // print((this.prevDirection<0) ? 10 : 0)
          objects[i].y+=(this.prevDirection.y<0) ? 10 : 0;
          objects[i].side = objects[i].xvel/abs(objects[i].xvel);
          objects[i].zvel=15;
          this.heldMouse = true;
        }
        break;
      }
    }
  }
  display(direction){
    push();
    noStroke();
    fill(0,10);
    ellipse(this.px,this.py+this.sizeY/2,40,20);
    ellipse(this.px,this.py+this.sizeY/2,20,10);
    pop();
    push()
    fill(255)
    translate(this.px,this.py);
    let states = {idleUp: {points: [4,5]},idleSide: {points: [8,9]},idleDown: {points: [0,1]},down: {points: [2,3]},up: {points: [6,7]},side: {points: [10,11]}};
    let use = states.idleDown;
    if(this.prevDirection.x!=0){
       use = states.idleSide;
    }
    if(this.prevDirection.y>0){
       use = states.idleDown;
    }
    if(this.prevDirection.y<0){
       use = states.idleUp;
    }
        if(direction.y<0){
       use = states.up;
    }
    if(direction.y>0){
       use = states.down;
    }
    if(direction.x!=0){
       use = states.side;
    }
        if((this.prevDirection.x/abs(this.prevDirection.x))&&(use==states.idleSide||use==states.side)){
    this.scaleChase -= (this.scaleChase-(this.prevDirection.x/abs(this.prevDirection.x)))/1.5;
        }
      scale(this.scaleChase,1);
    image(playerSheet[use.points[floor(((frameCount/10)))%2]],-1,5,this.sizeY,this.sizeY);
    stroke(255,100);
    strokeWeight(5);
    fill(255,150,50,100)
   // ellipse(this.holdOffset.x+abs(this.prevDirection.x)*10,this.holdOffset.y+this.prevDirection.y*17,45);
   // ellipse(this.holdOffset.x,this.holdOffset.y+15,45);
    //ellipse(this.holdOffset.x,this.holdOffset.y-30,45);
    
    pop()
  }
}