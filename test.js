//  function add(number1, number2){
//     const sum = number1 + number2;
//     return sum;
//  }

//  const result1 = add(20, 25); 
//  const result2 = add(80, 45);
//  const avgResult = add (result1, result2);
 
//  console.log('Total Hisab Kora Holo ', avgResult )


// var productMobile = {
//    brand : 'samsung',
//    camera : '4mp',
//    storage : '64gp', 
//    battary : "4500mha"
// }

// console.log(productMobile);
// productMobile.storage = '128gb'
// console.log(productMobile.storage);


// function inchToFeet(inches){
//    const feet = inches / 12;
//    return feet ;
// }

// const dadaInches = 150;
// const dadaFeet = inchToFeet(dadaInches);
// console.log('Dada feet ', dadaFeet)

// const dadiInches = 120;
// const dadiFeet = inchToFeet(dadiInches);
// console.log(dadiFeet)


function mileToKM(mile){
   const kilometer = mile*1.609;
   return kilometer;
}

const mileCount = 50;
const kiloCount = mileToKM(mileCount);
console.log(kiloCount)

// function isEven(number){
//    const reminder = number % 4;
//    if(reminder === 0){
//       return true;
//    }
//    else{
//       return false;
//    }
// }

// const evenNumber = 1953;
// const findEvenNum = isEven(evenNumber);
// console.log(findEvenNum)


// 

// for(let i = 10; i>=1; i--){
//     console.log(i)

// }
 
// function  factorial (number){
//     let result = 1;
//     for(let i = number; i>=1; i--){
//         result = result * 1;
//         console.log(i);
//     }
//     return result;

// }
// const number = 52;
// const fact = factorial(number);
// console.log('Factorial of:', number, fact);


// function inchToFeet(inch){ 
//     var feet = inch/12; 
//     return feet;
    
//   }
//   const total = inche(5);
//   console.log(total);

// function print(a, b, c){
//     return a+2;
//     return a*b;
//     return b*c+a;
//   }
//   console.log(print(1,2,3));


// let a = 50;

// const lyrics = 'Tumi bondhu kala pakhi ami jeno ki, bosonto kale tomaye bolte pari ni'

// const carParts = lyrics.split(' ');

// console.log(carParts)

// const jim = 84
// const dela = 99
// const chinku = 77


// if(jim > dela && jim > chinku){
//     console.log('Jim win');
// }
// else if(dela > chinku && dela >jim){
//     console.log("Dela win")
// }
// else{
//     console.log('chinku win')
// }

// function findTallest(numbers){
//     let largest = numbers[0];    //index calling
//     for(let i = 0; i < numbers.length; i++ ){
//         const index = i;
//         const element = numbers[index];
//         if(element> largest){
//             largest = element;
//         }
//     }
//     return largest;
// }

// const height = [167, 220, 195, 218, 202];
// const tallest = findTallest(height);
// console.log(tallest); 

// Lowest number 

// function findTallest(numbers){
//     let lowest = numbers[0];    //index calling
//     for(let i = 0; i < numbers.length; i++ ){
//         const index = i;
//         const element = numbers[index];
//         if(element < lowest){
//             lowest = element;
//         }
//     }
//     return lowest;
// }

const height = [167, 220, 195, 218, 202];
const tallest = findTallest(height);
console.log(tallest); 


 const fibo = [0, 1];
for(let i = 2; i<=25; i++){
    fibo[i] = fibo [i-1] + fibo [i-2];
}
console.log(fibo);

var a=2; var b=3; 
if(a<b){
    console.log('Hello');
}

// const add = [20, 22, 32, 255, 2325,1215]

// const parsial = add.splice(2, 5,  7, 205);
// console.log(parsial);

// const names = ['abul', 'babul', 'cabul', 'kabul', 'abdul', 'babul', 'cabul', 'gabul'];

// function removeDuplicate(names){
//     const unique = [];
//     for(let i = 0; i<names.length; i++){
//         const name = names[i];
//         if(unique.includes(name)=== false){
//             unique.push(name);
//         }
//     }
//     return unique;
// }

// const uniqueName = removeDuplicate(names);
// console.log(uniqueName);


// for(let i = 1; i <= 50; i++){
//     if( i % 3 === 0 && i % 5 === 0 ){
//         console.log('foobar')
//     }
//     else if ( i % 3 === 0){
//         console.log('foo')
//     }
//     else if (i % 5 === 0){
//         console.log('bar')
//     }
//     else{
//         console.log(i);
//     }
// }



// function woodCalculator (chairQuantity, tableQuantity, bedQuantity){
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;

//     const chairWood = chairQuantity * perChairWood;
//     const tableWood = tableQuantity * perTableWood;
//     const bedWood = bedQuantity * perBedWood;

//     const totalWood = chairWood + tableWood + bedWood;
//     return totalWood;
// }
// const totolWood = woodCalculator ( 1 , 2 , 5);
// console.log('Total wood required: ', totolWood);   


const phone = [
    { name: 'Samsung', camera: 12, storage: '64gb', price: 36000, color: 'black' }
    { name: 'Iphone', camera: 20, storage: '64gb', price: 86000, color: 'black' }
    { name: 'Samphony', camera: 30, storage: '64gb', price: 12000, color: 'black' }
    { name: 'lanavo', camera: 12, storage: '64gb', price: 36000, color: 'black' }
    { name: '', camera: 12, storage: '64gb', price: 36000, color: 'black' }
    { name: 'Samsun', camera: 12, storage: '64gb', price: 36000, color: 'black' }
    { name: 'Samsun', camera: 12, storage: '64gb', price: 36000, color: 'black' }
    { name: 'Samsun', camera: 12, storage: '64gb', price: 36000, color: 'black' }
]\\

let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
}
console.log(sum)