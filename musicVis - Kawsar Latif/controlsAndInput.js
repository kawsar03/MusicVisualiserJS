//Constructor function to handle the onscreen menu, keyboard and mouse
//controls
function ControlsAndInput() {

	this.menuDisplayed = false;

	//playback button displayed in the top left of the screen
	this.playbackButton = new PlaybackButton();

	//make the window fullscreen or revert to windowed
		this.mousePressed = function() {
    if (this.playbackButton.hitCheck() == false) 
    {
    let fs = fullscreen();
    fullscreen(!fs);
    }
	};

	//responds to keyboard presses
	//@param keycode the ascii code of the keypressed
	this.keyPressed = function(keycode) {
		console.log(keycode);
		if (keycode == 32) {
			this.menuDisplayed = !this.menuDisplayed;
		}

		if (keycode > 48 && keycode < 58) {
			var visNumber = keycode - 49;
			vis.selectVisual(vis.visuals[visNumber].name);
		}
	};

	//draws the playback button and potentially the menu
	this.draw = function() {
		push();
		fill("white");
		stroke("black");
		strokeWeight(2);
		textSize(34);

		//playback button
		this.playbackButton.draw();
		//only draw the menu if menu displayed is set to true.
		if (this.menuDisplayed) {
			text("Select a visualisation:", 100, 30);
			this.menu();
		}
		pop();

	};
	

	this.menu = function() {
		//draw out menu items for each visualisation
		//???
		
		for(var i = 0; i*2 < vis.visuals.length; i++){
		text("spectrum", 100, 100+i)
		 text("wavepatern", 100, 190+i)
		text("needles", 100, 290+i)
		}
	};
}
