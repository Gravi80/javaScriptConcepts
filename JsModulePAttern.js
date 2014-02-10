/* using Clouser */
/* we can use clouser to create constructors */

var singleton = function () {
	var privateVariable;

	function privateFunction(x){
//		...privateVariable...
	}

	return{
		firstMethod: function (a,b){
		// ...PrivateVariable	
		},
		firstMethod: function (c){
		// ...PrivateVariable	
		}
	};
}();



Import mixins
-------------
This variation of the pattern demonstrates how globals (e.g jQuery, Underscore) can be passed in as arguments 
to our modules anonymous function. This effectively allows us to import them and locally alias them as we wish.

/* Global module */

var myModule = (function ( jQ, _ ) {
 
    function privateMethod1(){
        jQ(".container").html("test");
    }
 
    function privateMethod2(){
      console.log( _.min([10, 5, 100, 2, 1000]) );
    }
 
    return{
        publicMethod: function(){
            privateMethod1();
        }
    };
 
// Pull in jQuery and Underscore
})( jQuery, _ );
 
myModule.publicMethod();
