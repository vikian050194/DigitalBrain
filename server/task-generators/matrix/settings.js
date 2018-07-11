function Settings(size, min, max) {
    return { size, min, max };
}

var allSettings = [];

allSettings[0] = new Settings(2, 0, 5);
allSettings[1] = new Settings(2, 0, 9);
allSettings[2] = new Settings(2, -9, 9);
allSettings[3] = new Settings(3, 0, 5);
allSettings[4] = new Settings(3, 0, 9);
allSettings[5] = new Settings(3, -9, 9);
allSettings[6] = new Settings(4, 0, 5);
allSettings[7] = new Settings(4, 0, 9);
allSettings[8] = new Settings(4, -9, 9);
allSettings[9] = new Settings(5, -9, 9);

module.exports = allSettings;