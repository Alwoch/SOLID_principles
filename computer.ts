// computer
   // plugging into a power source
   // powering on / off
   // Loading programs
   // input data through the key board
   // stores data to in-memory
   // processes data in the CPU
   // Out puts data on a monitor
   // handles errors and exceptions

//Computer
  //-inputs data through the CPU
  //-Stores data to in-memory
  //-retrieve data from in-memory
  //-processes data in the CPU
  //-displaying information on a monitor
  //-handles errors and exceptions

//SRP: -states that a class should have only one reason for change(The reason for change being the responsibility that class is meant to serve)

//Dependency inversion Principle: -States that high level modules should not depend on low level modules but instead both should depend on abstractions and interfaces

interface InputDevice{
  inputData(data:any):any;
}

interface Memory{
  memory:Array<any>;
  store(data:any):any;
  retrieve():any;
}

interface DisplayDevice{
  display(data:any):any;
}

interface ErrorHandler{
  handleError(error:any):any;
}

class Keyboard implements InputDevice {
 inputData(data:any){
  console.log(data)
 }
}

class InMemory implements Memory {
 memory:Array<any>=[];

 store(data:any){
  this.memory.push(data);
 }

 retrieve(){
  return this.memory;
 }
}

class CPU {
  process(data:string){
    let information='processed'+data;
    return information;
  }
}

class Monitor implements DisplayDevice{
 display(data:any){
   console.log('displating '+data+ ' on monitor');
 }
}

class Erro implements ErrorHandler{
  handleError(error:any){
    console.log('Error:'+error)
  }
}

 class Computer {
  //Data
  inputDevice:InputDevice;
  memory:Memory;
  processor:CPU;
  displayDevice:DisplayDevice;
  erro:ErrorHandler;

  constructor(inputDevice:InputDevice,memory:Memory,processor:CPU,displayDevice:DisplayDevice,erro:Erro){
    this.inputDevice=inputDevice;
    this.memory=memory;
    this.processor=processor;
    this.displayDevice=displayDevice;
    this.erro=erro;
  }

  //methods
  input(){
   this.inputDevice.inputData('data');
  }

  store(data:any){
   //delegation
   this.memory.store(data);
  }

  retrieve(){
  return this.memory.retrieve();
  }

  process(data:any){
   this.processor.process(data);
  }

  display(data:any){
   this.displayDevice.display(data);
  }

  handleError(error:any){
   this.erro.handleError(error);
  }
 } 

//Test
let computer=new Computer();
computer.displayDevice=new Monitor();
computer.display('ffffff')




