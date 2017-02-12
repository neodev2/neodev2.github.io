function getAangleInRadians(aX, aY, bX, bY){
    return Math.atan2(bY - aY, bX - aX);
}

function getAangleInDegrees(aX, aY, bX, bY){
    return getAangleInRadians(aX, aY, bX, bY) * 180 / Math.PI;
}

function getAangleInDegrees360(aX, aY, bX, bY) {
    var angle = getAangleInDegrees(aX, aY, bX, bY);
    return angle < 0 ? 360 + angle : angle;
}

function leadingZero(n){
	return ('0'+n).slice(-2);
}

function getDatetime(){
	
	var date = new Date;
	//date.setTime(result_from_Date_getTime);
	
	var seconds      = date.getSeconds();
	var minutes      = date.getMinutes();
	var hours        = date.getHours();
	
	var year         = date.getFullYear();
	var month        = date.getMonth(); // beware: January = 0; February = 1, etc.
	var day          = date.getDate();
	
	var dayOfWeek    = date.getDay(); // Sunday = 0, Monday = 1, etc.
	//var milliseconds = date.getMilliseconds();
	
	var days         = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var months       = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	
	return {
		date: leadingZero(day)+'/'+leadingZero(month+1)+'/'+year,
		time: leadingZero(hours)+':'+leadingZero(minutes)+':'+leadingZero(seconds),
		readableDate: days[dayOfWeek]+' '+leadingZero(day)+' '+months[month]+' '+year,
		readableTime: hours+(minutes == 0 ? ' o\'clock' : ', '+minutes+' minutes')+' and '+seconds+(seconds == 1 ? ' second' : ' seconds')
	};
}

function capitalize(str){
	return str.charAt(0).toUpperCase() + str.substring(1);
}