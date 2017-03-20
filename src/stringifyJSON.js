// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(input) {
  // your code goes here GOAL convert keys, values to string
  // account for nested 
  var isPrimative = function(val) { return  ["string", "number"].includes(typeof val) };
  var isObj = function(val) { return (typeof val === 'object' && !Array.isArray(val) ) };
  var aAray = function(val) { return (typeof val === 'object' && Array.isArray(val) )};
  // cases for null, undefined
  //console.log('input');
  //console.log(typeof input);
  if (input === null) {
    return 'null'; 
  }
  else if (typeof input === (undefined || 'undefined'  ) ) {
    return ; 
  }
  else if (typeof input === 'function') {
    return '{}';
  }
  // cases for primatives
  else if ( typeof input === 'number' ){
    return (  '' + input );
  }
  else if( typeof input === 'string') {
    return '"' + input + '"';
  }
  else if( typeof input === 'boolean') {
    return '' + input + '';
  }
  // cases for arrays
  else if ( aAray(input) ) {
    //check empty.arr
    var partialArr = [];
    if ( input.length === 0 ) {
      return '[]';
    }
    else {
      input.forEach( function(value) {
       // console.log( typeof stringifyJSON(value) + " | " + value + " |s>| " + stringifyJSON(value) );
        partialArr.push( stringifyJSON(value) );
      });
      return  '[' + partialArr.join() + ']';
    }
  }
  //cases for object
  else if ( isObj(input) ) {
    var partialObj = [];
    if (Object.keys(input)[0] === 'undefined' || typeof input === 'function') {
      return '{}';
    }
    
    for( var key in input) {
      
      if ( key === 'undefined' ) {
       
        return '{}'
        break;
      }
      else {
       //console.log("v: " +input[key]);
       partialObj.push(stringifyJSON(key) + ':' + stringifyJSON(input[key]) );
       //console.log("r: " + partialObj);
      }
    }
    return "{" + partialObj.join() + "}";
  }
  
  
};


