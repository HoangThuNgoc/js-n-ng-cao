






const shop = {
    name: 'phone',
    location: 'hanoi,haiduong',
    categories: ['samsung', 'iphone', 'xiaomi'],
    product:['ip 14','ip 13'],
    

};
const arr = [3,4,5];
const badNewArr = [1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);

const newArr = [1,2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1,2,3,4,5);

const newPhone=[...shop.categories,'samsung'];
console.log(newPhone);

const menu=[...shop.categories, ... shop.product];
console.log(menu);


const str ='alex';
const letters = [...str,'','S.'];
console.log(letters);
console.log(...str);






