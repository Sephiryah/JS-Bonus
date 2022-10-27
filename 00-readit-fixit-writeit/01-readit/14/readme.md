 # Exercice 14

 ## Look at the reduce() function and research how it works exactly.

 The reduce() function will pass all the elements selected for parameters in a given array through an operation. 

 ## Notice the ', 0' in the reduce function. Inspect the result when you omit this. Explain the difference.

 If I omit the ', O' it will just concatenate together all the value of the array and display the concatened result.

 ## What are we doing with the object that's passed to 'calculateAvailable'?

 When an object pass through 'calculateAvailable', it will substract the value of 'occupied' to the value of 'capacity' and will return a new property to the object called 'available' with the result of the operation as value.