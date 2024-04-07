// Personal message
let personName = "Eric";
console.log("HELLO " + personName + ", would you like to learn some TypeScript today?");
// Name Cases
let personName2 = "John";
console.log("Uppercase: " + personName2.toUpperCase());
console.log("Lowercase: " + personName2.toLowerCase());
console.log("Titlecase: " + personName2.charAt(0).toUpperCase() + personName2.slice(1).toLowerCase());
// Famous Quote
let quote = "A person who never made a mistake never tried anything new.";
let author = "Albert Einstein";
console.log(author + ' once said, "' + quote + '"');
// Famous Quote 2
let famous_person = "Albert Einstein";
let message = famous_person + " once said, \"" + quote + "\"";
console.log(message);
// Stripping Names
let personNameWithWhitespace = "\t\n John Doe \t\n";
console.log("Name with whitespace: " + personNameWithWhitespace);
console.log("Name after stripping whitespace: " + personNameWithWhitespace.trim());
// Number Eight
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// Favorite Number
let favoriteNumber = 7;
console.log("My favorite number is: " + favoriteNumber);
// Adding Comments
// Program 1: Personal Message - Prints a personalized message using the person's name.
// Program 2: Number Eight - Prints four arithmetic operations resulting in the number 8.
// Names
let names = ["John", "Jane", "Alice"];
for (let name of names) {
    console.log(name);
}
// Greetings
let names2 = ["John", "Jane", "Alice"];
let greetingMessage = "Hello, would you like to join us for dinner?";
for (let name of names) {
    console.log(name + " " + greetingMessage);
}
// Your Own Array
let transportationModes = ["car", "motorcycle", "bicycle"];
for (let mode of transportationModes) {
    console.log('I would like to own a ' + mode);
}
// Guest List
let dinnerGuests = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie"];
for (let guest of dinnerGuests) {
    console.log('Dear ' + guest + 'you are invited to dinner.');
}
// Changing Guest List
let dinnerGuests2 = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie"];
console.log(`'${dinnerGuests[1]} can't make it to dinner.'`);
dinnerGuests[1] = "Nikola Tesla";
for (let guest of dinnerGuests) {
    console.log(' Dear ' + guest + ' you are invited to dinner.');
}
// More Guests
console.log("Good news! We found a bigger dinner table.");
dinnerGuests.unshift("Isaac Newton");
dinnerGuests.splice(2, 0, "Ada Lovelace");
dinnerGuests.push("Grace Hopper");
for (let guest of dinnerGuests) {
    console.log(' Dear ' + guest + ' you are invited to dinner.');
}
// Shrinking Guest List
console.log("Sorry, we can only invite two people for dinner now.");
while (dinnerGuests.length > 2) {
    let removedGuest = dinnerGuests.pop(); // Assigning type string | undefined
    if (removedGuest !== undefined) {
        console.log(' Sorry ' + removedGuest + ' we can,t invite you to dinner.'); // Using backticks for template literals
    }
}
for (let remainingGuest of dinnerGuests) {
    console.log(' Dear ' + remainingGuest + ' you are still invited to dinner.'); // Using backticks for template literals
}
dinnerGuests = [];
console.log("Empty guest list:", dinnerGuests);
// Seeing the World
let placesToVisit = ["Japan", "Italy", "New Zealand", "Egypt", "Brazil"];
console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", placesToVisit.slice().sort());
console.log("Original order:", placesToVisit);
console.log("Reverse alphabetical order:", placesToVisit.slice().sort().reverse());
console.log("Original order:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
placesToVisit.reverse();
console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", placesToVisit.slice().sort());
console.log("Reverse alphabetical order:", placesToVisit.slice().sort().reverse());
// Assuming you have an array of dinner guests
let dinnerGuests3 = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie"];
// Printing the number of people invited to dinner
console.log(`Number of people invited to dinner: ${dinnerGuests.length}`);
// Printing the names of the dinner guests
console.log("Guests:");
for (let guest of dinnerGuests3) {
    console.log(guest);
}
// Think of Something
let mountains = ["Everest", "K2", "Matterhorn", "Kangchenjunga"];
console.log(mountains);
// TypeScript Objects
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022
};
console.log(car);
// Intentional Error
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[10]); // This intentionally causes an index error
// Conditional Tests
let x = 5;
let y = 10;
console.log("Is x == 5? I predict True.");
console.log(x == 5);
console.log("Is y != 10? I predict False.");
console.log(y != 10);
console.log("Is x === '5'? I predict False.");
console.log(x === 5);
console.log("Is x < y? I predict True.");
console.log(x < y);
console.log("Is x >= y? I predict False.");
console.log(x >= y);
console.log("Is x + y === 15? I predict True.");
console.log(x + y === 15);
console.log("Is x * y === 50? I predict True.");
console.log(x * y === 50);
console.log("Is (x === 5) && (y === 10)? I predict True.");
console.log((x === 5) && (y === 10));
console.log("Is (x === 5) || (y === 5)? I predict True.");
console.log((x === 5) || (y === 5));
let fruits = ["apple", "banana", "orange"];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes("banana"));
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes("grape"));
// Alien Colors #1
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
// Alien Colors #2
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
// Alien Colors #3
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
// Stages of Life
let age = 25;
if (age < 2) {
    console.log("This person is a baby.");
}
else if (age < 4) {
    console.log("This person is a toddler.");
}
else if (age < 13) {
    console.log("This person is a kid.");
}
else if (age < 20) {
    console.log("This person is a teenager.");
}
else if (age < 65) {
    console.log("This person is an adult.");
}
else {
    console.log("This person is an elder.");
}
let fruits1 = ["banana", "strawberry", "mango"];
if (fruits.indexOf("banana") !== -1) {
    console.log("You really like bananas!");
}
if (fruits.indexOf("apple") !== -1) {
    console.log("You really like apples!");
}
if (fruits.indexOf("orange") !== -1) {
    console.log("You really like oranges!");
}
if (fruits.indexOf("grape") === -1) {
    console.log("You don't like grapes!");
}
if (fruits.indexOf("kiwi") === -1) {
    console.log("You don't like kiwis!");
}
// Hello Admin
let usernames = ["admin", "user1", "user2", "user3", "user4"];
for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
// No Users
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
// Checking Usernames
let current_users = ["John", "Eric", "Jane", "Diana", "Lisa"];
let new_users = ["Peter", "Eric", "Jane", "Steven", "Diana"];
for (let new_user of new_users) {
    if (current_users.includes(new_user.toLowerCase())) {
        console.log(`${new_user} will need to enter a new username.`);
    }
    else {
        console.log(`${new_user} is available.`);
    }
}
// Ordinal Numbers
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
// Pizzas
let pizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");
// Animals
let animals = ["dog", "cat", "rabbit"];
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");
// T-Shirt
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`The shirt size is ${size} and the message printed on it is: ${message}`);
}
make_shirt(); // Default large shirt with default message
make_shirt("medium"); // Medium shirt with default message
make_shirt("small", "Hello World!"); // Small shirt with custom message
// Cities
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");
// City Names
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("Tokyo", "Japan"));
// Album
function make_album(artist, album_title, tracks) {
    let album = {
        artist: artist,
        album_title: album_title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Artist1", "Album1", 12);
let album2 = make_album("Artist2", "Album2");
let album3 = make_album("Artist3", "Album3", 8);
console.log(album1);
console.log(album2);
console.log(album3);
// Magicians
let magicians = ["David Copperfield", "David Blaine", "Penn & Teller"];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
show_magicians(magicians);
// Great Magicians
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}
let great_magicians = make_great(magicians);
show_magicians(great_magicians);
// Unchanged Magicians
let unchanged_magicians = magicians.slice();
show_magicians(unchanged_magicians);
// Sandwiches
function make_sandwich(...items) {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log(item);
    }
}
make_sandwich("bread", "cheese", "lettuce");
make_sandwich("turkey", "bacon", "tomato", "mayonnaise");
make_sandwich("peanut butter", "jelly");
// Cars
function car_info(manufacturer, model_name, ...options) {
    let car = {
        manufacturer: manufacturer,
        model_name: model_name
    };
    for (let option of options) {
        let [key, value] = option.split(":");
        car[key] = value;
    }
    return car;
}
let car1 = car_info("Toyota", "Corolla", "color:red", "year:2022");
let car2 = car_info("BMW", "X5", "color:blue", "year:2023", "automatic:true");
console.log(car1);
console.log(car2);
export {};
