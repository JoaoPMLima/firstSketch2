let array = [];
let tempArray = [];
let starting = true;
var func;
let zz = 7;

function setup() {
  // put setup code here
  createCanvas(500,500);
}

function mousePressed(){
  if(starting){
    tempArray = [];
    tempArray.push(mouseX);
    tempArray.push(mouseY);
    array.push(tempArray);
    starting = false;
  } else{
    tempArray.push(mouseX);
    tempArray.push(mouseY);
    array[array.length - 1] = tempArray;
    starting = true;
  }
}

function keyPressed(){
  func = new createFunction("0=",zz);
  for(var i = 0; i < array.length; i++){
    func.addParam(array[i]);
    if(i == array.length - 2 && !starting){
      i++;
    }
  }
  func.log();
}

function draw() {
  // put drawing code here
  background(0);
  stroke(255);
  for(var i = 0; i < array.length; i++){
    if(!starting && i == array.length - 1){
      line(array[i][0],array[i][1],mouseX,mouseY);
    } else{
      line(array[i][0],array[i][1],array[i][2],array[i][3]);
    }
  }
}
