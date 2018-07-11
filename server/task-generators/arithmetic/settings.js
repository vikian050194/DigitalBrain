function Settings(minA, maxA, minB, maxB) {
    return { minA, maxA, minB, maxB };
}

var allSettings = [];

allSettings[0] = new Settings(0, 9, 0, 9);
allSettings[1] = new Settings(0, 9, 10, 99);
allSettings[2] = new Settings(0, 9, 100, 999);
allSettings[3] = new Settings(10, 99, 10, 99);
allSettings[4] = new Settings(10, 99, 100, 999);
allSettings[5] = new Settings(10, 99, 1000, 9999);
allSettings[6] = new Settings(100, 999, 100, 999);
allSettings[7] = new Settings(100, 999, 1000, 9999);
allSettings[8] = new Settings(100, 999, 10000, 99999);
allSettings[9] = new Settings(0, 9999999, 0, 9999999);

module.exports = allSettings;