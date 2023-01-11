'use strict';
const shop = {
    name: 'phone',
    location: 'hanoi,haiduong',
    categories: ['samsung', 'iphone', 'xiaomi'],
    product:['ip 14','ip 13'],
    

};
const arr = [2,3,4];
const a=arr[0];
const b=arr[1];
const c=arr[2];

const[x,y,z]=arr;
console.log(x,y,z);
console.log(arr);

const [main, ,secondary] = shop.categories;
console.log(main,secondary);

[main,secondary]=[secondary,main];
console.log(main,secondary);


