const { Command, flags } = require('@oclif/command');
const SerialPort = require('../../serialport');


module.exports = class SerialIndex extends Command {
  static get description(){
    return 'Show devices connected via serial to your computer';
  }

  async run() {
    const ports = await SerialPort.list();

    ports.forEach(p => {
      this.log(`${p.path} - ${p.manufacturer} [${p.serialNumber}]`);
    });
  }
}

