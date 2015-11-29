load ('../gl.js');

forAll(config.getDevices(), function (device) {
  // [injector:spec]
  test('Food on ' + device.deviceName, function () { gl.openPage(device, config.getProjectPage()+'/2_molecules/Food/Food.html'); gl.runSpecFile(device, 'app/2_molecules/Food/Food.spec', device.tags);});
  test('FoodForm on ' + device.deviceName, function () { gl.openPage(device, config.getProjectPage()+'/2_molecules/FoodForm/FoodForm.html'); gl.runSpecFile(device, 'app/2_molecules/FoodForm/FoodForm.spec', device.tags);});
  test('FoodList on ' + device.deviceName, function () { gl.openPage(device, config.getProjectPage()+'/3_organisms/FoodList/FoodList.html'); gl.runSpecFile(device, 'app/3_organisms/FoodList/FoodList.spec', device.tags);});
  // [endinjector]
});
