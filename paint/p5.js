var vw = window.innerWidth;
var vh = window.innerHeight;
var gui; //tells my program that it has a GUI

var value = 'black'; //default color on load.
var Color = '#000000';
var BrushSize = [1,5,10]; //sizes of brush in pixels
var Mode = ['Draw','Clear All']; // menu for the mode


function setup() {
  createCanvas(vw,vh);
  background('white');
  stroke(0,50);
  gui = createGui('My Menu',0,0); //name of menu and position
  gui.addGlobals('Color', 'Mode', 'BrushSize');//this is stuff inside menu
}

function draw() {
  if (mouseIsPressed) { //when mouse is pressed
    StrokeWeight(BrushSize);//draw width based on brushsize
    stroke(color(Color)); //make it a color that user selects
  }
  else {
    noFill();
  }
}

switch (Mode){ //handles mode pull down menu
  case 'Clear All': // when the user selects clear all
    clear(); //I run the function to clear the screen
    break; //stop the switch
}
