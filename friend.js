class Friend{
  constructor(a,b,c){
    this.x = a;
    this.y = b;
    this.xvel =0;
    this.tweenx =1;
    this.yvel=0;
    this.tx=0;
    this.ty=0;
    this.targeting = false;
    this.boxSize =0;
    this.current = 0;
    this.data = c ?? [];
    
    
    //final part, do not change
     this.data[this.data.length] = {string: "",zone: "none", tx: 850, ty: 580,face: -1};
    this.facing = 1;
    this.tran = 255;
    this.enter = false;
    this.boxy = 150;
    this.boxty = 150;
    this.angle = 0;
    this.bob = 0;
  }
  work(){
    this.bob/=5;
    this.tx=this.data[this.current].tx
    this.ty=this.data[this.current].ty
    this.facing = this.data[this.current].face;
    push();
    translate(this.x,this.y+sin(frameCount/30)*10);
    this.xvel/=3;
    this.yvel/=3;
    this.xvel-=(this.x-this.tx)/20;
    this.yvel-=(this.y-this.ty)/20;
    this.x+=this.xvel;
    this.y+=this.yvel;
    //this.tweenx+=((((this.xvel)/abs((this.xvel))) ?? this.tweenx)-this.tweenx)/3;
    this.tweenx+=(this.facing-this.tweenx)/3;
    scale((-this.tweenx)*(1+this.bob),1*(1+this.bob));
    // print(this.x,this.y)
    rotate(this.angle);
      image(friendSheet[(floor(frameCount/5)%4)%2*2+floor((floor(frameCount/5)%4)/2)],0,0,100,100);
    
    pop();
    this.boxSize+=(1-this.boxSize)/10;
    push();
    if(this.data[this.current].zone=="up"){
      this.boxty = 150;
    }
    if(this.data[this.current].zone=="bottom"){
      this.boxty = 500;
    }
    if(this.data[this.current].zone=="none"){
      this.boxty = -1000;
    }
    this.boxy += (this.boxty-this.boxy)/10;
    //rect(0,0,this.sizeX/2,this.sizeY)
    if(rectHit(player.px,player.py,450,this.boxy,player.sizeX/2,player.sizeY,850,250)){
      this.tran+=(100-this.tran)/10;
    }else{
      this.tran+=(255-this.tran)/10;
    }
    stroke(0,this.tran);
    fill(255,this.tran);
    strokeWeight(10)
      translate(450,this.boxy);
    scale(this.boxSize,this.boxSize);
    rect(0,0,850,250,5);
    textSize(25);
    noStroke();
    fill(0,this.tran+100);
    textAlign(LEFT,TOP)
    text(this.data[this.current].string,-410,-110);
    textAlign(RIGHT,BOTTOM)
    text("Press ENTER to continue...",410,110);
    pop();
    if(rectHit(mouseX,mouseY,this.x,this.y,100,100,0,0)){
        this.angle+=((2*PI*-abs(this.tweenx)/this.tweenx-this.angle)/5);
      this.bob+=0.5;
      if(mouseIsPressed){
        this.bob+=0.3;
        this.current=0;
      }
    }else{
      this.angle+=(0-this.angle)/5;
    }
    if(keyIsDown(13)){
      if(!this.enter){
        this.current++;
        this.current=min(this.current,this.data.length-1);
        this.enter=true;
      }
    }else{
      this.enter = false;
    }
    
  }
}