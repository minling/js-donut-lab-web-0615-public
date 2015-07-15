//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user a message telling them the numbers of donuts and guests and if there are enough or not.

  var guests = prompt("How many guests do you have?");

  var donuts = prompt("How many donuts do you have?");

  var counter = function(guests,donuts){
    if (parseInt(guests) <= parseInt(donuts)){
      alert("You have "+ parseInt(guests) + " Guests and " + parseInt(donuts) +" and there will enough donuts.")
    }
    else if(parseInt(guests) > parseInt(donuts)){
      alert("You have "+ parseInt(guests) +" Guests and "+ parseInt(donuts) +" and you will not have enough donuts.")
    }
  };

  counter(guests, donuts);