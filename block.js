class Block{
  constructor(a,b,c,d,e,f,g,h,i){
    this.x = a
    this.y = b
    this.xs = c
    this.ys = d
    this.zs = e;
    this.type = f ?? "Void";
    this.collider = g ?? true;
    this.amount = h ?? 0;
    //REDOX TYPE
    this.rtype = i
    if(this.type!="Void"){
      for(let i=0; i<this.amount;i++){
    objects[objects.length] = new object(this.x,this.y-35,0,null,null,0,0,0,this.type,1.05);
        objects[objects.length-1].angle = 70;
    }
    }
  }
    displayGlyphs(){
    if(this.type=="Chlor"){
       image(ChlorGlyph,this.x,this.y-20,this.xs+110,this.ys+130)
    }
    if(this.type=="ETC"){
       image(ETCGlyph,this.x,this.y-20,this.xs+110,this.ys+130)
    }
    if(this.type=="ATP Synth"){
       image(ATPSglyph,this.x,this.y-20,this.xs+110,this.ys+130)
    }
      if(this.type=="Rubisco"){
       image(rubiscoGlyph,this.x,this.y-20,this.xs+110,this.ys+130)
    }
      if(this.type=="Redox"){
        if(this.rtype=="e3"){
          image(ATPSglyph,this.x,this.y-20,this.xs+110,this.ys+130)
        }else{
       image(redoxGlyph,this.x,this.y-20,this.xs+110,this.ys+130)
        }
    }
      if(this.type=="Regen"){
       image(regenGlyph,this.x,this.y-20,this.xs+110,this.ys+130)
    }
      if(this.type=="Craft"){
       image(regenGlyph,this.x,this.y-20,this.xs+110,this.ys+130)
    }
       if(this.type=="End"){
       image(regenGlyph,this.x,this.y-20,this.xs+110,this.ys+130)
    }
  }
  display(){
    this.work();
    push()
    rectMode(CENTER)
    if(this.type=="Chlor"){
      // image(ChlorGlyph,this.x,this.y-20,this.xs+110,this.ys+130)
      image(Chlor,this.x,this.y+5,this.xs+50,this.ys+50)
    }else if(this.type=="ETC"){
     //  image(ETCGlyph,this.x,this.y-20,this.xs+110,this.ys+130)
      image(ETC,this.x,this.y-4,this.xs+50,this.ys+50)
      fill(255,100)
      //the to be collision
      //ellipse(this.x,this.y+20,150,90);
    }else if(this.type=="ATP Synth"){
      image(ATPS,this.x,this.y-4,this.xs+50,this.ys+50)
    }else if(this.type=="Rubisco"){
      image(rubiscoSprite,this.x,this.y-4,this.xs+50,this.ys+50)
    }
    else if(this.type=="Redox"){
      if(this.rtype=="e3"){
         image(ATPS,this.x,this.y-4,this.xs+50,this.ys+50)
        }else{
      image(redoxSprite,this.x,this.y-4,this.xs+50,this.ys+50)
        }
    }
    else if(this.type=="Regen"){
      image(regenSprite,this.x,this.y-4,this.xs+50,this.ys+50)
    }else if(this.type=="Craft"){
      image(regenSprite,this.x,this.y-4,this.xs+50,this.ys+50)
    }else if(this.type=="End"){
      image(exbox,this.x,this.y+15,this.xs+50,this.ys+50)
    }else if(this.type!="Void"){
     // if(this.type==""){
        image(tableSheet[0],this.x,this.y-5,this.xs+20,this.ys+20)
      noFill()
      }else if(this.type=="Void"){
      fill(255,50)
   //  rect(this.x,this.y,this.xs,this.ys)
    }
    
    pop()
  }
  work(){
    objects.sort((a, b) => {
  return a.id-b.id;
});
    //ellipse(this.x,this.y+20,150,90);
    if(this.type=="Chlor"){
      this.zones([{name: "Photon",amount:8},{name: "Water",amount: 2}],[{name: "Proton",amount: 4},{name: "Electron",amount: 4},{name: "O",amount: 1}]);
      
    }
    if(this.type=="End"&&this.rtype=="1"){
      this.zones([{name: "ATP",amount:2},{name: "O",amount: 1},{name: "NADPH",amount: 2}],[{name: "Star",amount: 50}]);
    }
    if(this.type=="End"&&this.rtype=="2"){
      this.zones([{name: "NADP",amount:12},{name: "ADP",amount: 18},{name: "Rubp",amount: 6},{name: "G3P",amount: 2}],[{name: "Star",amount: 50}]);
    }
    if(this.type=="End"&&this.rtype=="3"){
      this.zones([{name: "Pyruvate",amount:2},{name: "Water",amount: 2},{name: "ATP",amount: 4},{name: "NADH",amount: 2}],[{name: "Star",amount: 50}]);
    }
    if(this.type=="End"&&this.rtype=="4"){
      this.zones([{name: "CO2",amount:2},{name: "NADH",amount: 2},{name: "Acetyl Coa",amount: 2}],[{name: "Star",amount: 50}]);
    }
    if(this.type=="End"&&this.rtype=="5"){
      this.zones([{name: "CO2",amount:2},{name: "NAD",amount: 2},{name: "Ethanol",amount: 2}],[{name: "Star",amount: 50}]);
    }
    if(this.type=="End"&&this.rtype=="6"){
      this.zones([{name: "CO2",amount:4},{name: "NADH",amount: 6},{name: "GTP",amount: 2},{name: "FADH",amount: 2},{name: "Oxaloacetate",amount: 1}],[{name: "Star",amount: 50}]);
    }
    if(this.type=="End"&&this.rtype=="7"){
      this.zones([{name: "ATP",amount:30},{name: "Water",amount: 12},{name: "FAD",amount: 2},{name: "NAD",amount: 10},{name: "Proton Bundle",amount: 6}],[{name: "Star",amount: 50}]);
    }
    
    
    if(this.type=="ATP Synth"){
      this.zones([{name: "Proton",amount:4},{name: "Phosphate",amount: 2}],[{name: "ATP",amount: 2}]);
    }
    if(this.type=="ETC"){
      this.zones([{name: "Electron",amount:4},{name: "NADP",amount: 2}],[{name: "NADPH",amount: 2}]);
    }
    if(this.type=="Rubisco"){
      this.zones([{name: "Rubp",amount:3},{name: "CO2",amount: 3}],[{name: "PGA",amount: 6}]);
    }
    if(this.rtype=="PGA"){
      this.zones([{name: "PGA",amount:6},{name: "NADPH",amount: 6},{name: "ATP",amount:6}],[{name: "G3P",amount: 6},{name: "ADP",amount: 6},{name: "NADP",amount: 6}]);
    }
    if(this.rtype=="G3P"){
      this.zones([{name: "G3P",amount:10},{name: "ATP",amount: 6}],[{name: "ADP",amount: 6},{name: "Rubp",amount:6}]);
    }
    if(this.rtype=="Glycolysis"){
      this.zones([{name: "ATP",amount:2},{name: "Glucose",amount: 1}],[{name: "G3P",amount: 2},{name:"ADP",amount:2}]);
    }
    if(this.rtype=="Glycolysis 2"){
      this.zones([{name: "ADP",amount:2},{name: "NAD",amount: 1},{name: "G3P",amount: 1}],[{name: "Pyruvate",amount: 1},{name:"ATP",amount:2},{name:"NADH",amount:1},{name:"Water",amount:1}]);
    }
    if(this.rtype=="Pyruvate o"){
      this.zones([{name: "Pyruvate",amount:1},{name: "NAD",amount: 1},{name: "COA",amount: 1}],[{name: "CO2",amount: 1},{name:"NADH",amount:1},{name:"Acetyl Coa",amount:1}]);
    }
    if(this.rtype=="Pyruvate b"){
      this.zones([{name: "Pyruvate",amount:1}],[{name: "CO2",amount: 1},{name:"Acetaldehyde",amount:1}]);
    }
    if(this.rtype=="Ethanol"){
      this.zones([{name: "Acetaldehyde",amount:1},{name: "NADH",amount: 1}],[{name:"NAD",amount:1},{name:"Ethanol",amount:1}]);
    }
    
    
    //KREBS
    if(this.rtype=="k1"){
      this.zones([{name: "Acetyl Coa",amount:1},{name: "Oxaloacetate",amount: 1}],[{name:"Citric Acid",amount:1}]);
    }
    if(this.rtype=="k2"){
      this.zones([{name: "Citric Acid",amount:1},{name: "Water",amount: 1}],[{name:"Isocitrate",amount:1}]);
    }
    if(this.rtype=="k3"){
      this.zones([{name: "Isocitrate",amount:1},{name: "NAD",amount: 1}],[{name:"NADH",amount:1},{name:"CO2",amount:1},{name: "Aketoglutarate",amount:1}]);
    }
    if(this.rtype=="k4"){
      this.zones([{name: "Aketoglutarate",amount:1},{name: "NAD",amount: 1}],[{name:"NADH",amount:1},{name:"CO2",amount:1},{name: "Succinyl Coa",amount:1}]);
    }
    if(this.rtype=="k5"){
      this.zones([{name: "Succinyl Coa",amount:1},{name: "Phosphate",amount: 1},{name: "GDP",amount: 1}],[{name:"GTP",amount:1},{name:"Succinate",amount:1}]);
    }if(this.rtype=="k6"){
      this.zones([{name: "Succinate",amount:1},{name: "FAD",amount: 1}],[{name:"FADH",amount:1},{name:"Fumarate",amount:1}]);
    }
    if(this.rtype=="k7"){
      this.zones([{name: "Fumarate",amount:1},{name: "Water",amount: 1}],[{name:"Malate",amount:1}]);
    }
    if(this.rtype=="k8"){
      this.zones([{name: "Malate",amount:1},{name: "NAD",amount: 1}],[{name:"NADH",amount:1},{name:"Oxaloacetate",amount:1}]);
    }
    
    //ETC
    if(this.rtype=="e1"){
      this.zones([{name: "NADH",amount:2}],[{name:"NAD",amount:2},{name: "Proton", amount: 4},{name: "Proton Bundle", amount: 1},{name: "Electron", amount: 4}]);
    }
    if(this.rtype=="e1.5"){
      this.zones([{name: "FADH",amount: 2}],[{name:"FAD",amount:2},{name: "Proton", amount: 4},{name: "Proton Bundle", amount: 1},{name: "Electron", amount: 4}]);
    }
    if(this.rtype=="e2"){
      this.zones([{name: "Electron",amount:4},{name: "Proton",amount: 4},{name: "O",amount: 1}],[{name:"Water",amount:2}]);
    }
    if(this.rtype=="e3"){
      this.zones([{name: "Proton Bundle",amount:6},{name: "Phosphate",amount: 30},{name: "ADP",amount: 30}],[{name:"ATP",amount:30},{name: "Proton Bundle", amount: 6}]);
    }
    
    objects.sort((a, b) => {
  if(a.held&&!b.held) return 1;
  if(!a.held&&b.held) return -1;
  return a.y-b.y;
});
  }
  //[{name: "Photon",base: 0,gap: 0,confirm: 0,amount:8},{name: "Water",base: 0,confirm: 0,gap: 0,amount: 2}]
  //[{name: "Proton",amount: 4},{name: "Electron",amount: 4},{name: "O",amount: 1}]
  zones(data,product){
    angleMode(RADIANS);
    for(let i=0; i<data.length; i++){
      data[i].base = 0;
      data[i].confirm = 0;
      data[i].gap = 0;
      data[i].thre = 0;
    }
    let viable = [];
    for(let c=0; c<data.length; c++){
      viable[viable.length] = data[c].name;
    }
      for(let i =0; i<objects.length; i++){
         let xs = (this.x-objects[i].x);
         let ys = (this.y+20-objects[i].y);
      //  print(2);
          if((xs*xs)/(75*75)+(ys*ys)/(45*45)<=1.2&&!objects[i].held){
            for(let c=0; c<data.length; c++){
              if(objects[i].type==data[c].name){
                data[c].base++;
              }
          }
            }
      }
    let legalized = false;
    for(let i=0; i<data.length;i++){
      if(data[i].base>0){
         legalized=true;
         }
    }
    if(legalized){
        for(let i =0; i<objects.length; i++){
         let xs = (this.x-objects[i].x);
         let ys = (this.y+20-objects[i].y);
    if((xs*xs)/(75*75)+(ys*ys)/(45*45)<=1.2&&!objects[i].held){
            if(!viable.includes(objects[i].type)&&objects[i].z<=0){
               objects[i].xvel-=(this.x-objects[i].x)*0.5;
                objects[i].yvel-=(this.y-objects[i].y)*0.5;
                  shake+=1;
             }
    }
        }
  }
      let combined = false;
       for(let i =0; i<objects.length; i++){
         let xs = (this.x-objects[i].x);
         let ys = (this.y+20-objects[i].y);
          if((xs*xs)/(75*75)+(ys*ys)/(45*45)<=1.2&&!objects[i].held&&viable.includes(objects[i].type)){
            let legal = true;
            for(let c=0; c<data.length; c++){
           //   print(objects[i].type)
              if(data[c].base<data[c].amount){
                 legal = false;
                break;
              }
            }
            if(legal){
                objects[i].x+=(this.x-objects[i].x)/2;
                objects[i].y+=(this.y-objects[i].y)/2;
              objects[i].back = true;
              combined = true;
continue;
            }
             for(let c=0; c<data.length; c++){
              if(objects[i].type==data[c].name){
                
                if(data[c].thre<data[c].amount){
                let div = (data.length-c)/data.length;
              objects[i].x+=((this.x+cos(frameCount/20+(2*PI)/data[c].base*data[c].gap)*60*div)-objects[i].x)/5;
              objects[i].y+=((this.y+sin(frameCount/20+(2*PI)/data[c].base*data[c].gap)*30*div+10)-objects[i].y)/5;
              objects[i].z+=(0-objects[i].z)/5;
              objects[i].xvel/=2;
              objects[i].yvel/=2;
              objects[i].angle+=(frameCount*2-objects[i].angle)/5;
             objects[i].back = false;
              data[c].gap++;
                data[c].thre+=1;
                }else if(objects[i].z<=0){
                 objects[i].xvel-=(this.x-objects[i].x)*0.5;
                objects[i].yvel-=(this.y-objects[i].y)*0.5;
                  shake+=20;
                }
            }
          }
          }
       }
    //confirm
      let created = true
      if(combined){
      for(let i =0; i<objects.length; i++){
         let xs = (this.x-objects[i].x);
         let ys = (this.y-objects[i].y);
          if((xs*xs)/(75*75)+(ys*ys)/(45*45)<=0.1&&!objects[i].held){
             for(let c=0; c<data.length; c++){
              if(objects[i].type==data[c].name){
                data[c].confirm++;
              }
          }
            }
      }
      }
      //print(photons2,waters2)
     for(let c=0; c<data.length; c++){
              if(data[c].confirm<data[c].amount){
                 created = false;
                break;
              }
            }
      if(created){
        for(let i=objects.length-1; i>=0; i--){
           let xs = (this.x-objects[i].x);
         let ys = (this.y-objects[i].y);
          if((xs*xs)/(75*75)+(ys*ys)/(45*45)<=0.1&&!objects[i].held&&viable.includes(objects[i].type)){
            objects.splice(i,1);
          }
        }
        shake+=20;
        for(let c =0; c<product.length; c++){
          for(let i=0; i<product[c].amount; i++){
           objects[objects.length] = new object(this.x,this.y,0,null,null,random(-5,5),random(-5,5),15,product[c].name,1.05);
        }
        }
      }
  }
}