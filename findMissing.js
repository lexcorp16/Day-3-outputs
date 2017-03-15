function findMissing(arr1, arr2){
	
	var arrSum1 = arr1.reduce(function(a, b){
		return a + b;
	}, 0);

	var arrSum2 = arr2.reduce(function(a, b){
		return a + b;
	}, 0);

	var missingNumber = Math.abs(arrSum1 - arrSum2);
	
	return missingNumber;
}