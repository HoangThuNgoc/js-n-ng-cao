const restaurant={
    name:'ngoc',
    location:'hanoi,haiduong',
    categories:['chicken','organic'],
    starteMenu:['sup','banh','keo'],
    mainMenu:['pizza','cake','pasta'],

}

const arr=[1,2, ...[3,4]];


const[a,b,...others]=[1,2,3,4,5];
console.log[a,b,others];


const [pizza, ,pasta, ...otherFood]=[
    ...restaurant.mainMenu,
    ...restaurant.starteMenu,
];


