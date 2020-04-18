function createFunction(string,zz){
  this.string = string;
  this.start = true;
  this.parts = [];
  let z;
  this.zz = zz;

  this.addParam = function(arrayOrig){
    //declarations
    let tempString = "";
    let array = [];
    let moreThan45 = false;
    //solving array issues
    //arrayOrig = [x1,y1,x2,y2]
    array[0] = arrayOrig[0]; //x1
    array[1] = arrayOrig[2]; //x2
    array[2] = 500 - arrayOrig[1]; //y1
    array[3] = 500 - arrayOrig[3]; //y2
    //z = this.zz*Math.abs((array[3] - array[2])/(array[1] - array[0]));
    z = "z";
    console.log(z);
    //array is currently [x1,x2,y1,y2]
    if(array[0] < array[1]){
      array.push(array[0]);
      array.push(array[1]);
    } else {
      array.push(array[1]);
      array.push(array[0]);
    }
    if(array[2] < array[3]){
      array.push(array[2]);
      array.push(array[3]);
    } else {
      array.push(array[3]);
      array.push(array[2]);
    }
    //array is currently [x1,x2,y1,y2,xm,xM,ym,yM]

    //if deltaY is bigger than deltaX set moreThan45 to true
    if((array[7]-array[6]) > (array[5] - array[4])){
      moreThan45 = true;
    }

    //start
    tempString = tempString + "\\left(";

    //x limitations
    tempString = tempString + "\\left(\\frac{\\left(\\left|x-";
    tempString = tempString + array[4];
    tempString = tempString + "\\right|+x-";
    tempString = tempString + array[4];
    tempString = tempString + "\\right)}{2\\left(x-";
    tempString = tempString + array[4];
    tempString = tempString + "\\right)}\\right)\\left(\\frac{\\left(\\left|";
    tempString = tempString + array[5];
    tempString = tempString + "-x\\right|+";
    tempString = tempString + array[5];
    tempString = tempString + "-x\\right)}{2\\left(";
    tempString = tempString + array[5];
    tempString = tempString + "-x\\right)}\\right)";

    //function-boundary limitations

    tempString = tempString + "\\left(\\frac{\\left|";
    tempString = tempString + this.theFunct(array,false,moreThan45);
    tempString = tempString + "-";
    if(moreThan45){
      tempString = tempString + "x";
    } else {
      tempString = tempString + "y";
    }
    tempString = tempString + "+";
    tempString = tempString + z;
    tempString = tempString + "\\right|+\\left(";
    tempString = tempString + this.theFunct(array,false,moreThan45);
    tempString = tempString + "-";
    if(moreThan45){
      tempString = tempString + "x";
    } else {
      tempString = tempString + "y";
    }
    tempString = tempString + "+";
    tempString = tempString + z;
    tempString = tempString + "\\right)}{2\\left(";
    tempString = tempString + this.theFunct(array,false,moreThan45);
    tempString = tempString + "-";
    if(moreThan45){
      tempString = tempString + "x";
    } else {
      tempString = tempString + "y";
    }
    tempString = tempString + "+";
    tempString = tempString + z;
    tempString = tempString + "\\right)}\\right)\\left(\\frac{\\left|";
    if(moreThan45){
      tempString = tempString + "x";
    } else {
      tempString = tempString + "y";
    }
    tempString = tempString + "-\\left(";
    tempString = tempString + this.theFunct(array,false,moreThan45);
    tempString = tempString + "\\right)+";
    tempString = tempString + z;
    tempString = tempString + "\\right|+\\left(";
    if(moreThan45){
      tempString = tempString + "x";
    } else {
      tempString = tempString + "y";
    }
    tempString = tempString + "-\\left(";
    tempString = tempString + this.theFunct(array,false,moreThan45);
    tempString = tempString + "\\right)+";
    tempString = tempString + z;
    tempString = tempString + "\\right)}{2\\left(";
    if(moreThan45){
      tempString = tempString + "x";
    } else {
      tempString = tempString + "y";
    }
    tempString = tempString + "-\\left(";
    tempString = tempString + this.theFunct(array,false,moreThan45);
    tempString = tempString + "\\right)+";
    tempString = tempString + z;
    tempString = tempString + "\\right)}\\right)";

    //y limitations

    tempString = tempString + "\\left(\\frac{\\left(\\left|y-";
    tempString = tempString + array[6];
    tempString = tempString + "\\right|+y-";
    tempString = tempString + array[6];
    tempString = tempString + "\\right)}{2\\left(y-";
    tempString = tempString + array[6];
    tempString = tempString + "\\right)}\\right)\\left(\\frac{\\left(\\left|";
    tempString = tempString + array[7];
    tempString = tempString + "-y\\right|+";
    tempString = tempString + array[7];
    tempString = tempString + "-y\\right)}{2\\left(";
    tempString = tempString + array[7];
    tempString = tempString + "-y\\right)}\\right)";


    //actual function
    tempString = tempString + this.theFunct(array,true,moreThan45);

    //finish
    tempString = tempString + "-1\\right)";
    if(!this.start){
      this.string = this.string + "\\cdot"
    } else {
      this.start = false;
    }
    this.string = this.string + tempString;
    this.parts.push("0="+tempString);
  }

  this.log = function(){
    console.log(this.string);
  }


  this.theFunct = function(array,finish,moreThan45){
    if(moreThan45){
      return this.theFunctMoreThan45(array,finish);
    } else {
      return this.theFunctLessThan45(array,finish);
    }
  }

  //function for less than 45 degrees
  this.theFunctLessThan45 = function(array,finish){
    let tempString = "";
    tempString = tempString + "\\left(";
    tempString = tempString + array[2];
    tempString = tempString + "+\\left(x-";
    tempString = tempString + array[0];
    tempString = tempString + "\\right)\\left(\\frac{";
    tempString = tempString + array[3];
    tempString = tempString + "-";
    tempString = tempString + array[2];
    tempString = tempString + "}{";
    tempString = tempString + array[1];
    tempString = tempString + "-";
    tempString = tempString + array[0];
    tempString = tempString + "}\\right)";
    if(finish){
      tempString = tempString + "-y+1";
    }
    tempString = tempString + "\\right)";
    return tempString;
  }

  //function for more than 45 degrees
  this.theFunctMoreThan45 = function(array,finish){
    let tempString = "";
    tempString = tempString + "\\left(";
    tempString = tempString + array[0];
    tempString = tempString + "+\\left(y-";
    tempString = tempString + array[2];
    tempString = tempString + "\\right)\\left(\\frac{";
    tempString = tempString + array[1];
    tempString = tempString + "-";
    tempString = tempString + array[0];
    tempString = tempString + "}{";
    tempString = tempString + array[3];
    tempString = tempString + "-";
    tempString = tempString + array[2];
    tempString = tempString + "}\\right)";
    if(finish){
      tempString = tempString + "-x+1";
    }
    tempString = tempString + "\\right)";
    return tempString;
  }

  this.abs = function(value){
    if(value < 0){
      value*=-1;
    }
    return value;
  }
}




/*

\\left(\\frac{\\left|
2x
-y+
z
\\right|+\\left(
2x
-y+
z
\\right)}{2\\left(
2x
-y+
z
\\right)}\\right)\\left(\\frac{\\left|y-\\left(
2x
\\right)+
z
\\right|+\\left(y-\\left(
2x
\\right)+
z
\\right)}{2\\left(y-\\left(
2x
\\right)+
z
\\right)}\\right)

*/






/*

tempString = tempString + "\\left(";
tempString = tempString + array[2];
tempString = tempString + "+\\left(x-";
tempString = tempString + array[0];
tempString = tempString + "\\right)\\left(\\frac{";
tempString = tempString + array[3];
tempString = tempString + "-";
tempString = tempString + array[2];
tempString = tempString + "}{";
tempString = tempString + array[1];
tempString = tempString + "-";
tempString = tempString + array[0];
tempString = tempString + "}\\right)-y+1\\right)";

*/
