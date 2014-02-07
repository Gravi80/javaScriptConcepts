// The Method Invocation Pattern

// When a function is stored as a property of an object, we call it a method. 
// When a method is invoked, this is bound to that object.

var myObject = {
	value : 1,
	method1 : function(){
		console.log(this);
		console.log(this.value);                       // you can access this
	}
};

// myObject.method1();


// myObject.method2 = function(){
// 	console.log(this);                                 // you can access this here also
// };

// myObject.method2();



myObject.method2 = function(){
	return function (){
		console.log(this);                
	}
};


myObject.method2()(); // this is global	
myObject.method2();  // this is myObject.


myObject.method3 = function(){
	var variable= function (){
		console.log(this);                
	};
	return variable;
}();

myObject.method3();