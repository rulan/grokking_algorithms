/**
 * Displays a message to the console
 * @param {string} name Name
 */
const greet2 = name => console.log(`how are you, ${name}?`); //01  //07 

/**
 * Displays a message to the console
 */
const bye = () => console.log("ok bye!");//02 //10

/**
 * Displays a message to the console
 * @param {string} name Name
 */
const greet = name => { //03
  console.log(`hello, ${name}!`); //05
  greet2(name); //06
  console.log("getting ready to say bye..."); //08
  bye(); //09
};

greet("raul"); //04 //11