const kitchen = require('./kitchen.js');
console.log(module);
const mynewKitchen = new kitchen();
let data1 = {
    'id' : 0,
    'name' : 'kheer',
    'price' : 100
};

let data2 = {
    'id' : 1,
    'name' : 'alloo-tamatar',
    'price' : 200
};

mynewKitchen.insert(data1);

console.log(mynewKitchen.query(data1.id));
mynewKitchen.insert(data2);
console.log(mynewKitchen.query(data1.id));
mynewKitchen.remove(data1.id);

console.log(mynewKitchen.query(data1.id));
console.log(mynewKitchen.query(data2.id));

mynewKitchen.insert(data1);

mynewKitchen.queryAll().forEach ((ele) => {
    console.log('item => ',ele);
});

mynewKitchen.removeAll();

mynewKitchen.query(data2.id);
