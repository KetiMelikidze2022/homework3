
// //1. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;

// //მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
// //მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
// //გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
// //წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
// //დაბეჭდეთ მასივისი ახალი ელემენტები.

// let numbers=[5,25,89,120,36];

// numbers.push('javascript','python');
// numbers.unshift('html','css');
// console.log(numbers.length);
// let newarraynumbers=numbers.push('javascript','python'); array.unshift('html','css');
// console.log(newarraynumbers);
// numbers.shift();
// numbers.pop();

//    console.log(numbers);



// //2. შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;

// //1) გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
// //2)მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
// //3)მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
// //4)გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
// //5)მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
// //6)წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
// //7)გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

// let fruits=['ფორთოხალი','ბანანი','მსხალი'];
//                                          console.log(fruits.length);

// fruits.push('ვაშლი','ანანასი');

// fruits.unshift('საზამთრო');

//                                                 console.log(fruits.length);

// fruits.splice(2,0,'მანგო');
// fruits.shift();
// fruits.pop();


//                                                   console.log(fruits);


// //3. მოცემულია მასივი:

// //let array = [12, 25, 3, 6, 8, 14, 7, 23];
// //map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;

// let array = [12, 25, 3, 6, 8, 14, 7, 23];

// let newarraymap=array.map(function(item){
//   return item  % 3;
// });

//  console.log(newarraymap);


// //4.  მოცემულია მასივი:

// //let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// //filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო ციფრები; 

// let array1 = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

// let array1filter=array1.filter( element => typeof element ==="number");
// console.log(array1filter);




// //5.მოცემულია მასივი:

// //let languages = ['html', 'css', 'javascript', 'python, 'php'];
// //ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

// let languages = ['html', 'css', 'javascript', 'python','php'];

// let result = languages.filter(item => item.length > 3);
// console.log(result);


// // 6.მოცემულია მასივი:
// //let array= ['academy', 'of', 'digital', 'industries']

// //Reduce-ის საშუალებით მიიღეთ ერთი კომბინირებული სტრინგი(academy of digital industries);

// let array2= ['academy', 'of', 'digital', 'industries']

// let newArray = array2.reduce((prev,curr)=> prev+ "  " +curr );
// console.log(newArray);









// // 7. მოცემულია მასივი:
// //       let item = [12, ‘google’, 32, null, ‘yahoo’, 25];   
// //     შექმენით ახალი მასივი map ფუნქციის გამოყენებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის ტექსტი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტები უნდა დაემატოს უცვლელად;

// let item = [12, 'google', 32, null, 'yahoo', 25];


// let newArrayArrowFunction = item.map(x => {
//   if (typeof x === 'number') {
//     return Math.pow(x, 2);
//   }

//   if (typeof x === 'string' && x.length > 1) {
//     return x.substring(0, 1).toUpperCase() + x.slice(1);
//   }

//   if (x === null) {
//     return null;
//   }
// });

// console.log('map');
// console.log(newArrayArrowFunction);




// //8. Მოცემულია მასივი:
// //let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// //Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;

// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// let results=words.filter(item=>item.includes('M')||item.includes('m'));
// console.log(results);