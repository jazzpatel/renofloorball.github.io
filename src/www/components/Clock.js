import React from 'react'

export default class Clock extends React.Component {
	constructor(props) {
		super(props)
		this.state = { date: new Date() }

		setInterval( time => {
			//console.log('updating clock')
			this.setState( { date: new Date() })
		}, 1000);
	}


	render() {
		return (
			<span id="time">{this.state.date.toLocaleTimeString('en-US', { hour12: false })}</span>
		)
	}
}