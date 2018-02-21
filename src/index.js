/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    var Kol=0;
    for (var i = 0; i < preferences.length; i++){
    	 var a=0 , b=0;
    	 if (preferences[i] <0 || preferences[i] > preferences.length) {
    	 	continue
    	 }
    	a=preferences[i];
    	 if (preferences[a-1] <0 || preferences[a-1] > preferences.length || preferences[i] === preferences[a-1]) {
    	 	continue
    	 }
    	b=preferences[a-1];
    	   	if (preferences[b-1] == (i+1)) {
    		Kol = Kol+1;
    		    	}
    	}
  
  Kol = Kol/ 3;
  return Kol;

  }






