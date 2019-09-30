#!/usr/bin/env node

let diff_ratio        = 2.81;
let tire_width_mm     = 225;
let tire_aspect       = 0.45;
let wheel_diameter_in = 17;


let input = {
  diff_ratio        : diff_ratio,
  tire_width_mm     : tire_width_mm,
  tire_aspect       : tire_aspect,
  wheel_diameter_in : wheel_diameter_in,
};

let output = {
  kph : 'x*' + ((((((tire_width_mm * tire_aspect) * 2) + (wheel_diameter_in * 25.4)) * 3.1415926535897932) * 0.000001) / diff_ratio) * 60,
  mph : null,
};

output.mph = '(' + output.kph + ')*' + 0.621371192237334;

console.log(JSON.stringify({
  input  : input,
  output : output,
}, null, 2));
