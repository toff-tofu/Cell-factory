class button{
  constructor(a,b,c,d,e,f,g,h,i2){
    this.x=a;
    this.y=b;
    this.sizeX=c;
    this.sizeY=d;
    this.size=e;
    this.sizev=f;
    this.dragv = g;
    this.drag = h;
    this.clicks = 0;
    this.clicked = false;
    this.hover = false;
    this.last = false;
    this.held = false;
    this.heldFor = 0;
    this.state = false;
    //just in case i use a for loop in constructor, generally it won't disturb much if it's below it, but just in case :3
    //it doesn't do anything lol, past HF_ang was an idiot
    //lmao
    this.type = i2;
  }
  work(){
    //this.size-=sin((frameCount-1)/20)/50;
    if(rectHit(this.x,this.y,mouseX,mouseY,this.sizeX,this.sizeY,0,0)){
      this.sizev=max(0.05,this.sizev);
      this.hover = true;
      // print("hovering")
    }else{
      this.hover = false;
    }
    this.sizev/=this.drag;
    this.size=1+(this.size-1)/this.drag;
    this.size+=this.sizev;
    //this.size+=sin(frameCount/20)/50;
    if(rectHit(this.x,this.y,mouseX,mouseY,this.sizeX,this.sizeY,0,0)&&!this.last&&mouseIsPressed){
      this.held = true;
      this.last = true;
      this.clicked = true;
      this.clicks++;
      this.state=!this.state;
      this.sizev=this.sizev+=0.1;
    }else{
      this.clicked = false;
    }
    if(!rectHit(this.x,this.y,mouseX,mouseY,this.sizeX,this.sizeY,0,0)||!mouseIsPressed){
      this.last = false;
    }
    if(this.held&&!mouseIsPressed){
      this.held = false;
    }
    if(this.held){
      this.held = true;
      this.heldFor++;
      this.sizev=max(0.08,this.sizev);
    }else{
      this.held = false;
      this.heldFor = 0;
    }
  }
}

function rectHit(x,y,x2,y2,xs,ys,xs2,ys2){
  return(abs(x-x2)<xs/2+xs2/2&&abs(y-y2)<ys/2+ys2/2);
}

var speed = 10
var tx = 0
var ty = 0
var sizex = 0
var textsize = 0
var textx = 0
var texty = 0
var targetx = 40
var sizey = 0
var targety = 40
var inhelp = false
function help(x,y1,sx,sy){
  var displayname = [
    'ATP',
    'ADP',
    'ATP Synthase',
    'A-ketoglutarate',
    'Acetaldehyde',
    'Acetyl-coa',
    'Citric Acid',
    "CKABP",
    "Chlorophyll",
    'CO2',
    "CoA",
    'Electron',
    'Ethanol',
    "ETC",
    'FAD+ / FADH2',
    'Fumarate',
    'G3P',
    'GDP',
    'Glucose',
    'GTP',
                     'H2O',
    'Isocitrate',
    'Malate',
    'NAD+ / NADH',
    'NADP+ / NADPH',
    'Oxaloacetate',
    'Oxygen',
    'PGA',
    'Proton',
    'Pyruvate',
    'Photon',
    'Pi',
    "RuBisCo",
    'RuBP',
    'Succinate',
    'Succinyl-coa']
  var display = [
    ATPSheet,
    ADPSheet,
    ATPSSheet,
    aketoglutarateSheet,
    acetaldehydeSheet,
    acetylcoaSheet,
    citricacidSheet,
                ckabpSheet,
    [Chlor],
    co2Sheet,
    coaSheet,
    electronSheet,
    ethanolSheet,
                [ETC],
    fadSheet,
    fumarateSheet,
    g3pSheet,
    gdpSheet,
    glucoseSheet,
    gtpSheet,
                 H2OSheet,
    isocitrateSheet,
    malateSheet,
    nadSheet,
    nadpSheet,
    oxaloacetateSheet,
    oxygenSheet,
    pgaSheet,
    protonSheet,
    pyruvateSheet,
    photonSheet,
    PiSheet,
    [rubiscoSprite],
    rubpSheet,
    succinateSheet,
    succinylcoaSheet]
  push()
  strokeWeight(5)
  fill('rgb(232,232,255)')
  // if (sizex<50){
    translate(tx+40,height-ty-40)
  rectMode(CENTER)
  rect(0,0,sizex,sizey,50)
  resetMatrix()
  translate(textx,height-texty)
  noFill()
  strokeWeight(5)
  stroke(0,0,0,map(sizex,0,400,0,255))
  ellipse(0,0,min(sizex,48))
  textAlign(CENTER,CENTER)
  strokeWeight(1)
  textSize(min(textsize,30))
  textFont('itim')
  fill(0)
  text('?',0,0)
  pop()
  // if (inhelp){
    if (y > 75){
      y = 75
    }
    if (y < -1700){
      y = -1700
    }
    push()
    textFont('itim')
    beginClip()
    rectMode(CENTER)
translate(tx+40,height-ty-40)
    rect(0,0,sizex,sizey,50)
  translate(-tx-40,-height+ty+40)
    endClip()
    // pop()
    //Molecules
    fill("rgb(255,255,255)")
    strokeWeight(5)
    stroke(0)
    // rect(x,y1,sx,sy,7)
    translate(0,y1)
    textAlign(LEFT,CENTER)
    textSize(25)
    imageMode(CENTER)
    fill(0)
    strokeWeight(1)
    stroke(0)
  if (targetx>50){
    for (let i = 0; i < display.length; i++){
      image(display[i][floor(frameCount/14)%display[i].length],sx/3-30,y+(i*60),70,70)
      text(displayname[i], sx/3+20, y+(i*60))
    }
  }
    pop()
    y+=d
    push()
    noFill();
    stroke(0)
    strokeWeight(5)
    // rect(x,y1,sx,sy,7)
    pop()
  // }
  
  
  if (dist(mouseX,mouseY,textx,height-texty)<targetx/2&&!inhelp){
    targetx = 48
    targety = 48
    if (mouseIsPressed){
      sizex += 5
      sizey += 5
      textsize = targetx/2 + 2.5
    }else{
      
    }
  }else if(!inhelp&&dist(mouseX,mouseY,textx,height-texty)>targetx/2){
    targetx = 40
    targety = 40
  }
  sizex -= (sizex-targetx)/speed
  textsize -= (textsize-(targetx/2))/speed
  sizey -= (sizey-targety)/speed
  tx -= (tx - (sizex/2))/speed
  ty -= (ty - (sizey/2))/speed
  if (!inhelp){
     textx -= (textx - (tx+40))/speed*2
  texty -= (texty - (ty+40))/speed*2
  }else{
     textx -= (textx - sizex+20)/speed
  texty -= (texty - sizey+20)/speed
  }
 
  // print(targetx,sizex)
  if (mouse.presses()){
    if (dist(mouseX,mouseY,textx,height-texty)<20){
    inhelp=!inhelp
    targetx = 400
    targety = 500
  }
  if (!rectHit(tx+40,height-ty-40,mouseX,mouseY,sizex,sizey,0,0)&&inhelp){
    inhelp = false
  }
  }
}

// function mousePressed(){
  
// }

function mouseWheel(event){
  d=-event.delta
  infoS+=-event.delta;
  return false;
}