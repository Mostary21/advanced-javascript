const students = [
    {id: 21, name: 'fojul'},
    { id: 21, name: 'maannaaa'},
    { id: 41, name: 'bojlu'},
    { id: 51, name: 'kojlu'},

];
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const bigger1 = students.find(s => s.id > 40);
console.log(bigger1);