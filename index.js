function findMatching (drivers, name) {
    const matchingDrivers = drivers.filter(driver => {
        const driverName = driver.toLowerCase();
        const inputName = name.toLowerCase();

        return driverName.includes(inputName);
    })
    return matchingDrivers;
};

function fuzzyMatch (drivers, name) {
    const matchingLetters = drivers.filter(driver => {
        const driverName = driver.toLowerCase();
        const nameLower = name.toLowerCase();

        return driverName.startsWith(nameLower);
    });
    return matchingLetters;
}


function matchName(drivers, query) {
    const matchingDrivers = drivers.filter(driver => {
      return driver.name.toLowerCase() === query.toLowerCase();
    });
  
    return matchingDrivers;
  }
  