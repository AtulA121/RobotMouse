var robot = require("robotjs");
 
// Speed up the mouse.
robot.setMouseDelay(2);

var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;

let bool = true;

setInterval(function(){
    if(bool){
        for (var x = width; x > 0 ; x--){
            y = height * Math.sin((twoPI * x) / width) + height;
            robot.moveMouse(x, y);
        }
        bool = false;
    }else{
        for (var x = 0; x < width; x++){
            y = height * Math.sin((twoPI * x) / width) + height;
            robot.moveMouse(x, y);
        }
        bool = true;
    }
}, 50000);