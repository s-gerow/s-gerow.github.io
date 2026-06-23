# Rasperry Pi Network Access Server (NAS) Uninterupted Power Supply (UPS)
This file will cover the design process for a custom UPS for a Raspberry Pi NAS. For details on the NAS build and configuration see the related file Raspberry Pi NAS

## Design Requirements
Currently, my NAS is composed of a Raspberry Pi 4, a RADXA RockPi 3A with a Penta SATA Hat connected to two 2.5" HDDs. These are connected to the internet and eachother via a TP-Link 5 port GB switch. All of these elements are powered with their own supply. I want to design a custom power supply which can power each of these elements -- with room for more -- and which supports some level of power control and backup battery power.

At my disposal I have soldering equipment, two Arduino Uno's, and electrical engineering experience. First, let's determine the power requirements. For the RockPi, lets assume I eventually fill all 4 of the sata ports on the hat with 2.5" HHDs, a 3.5" on the eSATA port, and then double that. Each hat can support up to 100Tb of data, meaning we would have access to up to 200Tb storage, more than enough for home use. For more information about the storage management, see the Raspberry Pi NAS project. Similarly, I will assume that I may add a second Raspberry Pi 4 or 5. These assumptions in mind, here is the expected power requirements.

| Device | Current (A) | Voltage (V) |
|----|----|----|
| Raspberry Pi 4 | 3 A | 5.1 V |
| Raspberry Pi 5 | 5 A | 5.1 V |
| Rock Pi 3A w/o SATA Hat | 2 A | 5 V |
| Rock Pi 3A w/ SATA Hat | 8 A (peak) | 5 V (12 V for 3.5") |
| TP-Link | 0.6 A | 5 V |
| Fans | 0.3 A | 5 V |
| Arduino Uno | 0.5 A | 12 V * |

\* This is under ideal circumstances. The arduino can technically accept up to 20 V and as low as 6 V, but for best operation and power of accessories the 12 V input is best if available.

Based on the above requirements we need a power supply which can provide 12 VDC up to 17 A for two fully equiped Rock 3As and two Arduino Unos. We can up this to 20 A to guarentee we have a solid buffer. Additionally, we need to supply 5 V at ~10 A. Similarly we can up this to 12-15 A to ensure a solid buffer.

## Choosing a Power Supply
We now need to choose an AC/DC power supply which can provide the outputs listed above. We have two options: find a power supply with two outputs in the specs we need, use one power supply for each voltage requirement. Unfortunately, finding a power supply with high power outputs and two channels is difficult. The only option I could find which comfortably fit these requirements has been discontinued for four years. If we are willing to forgo an extra RockPi we lower our power requirements signifigantly and more common power supplies become an option.

### Option 1: Dual Output Power Supply
The Mean Well RD-125A is a dual output power supply which provides 5V at up to 12A (7.7A nominal) and 12V at up to 10A (7.7A nominal). With just one RockPi we only need 10A on the 12V line. The 5V line will be close at maximim load but for now we will be well within this supply's ability. Coming in at a casual $30 a piece, this is also an excellent budget option.

### Option 2: Two Single Output Power Supplies
If we are dead set on expandability, we can instead use two high power output supplies, one for each rail. Also from Mean Well there is the LRS-150F-5 which provides 5V up to 22A for $25. And the LRS-350-12 which outputs 12V up to 29A for $35. Therefore, for $60 we can get an abundance of power for exceptional scalability. The main downside here being needing to use two AC power cables to power the system rather than just one.

### Decision
