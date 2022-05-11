//adding
//subtract
//multiplication
//normal division
//modulus division
//resetting
//power-on
//power-off
//memory to store and retrieve data
//display (output option)
//Error 


class addition {
 adding(){
  console.log('adding....')
 }
}

class subtraction {
 subtracting(){
  console.log('subtracting....')
 }
}

class division {
 dividing(){
  console.log('dividing....')
 }
}

class modulusDivison {
 modulusDividing(){
  console.log('modulus diving....')
 }
}

class reset {
 resetting(){
  console.log('modulus diving....')
 }
}

class power {
 //powering on
 powerOn(){
  console.log('powering on')
 }

}



//calculator
class calculator {
 //data
 data:any


 //methods
 add(){
  let add=new addition;
  add.adding()

 }

 subtract(){}
 multiply(){}
 divide(){}
 modulusDivision(){}
 reset(){}
 powerOn(){}
 powerOff(){}
 memory(){}
 display(){}
 err(){}

}

let calculator2=new calculator();
calculator2.add();