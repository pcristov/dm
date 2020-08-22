import React, {Component} from 'react';
import './DrumMachine.css';

export default class Editor extends Component {

constructor(props) {
    super(props)
    
    this.state = {
		editorContent: '',
		previewContent: ''
    }
    
    this.updatePreview = this.updatePreview.bind(this);
}

componentDidMount() {
	this.setState({
      previewContent: this.state.editorContent
    });
}

updatePreview(event) {
	this.setState({
      previewContent: event.target.value
    });
}

render() {
	return (
		<div id="drum-machine">
			<div id="display">
				<div class="grid">
					<div class="drum-pad">
						Q
						<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" id="Q" />
					</div>
					<div class="drum-pad">
						W
						<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" id="W" />
					</div>
					<div class="drum-pad">
						E
						<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" id="E" />
					</div>
					
					
					<div class="drum-pad">
						A
						<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="A" />
					</div>
					<div class="drum-pad">
						S
						<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" id="S" />
					</div>
					<div class="drum-pad">
						D
						<audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" id="D" />
					</div>
					
					
					<div class="drum-pad">
						Z
						<audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" id="Z" />
					</div>
					<div class="drum-pad">
						X
						<audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" id="X" />
					</div>
					<div class="drum-pad">
						C
						<audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" id="C" />
					</div>
				</div>
			</div>
		</div>
	)}
}