// computer
// plugging into a power source
// powering on / off
// Loading programs
// input data through the key board
// stores data to in-memory
// processes data in the CPU
// Out puts data on a monitor
// handles errors and exceptions
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
class Erro {
    handleError(error) {
        console.log('Error:' + error);
    }
}
class Computer {
    constructor(inputDevice, memory, processor, displayDevice, erro) {
        this.inputDevice = inputDevice;
        this.memory = memory;
        this.processor = processor;
        this.displayDevice = displayDevice;
        this.erro = erro;
    }
    //methods
    input() {
        this.inputDevice.inputData('data');
    }
    store(data) {
        //delegation
        this.memory.store(data);
    }
    retrieve() {
        return this.memory.retrieve();
    }
    process(data) {
        this.processor.process(data);
    }
    display(data) {
        this.displayDevice.display(data);
    }
    handleError(error) {
        this.erro.handleError(error);
    }
}
//Test
let computer = new Computer();
computer.displayDevice = new Monitor();
computer.display('ffffff');
