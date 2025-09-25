let year = 2004;

let leap = false;

if (year % 400 == 0) {

    leap = true;
} else if (year % 100 == 0) {
    leap = true;

} else if (year % 4 == 0) {
    leap = true;
}

if (leap) {
    console.log("the year is leap year")
} else {
    console.log("the year is not leap year")
}