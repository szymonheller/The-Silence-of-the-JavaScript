// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const checkTemperature = (temperature) => {
  let maxTemperature = temperature[0];
  let minTemperature = temperature[0];

  for (let i = 0; i < temperature.length; i++) {
    if (typeof temperature[i] !== "number") continue;

    if (maxTemperature < temperature[i]) {
      maxTemperature = temperature[i];
    }

    if (minTemperature > temperature[i]) {
      minTemperature = temperature[i];
    }
  }

  console.log(
    `Max temp = ${maxTemperature}  Min temp = ${minTemperature}  Amplitude = ${
      maxTemperature - minTemperature
    }`
  );
};

checkTemperature(temperatures);
checkTemperature([13, 20, 50, 33, "abc"]);



const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // 3) fix a bug
    value: Number(prompt("Degrees celsius:")),
  };

  // 2 ) find a bug
  console.log(measurement);
  //   console.table(measurement);

  console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// 1) identify a bug
console.log(measureKelvin());

*/

// bugged function (debugger tests):

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const checkTemperatureBug = (temperature) => {
//   let maxTemperature = 0;
//   let minTemperature = 0;

//   for (let i = 0; i < temperature.length; i++) {
//     if (typeof temperature[i] !== "number") continue;

//     if (maxTemperature < temperature[i]) {
//       maxTemperature = temperature[i];
//     }

//     if (minTemperature > temperature[i]) {
//       minTemperature = temperature[i];
//     }
//   }

//   console.log(
//     `Max temp = ${maxTemperature}  Min temp = ${minTemperature}  Amplitude = ${
//       maxTemperature - minTemperature
//     }`
//   );
// };

// checkTemperatureBug(temperatures);
// checkTemperatureBug([20, 50, 33, "abc"]);

// temperatures to string:

const temperaturesArray1 = [17, 21, 23];
const temperaturesArray2 = [12, 5, -5, 0, 4];

let printForecast = function (temperatures) {
  let arr = [];
  let text = "... ";
  for (let i = 0; i < temperatures.length; i++) {
    arr.push(`${temperatures[i]}°C in ${i + 1} days ... `);
    text += arr[i];
  }
  console.log(text);
};

printForecast(temperaturesArray1);
printForecast(temperaturesArray2);
