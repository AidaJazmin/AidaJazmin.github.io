let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Soy programadora web y es un gusto conocerte y que sepas sobre mi.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
