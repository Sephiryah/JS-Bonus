/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    do {
        let age = prompt("What's your age?");
        let gender = prompt("What's your gender?");
        let town = prompt("Where do you live?(town)");
    }
    while(confirm("Do you confirm?") == false)

})();