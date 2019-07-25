const seanBeanMovies = [ 'The Martian', 'Percy Jackson & the Olympians: The Lightning Thief', 'Far North', 'The Island', 'National Treasure', 'Troy', 'The Lord of The Rings: The Return of the King', 'Equilibrium', 'The Lord of The Rings: The Two Towers', 'The Lord of The Rings: The Fellowship of the Ring', 'Anna Karenina', 'Goldeneye'
];

const seanBeanShows = [ 'Curfew', 'Medici', 'Wasted', 'Missing', 'Legends', 'Game of Thrones', 'Crusoe', 'Clarissa', 'The Practice',
]
console.log('# Challenge #1');
// Create a function that console.logs every item in the movie list. Now call that function.

function movieList(){
  let i = 0
  while ( i < seanBeanMovies.length){
    console.log(seanBeanMovies[i])
    i = i + 1
  }
}
movieList()

console.log('# Challenge #2');
// Create a function that console.logs every item in the TV list. Now call that function.

function showList(){
  let i = 0
  while ( i < seanBeanShows.length){
    console.log(seanBeanShows[i])
    i = i + 1
  }
}
showList()

console.log('# Challenge #3');
// There's an order to the array items, but only if you're a major tv or movie buff--or, like this project's author, a minor Sean Bean buff--would you notice; they're listed chronologically, newest first. Now write a function that consoles out the movies in oldest-first order, and call that function.

function movieOppOrder() {
  let i = seanBeanMovies.length-1
  while( i >= 0){
    console.log(seanBeanMovies[i])
    i = i + -1
  }
}
movieOppOrder()

console.log('# Challenge #4');
// Now do the same as above, but for TV shows.

function showOppOrder() {
  let i = seanBeanShows.length-1
  while( i >= 0){
  console.log(seanBeanShows[i])
  i = i - 1
  }
}
showOppOrder()
console.log('# Challenge #5');
// Now that we know that our initial two functions don't just list the items, but list them in newest-first chronological order, change their names to give them as equally descriptive names as the ones you gave the oldest-first functions. (If you didn't give them descriptive names, do so now.) Then console out "Done!" below.

console.log('# Challenge #6');
// Write a function that, without any NEW loops, consoles out the movies list items individually followed by the tv list items individually, in chronological order of newest-first (not worrying about whether a movie is before a tv show!). What would you name such a beast? Got an idea? Then name it! And call it!

function moviesAndShows() {
  console.log((movieList()+ showList()))
}
moviesAndShows()

console.log('# Challenge #7');
// Do the same as above, but for oldest-first order.
function moviesandShowsOpp() {
  console.log((movieOppOrder() + showOppOrder()))
}
moviesandShowsOpp()

console.log('# Challenge #8');
// Write a function that consoles out any movies in the Lord of the Rings series. Now call it!

function lordOfTheRings(){
  let i = 0 
  while( i < seanBeanMovies.length){
    if (seanBeanMovies[i][0] !== ('T')) 
    console.log(seanBeanMovies[i])
    i = i + 1
  }
}

/* figure out how to target more than one one letter without erasing the whole damn thing */ lordOfTheRings()


console.log('# Challenge #9');
// Now write a function that consoles out the movies in alphabetical order, using Array.sort() (look up how to use it, but you shouldn't have to put anything in `.sort`'s parentheses!). Be SURE that you make a COPY of the array before you do so, as otherwise your function will re-arrange the original array and you'll lose the chronological ordering!

// function moviesAlpha(){
//   let i = 0
//   let alpha = []
//   while( i < seanBeanShowsmovies.length){
//     alpha.push(seanbeanmovies[i])
//     i = i + 1
//     console.log(alpha)
//   }
// }
// moviesAlpha()


console.log('# Challenge #10');
// Did you notice how the Lord of the Rings movies got sorted under "T" for "The"? We'd prefer they be listed under "L", because otherwise such titles can be very difficult to find.

// Declare the alphabetized copy of your array from the last function GLOBALLY, outside your function, near (but after) the seanBeanMovies definition at the top. Use a let to declare it, and make it a copy of the seanBeanMovies array, just like we did in the function originally.

// Modify your alphabetical printing function from the challenge above so that it changes that global array, without declaring a new array.

// Your alphabetical printing function should still work. Call it again at the end of this challenge!



console.log('# Challenge #11');
// Now that we've got things set up right, write a function that will change any title in your global array (which should, again, be a COPY of seanBeanMovies) from having "The" at the start to ", the" at the end. Be careful of spaces, and you SHOULD be modifying that array.

// Now call that function, followed by the alphabetical printing function. If you did it right, you'll change the titles to move "The" to the end, then print it in (better) alphabetical order.



// Your result should be:

// Anna Karenina
// Equilibrium
// Far North
// Goldeneye
// Island, the
// Lord of The Rings: The Fellowship of the Ring, the
// Lord of The Rings: The Return of the King, the
// Lord of the Rings: The Two Towers, the
// Martian, the
// National Treasure
// Percy Jackson & the Olympians: The Lightning Thief
// Troy


console.log('# Challenge #12');
// Now call the first function you made. If you correctly didn't modify the original array, it should give you the same console results. If it does: congratulations! You did it! You're done!

