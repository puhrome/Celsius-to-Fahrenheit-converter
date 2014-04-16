/**
 * Celsius to Fahrenheit converter Created by Phirom Yim on 4/14/14.
 */
//first data sets
var degFahren = Number(prompt("Enter the degrees Fahrenheit")); //prompt for user input
var degCent; //declaring celsius variable
degCent = 5/9 * (degFahren - 32); //defining formula for conversion
//5 divided by 9 times the degree in Fahrenheit minus 32
console.log(degFahren + "\xB0 The temperature is " + degCent + " \xB0 Celsius")
if(degCent < 0) {
    console.log("\xB0 The temperature is " + degFahren + " \xB0 Fahrenheit");

}




