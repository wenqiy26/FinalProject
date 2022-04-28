let canvas;
let table;
let monthMenu;
let submitButton;
let submitButton_march;
let dateMenu_march;
let happy;
let trophy;
//let ins_button;

function preload() {

  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('js/WendyData.csv', 'csv', 'header');
  happy = loadImage("images/happy.png");
  sad = loadImage("images/sad.png")
  trophy =  loadImage("images/trophy.png")

}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index","-1");
  background(244,241,214);
  fill(244,241,214);
  textSize(10);


  for (var i = 0; i <table.getRowCount(); i++){
      let date = table.getString(i, 'Date');
      let step = table.getString(i, 'Number of Steps Walk');
      let ad = table.getString(i, 'Instagram Ad Interests');
      let rank = table.getString(i, 'Rank');
      let day = table.getString(i, 'Day');
    }


    monthMenu = createSelect();
    monthMenu.option("February or March?")
    submitButton = createButton("Submit")
    monthMenu.option("February");
    monthMenu.option("March");
    //fill(244,241,214);
    //textSize(10);
    dateMenu_march = createSelect();

    submitButton.mousePressed(changeCalendar);
    dateMenu_march.option("Select a date")
    submitButton_march = createButton("Submit")


}
function changeCalendar(){
  if(monthMenu.value()=="March"){
  background(255, 160, 113);
  textSize(50);
  textAlign(CENTER);
  fill(244,241,214);
  text("March 2022",windowWidth/2,90);
  fill(123, 62, 0);
  textSize(30);

  text("SUN",windowWidth/8,160);
  text("MON",windowWidth/8*2,160);
  text("TUE",windowWidth/8*3,160);
  text("WED",windowWidth/8*4,160);
  text("THU",windowWidth/8*5,160);
  text("FRI",windowWidth/8*6,160);
  text("SAT",windowWidth/8*7,160);


  fill(63, 1, 16);
  for (var i = 1; i < 6; i++){
    text(i,windowWidth/8*(2+i),230)
  }
  for (var j = 6; j < 13; j++){
    text(j,windowWidth/8*(j-5),330)
  }
  for (var l = 13; l < 20; l++){
    text(l,windowWidth/8*(l-12),430)
  }
  for (var p = 20; p < 27; p++){
    text(p,windowWidth/8*(p-19),530)
  }
  for (var o = 27; o < 32; o++){
    text(o,windowWidth/8*(o-26),630)
  }

  //dateMenu_march = createSelect();
  //dateMenu_march.option("Select a date")
  //submitButton_march = createButton("Submit")
  for (var date = 1; date < 32; date++){
     dateMenu_march.option(date);
   }
  submitButton_march.mousePressed(changeMarchDate);

}

if(monthMenu.value()=="February"){
  background(244, 136, 154);
  textSize(50);
  textAlign(CENTER);
  fill(244,241,214);
  text("February 2022",windowWidth/2,90);
  fill(123, 62, 0);
  textSize(30);

  text("SUN",windowWidth/8,160);
  text("MON",windowWidth/8*2,160);
  text("TUE",windowWidth/8*3,160);
  text("WED",windowWidth/8*4,160);
  text("THU",windowWidth/8*5,160);
  text("FRI",windowWidth/8*6,160);
  text("SAT",windowWidth/8*7,160);


  fill(63, 1, 16);
  for (var i = 1; i < 6; i++){
    text(i,windowWidth/8*(2+i),230)
  }
  for (var j = 6; j < 13; j++){
    text(j,windowWidth/8*(j-5),330)
  }
  for (var l = 13; l < 20; l++){
    text(l,windowWidth/8*(l-12),430)
  }
  for (var p = 20; p < 27; p++){
    text(p,windowWidth/8*(p-19),530)
  }
  for (var o = 27; o < 29; o++){
    text(o,windowWidth/8*(o-26),630)
  }
  for (var date = 1; date < 29; date++){
     dateMenu_march.option(date);
   }
  submitButton_march.mousePressed(changeFebruaryDate);
}




}
function draw(){

}
function changeMarchDate(){
  background(177,156,217);
  adInterest();
  textAlign(CENTER);
  textSize(45);
  fill(123, 62, 0);
  for(var row =28; row < 60; row++){
    if(dateMenu_march.value()==table.getString(row,'Day')){
      //print(row);
      text(table.getString(row,'Date'),windowWidth/2,130);
      text(table.getString(row,'Number of Steps Walk'),windowWidth/2-70,200);
      text("Steps",windowWidth/2+70,200);
      text("Rank: ",windowWidth/2-30,270);
      text(table.getString(row,'Rank'),windowWidth/2+70,270);
      if(table.getString(row,'Number of Steps Walk')>5000){
      image(happy,windowWidth/2+200,100);
    }
      else{
      image(sad,windowWidth/2+200,100,150,150);
    }
    if(table.getString(row,'Rank')<4){
      image(trophy,windowWidth/2+450,80,200,200);
    }
    }
  }

}
function changeFebruaryDate(){
  background(181, 213, 221);
  adInterest();
  fill(123, 62, 0);
  textSize(45);
  textAlign(CENTER);
  //ins_button = createButton("INSTAGRAM")
  for(var row =0; row < 28; row++){
    if(dateMenu_march.value()==table.getString(row,'Day')){
      text(table.getString(row,'Date'),windowWidth/2,130);
      text(table.getString(row,'Number of Steps Walk'),windowWidth/2-70,200);
      text("Steps",windowWidth/2+70,200);
      text("Rank: ",windowWidth/2-30,270);
      text(table.getString(row,'Rank'),windowWidth/2+70,270);
      if(table.getString(row,'Number of Steps Walk')>5000){
      image(happy,windowWidth/2+200,100);
    }
      else{
      image(sad,windowWidth/2+200,100,150,150);
    }
    if(table.getString(row,'Rank')<4){
      image(trophy,windowWidth/2+450,80,200,200);
    }
    }



  }

  //ins_button.mousePressed(adInterest);
}
function adInterest(){

  textSize(10);
  fill(255);
  for (var ad = 1; ad < 50 ;ad++){
    var num = int(random(0, 100));
    text(table.getString(num,'Instagram Ad Interests'), random(windowWidth), random(windowWidth));
  }
}
