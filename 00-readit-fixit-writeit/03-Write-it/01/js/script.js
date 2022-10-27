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

document.write('<ul>');
movies.forEach(movie => document.write(wrapWithTag(movie, 'li')));
document.write('</ul>');