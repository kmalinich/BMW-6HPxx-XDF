#!/usr/bin/env node

let diff_ratio        = 2.81;
let tire_width_mm     = 225;
let tire_aspect       = 0.40;
let wheel_diameter_in = 18;


let input = {
  diff_ratio        : diff_ratio,
  tire_width_mm     : tire_width_mm,
  tire_aspect       : tire_aspect,
  wheel_diameter_in : wheel_diameter_in,
};

let oss2kph = ((((((tire_width_mm * tire_aspect) * 2) + (wheel_diameter_in * 25.4)) * 3.1415926535897932) * 0.000001) / diff_ratio) * 60;
let oss2mph = oss2kph * 0.621371192237334;

let output = {
  kph : 'x*' + oss2kph,
  mph : 'x*' + oss2mph,
};

console.log(JSON.stringify({
  input  : input,
  output : output,
}, null, 2));
