import React, {Component} from 'react';
import './DrumMachine.css';

const sounds = [
	{
		id: 'Heater-1',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
		keyTrigger: 'Q'
	},
	{
		id: 'Heater-2',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
		keyTrigger: 'W'
	},
	{
		id: 'Heater-3',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
		keyTrigger: 'E'
	},
	{
		id: 'Heater-4',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
		keyTrigger: 'A'
	},
	{
		id: 'Clap',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
		keyTrigger: 'S'
	},
	{
		id: 'Open-HH',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
		keyTrigger: 'D'
	},
	{
		id: 'Kick-n\'-Hat',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
		keyTrigger: 'Z'
	},
	{
		id: 'Kick',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
		keyTrigger: 'X'
	},
	{
		id: 'Closed-HH',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
		keyTrigger: 'C'
	},
];

export default class Editor extends Component {

constructor(props) {
    super(props)
    
    this.state = {
		description: ''
    }
    
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
}

playSound(event) {
    const audio = event.target.firstElementChild;
  
	this.setState({
      description: event.target.id
    });
    
    audio.play();
}

handleKeyPress(event) {
    const audio = document.getElementById(event.key.toUpperCase());
	
	if(audio) {
		this.setState({
			description: audio.parentNode.id
	    });
    
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
	const soundsArray = sounds.map(sound => (
					<div id={ sound.id } key={ sound.id } className="drum-pad" onClick={ this.playSound }>
						{ sound.keyTrigger }
						<audio src={ sound.url } class="clip" id={ sound.keyTrigger } />
					</div>
					));

	return (
		<div id="drum-machine">
			<div id="display">
			{ this.state.description }
			</div>
			
			<div id="grid-wrapper">
				<div className="grid">
					{ soundsArray }
				</div>
			</div>
		</div>
	)}
}