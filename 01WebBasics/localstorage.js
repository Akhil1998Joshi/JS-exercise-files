
localStorage.setItem('todo','Buy Ice tea');
var myHero = localStorage.getItem('hero');
console.log(myHero);

console.log(localStorage.getItem('todo'));

localStorage.setItem('todo','Record Youtube videos');
console.log(localStorage.getItem('todo'));


localStorage.removeItem('hero');

myHero = localStorage.getItem('hero');
console.log(myHero);

localStorage.clear();