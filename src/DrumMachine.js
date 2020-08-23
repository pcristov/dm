import React, {Component} from 'react';
import './DrumMachine.css';

export default class Editor extends Component {

constructor(props) {
    super(props)
    
    this.state = {
		editorContent: '',
		previewContent: ''
    }
    
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
}

playSound(event) {
	this.setState({
    });
    
    const audio = event.target.firstElementChild;
    audio.play();
}

handleKeyPress(event) {
    const audio = document.getElementById(event.key.toUpperCase());
	
	if(audio) {
    	audio.play();
    }
}

componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
}

componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
}

render() {
	return (
		<div id="drum-machine">
			<div id="display">
			Display
			</div>
			
			<div id="grid-wrapper">
				<div className="grid">
					<div id="Heater-1" className="drum-pad" onClick={ this.playSound }>
						Q
						<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" id="Q" />
					</div>
					<div id="Heater-2" className="drum-pad" onClick={ this.playSound }>
						W
						<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" id="W" />
					</div>
					<div id="Heater-3" className="drum-pad" onClick={ this.playSound }>
						E
						<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" id="E" />
					</div>
					
					
					<div id="Heater-4" className="drum-pad" onClick={ this.playSound }>
						A
						<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="A" />
					</div>
					<div id="Clap" className="drum-pad" onClick={ this.playSound }>
						S
						<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" id="S" />
					</div>
					<div id="Open-HH" className="drum-pad" onClick={ this.playSound }>
						D
						<audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" id="D" />
					</div>
					
					
					<div id="Kick-n'-Hat" className="drum-pad" onClick={ this.playSound }>
						Z
						<audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" id="Z" />
					</div>
					<div id="Kick" className="drum-pad" onClick={ this.playSound }>
						X
						<audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" id="X" />
					</div>
					<div id="Closed-HH" className="drum-pad" onClick={ this.playSound }>
						C
						<audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" id="C" />
					</div>
				</div>
			</div>
		</div>
	)}
}