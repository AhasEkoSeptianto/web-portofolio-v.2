var timerIncrement = 0 ;

var Timer = (func, timer, doneAtTimer) => {

	let start =	setInterval( () =>{
		if (timerIncrement === doneAtTimer) {
			clearInterval(start);
		}
	} , timer );


}


export { Timer }