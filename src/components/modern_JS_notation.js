
/* ========================== テンプレート文字列 ========================== */
const name_ = "momo";
const age_ = 29;
//従来の記法
const message1 = "私の名前は" + name_ + "です。年齢は" + age_ + "です。";
//テンプレート文字列記法 　`(バッククオート)
const message2 = `私の名前は${name_}です。年齢は${age_}です。`;


/* ========================== アロー関数 ========================== */
//従来の関数
function func1(str) {
    return str;
}
const func1_ = function (str) {
    return str;
}

//アロー関数　(引数) => {処理}
const func2 = (str) => {
    return str;
}

//引数が1つの場合は()を省略できる
const func3 = str => {
    return str;
}

//処理が1行の場合は{}とreturnを省略できる
const func4 = str => str;

//応用
const func5 = (num1, num2) => num1 + num2;

/* ========================== 分割代入 ========================== */
const myProfile = {
    name: "momo",
    age: 29
}

//従来の記法
const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;

//分割代入
const { name2, age2 } = myProfile;

const message4 = `名前は${name2}です。年齢は${age2}です。`;


//配列の場合
const myProfile2 = ["momo", 29];

//従来の記法
const message5 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}です。`;

//分割代入
const [name3, age3] = myProfile2;

const message6 = `名前は${name3}です。年齢は${age3}です。`;

/* ========================== デフォルト値 ========================== */
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
sayHello("momo");

//分割代入とデフォルト値
const myProfile3 = {
    age: 29
}
const { age, name4 = "匿名" } = myProfile3;

/* ========================== オブジェクトの省略記号 ========================== */

const name5 = "momo";
const age5 = 29;

//冗長な書き方
const myProfile4 = {
    name5: name5,
    age5: age5
}

//省略記号
const myProfile5 = {
    name5,
    age5
}

/* ========================== スプレッド構文 ========================== */
const arr1 = [1, 2];
console.log(arr1);  //[1, 2]
console.log(...arr1); //1 2

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]); //冗長な書き方
sumFunc(...arr1); //スプレッド構文

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;

//配列のコピー(deep copy)
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
const arr7 = [...arr4, ...arr5];

/* ========================== mapやfilter ========================== */
const nameArr = ["田中", "山田", "momo"];
for (let i = 0; i < nameArr.length; i++) {
    console.log(nameArr[i]);
}

//同じ処理をmapで書く
nameArr.map((name) => console.log(name));

const nameArr2 = nameArr.map((name) => {
    return name;
})

//mapの応用(二つ目の引数を用意するとindexを取得できる)
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

//mapの応用(条件によって処理を変える)
const newNameArr = nameArr.map((name) => {
    if (name === "momo") {
        return name;
    } else {
        return `${name}さん`;
    }
})

//filter
const numArr = [1, 2, 3, 4, 5];
//奇数だけを取り出す例
const newNumArr = numArr.filter((num) => {
    return num % 2 === 1;
})

/* ========================== 三項演算子 ========================== */
//基本の書き方
const val1 = 1 > 0 ? "true" : "false";

//応用
const num = 1300;
const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";

//条件分岐
const checkSum = (num1, num2) => {
    return num1 + num2 > 100 ? "100を超えています!" : "許容範囲内です。";
}