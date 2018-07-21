/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.

Also don't forget to run your live-server for this assignment.*/

//1. Kapiolani Coffee Shop
/*Despite being the cat's meow, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:



Rating: 5 Stars*/

var rating1 = document.getElementById('rating1');
rating1.innerHTML = 'Rating: 5 Stars';

//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Bring in some sunshine by changing the price and address to the following:

Price: $$$
Adress: 525 Kapahulu Ave, Honolulu, HI 96815*/

var price2 = document.getElementById('price2');
var addy2 = document.getElementById('addy2');

price2.innerHTML = 'Price: $$$';
addy2.innerHTML = 'Address: 525 Kapahulu Ave, Honolulu, Hi 96815';


//3. Ramen Nakamura
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless.

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat

Append this div element to the div id "text3"*/

var hours3 = document.createElement('div');
hours3.setAttribute('id', 'hours3');
var newContent = document.createTextNode('Hours; 6pm - 12am Sun - Sat');
hours3.appendChild(newContent)
var text3 = document.getElementById('text3');
text3.appendChild(hours3);


//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them regain their kingpin status again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$

Append this element to the div with the id of 
"text4"*/

var price4 = document.createElement('div');
price4.setAttribute('id', 'price4');
var newContent = document.createTextNode('Price: $$$');
price4.appendChild(newContent);
var text4 = document.getElementById('text4');
text4.appendChild(price4);


/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"*/

var addy4 = document.createElement('div');
addy4.setAttribute('id', 'addy4');
var newContent = document.createTextNode('Address: 1620 N. School St, Honolulu, HI 96817');
addy4.appendChild(newContent);
text4.appendChild(addy4);





/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Hours: 9am - 10pm Sun - Sat

Append this element to the div with the id of 
"text4"
*/


var hours4 = document.createElement('div');
hours4.setAttribute('id', 'hours4');
var newContent = document.createTextNode('Hours: 9am - 10pm Sun - Sat');
hours4.appendChild(newContent);
text4.appendChild(hours4);

/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/

var update4 = document.createElement('p');
update4.setAttribute('id', 'update4');
var newContent = document.createTextNode("I'd leave a blank space for this oxtail soup!");
update4.appendChild(newContent);
var comment4 = document.getElementById('comment4'); 
comment4.appendChild(update4);


//5. The Death Star Cafe
/*The empire strikes back with a new and improved oxtail soup offering. Help the dark side win back customers by executing the following commands:*/

/*Create the div elements with the following id's:

"name5"
"rating5"
"price5"
"addy5"
"hours5"

Add the following info for each specific div id:

name5: 5. The Death Star Cafe
rating5: Rating: 2 Stars
price5: Price: $$
addy5: Address: A galaxy far, far away.
hours5: Hours: We never close.

Append the div elements to the div id "text5"

*/
var text5 = document.getElementById('text5');
var name5 = document.createElement('div');
name5.setAttribute('id', 'name5');
var newContent = document.createTextNode('5. The Death Star Cafe');
name5.appendChild(newContent);
text5.appendChild(name5);

var rating5 = document.createElement('div');
rating5.setAttribute("id", 'rating5');
var newContent = document.createTextNode('Rating: 2 Stars');
rating5.appendChild(newContent);
text5.appendChild(rating5);


var price5 = document.createElement('div');
price5.setAttribute("id", 'price5');
var newContent = document.createTextNode('Price: $$');
price5.appendChild(newContent);
text5.appendChild(price5);


var addy5 = document.createElement('div');
addy5.setAttribute("id", 'addy5');
var newContent = document.createTextNode('Address: A galaxy far, far away.');
addy5.appendChild(newContent);
text5.appendChild(addy5);


var hours5 = document.createElement('div');
hours5.setAttribute("id", 'hours5');
var newContent = document.createTextNode('Hours: We never close.');
hours5.appendChild(newContent);
text5.appendChild(hours5);
