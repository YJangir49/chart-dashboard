export function reverseConverter(inputObject) {
  const resultObject = {};

  // Iterate over each shift in the inputObject
  Object.keys(inputObject).forEach((shift) => {
    // Iterate over each category (Power, Steam, Air, Water) in the current shift

    Object.keys(inputObject[shift]).forEach((category) => {
      // If the category is not already a key in resultObject, create an empty object for it
      if (!resultObject[category]) {
        resultObject[category] = {};
      }

      // Assign the value of the current shift and category to resultObject
      resultObject[category][shift] = inputObject[shift][category];
    });
  });

  return resultObject;
}

export function converter(inputData) {
  const resultData = {};

  // Iterate over each shift in the inputData
  Object.keys(inputData).forEach((shift) => {
    // Iterate over each category (Production, StopTime) in the current shift
    if (typeof inputData[shift] !== "object") {
      resultData[shift] = inputData[shift];
    } else {
      Object.keys(inputData[shift]).forEach((category) => {
        // If the category is not already a key in resultData, create an empty object for it
        if (!resultData[category]) {
          resultData[category] = {};
        }
        if (!Array.isArray(inputData[shift][category])) {
          if (!resultData[category]) {
            resultData[category] = {};
          } else {
            resultData[category][shift] = inputData[shift][category];
          }
        } else {
          // Iterate over each item in the current category
          inputData[shift][category].forEach((item) => {
            // If the item key is not already a key in resultData[category], create an empty object for it
            if (!resultData[category][item.Key]) {
              resultData[category][item.Key] = {};
            }

            // Assign the value of the current shift to resultData[category][item.Key]
            resultData[category][item.Key][shift] = item.Value;
          });
        }
      });
    }
  });

  return resultData;
}
