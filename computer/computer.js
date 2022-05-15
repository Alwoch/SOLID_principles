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
class Keyboard {
    inputData(data) {
        console.log(data);
    }
}
class InMemory {
    constructor() {
        this.memory = [];
    }
    store(data) {
        this.memory.push(data);
    }
    retrieve() {
        return this.memory;
    }
}
class CPU {
    process(data) {
        let information = 'processed' + data;
        return information;
    }
}
class Monitor {
    display(data) {
        console.log('displating ' + data + ' on monitor');
    }
}
class ErrorHandler {
    handleError(error) {
        console.log('Error:' + error);
    }
}
class Computer {
    constructor() {
        //Data
        this.memory = [];
    }
    //methods
    input() {
        let keyBoard = new Keyboard();
        keyBoard.inputData('data');
    }
    store(data) {
        //delegation
        let inMemory = new InMemory();
        inMemory.store(data);
    }
    retrieve() {
        let inMemory = new InMemory();
        return inMemory.retrieve();
    }
    process(data) {
        let processor = new CPU;
        processor.process(data);
    }
    display(data) {
        let monitor = new Monitor();
        monitor.display(data);
    }
    handleError(error) {
        let errorHandler = new ErrorHandler();
        errorHandler.handleError(error);
    }
}
//Test
let computer = new Computer();
computer.handleError('errrrr');