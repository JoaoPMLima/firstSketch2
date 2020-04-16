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

    //solving array issues
    array[0] = arrayOrig[0];
    array[1] = arrayOrig[2];
    array[2] = 500 - arrayOrig[1];
    array[3] = 500 - arrayOrig[3];
    //z = this.zz*Math.abs((array[3] - array[2])/(array[1] - array[0]));
    z = "z";
    console.log(z);
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
    tempString = tempString + this.theFunct(array,false);
    tempString = tempString + "-y+";
    tempString = tempString + z;
    tempString = tempString + "\\right|+\\left(";
    tempString = tempString + this.theFunct(array,false);
    tempString = tempString + "-y+";
    tempString = tempString + z;
    tempString = tempString + "\\right)}{2\\left(";
    tempString = tempString + this.theFunct(array,false);
    tempString = tempString + "-y+";
    tempString = tempString + z;
    tempString = tempString + "\\right)}\\right)\\left(\\frac{\\left|y-\\left(";
    tempString = tempString + this.theFunct(array,false);
    tempString = tempString + "\\right)+";
    tempString = tempString + z;
    tempString = tempString + "\\right|+\\left(y-\\left(";
    tempString = tempString + this.theFunct(array,false);
    tempString = tempString + "\\right)+";
    tempString = tempString + z;
    tempString = tempString + "\\right)}{2\\left(y-\\left(";
    tempString = tempString + this.theFunct(array,false);
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
    tempString = tempString + this.theFunct(array,true);

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

  this.theFunct = function(array,finish){
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
