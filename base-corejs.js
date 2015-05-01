

/*
	Native Javascript function helper
*/

var BaseJS = function(){



	/*
		Windows Object
	*/
	var __window = function(){


		return {
			iWidth:  window.innerWidth,
			iHeight: window.innerHeight,

		};
	}




	/*
		Broswers Object
	*/
	var __browser = function(){

		var object = navigator.userAgent;

		return {
			agent : object,
			isIE8: !! object.match(/MSIE 8.0/),
			isIE9: !! object.match(/MSIE 9.0/),
			isIE10: !! object.match(/MSIE 10.0/),
			isDevice: !! object.toLowerCase().match(/(iphone|ipod|ipad)/),
		};
	}


	/*
		units
	*/
	var __units = function(){

		var _pixelToPersenage = function(){}

		var _persenageToPixel = function(){}

		return {
			//units:_pixelToPersenage
		};
	}


	/*
		Elements
	*/
	var __element = function(el){


	}



	/*
		Dimentions
	*/
	

	
	/*
		Object
	*/
	var __getObject = function(obj){

		var result = 0 , keyArray = Array();
		for(var prop in obj) {
			keyArray.push(prop);
			if (obj.hasOwnProperty(prop)) {
      			result++;
    		}
		}	

		return {
			length : result,
			keyArray: keyArray,
		};
	}


	/*
		Math , Calculations etc
	*/
	var __math = function(){
		
		Math.rotateTranslate = function(pnt, tx,ty,tr){
			var cr = Math.cos(tr);
			var sr = Math.sin(tr);
			var t = pnt.x*cr - pnt.y*sr + tx

			pnt.y = pnt.x*sr + pnt.y*cr + ty
			pnt.x = t;

			return pnt;
		}

		Math.rotate = function(pnt, tr){
			var cr = Math.cos(tr);
			var sr = Math.sin(tr);
			var t = pnt.x*cr - pnt.y*sr;

			pnt.y = pnt.x*sr + pnt.y*cr;
			pnt.x = t;

			return pnt;
		}

		Math.normalise = function(pnt){
			var mag = Math.sqrt(pnt.x*pnt.x + pnt.y*pnt.y);
			pnt.x /= mag;
			pnt.y /= mag;
			return pnt;
		}

		Math.leftHand = function(pnt){
			var t = pnt.x;
			pnt.x = -pnt.y;
			pnt.y = t;
			return pnt;
		};

		Math.dot = function(ap, bp){
			return ap.x*bp.x + ap.y*bp.y;
		}

		Math.distsqr = function(pa, pb){
			return pa.x*pa.x + pb.y*pb.y
		}
		Math.dist = function(pa, pb){
			return Math.sqrt(pa.x*pa.x + pb.y*pb.y);
		}
		Math.clip = function (value, lower, upper){
			if(value<lower){
			value=lower;
			}else if(value>upper){
			value=upper
			}
			return value;
		}

		Math.loopover = function(value, lower, upper){
			if(value<lower){
			value+=(upper-lower);
			}else if(value>=upper){
			value-=(upper-lower);
			}
			return value;
		};
	};



	/*
		Uri
	*/
	var __uri = function(){

	}


	





	// public functions
	return {
		units: __units,
		broswer : __browser,
		getObject : __getObject,
		win: __window,
	};

}();

