const movies = [
    "Black Adams",
    "Lyle Lyle Crocodile",
    "Smile",
    "The New Toy",
    "Halloween Ends",
    "Jack Mimoune & the secrets of Val Verde",
    "Plancha",
    "The Woman King",
    "Belle et Sébastion, nouvelle génération",
    "L'école est à nous"
]

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`
const moviesLowerCase = movies.map(movie => movie.toLowerCase());
const moviesLCReversed = moviesLowerCase.reverse();

document.write('<ul>');
moviesLCReversed.forEach(movie => document.write(wrapWithTag(movie, 'li')));
document.write('</ul>');