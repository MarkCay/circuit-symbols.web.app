const eSymbols = [
  {
    category: 'Wire and connection symbols',
    data: [
      {
        imageUrl: 'symbols/wire.gif',
        category: 'Wire and connection symbols',
        symbolName: 'Wire',
        description:
          'Connects components and passes current easily from one part of a circuit to another.',
      },
      {
        imageUrl: 'symbols/wiresjoined.gif',
        category: 'Wire and connection symbols',
        symbolName: 'Wires joined',
        description:
          "A 'blob' should be drawn where wires are connected (joined), but it is sometimes omitted. Wires connected at 'crossroads' should be staggered slightly to form two T-junctions, as shown on the right.",
      },
      {
        imageUrl: 'symbols/wiresnotjoined.gif',
        category: 'Wire and connection symbols',
        symbolName: 'Wires not joined',
        description:
          "In complex diagrams it is often necessary to draw wires crossing even though they are not connected. The simple crossing on the left is correct but may be misread as a join where the 'blob' has been forgotten. The bridge symbol on the right leaves no doubt!",
      },
    ],
  },
  {
    category: 'Power supply symbols',
    data: [
      {
        imageUrl: 'symbols/cell.gif',
        category: 'Power supply symbols',
        symbolName: 'Cell',
        description:
          'Supplies electrical energy. The larger line is positive (+). A single cell is often called a battery, but strictly speaking a battery is two or more cells joined together.',
      },
      {
        imageUrl: 'symbols/battery.gif',
        category: 'Power supply symbols',
        symbolName: 'Battery',
        description:
          'Supplies electrical energy. A battery is more than one cell. The larger line is positive (+).',
      },
      {
        imageUrl: 'symbols/solarcell.gif',
        category: 'Power supply symbols',
        symbolName: 'Solar Cell',
        description:
          'Converts light to electrical energy. The larger line is positive (+).',
      },
      {
        imageUrl: 'symbols/dcsupply.gif',
        category: 'Power supply symbols',
        symbolName: 'DC supply',
        description:
          'Supplies electrical energy. DC = Direct Current, always flowing in one direction.',
      },
      {
        imageUrl: 'symbols/acsupply.gif',
        category: 'Power supply symbols',
        symbolName: 'AC supply',
        description:
          'Supplies electrical energy. AC = Alternating Current, continually changing direction.',
      },
      {
        imageUrl: 'symbols/fuse.gif',
        category: 'Power supply symbols',
        symbolName: 'Fuse',
        description:
          "A safety device which will 'blow' (melt) if the current flowing through it exceeds a specified value.",
      },
      {
        imageUrl: 'symbols/transformer.gif',
        category: 'Power supply symbols',
        symbolName: 'Transformer',
        description:
          'Two coils of wire linked by an iron core. Transformers are used to step up (increase) and step down (decrease) AC voltages. Energy is transferred between the coils by the magnetic field in the core, there is no electrical connection between the coils.',
      },
      {
        imageUrl: 'symbols/earth.gif',
        category: 'Power supply symbols',
        symbolName: 'Earth (Ground)',
        description:
          'A connection to earth. For some electronic circuits this symbol is used for the 0V (zero volts) of the power supply, but for mains electricity and some radio circuits it really means the earth. It is also known as ground.',
      },
    ],
  },
  {
    category: 'Output device symbols',
    data: [
      {
        imageUrl: 'symbols/lamp.gif',
        category: 'Output device symbols',
        symbolName: 'Lamp (lighting)',
        description:
          'A transducer which converts electrical energy to light. This symbol is used for a lamp providing illumination, for example a car headlamp or torch bulb.',
      },
      {
        imageUrl: 'symbols/lampx.gif',
        category: 'Output device symbols',
        symbolName: 'Lamp (indicator)',
        description:
          'A transducer which converts electrical energy to light. This symbol is used for a lamp which is an indicator, for example a warning light on a car dashboard.',
      },
      {
        imageUrl: 'symbols/heater.gif',
        category: 'Output device symbols',
        symbolName: 'Heater',
        description: 'A transducer which converts electrical energy to heat.',
      },
      {
        imageUrl: 'symbols/motor.gif',
        category: 'Output device symbols',
        symbolName: 'Motor',
        description:
          'A transducer which converts electrical energy to kinetic energy (motion).',
      },
      {
        imageUrl: 'symbols/bell.gif',
        category: 'Output device symbols',
        symbolName: 'Bell',
        description: 'A transducer which converts electrical energy to sound.',
      },
      {
        imageUrl: 'symbols/buzzer.gif',
        category: 'Output device symbols',
        symbolName: 'Buzzer',
        description: 'A transducer which converts electrical energy to sound.',
      },
      {
        imageUrl: 'symbols/coil.gif',
        category: 'Output device symbols',
        symbolName: 'Inductor, Coil, Solenoid',
        description:
          'A coil of wire which creates a magnetic field when current passes through it. There may be an iron core inside the coil. It can be used as a transducer converting electrical energy to mechanical energy by pulling on something magnetically.',
      },
    ],
  },
  {
    category: 'Switch symbols',
    data: [
      {
        imageUrl: 'symbols/pushtomake.gif',
        category: 'Switch symbols',
        symbolName: 'Push-to-make switch',
        description:
          'A push switch allows current to flow only when the button is pressed. This is the switch used to operate a doorbell.',
      },
      {
        imageUrl: 'symbols/pushtobreak.gif',
        category: 'Switch symbols',
        symbolName: 'Push-to-break switch',
        description:
          'This type of push switch is normally closed = on, it is open = off only when the button is pressed.',
      },
      {
        imageUrl: 'symbols/spst.gif',
        category: 'Switch symbols',
        symbolName: 'SPST, on-off switch',
        description:
          'SPST = Single Pole, Single Throw. Current flows only when the switch is in the closed =on position.',
      },
      {
        imageUrl: 'symbols/spdt.gif',
        category: 'Switch symbols',
        symbolName: 'SPDT, 2-way switch',
        description:
          "SPDT = Single Pole, Double Throw. A 2-way changeover switch directs the flow of current to one of two routes according to its position. Some SPDT switches have a central off position and are described as 'on-off-on'.",
      },
      {
        imageUrl: 'symbols/dpst.gif',
        category: 'Switch symbols',
        symbolName: 'DPST switch',
        description:
          'DPST = Double Pole, Single Throw. A dual on-off switch which is often used to switch mains electricity because it can isolate both the live and neutral connections.',
      },
      {
        imageUrl: 'symbols/dpdt.gif',
        category: 'Switch symbols',
        symbolName: 'DPDT switch',
        description:
          'DPDT = Double Pole, Double Throw. This switch can be wired up as a reversing switch for a motor. Some DPDT switches have a central off position.',
      },
      {
        imageUrl: 'symbols/relay.gif',
        category: 'Switch symbols',
        symbolName: 'Relay',
        description:
          'An electrically operated switch, for example a 9V battery circuit connected to the coil can switch an AC mains circuit. The rectangle represents the coil. NO = Normally Open, COM = Common, NC = Normally  Closed.',
      },
    ],
  },
  {
    category: 'Resistor symbols',
    data: [
      {
        imageUrl: 'symbols/resistor.gif',
        category: 'Resistor symbols',
        symbolName: 'Resistor',
        description:
          'A resistor restricts the flow of charge. Uses include limiting the current passing through an LED, and slowly charging a capacitor in a timing circuit. Some publications use the old resistor symbol:',
      },
      {
        imageUrl: 'symbols/vresistor2.gif',
        category: 'Resistor symbols',
        symbolName: 'Rheostat variable resistor',
        description:
          'A rheostat has 2 contacts and is usually used to control current. Uses include controlling lamp brightness or motor speed and changing the rate of flow of charge into a capacitor in a timing circuit.',
      },
      {
        imageUrl: 'symbols/vresistor3.gif',
        category: 'Resistor symbols',
        symbolName: 'Potentiometer variable resistor',
        description:
          'A potentiometer has 3 contacts and is usually used to control voltage. It can be used like this as a transducer converting position (angle of the control spindle) to an electrical signal.',
      },
      {
        imageUrl: 'symbols/presetresistor.gif',
        category: 'Resistor symbols',
        symbolName: 'Preset variable resistor',
        description:
          'A preset is operated with a small screwdriver or similar tool. It is designed to be set when the circuit is made and then left without further adjustment. Presets are cheaper than standard variable resistors so they are sometimes used in projects to reduce the cost.',
      },
    ],
  },
  {
    category: 'Capacitor symbols',
    data: [
      {
        imageUrl: 'symbols/capacitor.gif',
        category: 'Capacitor symbols',
        symbolName: 'Capacitor, unpolarised',
        description:
          'A capacitor stores electric charge. It can be used with a resistor in a timing circuit, for smoothing a supply (it provides a reservoir of charge) and can be used as a filter (blocking DC signals but passing AC signals). Unpolarised capacitors usually have small values, less than 1 F.',
      },
      {
        imageUrl: 'symbols/capacitorpolarised.gif',
        category: 'Capacitor symbols',
        symbolName: 'Capacitor, polarised',
        description:
          'A capacitor stores electric charge. Polarised capacitors must be connected the correct way round. They usually have larger values, 1 F and greater. See above for uses.',
      },
      {
        imageUrl: 'symbols/vcapacitor.gif',
        category: 'Capacitor symbols',
        symbolName: 'Variable capacitor',
        description: 'A variable capacitor is used in a radio tuner.',
      },
      {
        imageUrl: 'symbols/trimmer.gif',
        category: 'Capacitor symbols',
        symbolName: 'Trimmer variable capacitor',
        description:
          'This type of variable capacitor is designed to be set when a circuit is made and then left without further adjustment.',
      },
    ],
  },
  {
    category: 'Diode symbols',
    data: [
      {
        imageUrl: 'symbols/diode.gif',
        category: 'Diode symbols',
        symbolName: 'Diode',
        description:
          'A device which allows current to flow in only one direction.',
      },
      {
        imageUrl: 'symbols/led.gif',
        category: 'Diode symbols',
        symbolName: 'Light Emitting Diode',
        description:
          'A transducer which converts electrical energy to light. Usually abbreviated to LED.',
      },
      {
        imageUrl: 'symbols/zener.gif',
        category: 'Diode symbols',
        symbolName: 'Zener diode',
        description: 'A zener diode can be used to maintain a fixed voltage.',
      },
      {
        imageUrl: 'symbols/photodiode.gif',
        category: 'Diode symbols',
        symbolName: 'Photodiode',
        description: 'A light-sensitive diode.',
      },
    ],
  },
  {
    category: 'Transistor symbols',
    data: [
      {
        imageUrl: 'symbols/transistornpn.gif',
        category: 'Transistor symbols',
        symbolName: 'Transistor NPN',
        description:
          'A transistor amplifies current and can be used with other components to make an amplifier or switching circuit. This symbol is for a bipolar junction transistor (BJT), the type you are most likely to use at first.',
      },
      {
        imageUrl: 'symbols/transistorpnp.gif',
        category: 'Transistor symbols',
        symbolName: 'Transistor PNP',
        description:
          'A transistor amplifies current and can be used with other components to make an amplifier or switching circuit. This symbol is for a bipolar junction transistor (BJT), the type you are most likely to use at first.',
      },
      {
        imageUrl: 'symbols/phototransistor.gif',
        category: 'Transistor symbols',
        symbolName: 'Phototransistor',
        description: 'A light-sensitive transistor.',
      },
    ],
  },
  {
    category: 'Audio and Radio symbols',
    data: [
      {
        imageUrl: 'symbols/microphone.gif',
        category: 'Audio and Radio symbols',
        symbolName: 'Microphone',
        description: 'A transducer which converts sound to electrical energy.',
      },
      {
        imageUrl: 'symbols/earphone.gif',
        category: 'Audio and Radio symbols',
        symbolName: 'Earphone',
        description: 'A transducer which converts electrical energy to sound.',
      },
      {
        imageUrl: 'symbols/loudspeaker.gif',
        category: 'Audio and Radio symbols',
        symbolName: 'Loudspeaker',
        description: 'A transducer which converts electrical energy to sound.',
      },
      {
        imageUrl: 'symbols/piezospeaker.gif',
        category: 'Audio and Radio symbols',
        symbolName: 'Piezo Transducer',
        description: 'A transducer which converts electrical energy to sound.',
      },
      {
        imageUrl: 'symbols/amplifier.gif',
        category: 'Audio and Radio symbols',
        symbolName: 'Amplifier (general symbol)',
        description:
          'An amplifier circuit with one input. Really this is a block diagram symbol because it represents a circuit rather than just one component.',
      },
      {
        imageUrl: 'symbols/aerial.gif',
        category: 'Audio and Radio symbols',
        symbolName: 'Aerial (Antenna)',
        description:
          'A device to receive or transmit radio signals. It is also known as an antenna.',
      },
    ],
  },
  {
    category: 'Meters and Oscilloscope',
    data: [
      {
        imageUrl: 'symbols/voltmeter.gif',
        category: 'Meters and Oscilloscope',
        symbolName: 'Voltmeter',
        description:
          "Measures voltage. The proper name for voltage is 'potential difference' but voltage is more widely used.",
      },
      {
        imageUrl: 'symbols/ammeter.gif',
        category: 'Meters and Oscilloscope',
        symbolName: 'Ammeter',
        description: 'Measures current.',
      },
      {
        imageUrl: 'symbols/galvanometer.gif',
        category: 'Meters and Oscilloscope',
        symbolName: 'Galvanometer',
        description:
          'A very sensitive meter used to measure tiny currents, usually 1mA or less.',
      },
      {
        imageUrl: 'symbols/ohmmeter.gif',
        category: 'Meters and Oscilloscope',
        symbolName: 'Ohmmeter',
        description:
          'Measures resistance. Most multimeters have an ohmmeter setting.',
      },
      {
        imageUrl: 'symbols/oscilloscope.gif',
        category: 'Meters and Oscilloscope',
        symbolName: 'Oscilloscope',
        description:
          "An oscilloscope is used to display the 'shape' of electrical signals - showing how they vary with time. It can be used to measure voltage and time periods.",
      },
    ],
  },
  {
    category: 'Sensors (input devices)',
    data: [
      {
        imageUrl: 'symbols/ldr.gif',
        category: 'Sensors (input devices)',
        symbolName: 'LDR',
        description:
          'A transducer which converts brightness (light) to resistance (an electrical property). LDR = Light Dependent Resistor',
      },
      {
        imageUrl: 'symbols/thermistor.gif',
        category: 'Sensors (input devices)',
        symbolName: 'Thermistor',
        description:
          'A transducer which converts temperature (heat) to resistance (an electrical property).',
      },
    ],
  },
  {
    category: 'Logic gate symbols',
    data: [
      {
        imageUrl: 'symbols/not.gif',
        category: 'Logic gate symbols',
        symbolName: 'NOT',
        description:
          "A NOT gate can only have one input. The 'o' on the output means 'not'. The output of a NOT gate is the inverse (opposite) of its input, so the output is true when the input is false. A NOT gate is also called an inverter.",
      },
      {
        imageUrl: 'symbols/and.gif',
        category: 'Logic gate symbols',
        symbolName: 'AND',
        description:
          'An AND gate can have two or more inputs. The output of an AND gate is true when all its inputs are true.',
      },
      {
        imageUrl: 'symbols/nand.gif',
        category: 'Logic gate symbols',
        symbolName: 'NAND',
        description:
          "A NAND gate can have two or more inputs. The 'o' on the output means 'not' showing that it is a Not AND gate. The output of a NAND gate is true unless all its inputs are true.",
      },
      {
        imageUrl: 'symbols/or.gif',
        category: 'Logic gate symbols',
        symbolName: 'OR',
        description:
          'An OR gate can have two or more inputs. The output of an OR gate is true when at least one of its inputs is true.',
      },
      {
        imageUrl: 'symbols/nor.gif',
        category: 'Logic gate symbols',
        symbolName: 'NOR',
        description:
          "A NOR gate can have two or more inputs. The 'o' on the output means 'not' showing that it is a Not OR gate. The output of a NOR gate is true when none of its inputs are true.",
      },
      {
        imageUrl: 'symbols/exor.gif',
        category: 'Logic gate symbols',
        symbolName: 'EX-OR',
        description:
          'An EX-OR gate can only have two inputs. The output of an EX-OR gate is true when its inputs are different (one true, one false).',
      },
      {
        imageUrl: 'symbols/exnor.gif',
        category: 'Logic gate symbols',
        symbolName: 'EX-NOR',
        description:
          "An EX-NOR gate can only have two inputs. The 'o' on the output means 'not' showing that it is a Not EX-OR gate. The output of an EX-NOR gate is true when its inputs are the same (both true or both false).",
      },
    ],
  },
]

const constants = Object.freeze({
  eSymbols,
})

export type Symbol = {
  imageUrl: string
  category: string
  symbolName: string
  description: string
}

export type SymbolCategory = {
  category: string
  data: Symbol[]
}

export default constants
