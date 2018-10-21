export function setCookie(name,val,lifeCircle){
	var aDate = new Date();
	aDate.setTime(new Date().getTime()+(lifeCircle*24*60*60*1000));
	document.cookie = name+"="+val+";expires="+aDate.toUTCString()+";path=/";
}
export function getCookieResult(name){
	var result = document.cookie.replace(/\s/g,"");
	var resultArray = result.split(";");
	for(var i = 0;i<resultArray.length;i++)
	{
		var theName = resultArray[i].split("=");
		if(theName[0] == name)
		{
			return theName[1];
		}
	}
}
export function removeTheCookie(name){
	setCookie(name,"",-1);
}
