let actFunctions = {
  // Function making sure that results for AI are ALLWAYS between 0 and 1
	SIGMOID: function (array){
    let sum = array.reduce((a, b) => a + b, 0);
    return (1/(1+Math.exp(-sum)));
  },
  SUM: function(array){
    return array.reduce((a, b) => a + b, 0);
  }
}