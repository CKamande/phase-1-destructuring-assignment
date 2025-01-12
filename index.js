const farmAnimals = 'cow horse sheep pig chicken';

const animalsSounds = 'moo neigh baa oink cluck';

const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' '); 

const [bessie, ,dolly, babe, little] = farmAnimals.split(' ');

const [blackAndWhite, ,black, pink, ,] = farmAnimals.split(' ');

// Array Destructuring
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// 4. Destructure to declare variables using color names
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 4 (Continued). Destructure to assign the same colors with alternate names
const [Reddish, Orangish, Yellowish, Greenish, Bluish, Indigoish, Violetish] = colors;

// 5. Destructure using the first letter of each color, excluding indigo
const [r, o, y, g, b, , v] = colors;

// 6. Only assign indigo using a separate variable `indg`
const [, , , , , indg] = colors;

// Object Destructuring
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit',
};

// 7. Destructure to assign all variables using keys as variable names
const { muppetName, color, song, job, partner } = muppet;

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy',
};

// 8. Destructure songs 2 and 4, Kermit's job, and partner
const {
  album: {
    theMuppetMovie: { song2, song4 },
  },
  nestedJob,
  nestedPartner,
} = nestedMuppet;

// Console Output to Verify Results
console.log(red, orange, yellow, green, blue, indigo, violet); // Color names
console.log(Reddish, Orangish, Yellowish, Greenish, Bluish, Indigoish, Violetish); // Alternate names
console.log(r, o, y, g, b, v); // First letters excluding indigo
console.log(indg); // Indigo only
console.log(muppetName, color, song, job, partner); // Muppet object properties
console.log(song2, song4, nestedJob, nestedPartner); // Selected properties from nestedMuppet



// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destruc to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring toturing assign songs 2 and 4, and Kermit's job and partner