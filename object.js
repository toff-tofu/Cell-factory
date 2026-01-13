var strokeweight = 3
class object{
  constructor(a,b,c,k,j,d,e,f,g,h){
    this.x = a;
    this.y = b;
    this.z = c;
    this.prex = this.x
    this.prey = this.y
    this.sizeX = k ?? 25;
    this.sizeY = j ?? 25;
    this.xvel = d;
    this.yvel = e;
    this.zvel = f;
    this.prez = f;
    this.type = g;
    this.held = false;
    this.drag = h;
    this.side = 1;
    this.angle = random(0,360);
    this.grabable = true;
    this.back = false;
    this.id = objects.length-1;
  }
  work(){
    this.prez = this.z;
    this.prex= this.x
    this.prey = this.y
    this.x+=this.xvel;
    this.y+=this.yvel;
    this.z+=this.zvel;
    this.xvel/=this.drag;
    this.yvel/=this.drag;
    this.zvel-=1.3;
    if(this.z<0){
      this.z=0
      if(this.prez>0&&!["ATP","ADP"].includes(this.type)){
         shake+=1.5;
      }
    }
     this.angle+=abs(this.xvel*2);
  }
  follow(layer){
    let dir = player.prevDirection;
    let target = {over: false, x: player.px,y: player.py,z: player.pz};
    //Conditions
    if(dir.y<0){
       target.over = false;
    }
    if(dir.y>0){
       target.over = true;
    }
    if(dir.x!=0){
       target.x+=dir.x/abs(dir.x)*10;
       target.over = false;
    }
    this.x -= (this.x-target.x)/1;
    this.y -= (this.y-target.y-player.sizeY/2+2+10)/1;
    this.z=player.holdOffset.y;
    this.zvel = 0;
    //End
    if(target.over == layer){
      this.display(this.x,this.y,this.z);
    }
  }
  display(x,y,z){
    if(this.held){
      if(player.prevDirection.x!=0){
        this.side = player.prevDirection.x/abs(player.prevDirection.x);
      }
    }
    //shadow
    push();
    translate(x,y+this.sizeY/2);
    noStroke();
    fill(0,19);
    let shrink = 1+z/150;
    ellipse(0,0,(this.sizeX)/shrink,(this.sizeY/2)/shrink);
    pop();
    
    push();
    translate(x,y-z);
    scale(-this.side,1);
    stroke(0);
    strokeWeight(5);
    if(this.type == "Photon"){
      rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180);
      image(photonSheet[floor(frameCount/14)%2],0,0,this.sizeX*1.5,this.sizeY*1.5);
    }else if(this.type == "Phosphate"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(PiSheet[floor(frameCount/14)%2],0,0,this.sizeX*1.3,this.sizeY*1.3);
    }else if(this.type == "Star"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(starSheet[floor(frameCount/14)%2],0,0,this.sizeX*1.3,this.sizeY*1.3);
    }else if(this.type == "Acetaldehyde"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(acetaldehydeSheet[floor(frameCount/14)%2],0,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "Electron"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(electronSheet[floor(frameCount/14)%2],0,0,this.sizeX*1.3,this.sizeY*1.3);
    }else if(this.type == "Proton"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(protonSheet[floor(frameCount/14)%2],0,0,this.sizeX*1.3,this.sizeY*1.3);
    }else if(this.type == "Water"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(H2OSheet[floor(frameCount/14)%2],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "O"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(oxygenSheet[floor(frameCount/14)%2],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "NADP"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(nadpSheet[2*(floor(frameCount/14)%2)],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "NADPH"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(nadpSheet[1+2*(floor(frameCount/14)%2)],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "FAD"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(fadSheet[2*(floor(frameCount/14)%2)],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "FADH"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(fadSheet[1+2*(floor(frameCount/14)%2)],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "NAD"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(nadSheet[2*(floor(frameCount/14)%2)],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "NADH"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(nadSheet[1+2*(floor(frameCount/14)%2)],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "Rubp"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(rubpSheet[floor(frameCount/14)%2],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "PGA"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(pgaSheet[floor(frameCount/14)%2],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "CO2"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(co2Sheet[floor(frameCount/14)%2],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "COA"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(coaSheet[floor(frameCount/14)%2],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "Acetyl Coa"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(acetylcoaSheet[floor(frameCount/14)%2],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "CKABP"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(ckabpSheet[floor(frameCount/14)%2],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "G3P"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(g3pSheet[floor(frameCount/14)%2],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }
    else if(this.type == "Pyruvate"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(pyruvateSheet[floor(frameCount/14)%2],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "Glucose"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(glucoseSheet[floor(frameCount/14)%2],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "Ethanol"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(ethanolSheet[floor(frameCount/14)%2],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "Oxaloacetate"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(oxaloacetateSheet[floor(frameCount/14)%2],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "Citric Acid"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(citricacidSheet[floor(frameCount/14)%2],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "Isocitrate"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(isocitrateSheet[floor(frameCount/14)%2],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "Aketoglutarate"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(aketoglutarateSheet[floor(frameCount/14)%2],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "Succinyl Coa"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(succinylcoaSheet[floor(frameCount/14)%2],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "Proton Bundle"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(protonBundleSheet[floor(frameCount/14)%2],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "GDP"){
     let idle = floor(frameCount/14)%6+3;
      let flap =  floor(frameCount/5)%6+3;
      image(gdpSheet[((this.z>0) ?  (this.held ? idle : flap) : idle)],0,this.held ? (1*(sin(frameCount/40)-1)) : (3*(sin(frameCount/40)-1)),this.sizeX*3,this.sizeY*3);
      if(this.zvel<0){
        this.zvel/=1.2;
      }else{
        this.zvel+=0.2;
      }
      
    }else if(this.type == "GTP"){
      let idle = (floor((frameCount/14)%4)+1);
      image(gtpSheet[((this.z>0) ?  (this.held ? idle : (floor((frameCount/5)%4)+1)) : idle)],0,this.held ? (3*(sin(frameCount/40)-1)) : (6*(sin(frameCount/40)-1)),this.sizeX*2.75,this.sizeY*2.75);
      if(this.zvel<0){
        this.zvel/=1.5;
      }else{
        this.zvel+=0;
      }
    }else if(this.type == "Succinate"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(succinateSheet[floor(frameCount/14)%2],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "Fumarate"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(fumarateSheet[floor(frameCount/14)%2],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "Malate"){
       rotate((-abs(this.angle)+sin(frameCount/20)*5)*PI/180+90*PI/180);
      image(malateSheet[floor(frameCount/14)%2],-1,0,this.sizeX*1.7,this.sizeY*1.7);
    }else if(this.type == "ATP"){
      let idle = (floor((frameCount/14)%4)+1);
      image(ATPSheet[((this.z>0) ?  (this.held ? idle : (floor((frameCount/5)%4)+1)) : idle)],0,this.held ? (3*(sin(frameCount/40)-1)) : (6*(sin(frameCount/40)-1)),this.sizeX*2.75,this.sizeY*2.75);
      if(this.zvel<0){
        this.zvel/=1.5;
      }else{
        this.zvel+=0;
      }
    }else if(this.type == "ADP"){
      let idle = floor(frameCount/14)%6+3;
      let flap =  floor(frameCount/5)%6+3;
      image(ADPSheet[((this.z>0) ?  (this.held ? idle : flap) : idle)],0,this.held ? (1*(sin(frameCount/40)-1)) : (3*(sin(frameCount/40)-1)),this.sizeX*3,this.sizeY*3);
      if(this.zvel<0){
        this.zvel/=1.2;
      }else{
        this.zvel+=0.2;
      }
    }
    noStroke();
    pop();
  }
  collide(){
    let x = this.x
    let y = this.y
    let pry = this.prey
    let xs = this.sizeX/4
    let ys = this.sizeY/4;
    push()
    //rect(x,y,xs,ys)
    pop()
    strokeweight = 0;
      for(let i = 0;i<blocks.length;i++){
        if(!blocks[i].collider||blocks[i].type!="Void") continue;
        if (this.prex+xs/2+strokeweight/2<=blocks[i].x-blocks[i].xs/2&&
           this.x+xs/2+strokeweight/2>=blocks[i].x-blocks[i].xs/2&&
           pry+ys/2+strokeweight/2>blocks[i].y-blocks[i].ys/2&&
           pry-ys/2-strokeweight/2<blocks[i].y+blocks[i].ys/2){
            this.x=blocks[i].x-blocks[i].xs/2-xs/2-strokeweight/2
            this.xvel*=-0.2;
        }
        if (this.prex-xs/2-strokeweight/2>=blocks[i].x+blocks[i].xs/2&&
           this.x-xs/2-strokeweight/2<=blocks[i].x+blocks[i].xs/2&&
           pry+ys/2+strokeweight/2>blocks[i].y-blocks[i].ys/2&&
           pry-ys/2-strokeweight/2<blocks[i].y+blocks[i].ys/2){
          this.x=blocks[i].x+blocks[i].xs/2+xs/2+strokeweight/2
          this.xvel*=-0.2;
        }
      }
      //Y
      for(let i = 0;i<blocks.length;i++){
        if(!blocks[i].collider||blocks[i].type!="Void") continue;
        if (pry+ys/2+strokeweight/2<=blocks[i].y-blocks[i].ys/2&&
           y+ys/2+strokeweight/2>=blocks[i].y-blocks[i].ys/2&&
           this.x+xs/2+strokeweight/2>blocks[i].x-blocks[i].xs/2&&
           this.x-xs/2-strokeweight/2<blocks[i].x+blocks[i].xs/2){
          y=blocks[i].y-blocks[i].ys/2-ys/2-strokeweight/2
        this.y = y-ys/2
          this.yvel*=-0.2;
        }
        if (pry-ys/2-strokeweight/2>=blocks[i].y+blocks[i].ys/2&&
           y-ys/2-strokeweight/2<=blocks[i].y+blocks[i].ys/2&&
           this.x+xs/2+strokeweight/2>blocks[i].x-blocks[i].xs/2&&
           this.x-xs/2-strokeweight/2<blocks[i].x+blocks[i].xs/2){
          y=blocks[i].y+blocks[i].ys/2+ys/2+strokeweight/2
        this.y = y+ys/2
       
         this.yvel*=-0.2;
        }

      }
    }
}