// http://localhost:1880/tp/overview
const overView = {
  "TGM-4": {
    Shift_A: {
      Production: 58657,
      Power: 42.39,
      StopTime: 73.4,
      Speed: 0,
    },
    Shift_B: {
      Production: 131240,
      Power: 0,
      StopTime: 30,
      Speed: 0,
    },
    Shift_C: {
      Production: 118286,
      Power: 0,
      StopTime: 49,
      Speed: 0,
    },
    RunningStatus: 0,
    OEE: 84.01,
    OR: 0,
  },
  "TGM-3": {
    Shift_A: {
      Production: 6664,
      Power: 29.53,
      StopTime: 211.4,
      Speed: 0,
    },
    Shift_B: {
      Production: 28941,
      Power: 0,
      StopTime: 326,
      Speed: 0,
    },
    Shift_C: {
      Production: 31101,
      Power: 0,
      StopTime: 250,
      Speed: 0,
    },
    RunningStatus: 0,
    OEE: 22.09,
    OR: 0,
  },
  "TGM-2": {
    Shift_A: {
      Production: 24654,
      Power: 47.35,
      StopTime: 140.55,
      Speed: 282,
    },
    Shift_B: {
      Production: 0,
      Power: 0,
      StopTime: 334,
      Speed: 0,
    },
    Shift_C: {
      Production: 0,
      Power: 0,
      StopTime: 94,
      Speed: 0,
    },
    RunningStatus: 0,
    OEE: 0,
    OR: 0,
  },
  "TGM-1": {
    Shift_A: {
      Production: 0,
      Power: 0,
      StopTime: 272.4,
      Speed: 0,
    },
    Shift_B: {
      Production: 0,
      Power: 0,
      StopTime: 480,
      Speed: 0,
    },
    Shift_C: {
      Production: 0,
      Power: 0,
      StopTime: 480,
      Speed: 0,
    },
    RunningStatus: 0,
    OEE: 0,
    OR: 0,
  },
  "Norden-1": {
    Shift_A: {
      Production: 26827,
      Power: 0,
      StopTime: 56.4,
      Speed: 0,
    },
    Shift_B: {
      Production: 56783,
      Power: 0,
      StopTime: 42,
      Speed: 0,
    },
    Shift_C: {
      Production: 62512,
      Power: 0,
      StopTime: 480,
      Speed: 0,
    },
    RunningStatus: 0,
    OEE: 0,
    OR: 0,
  },
  "Norden-2": {
    Shift_A: {
      Production: 23771,
      Power: 0,
      StopTime: 68.55,
      Speed: 140,
    },
    Shift_B: {
      Production: 40172,
      Power: 0,
      StopTime: 118,
      Speed: 0,
    },
    Shift_C: {
      Production: 53389,
      Power: 0,
      StopTime: 480,
      Speed: 0,
    },
    RunningStatus: 0,
    OEE: 0,
    OR: 0,
  },
  "PACMAC-1": {
    Shift_A: {
      Production: 0,
      Power: 0,
      StopTime: 0,
      Speed: null,
    },
    Shift_B: {
      Production: 0,
      Power: 0,
      StopTime: 0,
      Speed: null,
    },
    Shift_C: {
      Production: 0,
      Power: 0,
      StopTime: 0,
      Speed: null,
    },
    RunningStatus: 0,
    OEE: 0,
    OR: 0,
  },
  "PACMAC-2": {
    Shift_A: {
      Production: 14468,
      Power: 0,
      StopTime: 0,
      Speed: null,
    },
    Shift_B: {
      Production: 14468,
      Power: 0,
      StopTime: 0,
      Speed: null,
    },
    Shift_C: {
      Production: 14468,
      Power: 0,
      StopTime: 0,
      Speed: null,
    },
    RunningStatus: 0,
    OEE: 0,
    OR: 0,
  },
  "PACMAC-3": {
    Shift_A: {
      Production: 0,
      Power: 0,
      StopTime: 0,
      Speed: null,
    },
    Shift_B: {
      Production: 0,
      Power: 0,
      StopTime: 0,
      Speed: null,
    },
    Shift_C: {
      Production: 0,
      Power: 0,
      StopTime: 0,
      Speed: null,
    },
    RunningStatus: 0,
    OEE: 0,
    OR: 0,
  },
  "PACMAC-4": {
    Shift_A: {
      Production: 25249,
      Power: 0,
      StopTime: 0,
      Speed: null,
    },
    Shift_B: {
      Production: 47138,
      Power: 0,
      StopTime: 0,
      Speed: null,
    },
    Shift_C: {
      Production: 45006,
      Power: 0,
      StopTime: 0,
      Speed: null,
    },
    RunningStatus: 0,
    OEE: 0,
    OR: 0,
  },
  "PACMAC-5": {
    Shift_A: {
      Production: 0,
      Power: 0,
      StopTime: 0,
      Speed: null,
    },
    Shift_B: {
      Production: 0,
      Power: 0,
      StopTime: 0,
      Speed: null,
    },
    Shift_C: {
      Production: 0,
      Power: 0,
      StopTime: 0,
      Speed: null,
    },
    RunningStatus: 0,
    OEE: 0,
    OR: 0,
  },
};

// http://localhost:1880/tp/utility/constants
export const tpUtilityConstant = {
  Sound: {
    "Meter-1": 82.77,
    "Meter-2": 54,
    "Meter-3": 45,
  },
  Bag: {
    "Bag-1": 0,
    "Bag-2": 0,
    "Bag-3": 0,
  },
  Mixer: {
    "Mixer-1": {
      BatchNo: 0,
      Ph: 0,
      Viscosity: 120000,
    },
    "Mixer-2": {
      BatchNo: 522,
      Ph: 6.31,
      Viscosity: 139000,
    },
    "Mixer-3": {
      BatchNo: 526,
      Ph: 6.38,
      Viscosity: 132000,
    },
    "Mixer-4": {
      BatchNo: 0,
      Ph: 6.69,
      Viscosity: 136000,
    },
    "Mixer-5": {
      BatchNo: 0,
      Ph: 0,
      Viscosity: 0,
    },
  },
  Shift: {
    "Shift-A": {
      Power: 759.44,
      Steam: 0,
      Air: 2837.04,
      Water: 0,
    },
    "Shift-B": {
      Power: 1086.25,
      Steam: 0,
      Air: 5147.16,
      Water: 0,
    },
    "Shift-C": {
      Power: 1172.69,
      Steam: 0,
      Air: 5442.52,
      Water: 0,
    },
  },
};

// http://localhost:1880/tp/utility/dbmeter

// post body
// {
//   "startDate": 1702339200,
//   "endDate": 1702425599
// }

const dbMeter = {
  "Meter-015": {
    val: 45,
    date: "2023-12-12 11:32:55",
  },
  "Meter-014": {
    val: 54,
    date: "2023-12-12 11:32:55",
  },
  "Meter-013": {
    val: 82.77,
    date: "2023-12-12 11:32:55",
  },
};

// http://localhost:1880/tp/utility/tphistorical

// post body
// {
//   "startDate": 1637880000,
//   "endDate": 1637966400,
//   "type": "water"
// }

const tp = [
  {
    TotalVal: 0,
    DateAndTime: "2023-12-12T11:32:55.000Z",
  },
];

// http://localhost:1880/tp/tgm4

export const tgmData = {
  Shift: {
    "Shift-A": {
      Production: [
        {
          Key: "TGM",
          Value: 58657,
        },
        {
          Key: "ULMA-A",
          Value: 0,
        },
        {
          Key: "ULMA-B",
          Value: 0,
        },
        {
          Key: "Case-Packer-A",
          Value: 0,
        },
        {
          Key: "Case-Packer-B",
          Value: 0,
        },
      ],
      StopTime: [
        {
          Key: "TGM",
          Value: 73.4,
        },
        {
          Key: "ULMA-A",
          Value: 0,
        },
        {
          Key: "ULMA-B",
          Value: 0,
        },
        {
          Key: "Case-Packer-A",
          Value: 0,
        },
        {
          Key: "Case-Packer-B",
          Value: 0,
        },
      ],
      //      Air: 0,
      //      Speed: 0,
    },
    "Shift-B": {
      Production: [
        {
          Key: "TGM",
          Value: 131240,
        },
        {
          Key: "ULMA-A",
          Value: 0,
        },
        {
          Key: "ULMA-B",
          Value: 0,
        },
        {
          Key: "Case-Packer-A",
          Value: 0,
        },
        {
          Key: "Case-Packer-B",
          Value: 0,
        },
      ],
      StopTime: [
        {
          Key: "TGM",
          Value: 30,
        },
        {
          Key: "ULMA-A",
          Value: 0,
        },
        {
          Key: "ULMA-B",
          Value: 0,
        },
        {
          Key: "Case-Packer-A",
          Value: 0,
        },
        {
          Key: "Case-Packer-B",
          Value: 0,
        },
      ],
      //      Air: 0,
      //      Speed: 0,
    },
    "Shift-C": {
      Production: [
        {
          Key: "TGM",
          Value: 118286,
        },
        {
          Key: "ULMA-A",
          Value: 0,
        },
        {
          Key: "ULMA-B",
          Value: 0,
        },
        {
          Key: "Case-Packer-A",
          Value: 0,
        },
        {
          Key: "Case-Packer-B",
          Value: 0,
        },
      ],
      StopTime: [
        {
          Key: "TGM",
          Value: 49,
        },
        {
          Key: "ULMA-A",
          Value: 0,
        },
        {
          Key: "ULMA-B",
          Value: 0,
        },
        {
          Key: "Case-Packer-A",
          Value: 0,
        },
        {
          Key: "Case-Packer-B",
          Value: 0,
        },
      ],
      //      Air: 0,
      //      Speed: 0,
    },
    // OEE: 84.01,
    // OR: 0,
  },
};

// http://localhost:1880/tp/historical/tgm4

// Post body
// {
//   "startDate": 1702339200,
//   "endDate": 1702425599
// }

const tgmHistorical = {
  "Tue Dec 12 2023 17:02:55 GMT+0530 (India Standard Time)": {
    Shift: {
      "Shift-C": {
        Production: 31101,
        Power: 0,
      },
      "Shift-B": {
        Production: 28941,
        Power: 0,
      },
      "Shift-A": {
        Production: 6664,
        Power: 29.533203125,
      },
    },
    OEE: 22.09,
  },
};
