/**
 * Celsius to Fahrenheit converter Created by Phirom Yim on 4/14/14.
 */
//first data sets
var degFahren = Number(prompt("Enter the degrees Fahrenheit"));
var degCent;
degCent = 5/9 * (degFahren - 32);
//if celsius is 0 then fahrenheit is 32
console.log(degFahren + "\xB0 The temperature is " + degCent + " \xB0 Celsius")
if(degCent < 0) {
    console.log("\xB0 The temperature is " + degFahren + " \xB0 Fahrenheit");

}




