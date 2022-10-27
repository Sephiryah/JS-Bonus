const bestActors = [
    {
      actor: "Forest Whitaker",
      film: "The Last King of Scotland",
      age: 45
    }, {
      actor: "Daniel Day-Lewis",
      film: "There Will Be Blood",
      age: 50
    }, {
      actor: "Sean Penn",
      film: "Milk",
      age: 48
    }, {
      actor: "Jeff Bridges",
      film: "Crazy Heart",
      age: 60
    }, {
      actor: "Colin Firth",
      film: "The King's Speech",
      age: 50
    }, {
      actor: "Jean Dujardin",
      film: "The Artist",
      age: 39
    }, {
      actor: "Daniel Day-Lewis",
      film: "Lincoln",
      age: 55
    }, {
      actor: "Matthew McConaughey",
      film: "Dallas Buyers Club",
      age: 44
    }, {
      actor: "Eddie Redmayne",
      film: "The Theory of Everything",
      age: 33
    }, {
      actor: "Leonardo DiCaprio",
      film: "The Revenant",
      age: 41
    }
  ];


const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;
const bestActorsSorted = bestActors.sort((a, b) => b.age - a.age);

document.write('<ol>');
bestActorsSorted.forEach(actor => document.write(wrapWithTag(actor.actor, 'li')));
document.write('</ol>');

let result = 0;
bestActors.forEach(actor => (result += actor.age));
console.log(result);