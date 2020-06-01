import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {

	const launchDate = new Date('2020,6,11')

	const [daysLeft, setDaysLeft] = useState("00")
	const [hoursLeft, setHoursLeft] = useState("00")
	const [minutesLeft, setMinutesLeft] = useState("00")
	const [secondsLeft, setSecondsLeft] = useState("00")


	useEffect(() => {

		const id = setInterval(() => {
			
			const now = new Date()
			const timeBetween =  launchDate.getTime() - now.getTime()

			if (timeBetween > 0) {
				//update count down
				const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24))
				const hours = Math.floor((timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
				const minutes = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60))
				const seconds = Math.floor((timeBetween % (1000 * 60)) / 1000)

				setDaysLeft(days.toString())
				setHoursLeft(hours.toString())
				setMinutesLeft(minutes.toString())
				setSecondsLeft(seconds.toString())

			} else {
				//clear interval, lanuch has happned.
				clearInterval(id);
			}
		});
		
		return () => {
			clearInterval(id);
		};
	})


	return (
		<div className="countDown-container">
			<div className="countDown">
				<p>Launching Soon...</p>
				<div className="countDown-wrapper">
					<TimerElements 
						label="Day(s)" 
						value={daysLeft} 
					/>
					<TimerElements 
						label="Hour(s)" 
						value={hoursLeft} 
					/>
					<TimerElements 
						label="Minute(s)" 
						value={minutesLeft} 
					/>
					<TimerElements 
						label="Second(s)" 
						value={secondsLeft} 
					/>
				</div>
			</div>
		</div>
	);
}

export default App;





interface TimerElementsStyle {
	label: string
	value: string
}

const TimerElements: React.SFC<TimerElementsStyle> = ({ label, value })=> {

	return (
		<div className="countDown-elments">
			<div>
				<span>{value}</span>
			</div>
			<p>{label}</p>
		</div>
	)

}