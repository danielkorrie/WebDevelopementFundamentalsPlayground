//Javascript Review File

console.log("Happy!");
//variable strings & ints

var age=16;
var mybirthyear=1999;
var gradutionyear=2017;
var numberofbrotherandsister=3;
var numberofkids=0;
var p=(".");
//sring concatenation
console.log(" I am " + age + " . ");
console.log(" I was born in " + mybirthyear + " . ");
console.log(" I will graduat from high school in " + gradutionyear +  " . " );
console.log(" I have " + numberofbrotherandsister + " brother and sister " + p);
console.log(" I have " + numberofkids + " kids " + p);

//Manipulating the Dom
//document object model

document.getElementById("my-age").innerHTML = age;
document.getElementById("my-birthyear").innerHTML = mybirthyear;
document.getElementById("gradution-year").innerHTML = gradutionyear;
document.getElementById("number-of-brother-and-sister").innerHTML = numberofbrotherandsister;
document.getElementById("number-of-kids").innerHTML = numberofkids;























//Arrays
var abc="abcdefghijklmnopqrstuvwsyz";
var abcArray=["a", "b", "c", "d", "e"];
var numberArray=["1", "2", "3", "4", "5"];


console.log(abc.charAt(3));
console.log(abcArray[2]);

//Another way to creat an Array
var typesofsoda=new Array();
typesofsoda[0]="fanat";
typesofsoda[1]="sprite";
typesofsoda[2]="monster";

var worstypeofsoda=new Array();
worstypeofsoda[0]="pepsi";
worstypeofsoda[1]="coke";
worstypeofsoda[2]="coke zero";

console.log(typesofsoda);

var worstcandybars=["twixler", "buttercup", "butterfinger", "milkyway"]
worstcandybars[4]="100 grand"

//console.log(bestcandyBars);
var mixedArray = [1, "Bill Gates", (5>1)];

console.log(mixedArray)


//objects
var beachbag={
	//properties
	numbottles   : 3,
	colortower   :"green",
	iswet        :false,
    zipup        :function(){
    	console.log("zipper sound")
    }

}

console.log(beachbag);
console.log(beachbag.iswet);
beachbag.zipup();
//make an object called nerd 
//give five properties one has glass
//give one function.
var nerd={
	name         :" ",
	glass			:1,
	colerofshirt	:"green",
	colorofshort	:"kahki",
	hair         :"short",
	shoe         :"big shoe's",

	beatup       :function(){
		console.log("yes badly");


	}
}
console.log(nerd.glass);

var player={
	//properties
	life           :1000,
	demage         :10,
	hassword       :true,
	hassniperrifle :false,
	hasarmor       :true,
//function
attack             :function(target){
	console.log(this + "attacks" + target + this.demage);
},
swatwithsword     :function(target){
	var demage =25 * this.demage;
	console.log(this.name + " did " + demage + " demage to" + target);
},
heeling           :function(target){
	var heeling  =500 *this.demage
	console.log(this.name +" did " + healing + "healing to" + target);
}
}


var animals={
	living   	:true,
	eat			:false,
	runs        :true,
	jumps       :true,
	eyes        :"two", 
	cute        :true,
	legs        :4,

	breath          : function(){
		console.log("uncormfortable breathing in your ear")
	}
}

animals.breath();

var snake = Object.create(animals);
console.log(snake.eyes);
snake.legs = 0
console.log(snake.legs);
snake.breath=function(){
	console.log("hisssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss")
}

//Cow
var cow = Object.create(animals);
cow.living = true;
cow.eyes = "Big";
console.log(cow);

//Rabbit
var rabbit = Object.create(animals);
rabbit.ear = "huge"
console.log(rabbit.ears);







var friends =["joshua", "Austin", "Bryce","jeremiah", "jake", "nigel", "james"]
for(var i =0;i<friends.length;i++){
	if(friends[i].charAt(0)=="j"){
		console.log(friends[i]);
	}
}



















