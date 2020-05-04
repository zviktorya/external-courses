function ElectricalAppliances(name, power) {
    this.name = name;
    this.power = power;
    this.isTurnOn = false;

    this.turnOn = function () {
        this.isTurnOn = true;
    }

    this.turnOff = function () {
        this.isTurnOn = false;
    }
}

function Wired(name, power, cordLength) {
    ElectricalAppliances.call(this, name, power);
    this.cordLength = cordLength;
}

function Wireless(batteryPower) {
    ElectricalAppliances.call(this);
    this.batteryPower = batteryPower;
}

function Room(name) {
    this.name = name;
    this.devices = [];
    this.totalPower = 0;

    this.addDevice = function (device) {
        this.devices.push(device);
    }

    this.findDeviceByName = function (name) {
        return this.devices.find(function (device) {
            return device.name === name;
        })
    }

    this.turnOnDevice = function (name) {
        const device = this.findDeviceByName(name);
        if (device) {
            device.turnOn();
            this.totalPower += device.power;
        }
    }
}

const iron = new Wired('Tefal', 220, 5);
const tv = new Wired('Sony',220,4);
const conditioner = new Wired('General', 220, 2);
const vacuumCleaner = new Wired('LG', 220, 1000);
const room = new Room('bedroom');
room.addDevice(iron);
room.addDevice(vacuumCleaner);
room.addDevice(tv);
room.addDevice(conditioner);
room.turnOnDevice('Tefal');
room.turnOnDevice('Sony');
room.turnOnDevice('LG');

console.log(room);