# Exercice 13

## Examine the parseMovieData function. What has changed? Why aren't we using forEach here?

We now use a for...in loop. For...in can pass through all string of an array, including his properties.

## Look at the documentation of for...in

The for...in statement iterals over all enumerable strings of an object(ignoring properties keyed by symbols), including inherited enumerable properties.

## Look at the documentation of the .sort(à function. Explain how it's applied here.

The sort() method sort the element of an array in place and returns the reference of the same array, now sorted. The default sort order is ascending, build upond converting the elements into strings, then comparing their sequences of UTF-16 code units value.

The sort() function is used here to sort the movie array with ascending order by his year of production(the oldest movies first, and the newest movies last).

## Notice the 2 console.table() functions. Go back to exercise 10 and console.log the movies array before and after the createList function. What's the difference? Can you explain why there is a difference?

The difference is that console.table() will display the movies in a form of a table in the console, and console.log() will display the movies array in a form of a list;