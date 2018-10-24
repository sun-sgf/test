define(function(){
	function range(iNum, iMax, iMin){
		if(iNum > iMax){
			return iMax;
		}else if(iNum < iMin){
			return iMin;
		}else{
			return iNum;
		}
	}
	return {
		range: range
	}
})