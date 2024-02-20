const names = require("../country/state/city/index");
const getNames = require("../utilities/utils/index");

const getPeopleInCity = (names) => {
  return getNames(names);
};

module.exports = getPeopleInCity;
