// //テンプレ文字列
// const name = "shin";
// const age = 21;
// //「私の名前はshinです。年齢は21際です」

// //方法1
// const message = "私の名前は"+name+"です。年齢は"+age+"です。";
// console.log(message);

// //テンプレを使う方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//アロー関数
//従来のかきかた
// function func1(str){
//   return str;
// }
// const func1 = function(str){
//   return str;
// }
// console.log(func1("aaaa"));

//アロー
// const func1 = (str) => {
//   return str;
// };
// console.log(func1("aaaaaaa"));

// const func = (num1 , num2) => num1+num2;
// console.log(func(11,1));

//分割代入
// const myPro = {
//   name : "shin",
//   age : 21,
// };

// const mess = `私は${myPro.name}です。年齢は${myPro.age}歳です.`;
// console.log(mess);
// const {name , age} = myPro;

//default値
// const sayHello = (name="shin") => console.log(`hello!${name}!`);
// sayHello();

//スプレッド構文
//配列の展開
// const arr1 = [1,2,3,4];
// console.log(...arr1);
// const sumFunc = (num1,num2) => console.log(num1+num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

//まとめる
//  const arr2 = [1,2,3,4,5];
//  const [num1,num2,...arr3] = arr2;
//  console.log(arr2);

//配列コピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];
// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4,...arr5];
// console.log(arr7);
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

//map,filter
//const nameArr = ["shin", "hito", "tai"];
// for(let index=0;index<nameArr.length;index++){
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// });
// console.log(nameArr2);

//nameArr.map((name) => console.log(name));

// const numArr = [1,2,3,4,5];
// const newnumArr = numArr.filter((num) => {
//   return num%2 === 1;
// });
// console.log(newnumArr);

// const newNameArr = nameArr.map((name) => {
//   return name === "tai" ? name : `${name}さん`;
// })
// console.log(newNameArr);

//三項演算子
//ある条件 ? 条件がtrueの時 : falseの時

//const val1 = 1 < 0 ? console.log(0) : console.log(1);
//console.log(val1);

// const num = "1300";
// //console.log(num.toLocaleString());

// const fmNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力して';
// console.log(fmNum);

// const checkSum = (num1,num2) => {
//   return num1 + num2 > 100 ? '100を超えている':'100以下';
//}
// console.log(checkSum(50,60));
// console.log(checkSum(50,10));

//論理演算子
// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//   console.log("1か2はtrue");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrue");
// }

// ||は左側がfalseなら右を返す
// const num = null;
// const fee = num || num　|| "aaa";
// console.log(fee);

//&&は||の逆
// const num2 = null;
// const fee2 = num2 && "何か設定された";
// console.log(fee2);
