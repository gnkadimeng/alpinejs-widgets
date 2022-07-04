function transportFee(shift) {
	if ("morning" == shift) {
    	return "R20";
    } 
  else if (shift =="afternoon") {
  		return "R10";
  	}
  else if (shift =='nightshift') {
  		return "free";
  }
  
}