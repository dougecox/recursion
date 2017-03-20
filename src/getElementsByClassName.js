// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here below 3 noted to be used 
  var bodyChildNodes = document.body.childNodes;
  var bodyClassList = document.body.classList;
  var docBody = document.body;
  var results = [];

  var findTarget = function( node ) {  //starting doc.body then> childNodes
    if ( _.contains(node.classList, className ) ) {
       results.push(node);
     }
    
     _.forEach(node.childNodes, function(child) {
      findTarget(child);
    });
   }

   findTarget(docBody);
   return results;
 };

/*

    if ( obj.length === 1 && obj.contains(className) ) {
       return obj;
    }
    else if (obj[0]['className'] === className) {  // use contains 
      results.push(obj[0]);
      return obj[0];
    }
    else if ( obj.length < 0 ) { // superfulsions
      return null;
    }
    else {
      return findTarget( Array.prototype.slice.call(obj, 1 ) );
    }
  };
  
  var sol = findTarget(document.body.childNodes) ;
  console.log(results);
  console.log( sol);
  return  document.getElementsByClassName(className)
};
*/


