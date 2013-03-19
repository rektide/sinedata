function findStart(target){
	this.target= target
	this.finds= {}
	return function(haystack){
		for(var i= 0; i< this.targets.length; i++){
			if(haystack.substr(this.finds
