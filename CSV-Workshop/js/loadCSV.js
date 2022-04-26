let table;
let canvas;
let companyMenu;
let imageArray = [];
let submitButton;

function preload() {

  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('js/personalData.csv', 'csv', 'header');

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index","-1");
  background(0);
  fill(255)

  companyMenu = createSelect();
  companyMenu.option("Select Company")
  submitButton = createButton("Submit")
  //cycle through the table rows
  for (var i = 0; i < table.getRowCount(); i++){
    imageArray[i] = loadImage("images/" + table.getString(i, 'image'));
    //image(imageArray[2], random(windowWidth), random(windowWidth), 30, 30)
    //grab each of the dates
    let date = table.getString(i, 'date');
    let company = table.getString(i, 'company');
    //let frequency = table.getString(i, 'frequency');
    companyMenu.option(company);
    //print dates to the console
    //print(date)
    //print dates on the screen
    //text(date, 50, (i*40)+40)
  //  text(company,100,(i*40)+40);
    //text(frequency,200,(i*40)+40);

  }
  print(imageArray)
  //companyMenu.changed()
  submitButton.mousePressed(changeData);

}
function changeData(){
  background(0);
  textSize(30);
  textAlign(CENTER);
  imageMode(CENTER);
  for (var i = 0; i < table.getRowCount(); i++){
    if(companyMenu.value()==table.getString(i,'company')){
      text(table.getString(i,'company'),windowWidth/2,50)
      text(table.getString(i,'date'),windowWidth/2,90)
      text(table.getString(i,'location'),windowWidth/2,130)
      text(table.getString(i,'service'),windowWidth/2,170)
      text(table.getString(i,'frequency'),windowWidth/2,210)
      for (let j = 0; j < table.getString(i, 'frequency'); j++){
        image(imageArray[i], random(windowWidth), random(windowWidth), 30, 30)
      }
    }
  }

}

function draw(){


}
