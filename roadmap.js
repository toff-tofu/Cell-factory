var steps = 7;
var nodes = [];
var roadplayer = {x:0,y:0,sizeX:40,sizeY:40}
var camerax = 90
var r;
var tweenR = 0;
var dsx = 0
var dsy = 0
var tdsx = 0
var tdsy = 0
var tx = -1000000000
var linfo = []
var switching = 0
var times = [{time:0,inlevel:false},{time:0,inlevel:false},{time:0,inlevel:false},{time:0,inlevel:false},{time:0,inlevel:false},{time:0,inlevel:false},{time:0,inlevel:false}]
var levels = ["Light Reactions", "Calvin Cycle", "Glycolysis", "The Link Reaction", "Fermentation", "Krebs Cycle", "Electron Transport Chain"]
var areas = ["The Thylakoid Membrane", "The Stroma", "The Cytosol", "The Cytosol/Mitochondria", "The Cytosol", "The Matrix", "The Inner Membrane"]
var begin=new button(0,127.5,50,25,1,0.2,1.2,1.3)
function roadmap() {
  background(20);
  push()
  translate(450,325);
  scale(1.5+sin(frameCount/40)/60,1+cos(frameCount/40+20)/60);
  rotate(sin(frameCount/40)/120);
  image(cbg,0,0,900*1.2,650*1.2)
  pop()
  push()
  translate(450,325);
  scale(1.5+sin(frameCount/40)/60,1+cos(frameCount/40+20)/60);
  rotate(sin(frameCount/40)/120);
    tint(255,map(switching,0,180,0,255))
    image(mbg,0,0,900*1.2,650*1.2)
  pop()
  if (keyIsDown(68)||keyIsDown(39)){
    roadplayer.x += 5
  }
  if (keyIsDown(65)||keyIsDown(37)){
    roadplayer.x -= 5
  }
  roadplayer.x = max(0,roadplayer.x);
roadplayer.x = min(roadplayer.x ,nodes[nodes.length-1].bt.x);
  translate(-camerax+width/2,0)
    for (let i =0;i<nodes.length;i++){
        if (i>=1){
      push()
      strokeWeight(5)
      stroke(255)
      line(nodes[i].bt.x-180,nodes[i-1].bt.y,nodes[i].bt.x,nodes[i].bt.y)
      pop()
      roadplayer.y = (nodes[i-1].bt.y-nodes[i].bt.y)
    }
    }
  for (let i =0;i<nodes.length;i++){
    nodes[i].bt.work()
    push()
    noStroke()
    translate(nodes[i].bt.x,nodes[i].bt.y)
    scale(nodes[i].bt.size,nodes[i].bt.size)
    rotate(noise(i*10)*2*PI);
    if(i>1){
    image(dotsSheet[(floor(frameCount/10)%2)*2],0,0,nodes[i].bt.sizeX*3,nodes[i].bt.sizeY*3);
  }else{
    image(dotsSheet[(floor(frameCount/10)%2)*2+1],0,0,nodes[i].bt.sizeX*3,nodes[i].bt.sizeY*3);
  }
    pop()
  }
  let mapY = 0;
  let progression = 0;
  for(let i=0; i<nodes.length-1; i++){
    progression=nodes[i].bt.x;
    r = (nodes[i].bt.y-nodes[i+1].bt.y)/(nodes[i].bt.x-nodes[i+1].bt.x)
    stroke(255,0,0)
   // line(progression,0,progression,400);
    if(roadplayer.x>=progression&&roadplayer.x<=nodes[i+1].bt.x){
     // print(i)
      //(y-nodes[i].bt.y) = (nodes[i].bt.y-nodes[i+1].bt.y)/(nodes[i].bt.x-nodes[i+1].bt.x) * (x-nodes[i].bt.x)
      //y = ((nodes[i].bt.y-nodes[i+1].bt.y)/(nodes[i].bt.x-nodes[i+1].bt.x) * (roadplayer.x-nodes[i].bt.x) + nodes[i].bt.y)
      
      mapY = ((nodes[i].bt.y-nodes[i+1].bt.y)/(nodes[i].bt.x-nodes[i+1].bt.x) * (roadplayer.x-nodes[i].bt.x) + nodes[i].bt.y);
      break;
    }
  }
  if (roadplayer.x >= nodes[1].bt.x && roadplayer.x <= nodes[2].bt.x){
    switching = roadplayer.x-nodes[1].bt.x
  }else if (roadplayer.x > nodes[2].bt.x){
    switching = 180
  }
  else if (roadplayer.x < nodes[1].bt.x){
    switching = 0
  }
  roadplayer.y=mapY;
  if (dsx <= 1){
    tx = -1000000000
    linfo = []
  }
  for(let i=0; i<nodes.length; i++){
    //print(roadplayer.x,roadplayer.y,nodes[i].bt.x,nodes[i].bt.y)
    nodes[i].time = times[i]
    if(dist(roadplayer.x,roadplayer.y,nodes[i].bt.x,nodes[i].bt.y)<30){
      nodes[i].bt.size+=0.3;
      tx = nodes[i].bt.x
      tdsx = 300
      tdsy = 250
      linfo = [i+1,nodes[i].levels,nodes[i].area,times[i].time]
    //  print('hi')
    }
  }
  push()
      // resetMatrix()
      rectMode(CENTER)
      strokeWeight(5)
      stroke(250)
      fill('rgba(149,149,149,0.68)')
      rect(tx,175,dsx,dsy,20)
  textSize(dsx/12)
  textAlign(CENTER,CENTER)
  fill(255)
  strokeWeight(1)
  textFont('itim')
  text(`LEVEL: ${linfo[0]}\n${linfo[1]}`,tx,145-map(dsy,0,200,0,45))
  textSize(dsx/15)
  text(`Location:\n${linfo[2]}`,tx,127+map(dsy,0,1000,0,130))
  textSize(dsx/17)
  text(`Time: ${linfo[3]?linfo[3]+"s":"Uncompleted"}`,tx,127.5+map(dsy,0,1000,0,350))
  
      pop()
  begin.x=tx+width/2-camerax
  begin.y = 115+map(dsy,0,600,0,350)
  begin.sizeY = map(dsy,0,250,0,35)
  begin.sizeX =map(dsx,0,300,0,90)
  begin.work()
  translate(camerax-width/2,0)
  push()
  translate(begin.x,begin.y)
  scale(begin.size,begin.size)
  strokeWeight(4)
  stroke(255)
  noFill()
  rect(0,0,begin.sizeX,begin.sizeY,15)
  fill(255)
  strokeWeight(1)
  
  textSize(dsx/13)
  textFont("itim")
  textAlign(CENTER,CENTER)
  text("BEGIN",0,0)
  pop()
  stroke(0)
  if (begin.clicked){
    page = linfo[0];
    bMask={im: get(),x: 450, y: 325, yvel: -20,xvel: random(-10,10),r:0,rd: (random(0,100)>50) ? -1 : 1};
    times[page-1].time=0;
    if(page==1){
      lvl1()
      times[0].inlevel =true
    }else{
      times[0].inlevel =false
    }
    if(page==2){
      lvl2()
      times[1].inlevel =true
    }else{
      times[1].inlevel =false
    }
    
    if(page==3){
      lvl3()
      times[2].inlevel =true
    }else{
      times[2].inlevel =false
    }
    if(page==4){
      lvl4()
      times[3].inlevel =true
    }else{
      times[3].inlevel =false
    }
    if(page==5){
      lvl5()
      times[4].inlevel =true
    }else{
      times[4].inlevel =false
    }
    if(page==6){
      lvl6()
      times[5].inlevel =true
    }else{
      times[5].inlevel =false
    }
    if(page==7){
      lvl7()
      times[6].inlevel =true
    }else{
      times[6].inlevel =false
    }
    
  }
  translate(-camerax+width/2,0)
  var check = nodes.findIndex(hold => (dist(roadplayer.x,roadplayer.y,hold.bt.x,hold.bt.y)<30))
  if (check == -1){
    tdsx= 0
    tdsy = 0
    
  }
  
  dsx -= (dsx - tdsx)/ 5
  dsy -= (dsy - tdsy)/ 5
  push()
  translate(roadplayer.x,mapY-5)
  tweenR+=(atan(r)-tweenR)/5;
  rotate(tweenR+sin(frameCount/30)/15)
  noStroke()
  image(headSheet[floor(((frameCount/10)))%2],0,0,100,100)
  pop()
  camerax-=(camerax-roadplayer.x)/20
  translate(camerax-width/2,0)
}