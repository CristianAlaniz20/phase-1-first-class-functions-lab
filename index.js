// Code your solution in this file!
const scuberDrivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = () => {
        return scuberDrivers.slice(0, 2)
    }

const returnLastTwoDrivers = function() {
    return scuberDrivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
    return function(y) {
        return x * y; 
    }
}

const fareDoubler = createFareMultiplier(2);
fareDoubler(2);

/*const fareDoubler = function(a) {
    return createFareMultiplier(2)(1) * a;
};*/

const fareTripler = createFareMultiplier(3);
fareTripler(3);

function selectDifferentDrivers(scuberDrivers, driverFunction) {

    if (driverFunction === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(scuberDrivers)
    } else if (driverFunction === returnLastTwoDrivers) {
        return returnLastTwoDrivers(scuberDrivers)
    }
};