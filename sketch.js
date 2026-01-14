var y = 75
var page = -1;
var d = 0;
var player;
var objects = [];
var friend;
var title;
if("pain"==="pain"){
var info;
var play;
var playerSprite,
    tableSprite,
    photonSprite,
    PiSprite,
    H2OSprite,
    ATPSprite,
    ADPSprite,
    dotsSprite,
    head,
    aketoglutarateSprite,
    acetaldehydeSprite,
    acetylcoaSprite,
    citricacidSprite,
    co2Sprite,
    electronSprite,
    ethanolSprite,
    excitedelectronSprite,
    fadSprite,
    friendSprite,
    fumarateSprite,
    g3pSprite,
    gdpSprite,
    glucoseSprite,
    gtpSprite,
    dustSprite,
    isocitrateSprite,
    malateSprite,
    nadSprite,
    nadpSprite,
    oxaloacetateSprite,
    oxygenSprite,
    pgaSprite,
    protonSprite,
    pyruvateSprite,
    rubpSprite,
    succinateSprite,
    succinylcoaSprite,
    ETC,ETCGlyph,
    ATPS,ATPSGlyph,
    Chlor,ChlorGlyph,
    rubiscoSprite,rubiscoGlyph,
    rubpSprite,
    ckabpSprite,
    redoxSprite,redoxGlyph,
    regenSprite,regenGlyph,
    craftingSprite,
    coaSprite,
    mbg,
    cbg, star,
    protonBundle;
var playerSheet = [],
    tableSheet = [],
    photonSheet = [],
    PiSheet = [],
    ATPSheet = [],
    ADPSheet = [],
    dotsSheet = [],
    headSheet = [],
    H2OSheet = [],
    aketoglutarateSheet = [],
    acetaldehydeSheet = [],
    acetylcoaSheet = [],
    citricacidSheet = [],
    co2Sheet = [],
    electronSheet = [],
    ethanolSheet = [],
    excitedelectronSheet = [],
    fadSheet = [],
    friendSheet = [],
    fumarateSheet = [],
    g3pSheet = [],
    gdpSheet = [],
    glucoseSheet = [],
    gtpSheet = [],
    dustSheet = [],
    isocitrateSheet = [],
    malateSheet = [],
    nadSheet = [],
    nadpSheet = [],
    oxaloacetateSheet = [],
    oxygenSheet = [],
    pgaSheet = [],
    protonSheet = [],
    pyruvateSheet = [],
    rubpSheet = [],
    succinateSheet = [],
    succinylcoaSheet = [],
    ATPSSheet = [],
    ckabpSheet = [],
    craftingSheet = [],
    coaSheet = [],
    starSheet= [],
    protonBundleSheet = [];
var blocks = [];
var music = [];
  var exbox;
function preload(){
  title = loadImage('assets/title.avif');
  playerSprite = loadImage('assets/player.avif');
  dotsSprite = loadImage('assets/map icon.avif')
  ATPSprite = loadImage('assets/atp.avif');
  ADPSprite = loadImage('assets/adp.avif');
  head = loadImage('assets/head.avif')
  tableSprite = loadImage('assets/better table (maybe, idk).avif')
  photonSprite = loadImage('assets/photon.avif');
  PiSprite = loadImage('assets/Pi.avif');
  H2OSprite = loadImage('assets/water.avif');
  aketoglutarateSprite = loadImage('assets/a-ketoglutarate.avif')
  acetaldehydeSprite = loadImage('assets/acetaldehyde.avif')
  acetylcoaSprite = loadImage('assets/acetyl-coa.avif')
  citricacidSprite = loadImage('assets/citric acid.avif')
  co2Sprite = loadImage('assets/co2.avif')
  electronSprite = loadImage('assets/electron.avif')
  ethanolSprite = loadImage('assets/ethanol.avif')
  excitedelectronSprite = loadImage('assets/excited electron.avif')
  fadSprite = loadImage('assets/fad+_h2.avif')
  friendSprite = loadImage('assets/friend.avif')
  fumarateSprite = loadImage('assets/fumarate.avif')
  g3pSprite = loadImage('assets/g3p.avif')
  gdpSprite = loadImage('assets/gdp.avif')
  glucoseSprite = loadImage('assets/glucose.avif')
  gtpSprite = loadImage('assets/gtp.avif')
  dustSprite = loadImage('assets/dust.avif')
  isocitrateSprite = loadImage('assets/isocitrate.avif')
  malateSprite = loadImage('assets/malate.avif')
  nadSprite = loadImage('assets/nad+_h.avif')
  nadpSprite = loadImage('assets/nadp+_h.avif')
  oxaloacetateSprite = loadImage('assets/oxaloacetate.avif')
  oxygenSprite = loadImage('assets/oxygen.avif')
  pgaSprite = loadImage('assets/pga.avif')
  protonSprite = loadImage('assets/proton.avif')
  pyruvateSprite = loadImage('assets/pyruvate.avif')
  rubpSprite = loadImage('assets/rubp.avif')
  succinateSprite = loadImage('assets/succinate.avif')
  succinylcoaSprite = loadImage('assets/succinyl-coa.avif')
  platformMud = loadImage('assets/Untitled_Artwork 5.avif');
  platformWater = loadImage('assets/Untitled_Artwork.avif');
  platformBridge = loadImage('assets/Untitled_Artwork 4.avif');
  ETC = loadImage('assets/blue blob.avif');
  ETCGlyph = loadImage('assets/blue thing.avif');
  ATPS = loadImage('assets/atp_synthase.avif');
  ATPSglyph = loadImage('assets/thing for atp synthase.avif');
  Chlor = loadImage('assets/chlorophyll.avif');
  ChlorGlyph = loadImage('assets/limeRing.avif');
  music[music.length] = loadSound('assets/menu.mp3');
  rubiscoSprite = loadImage('assets/rubisco.avif');
  rubiscoGlyph = loadImage('assets/thing for rubisco.avif');
  ckabpSprite = loadImage('assets/wierd six carbon thing from the calvin cycle that you most likely get to see one frame of.avif');
  redoxGlyph = loadImage("assets/hason asked for this so idk why its in bere.avif");
  redoxSprite = loadImage("assets/white thing.avif");
  regenGlyph = loadImage("assets/hason asked for this so idk why its in bere.avif");
  regenSprite = loadImage("assets/white thing.avif");
  craftingSprite = loadImage("assets/Crafting_Table.avif")
  mitoMud = loadImage('assets/mitochondria platform.avif');
  mitoWater = loadImage('assets/mitochondria water.avif');
  mitoBridge = loadImage('assets/mitochondria bridge.avif');
  coaSprite = loadImage('assets/coa.avif')
  mbg = loadImage('assets/mitochondri map background.avif')
  cbg = loadImage('assets/chloroplast map background.avif')
  star = loadImage('assets/star.avif')
  exbox = loadImage('assets/end.avif')
  info = loadImage('assets/info.avif')
  play = loadImage('assets/play.avif')
  protonBundle = loadImage('assets/proton bundle.avif')
}
}
function sheetConfig(w,h,sprite,sheet){
   for(let c=0; c<w; c++){
         for(let i=0; i<h; i++){
    sheet[sheet.length] = sprite.get(c*sprite.width/w,i*sprite.height/h,sprite.width/w,sprite.height/h);
  }
  }
}
function setup() {
  textFont('itim');
  createCanvas(900, 650);

  // bump resolution to 2700x1950 for 4K displays
  if (windowHeight >= 1000) pixelDensity(3);

  displayMode('maxed');
  
  music[0].loop();
  rectMode(CENTER);
  /*
  objects = [new object(100,300,0,null,null,0,0,0,"Photon",1.05),
              new object(150,300,0,null,null,0,0,0,"Phosphate",1.05),
              new object(200,300,0,null,null,0,0,0,"ATP",1.05),
              new object(250,300,0,null,null,0,0,0,"ADP",1.05)];
              */
  for(let i=0; i<900/50; i++){
     for(let c=0; c<600/50; c++){
   // blocks[blocks.length] = new Block(25+i*50,25+c*50,50,50,1000,"Mud",false);
     }
}
  //blocks[blocks.length] = new Block(250,150,50,50,1000,"Proton",true,12);
  //"ATP Synth"
   for(let c=0; c<3; c++){
         for(let i=0; i<4; i++){
    playerSheet[playerSheet.length] = playerSprite.get(i*playerSprite.width/4,c*playerSprite.height/3,playerSprite.width/4,playerSprite.height/3);
  }
  }
  imageMode(CENTER);

  sheetConfig(2,1,star,starSheet)
  sheetConfig(2,2,dotsSprite,dotsSheet)
  sheetConfig(2,1,PiSprite,PiSheet)
  sheetConfig(2,1,aketoglutarateSprite,aketoglutarateSheet)
  sheetConfig(2,1,acetaldehydeSprite,acetaldehydeSheet)
  sheetConfig(2,1,acetylcoaSprite,acetylcoaSheet)
  sheetConfig(3,3,ADPSprite,ADPSheet)
  sheetConfig(1,5,ATPSprite,ATPSheet)
  sheetConfig(2,1,citricacidSprite,citricacidSheet)
  sheetConfig(2,1,co2Sprite,co2Sheet)
  sheetConfig(1,1,dustSprite,dustSheet)
  sheetConfig(2,1,electronSprite,electronSheet)
  sheetConfig(2,1,ethanolSprite,ethanolSheet)
  sheetConfig(2,1,excitedelectronSprite,excitedelectronSheet)
  sheetConfig(2,2,fadSprite,fadSheet)
  sheetConfig(2,2,friendSprite,friendSheet)
  sheetConfig(2,1,fumarateSprite,fumarateSheet)
  sheetConfig(2,1,g3pSprite,g3pSheet)
  sheetConfig(3,3,gdpSprite,gdpSheet)
  sheetConfig(2,1,glucoseSprite,glucoseSheet)
  sheetConfig(1,5,gtpSprite,gtpSheet)
  sheetConfig(2,1,head,headSheet)
  sheetConfig(2,1,isocitrateSprite,isocitrateSheet)
  sheetConfig(2,1,malateSprite,malateSheet)
  sheetConfig(2,2,dotsSprite,dotsSheet)
  sheetConfig(2,2,nadSprite,nadSheet)
  sheetConfig(2,2,nadpSprite,nadpSheet)
  sheetConfig(2,1,oxaloacetateSprite,oxaloacetateSheet)
  sheetConfig(2,1,oxygenSprite,oxygenSheet)
  sheetConfig(2,1,pgaSprite,pgaSheet)
  sheetConfig(2,1,photonSprite,photonSheet)
  sheetConfig(2,1,protonSprite,protonSheet)
  sheetConfig(2,1,pyruvateSprite,pyruvateSheet)
  sheetConfig(2,1,rubpSprite,rubpSheet)
  sheetConfig(2,1,succinateSprite,succinateSheet)
  sheetConfig(2,1,succinylcoaSprite,succinylcoaSheet)
  sheetConfig(1,1,tableSprite,tableSheet)
  sheetConfig(2,1,H2OSprite,H2OSheet)
  sheetConfig(1,1,ATPS,ATPSSheet)
  sheetConfig(2,1,ckabpSprite,ckabpSheet)
  sheetConfig(2,1,craftingSprite,craftingSheet)
  sheetConfig(2,1,coaSprite,coaSheet)
  sheetConfig(2,1,protonBundle,protonBundleSheet)
  imageMode(CENTER);
  for (let i= 0;i<steps;i++){
    nodes[nodes.length] = {bt: new button(i*180,325+noise(i)*100,25,25,1,0.2,1.2,1.3), 
              level: i+1, unlocked: false,  finished: false, levels: levels[i], area: areas[i],time:times[i].time}
  }
  roadplayer.y = nodes[0].bt.y
  
  //Head
  for(let i=0; i<2; i++){
    headSheet[headSheet.length] = head.get(i*head.width/2,0,head.width/2,head.height);
  }
   //tble
  for(let i=0; i<1; i++){
    tableSheet[tableSheet.length] = tableSprite.get(i*tableSprite.width/1,0,tableSprite.width/1,tableSprite.height);
  }
}
var shake = 0;

function draw(){
 // frameRate(20);
  translate(random(-shake,shake),random(-shake,shake));
  shake/=1.5;
  background(200,255,200);
  if (frameCount%60==0){
    for (let i = 0;i<times.length;i++){
    if (times[i].inlevel){
      times[i].time++
      //print(times[i].time)
    }
  }
  }

//  noStroke();
//  fill(0,255,0)
  //rect(450,325,450,325,50);
  if (page==1){
    push();
    translate(450,325)
    rotate(sin(frameCount/40)/120);
    scale(1.5+sin(frameCount/40)/60,1+cos(frameCount/40+20)/60);
    image(platformWater,0,0,900*1.5,650*1.5);
    pop();
    push();
    translate(200,350);
    scale(1+sin(frameCount/40)/300,1+cos(frameCount/40+20)/300);
    image(platformMud,0,0,500,800);
    image(platformMud,0,0,500,800);
    pop();
    push();
    translate(700,350);
    scale(1+sin(frameCount/40)/300,1+cos(frameCount/40+200)/300);
    image(platformMud,0,0,500,800);
    image(platformMud,0,0,500,800);
    pop();
    
    push();
    translate(455,350);
    rotate(188*PI/180);
    image(platformBridge,0,0,240,250);
    pop();
  }
  else if(page == 2){
    push();
    translate(450,325)
    rotate(sin(frameCount/40)/120);
    scale(1.5+sin(frameCount/40)/60,1+cos(frameCount/40+20)/60);
    image(platformWater,0,0,900*1.5,650*1.5);
    pop();
    push();
    translate(width/2,350);
    scale(1+sin(frameCount/40)/300,1+cos(frameCount/40+20)/300);
    image(platformMud,0,0,1000,800);
    image(platformMud,0,0,1000,800);
    pop();
  }else if(page == 3){
    push();
    translate(450,325)
    rotate(sin(frameCount/40)/120);
    scale(1.5+sin(frameCount/40)/60,1+cos(frameCount/40+20)/60);
    image(mitoWater,0,0,900*1.5,650*1.5);
    pop();
    push();
    translate(250,350);
    scale(1+sin(frameCount/40)/300,1+cos(frameCount/40+20)/300);
    image(mitoMud,0,0,700,950);
    image(mitoMud,0,0,700,950);
    pop();
    push();
    translate(700,350);
    scale(1+sin(frameCount/40)/300,1+cos(frameCount/40+20)/300);
    image(mitoMud,0,0,400,500);
    image(mitoMud,0,0,400,500);
    pop();
    push();
    translate(525,350);
    rotate(188*PI/180);
    image(mitoBridge,0,0,140,150);
    pop();
  }
  else if (page == 4){
    push();
    translate(450,325)
    rotate(sin(frameCount/40)/120);
    scale(1.5+sin(frameCount/40)/60,1+cos(frameCount/40+20)/60);
    image(mitoWater,0,0,900*1.5,650*1.5);
    pop();
    push();
    translate(width/3-50,height/4+75);
    scale(1+sin(frameCount/40)/300,1+cos(frameCount/40+20)/300);
    image(mitoMud,0,0,500,500,0,0,3000);
    image(mitoMud,0,0,500,500,0,0,3000);
    pop();
    push();
    translate(width*0.6+110,height/4+60);
    scale(1+sin(frameCount/40)/300,1+cos(frameCount/40+20)/300);
    image(mitoMud,0,0,500,500,390,0);
    image(mitoMud,0,0,500,500,390,0);
    pop();
    push();
    translate(600,370);
    angleMode(DEGREES)
    rotate(90);
    image(mitoBridge,0,0,140,200);
    angleMode(RADIANS)
    pop();
    push();
    translate(width/2+50,500);
    scale(1+sin(frameCount/40)/300,1+cos(frameCount/40+20)/300);
    image(mitoMud,0,0,500,300);
    image(mitoMud,0,0,500,300);
    pop();
  }else if (page == 5){
    push();
    translate(450,325)
    rotate(sin(frameCount/40)/120);
    scale(1.5+sin(frameCount/40)/60,1+cos(frameCount/40+20)/60);
    image(mitoWater,0,0,900*1.5,650*1.5);
    pop();
    push();
    translate(250,350);
    scale(1+sin(frameCount/40)/300,1+cos(frameCount/40+20)/300);
    image(mitoMud,0,0,700,950);
    image(mitoMud,0,0,700,950);
    pop();
    push();
    translate(700,350);
    scale(1+sin(frameCount/40)/300,1+cos(frameCount/40+20)/300);
    image(mitoMud,0,0,400,500);
    image(mitoMud,0,0,400,500);
    pop();
    push();
    translate(525,350);
    rotate(188*PI/180);
    image(mitoBridge,0,0,140,150);
    pop();
  }else if (page == 6){
    push();
    translate(450,325)
    rotate(sin(frameCount/40)/120);
    scale(1.5+sin(frameCount/40)/60,1+cos(frameCount/40+20)/60);
    image(mitoWater,0,0,900*1.5,650*1.5);
    pop();
    push();
    translate(width/2,height/2);
    scale(1+sin(frameCount/40)/300,1+cos(frameCount/40+20)/300);
    image(mitoMud,0,0,1200,800);
    image(mitoMud,0,0,1200,800);
    pop();
  }else if (page == 7){
    push();
    translate(450,325)
    rotate(sin(frameCount/40)/120);
    scale(1.5+sin(frameCount/40)/60,1+cos(frameCount/40+20)/60);
    image(mitoWater,0,0,900*1.5,650*1.5);
    pop();
    push();
    translate(width/2,height/2);
    scale(1+sin(frameCount/40)/300,1+cos(frameCount/40+20)/300);
    image(mitoMud,0,0,1200,800);
    image(mitoMud,0,0,1200,800);
    pop();
  }
  if(page>0){
    //displayGlyphs
    for (let i = 0;i<blocks.length;i++){
        blocks[i].displayGlyphs()
    }
  player.move();
    player.collide();
  for(let i=0; i<objects.length; i++){
    objects[i].work();
    objects[i].collide();
  }
 objects.sort((a, b) => {
  if(a.held&&!b.held) return 1;
  if(!a.held&&b.held) return -1;
  return a.y-b.y;
});
         for(let i=0; i<objects.length; i++){
    if(objects[i].back){
      objects[i].display(objects[i].x,objects[i].y,objects[i].z);
    }
  }
        for (let i = 0;i<blocks.length;i++){
      if(blocks[i].y+blocks[i].ys/2<player.py+player.sizeY/2){
        blocks[i].display()
      }
    }
  
  //Top down, so all displays handed at once
  for(let i=0; i<objects.length; i++){
    if(objects[i].held){
       objects[i].follow(false);
       continue;
    }
    if(objects[i].y+objects[i].sizeY/2<player.py+player.sizeY/2){
      objects[i].display(objects[i].x,objects[i].y,objects[i].z);
    }
  }
  player.display(player.direction);
    for (let i = 0;i<blocks.length;i++){
      if(blocks[i].y+blocks[i].ys/2>=player.py+player.sizeY/2){
        blocks[i].display()
      }
    }
  for(let i=0; i<objects.length; i++){
    if(objects[i].held&&!objects[i].back){
       objects[i].follow(true);
       continue;
    }
   if(!objects[i].back){
      objects[i].display(objects[i].x,objects[i].y,objects[i].z);
    }
  }
    if (friend!=undefined){
      friend.work();
    }
  
    help(50,100,400,500)
  }
  
  if(page==0){
    roadmap()
  }
  if(frameCount%2==0){
      d=0;
  }
 // print(mouseX,mouseY)
  if(page>0){
    if(objects.findIndex(hold => hold.type=="Star")!=-1){
      times[page-1].inlevel = false;
      page=0;
      objects=[]
      bMask={im: get(),x: 450, y: 325, yvel: -20,xvel: random(-10,10),r:0,rd: (random(0,100)>50) ? -1 : 1};
  }
  }
  //start
  if(page==-1){
    push()
  translate(450,325);
  scale(1.5+sin(frameCount/40)/60,1+cos(frameCount/40+20)/60);
  rotate(PI+sin(frameCount/40)/120);
  image(cbg,0,0,900*1.2,650*1.2)
  pop()
  push()
  translate(450,325);
  scale(1.5+sin(frameCount/40)/60,1+cos(frameCount/40+20)/60);
  rotate(PI+sin(frameCount/40)/120);
   tint(255,startZ)
    image(mbg,0,0,900*1.2,650*1.2)
  pop()
    push();
      translate(290,190);
    scale(1+sin(frameCount/40)/60,1+cos(frameCount/40+20)/60);
    image(title,0,0,500,500);
    pop();
    push();
    startB.work();
    translate(startB.x,startB.y);
    scale(startB.size,startB.size);
    //rect(0,0,startB.sizeX,startB.sizeY);
    image(play,0,40,350,350)
    pop();
     push();
    infoB.work();
    translate(infoB.x,infoB.y);
    scale(infoB.size,infoB.size);
   // rect(0,0,infoB.sizeX,infoB.sizeY);
    image(info,0,25,250,250)
    pop();
    if(startB.clicked){
      page=0;
      bMask={im: get(),x: 450, y: 325, yvel: -20,xvel: random(-10,10),r:0,rd: (random(0,100)>50) ? -1 : 1};
    }
    if(infoB.clicked){
      page=-2;
      bMask={im: get(),x: 450, y: 325, yvel: -20,xvel: random(-10,10),r:0,rd: (random(0,100)>50) ? -1 : 1};
    }
    if(infoB.hover){
      startZ+=(255-startZ)/10;
    }else{
      startZ+=(-startZ)/10;
    }
    push();
    translate(750,150);
    rotate(PI/7+sin(frameCount/40)/20);
     scale(1+sin(frameCount/40)/60,1+cos(frameCount/40+20)/60);
    image(headSheet[floor(frameCount/20)%2],0,0,300,300);
    pop();
    push();
    push();
    translate(680,450);
    rotate(PI/20+sin(frameCount/40)/10);
     scale(1-sin(frameCount/40)/60,1+cos(frameCount/40+20)/60);
    image(friendSheet[(floor(frameCount/10)%4)%2*2+floor((floor(frameCount/10)%4)/2)],0,0,300,300);
    pop();
     push();
    translate(480,130);
    rotate(PI/20+sin(frameCount/40)/10);
     scale(1-sin(frameCount/40)/60,1+cos(frameCount/40+20)/60);
   // image(starSheet[(floor(frameCount/10)%2)],0,0,200,200);
    pop();
  }
  if(page==-2){
     push()
  translate(450,325);
  scale(1.5+sin(frameCount/40)/60,1+cos(frameCount/40+20)/60);
  rotate(sin(frameCount/40)/120);
   //tint(255,startZ)
    image(mbg,0,0,900*1.2,650*1.2)
  pop()
    push();
    infoS = min(0,infoS);
    infoS = max(-200,infoS);
    print(infoS)
    translate(450,25+infoS)
    textSize(20);
    noStroke();
    textAlign(CENTER,TOP);
    text(`


Photosynthesis and cellular respiration are two very important processes for plants. They 
produce the ATP plants need for energy. Photosynthesis happens in the chloroplast, an 
organelle containing stacks of thylakoids, called grana. The light reactions, the first part 
of photosynthesis, happens in the thylakoids to produce the ATP and NADPH needed in the Calvin 
Cycle, which happens in the stroma of the chloroplast, outside the thylakoids but inside the 
chloroplast. The Calvin Cycle produces the glucose that cellular respiration needs to make 
ATP. The equation for photosynthesis is 6CO2 + 6H2O + energy from light → C6H12O6 + 6O2. 
Basically, 6 carbon dioxide molecules, 6 water molecules, and some photons, sunlight energy, 
go in, and it forms glucose, which is needed for cellular respiration, and 6 oxygen gas 
molecules, which are exhaled as a byproduct. The many different layers and membranes the 
chloroplast has makes it easier for the plant to have multiple cycles at the same time for 
maximum efficiency, as seen in the Calvin Cycle. Cellular respiration happens in the 
mitochondria, also known as the powerhouse of the cell, because this is where all the energy, 
ATP, is produced. Cellular respiration takes the glucose from photosynthesis and breaks it 
down further, making ATP. The mitochondria has a bean-like shape, maximizing the amount of 
membrane space and space in general to be able to produce more ATP. The equation for cellular 
respiration is C6H12O6 + 6O2 → 6CO2 + 6H2O + ATP. Basically, a glucose molecule and 6 
molecules of oxygen gas go in, and 6 molecules of carbon dioxide, 6 molecules of water, and 
ATP are produced. The only thing that matters is the ATP, though, so the carbon dioxide and 
the water are pushed out of the plant. Photosynthesis and cellular respiration are inverses of 
each other, and together they provide a base for all life on Earth.`,0,0);
    textSize(50);
    strokeWeight(1);
    stroke(0)
        text("Photosynthesis & Cellular Respiration",0,8);

    text("Credits",0,650);
            textSize(20);
    noStroke();
    text(`

Code: HF_ang & Emey
Art: Kate & Feiyan & Leo
Script: Serena & Leo & Emey & HF_ang & Feiyan & Kate`,0,650);
    pop();
    push();
    strokeWeight(5);
    stroke(0);
    noFill();
    exit.work();
    translate(exit.x,exit.y);
    scale(exit.size,exit.size);
    ellipse(0,0,exit.sizeX,exit.sizeY)
    line(-7,-7,7,7);
    line(7,-7,-7,7);
    if(exit.clicked){
       page=-1;
      bMask={im: get(),x: 450, y: 325, yvel: -20,xvel: random(-10,10),r:0,rd: (random(0,100)>50) ? -1 : 1};
    }
    pop();
  }
  
  
  
  if(bMask){
    push();
    for(let i=0; i<1; i++){
    bMask.x+=bMask.xvel*4;
    bMask.y+=bMask.yvel*1;
    bMask.yvel+=3;
    bMask.xvel/=1.01;
    bMask.r+=bMask.xvel/abs(bMask.xvel)/40;
    }
    translate(bMask.x,bMask.y);
    rotate(bMask.r);
    image(bMask.im,0,0,900,650);
    pop();
  }
    noCursor();
  push();
  translate(mouseX,mouseY);
  rotate(sin(frameCount/20)/20);
  let mouseS = mouseIsPressed ? 50 : 40;
  image(headSheet[floor(frameCount/10)%2],-0.5,-1,mouseS,mouseS);
  fill(0)
  //ellipse(0,0,10,10)
  pop();
  if(page>0){
    if(keyIsDown(82)){
      times[page-1].inlevel = false;
      times[page-1].time=0
      page=0;
      objects=[]
      bMask={im: get(),x: 450, y: 325, yvel: -20,xvel: random(-10,10),r:0,rd: (random(0,100)>50) ? -1 : 1};
    }
  }}
var infoS = 0;
var startB = new button(150,550,210,125,1,0.2,1.2,1.3);
var infoB = new button(125,420,150,80,1,0.2,1.2,1.3);
var exit = new button(875,625,30,30,1,0.2,1.2,1.3);
var bMask;
var startZ = 0;
function lvl1(){
  blocks=[];
  objects=[];
  page=1
  friend=new Friend(500,500, [{string: "We’re starting out in Photosystem II. These yellow orbs are photons, the\nsunlight’s energy, that give us the energy necessary to start the\nwhole process. It excites the electron, causing it to jump up. The special pair\nof chlorophyll that absorbs the light in PSII is called P680, because it absorbs\nlight best at 680 nm, a measurement of wavelengths.",zone: "bottom", tx: 50, ty: 50,face: 1},
                 {string: "Since the chlorophyll just lost an electron due to the photons, we need to\nreplace it, or else it gets really, really unstable. Luckily, water's (H2O)\nelectrons can do that for us!",zone: "up", tx: 290, ty: 415,face: -1},
                 {string: "We take an electron from the hydrogen, creating a proton, and we get O2 gas,\nor oxygen, as a byproduct. Since we don’t need it, it gets exhaled out of the\nplant, helping us breathe. This is why we should plant trees.",zone: "up", tx: 290, ty: 415,face: -1},
                 {string: "While we were splitting water to replace the electron, the electron transport\nchain (ETC) was slowly releasing the energy in the electron to pump protons\nacross the membrane, against the concentration gradient, into the thylakoid\nspace, creating an electrochemical gradient.",zone: "bottom", tx: 610, ty: 90,face: 1},
                 {string: "The protons really don’t want to go there, so to force them, it requires energy!\nThe electron loses its energy and goes to Photosystem I (PSI).",zone: "bottom", tx: 610, ty: 90,face: 1},
                 {string: "Since none of the protons want to be where they are, they go to the other side\nof the membrane with a lower concentration through a cute little protein,\nATP Synthase!", zone: "up",tx: 610, ty: 420,face: 1},
                 {string: "As the protons go through this protein, the protein spins, and uses that energy\nto attach a phosphate group to ADP, making ATP! One goal accomplished!", zone: "up",tx: 610, ty: 420,face: 1},
                 {string: "Now, back to the electron. In PSI, the electron gets excited again, this time in\nthe chlorophyll molecule P700, which absorbs wavelengths of light at\n700 nm, and gets grabbed again, but this time it gets grabbed by a molecule\nof A0, a special chlorophyll molecule! After that, it gets passed through\nseveral other primary electron acceptors and finally gets picked up by\nNADP+. ", zone: "up",tx: 610, ty: 420,face: 1},
                 {string: "The NADP+ grabs an electron as well as a hydrogen coming out of ATP\nSynthase, making NADPH. Now, send the ATP and NADPH off to the\nCalvin Cycle in the stroma to automate this process!", zone: "top",tx: 610, ty: 420,face: 1},
                ]);
   let gap = 100;
  blocks[blocks.length] = new Block(450,25,200,520,1000)
  blocks[blocks.length] = new Block(450,650-25,200,480,1000)
    blocks[blocks.length] = new Block(250,25,50000,150,1000)
    blocks[blocks.length] = new Block(250,650-40,500000,220,1000)
    blocks[blocks.length] = new Block(25,250,50,50000,1000)
    blocks[blocks.length] = new Block(900-25,250,50,50000,1000)
  blocks[blocks.length] = new Block(100,120,50,50,1000,"Photon",true,8);
  blocks[blocks.length] = new Block(100+gap,120,50,50,1000,"Phosphate",true,2);
  blocks[blocks.length] = new Block(100+2*gap,120,50,50,1000,"Water",true,2);
  //test
   blocks[blocks.length] = new Block(600,120,50,50,1000,"NADP",true,2);
 // blocks[blocks.length] = new Block(650,120,50,50,1000,"Proton",true,4); ===
 // blocks[blocks.length] = new Block(550,300,50,50,1000,"Water",true,2);
  blocks[blocks.length] = new Block(750,125,50,50,1000,"ETC",false,0);
  blocks[blocks.length] = new Block(750,650-235,50,50,1000,"ATP Synth",false,0);
  blocks[blocks.length] = new Block(750,(650-235+125)/2,50,50,1000,"End",false,0,1);
  blocks[blocks.length] = new Block(150,650-225,50,50,1000,"Chlor",false,0);
  player = new Player(150,300,0,0,2.75,1.6,100,100,0);
}

function lvl2(){
  let gap = 100
  blocks=[];
  objects=[];
  page =2
  friend=new Friend(500,500, [{string: "This molecule is called RuBisCo. It binds carbon\ndioxide to a 5-carbon chain of RuBP to make a 6-carbon chain.\nThis is called carbon fixation. Carbon fixation is needed because\ncarbon dioxide is an inorganic molecule, so we can’t really make\nanything out of it. Grab it and fixate it! This will make an\norganic carbon molecule.",zone: "bottom", tx: 140, ty: 326,face: 1},
                 {string: "Since this six-carbon chain is unstable, it\nquickly splits into two three-carbon chains of PGA.",zone: "bottom", tx: 140, ty: 326,face: 1},
                 {string: "Now, we have to reduce the PGAs into G3Ps. We need the energy\nATP and NADPH provide for this. Reducing something means you’re adding\nan electron, so ATP and NADPH donate an electron to the G3Ps.",zone: "up", tx: 555, ty: 430,face: -1},
                 {string: "The ATP and NADPH get oxidized into ADP and NADP+.\nThese go aaaaaalll the way back to the Light Reactions.",zone: "bottom", tx: 765, ty: 150,face: -1},
                 {string: "We now need to do this… uh… five more times! So six times in total.\nDon’t worry, you got this. It’s not very hard, don’t worry,\nand there will be plenty of challenges later on!\nAfter that, set two aside for glucose production.",zone: "bottom", tx: 560, ty: 300,face: 1},
                 {string: "Soon, the plant can be fed by the glucose made by those two G3Ps.\nNow we just need to use the rest of the G3P to regenerate the RuBP\nfrom the start. This is a cycle, after all! ", zone: "bottom",tx: 765, ty: 150,face: -1},
                 {string: "Put everything here when your done to finish!", zone: "bottom",tx: 765, ty: 150,face: -1},
                ]);
  blocks[blocks.length] = new Block(450,50,900,100,1000)
  blocks[blocks.length] = new Block(450,575,900,175,1000)
  blocks[blocks.length] = new Block(75,height/2,150,height,1000)
  blocks[blocks.length] = new Block(825,height/2,150,height,1000)
  blocks[blocks.length] = new Block(236,314,50,50,1000,"Rubisco",false,0);
  blocks[blocks.length] = new Block(200,150,50,50,1000,"Rubp",true,6);
  blocks[blocks.length] = new Block(200+gap,150,50,50,1000,"CO2",true,6);
  blocks[blocks.length] = new Block(451,416,50,50,1000,"Redox",false,0,"PGA");
  blocks[blocks.length] = new Block(690,281,50,50,1000,"Regen",false,0,"G3P");
  blocks[blocks.length] = new Block(200+gap+gap,150,50,50,1000,"NADPH",true,12);
  blocks[blocks.length] = new Block(200+gap+gap+gap,150,50,50,1000,"ATP",true,18);
  blocks[blocks.length] = new Block(650,150,50,50,1000,"End",false,0,2);
  player = new Player(300,300,0,0,2.75,1.6,100,100,0);
}

function lvl3(){
  blocks=[];
  objects=[];
  page =3
  //250,302
  /*
  Glycolysis: Welcome to the cytoplasm! This is where we will break down glucose to get the components to make ATP in cellular respiration.
First step: Glycolysis, meaning to break down glucose, is a very important step to make the glucose we made usable as energy. Oh, why can’t we just use all the energy in glucose at once? It’s ‘cuz we’d explode! Don’t worry about it. :)
Continued: First, ATP comes in, and gives two of its phosphate groups to glucose. The glucose becomes energized and unstable (again), which breaks it into two carbon chains with a phosphate attached to each.
Continued: Then, they are oxidized, adding another phosphate, and the electrons and hydrogens are taken away and added to NAD+, to make NADH. Now, ADP comes in and takes a phosphate from each, making 2 ATP. That’s more energy for the plant!
  */
  friend = new Friend(500,500,[{string: "Welcome to the cytoplasm! This is where we will break down glucose to get\nthe components to make ATP through cellular respiration.",zone: "bottom", tx: 250, ty: 300,face: 1},
                              {string: "Glycolysis, meaning to break down glucose, is a very important step to\nmake the glucose we made usable as energy. Oh, why can’t we just use all\nthe energy in glucose at once? It’s ‘cuz we’d explode! But don’t worry about it,\ncells slowely use that energy! :D",zone: "bottom", tx: 515, ty: 200,face: 1},
                               {string: "First, ATP comes in, and gives two of its phosphate groups to glucose. The\nglucose becomes energized and unstable (again), which breaks it into two\ncarbon chains with a phosphate attached to each.",zone: "up", tx: 520, ty: 440,face: 1},
                                {string: "Then, they are oxidized, adding another phosphate, and the electrons and\nhydrogens are taken away and added to NAD+, to make NADH. Now, ADP\ncomes in and takes a phosphate from each, making 2 ATP. That’s energy!",zone: "up", tx: 520, ty: 430,face: -1},
                              ]);
  //520,440
  //Walls
  blocks[blocks.length] = new Block(450,0,900,90,1000)
  blocks[blocks.length] = new Block(450,575,900,150,1000)
  blocks[blocks.length] = new Block(25,height/2,40,height,1000)
  blocks[blocks.length] = new Block(895,height/2,150,height,1000)
  blocks[blocks.length] = new Block(680,100,430,200,1000)
  blocks[blocks.length] = new Block(680,540,430,200,1000)
  blocks[blocks.length] = new Block(515,550,100,370,1000)
  blocks[blocks.length] = new Block(515,85,100,450,1000)
  
  //Tables
  blocks[blocks.length] = new Block(620,225,50,50,1000,"Glucose",true,1)
  blocks[blocks.length] = new Block(690,225,50,50,1000,"ATP",true,2)
  blocks[blocks.length] = new Block(770,225,50,50,1000,"ADP",true,2)
  blocks[blocks.length] = new Block(620,400,50,50,1000,"NAD",true,2)
  
  // Areas
  blocks[blocks.length] = new Block(380,416,50,50,1000,"Craft",false,0,"Glycolysis");
  blocks[blocks.length] = new Block(130,416,50,50,1000,"Craft",false,0,"Glycolysis 2");
  blocks[blocks.length] = new Block(250,150,50,50,1000,"End",false,0,3);
  player = new Player(300,300,0,0,2.75,1.6,100,100,0);
}
//LINK REACTION
function lvl4(){
  blocks=[];
  objects=[];
  page =4
  /*
  Link reaction/pyruvate oxidation: Next, after we make the ATP, we still have 2 three carbon chains left over. Of course, since the plant is very efficient and has very few waste products, we will make use of the carbon chains as well.
Step 1: First, the pyruvate, the carbon chain, will give away CO2, and pick up Coenzyme A, or CoA, becoming Acetyl CoA. In the process, NADH is made, which will be useful as an electron carrier later.
Step 2: Acetyl CoA is moved into the mitochondrial matrix, where it will be used in the Krebs Cycle, also known as the Citric Acid Cycle, to make more ATP.
  */
   friend = new Friend(500,500,[{string: "Now that we have made the ATP, we still have 2 three carbon chains left over.\nOf course, since plants are very efficient and has very few waste\nproducts, we will make use of the carbon chains as well.",zone: "bottom", tx: 715, ty: 220,face: -1},
                                {string: "First, the pyruvates, the carbon chains, will give away CO2, and pick up\nCoenzyme A, or CoA, becoming Acetyl CoA. In the process, NADH is made,\nwhich will be useful as an electron carrier later.",zone: "bottom", tx: 715, ty: 220,face: -1},
                                 {string: "Acetyl CoA will then be moved into the mitochondrial matrix, where it will\nbe used in the Krebs Cycle, also known as the Citric Acid Cycle, to make\nmore ATP.",zone: "up", tx: 580, ty: 465,face: -1},
                                
    ]);
  //walls
  blocks[blocks.length] = new Block(width/2,30,900,60,1000)
  blocks[blocks.length] = new Block(width/2,30,900,50,1000)
  blocks[blocks.length] = new Block(50,height/2,100,600,1000)
  blocks[blocks.length] = new Block(810,height/2,180,600,1000)
  blocks[blocks.length] = new Block(width/2,615,900,70,1000)
  blocks[blocks.length] = new Block(175,500,350,300,1000)
  blocks[blocks.length] = new Block(785,490,230,320,1000)
  blocks[blocks.length] = new Block(280,375,550,100,1000)
  blocks[blocks.length] = new Block(760,375,280,100,1000)
  
  //tables
  blocks[blocks.length] = new Block(155,110,50,50,1000,"Pyruvate",true,2)
  blocks[blocks.length] = new Block(235,110,50,50,1000,"NAD",true,2)
  blocks[blocks.length] = new Block(315,110,50,50,1000,"COA",true,2)
  
  //areas
  blocks[blocks.length] = new Block(550,200,50,50,1000,"Craft",false,0,"Pyruvate o");
  blocks[blocks.length] = new Block(width/2,450,50,50,1000,"End",false,0,4);
  player = new Player(230,240,0,0,2.75,1.6,100,100,0);
}
//FERMENTATION
function lvl5(){
  blocks=[];
  objects=[];
  page =5
  friend=new Friend(500,500, [{string: "Sometimes, plants have to ferment to generate energy because oxygen is not\navailable.In the case of our plant, we have to survive regular flooding\nwhich blocks our leaves from performing a link reaction.\nThis plant perform alcohol fermentation, which produces ethanol.",zone: "bottom", tx: 656, ty: 87,face: -1},
                 {string: "The first step of alcohol fermentation is to break these\ntwo pyruvates into acetaldehyde and CO2.",zone: "bottom", tx: 563, ty: 317,face: 1},
                 {string: "Now, we can create ethanol from acetaldehyde and the proton from NADH.\nThis regenerates the NAD+ for glycolysis.",zone: "bottom", tx: 436, ty: 188,face: -1},
                 {string: "Now, we can throw the ethanol out of the cell through the stomata,\npores on the plant’s leaves, and it will get washed away by water.\nThis is very inefficient, but it can help when we don’t have access to oxygen.",zone: "up", tx: 235, ty: 456,face: 1}]);
  //walls
  blocks[blocks.length] = new Block(450,0,900,90,1000)
  blocks[blocks.length] = new Block(450,575,900,150,1000)
  blocks[blocks.length] = new Block(25,height/2,40,height,1000)
  blocks[blocks.length] = new Block(895,height/2,150,height,1000)
  blocks[blocks.length] = new Block(680,100,430,200,1000)
  blocks[blocks.length] = new Block(680,540,430,200,1000)
  blocks[blocks.length] = new Block(515,550,100,370,1000)
  blocks[blocks.length] = new Block(515,85,100,450,1000)
  
  //tables
  blocks[blocks.length] = new Block(130,110,50,50,1000,"Pyruvate",true,2)
  blocks[blocks.length] = new Block(130,430,50,50,1000,"NADH",true,2)
  
  //areas
  blocks[blocks.length] = new Block(690,320,50,50,1000,"Craft",false,0,"Pyruvate b");
  blocks[blocks.length] = new Block(320,180,50,50,1000,"Craft",false,0,"Ethanol");
  blocks[blocks.length] = new Block(333,450,50,50,1000,"End",false,0,5);
  player = new Player(300,300,0,0,2.75,1.6,100,100,0);
}
//KREBS CYCLE
function lvl6(){
  blocks=[];
  objects=[];
  page =6
  friend=new Friend(500,500, [{string: "We take an Acetyl CoA from the link reaction and combine it with\noxaloacetate to form a six carbon molecule, citric acid.",zone: "bottom", tx: 260, ty: 260,face: -1},
                 {string: "Before we progress to Step 2, we have to rearrange the citric acid into\nisocitrate with water to create a more stable molecule, or else we won’t be\nable to go through the rest of the steps!\nThe six carbon chain is much happier in this form.",zone: "bottom", tx: 230, ty: 260,face: 1},
                 {string: "Now, we take isocitrate and NAD+. Isocitrate gets oxidized, and NAD+ gets\nreduced, becoming NADH. One carbon is also lost, merges with O2,\ncreating CO2. NADH goes to the electron transport chain to help\nwith that later.",zone: "bottom", tx: 440, ty: 260,face: 1},
                 {string: "A-ketoglutarate, a five carbon molecule remaining from isocitrate,\ngets oxidized again by NAD+, and the same thing happens\nto the carbon as in the previous step.",zone: "bottom", tx: 640, ty: 260,face: 1},
                 {string: "Succinyl CoA, a four carbon molecule from the previous step, is left over.\nThe CoA is replaced by an inorganic phosphate group, which is then\ntransferred to GDP, making GTP.",zone: "up", tx: 260, ty: 410,face: -1},
                 {string: "Now you may be wondering why we can’t just give the phosphate group to\nGDP, but the reason is that the CoA in Succinyl CoA is unstable,\nso when it detaches it makes energy, which allows for the phosphate\ngroup to be transferred to GDP.", zone: "up",tx: 260, ty: 410,face: -1},
                 {string: "Now we still have a four carbon molecule, called succinate.\nSuccinate gets oxidized again by FAD, and FAD is reduced to FADH2.\nHowever in this step it does not lose a carbon.\nFADH2 goes to the electron transport chain.", zone: "up",tx: 222, ty: 420,face: 1},
                 {string: "We still have a four carbon molecule, called fumarate. Water is added to\nfumarate, turning it into malate.", zone: "up",tx: 440, ty: 420,face: 1},
                 {string: "Malate, still a four-carbon molecule, is oxidized again by NAD+,\nwhich is then reduced to NADH2 which goes to the electron transport chain.\nThen, oxaloacetate is remade by being oxidized, and waits for the next\nAcetyl CoA to start the cycle again. Now we have to do it again!\nThis time you do it on your own, hehe.", zone: "up",tx: 635, ty: 420,face: 1},
                ]);
  //Walls
  blocks[blocks.length] = new Block(450,25,900,100,1000)
  blocks[blocks.length] = new Block(450,575,900,175,1000)
  blocks[blocks.length] = new Block(0,height/2,150,height,1000)
  blocks[blocks.length] = new Block(900,height/2,150,height,1000)
  
  //Tables
  let gap = 75
  blocks[blocks.length] = new Block(130,110,50,50,1000,"Acetyl Coa",true,2)
  blocks[blocks.length] = new Block(130+(gap*1),110,50,50,1000,"NAD",true,6)
  blocks[blocks.length] = new Block(130+(gap*2),110,50,50,1000,"FAD",true,2)
  blocks[blocks.length] = new Block(130+(gap*3),110,50,50,1000,"GDP",true,2)
  blocks[blocks.length] = new Block(130+(gap*4),110,50,50,1000,"Phosphate",true,2)
  blocks[blocks.length] = new Block(130+(gap*5),110,50,50,1000,"Water",true,4)
  blocks[blocks.length] = new Block(130+(gap*6),110,50,50,1000,"Oxaloacetate",true,1)
  
  //Areas
  let gapper = 200
  blocks[blocks.length] = new Block(150,250,50,50,1000,"Redox",false,0,"k1");
  blocks[blocks.length] = new Block(150+(gapper*1),250,50,50,1000,"Redox",false,0,"k2");
  blocks[blocks.length] = new Block(150+(gapper*2),250,50,50,1000,"Redox",false,0,"k3");
  blocks[blocks.length] = new Block(150+(gapper*3),250,50,50,1000,"Redox",false,0,"k4");
  blocks[blocks.length] = new Block(150,400,50,50,1000,"Redox",false,0,"k5");
  blocks[blocks.length] = new Block(150+(gapper*1),400,50,50,1000,"Redox",false,0,"k6");
  blocks[blocks.length] = new Block(150+(gapper*2),400,50,50,1000,"Redox",false,0,"k7");
  blocks[blocks.length] = new Block(150+(gapper*3),400,50,50,1000,"Redox",false,0,"k8");
  blocks[blocks.length] = new Block(750,130,50,50,1000,"End",false,0,6);
  player = new Player(300,300,0,0,2.75,1.6,100,100,0);
}
//ETC
function lvl7(){
  blocks=[];
  objects=[];
  page =7
  /*
  Intro: Now, we are in the inner membrane of the mitochondria. Here, the electron transport chain (ETC) takes place, where the majority of ATP is made.
Step 1: First, remember the NADH we made in the Krebs Cycle? Well that’s going to be really useful here. NADH drops off two of its electrons and a hydrogen ion (proton), and the electrons go on the chain and the proton enters the mitochondrial matrix. FADH2 does the same thing as NADH but drops them off at a different spot.
Step 2: As the electron travels down the ETC, its energy is slowly released, and used to force more protons against the concentration gradient into the intermembrane space. Basically, it’s the same thing as in the light reactions!
Step 3: When the electron hits the bottom of the chain, it needs to go somewhere so it doesn't clog it up, so molecular oxygen, a highly electronegative molecule, which means it loves to take electrons splits into two oxygen atoms, picks it up along with a couple protons, creating two water molecules.
Step 4: Now all the protons are uncomfortably sitting together, but they cannot diffuse through the membrane since there are ions so they have to go through ATP Synthase. ATP Synthase spins while the protons go through, attaching a phosphate group to an ADP molecule. For every glucose molecule that enters cellular respiration, the ETC makes around 30-34 molecules of ATP.

  */
  friend = new Friend(500,500,[{string: "Now, we are in the inner membrane of the mitochondria. Here, the electron\ntransport chain (ETC) takes place, where the majority of ATP is made.",zone: "bottom", tx: 730, ty: 110,face: -1},
                      {string: "First, remember the NADH we made in the Krebs Cycle? Well that’s going\nto be really useful here. NADH drops off two of its electrons and a hydrogen\nion (proton), and the electrons go on the chain and the proton enters the\nmitochondrial matrix. FADH2 does the same thing as NADH but drops\nthem off at a different spot.",zone: "bottom", tx: 530, ty: 100,face: -1},
                               {string: "As the electron travels down the ETC, its energy is slowly released, and\nused to force more protons against the concentration gradient into the\nintermembrane space. Basically, it’s the same thing as in the light reactions!",zone: "bottom", tx: 730, ty: 110,face: -1},
                               {string: "When the electron hits the bottom of the chain, it needs to go somewhere\nso it doesn't clog it up, so molecular oxygen, a highly electronegative\nmolecule, which means it loves to take electrons splits into two\noxygen atoms, picks it up along with a couple protons, creating two water\nmolecules.",zone: "up", tx: 640, ty: 420,face: -1},
                                {string: "Now all the protons are uncomfortably sitting together, but they cannot\ndiffuse through the membrane since there are ions so they have to go through\nATP Synthase. ATP Synthase spins while the protons go through, attaching a\nphosphate group to an ADP molecule. For every glucose molecule that enters\ncellular respiration, the ETC makes around 30-34 molecules of ATP.",zone: "up", tx: 670, ty: 170,face: -1},
                                
    ]);
  //Walls
  blocks[blocks.length] = new Block(450,25,900,100,1000)
  blocks[blocks.length] = new Block(450,575,900,175,1000)
  blocks[blocks.length] = new Block(0,height/2,150,height,1000)
  blocks[blocks.length] = new Block(900,height/2,150,height,1000)
  
  //Tables
  let gap = 75
  blocks[blocks.length] = new Block(130,110,50,50,1000,"NADH",true,10)
  blocks[blocks.length] = new Block(130+(gap*1),110,50,50,1000,"FADH",true,2)
  blocks[blocks.length] = new Block(130+(gap*2),110,50,50,1000,"O",true,6)
  blocks[blocks.length] = new Block(130+(gap*3),110,50,50,1000,"ADP",true,30)
  blocks[blocks.length] = new Block(130+(gap*4),110,50,50,1000,"Phosphate",true,30)
  
  //Areas
  blocks[blocks.length] = new Block(250,250,50,50,1000,"Redox",false,0,"e1");
  blocks[blocks.length] = new Block(200,400,50,50,1000,"Redox",false,0,"e1.5");
  blocks[blocks.length] = new Block(500,400,50,50,1000,"Redox",false,0,"e2");
  blocks[blocks.length] = new Block(550,150,50,50,1000,"Redox",false,0,"e3");
  blocks[blocks.length] = new Block(750,315,50,50,1000,"End",false,0,7);
  player = new Player(300,300,0,0,2.75,1.6,100,100,0);
}
