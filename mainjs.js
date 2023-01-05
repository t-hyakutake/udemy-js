

// 配列
console.log('配列')
const roomNumber = [201, 202, 203];
console.log(roomNumber[2]);



// オブジェクト
console.log('オブジェクト')
let num = {red:1, 1999:2, 2022:'new'};;
// 値を取得する方法は２パターンある
// 変数.key か 変数[]
// console.log(num.red)
// keyがnumberの時は''でstringにしてとる
num['1999'] = 5
// num.red = 3
num.blue = true
console.log(num)
console.log(num.red)
console.log(num['2022'])
// num.red = 'old'
// num.2022 = 'old'

// ループ
console.log('ループ for文');
// for (
//   [初期化];
//   [条件式]; trueの時に実行分を実行する
//   [増減式]
// ){実行文}
for (let i = 2; i <= 5; i++){
  console.log(i)
}
// 無限ループに注意

// 偶数を表示
console.log("偶数表示")
for (let i = 2; i <= 10; i += 2){
  console.log(i)
}
console.log('5づつ減らす')
for (let i = 20; i > 0; i -= 5){
  console.log(i)
}

const morning = ['譜久村','生田', '石田','小田','野中', '牧野', '横山']
for (let i = morning.length - 1; i >= 0; i--) {
  console.log(i, morning[i]);
}

console.log('forのネスト')
const jj = [
  ['宮崎', '金澤', '宮本', '植村'],
  ['段原', '稲場'],
  ['工藤', '松永'],
  ['井上'],
  ['有澤', '入江', '江端']
]
for (let i = 0; i < jj.length; i++) {
  // console.log(jj[i])
  console.log(`jj${i + 1}期`)
  const kibetu = jj[i];
 for (let j = 0; j < kibetu.length; j++) {
  console.log(kibetu[j]);
 }
}

console.log('whileループ')
// while(条件式){
// 条件式がtrueの時実行される
// }
// 条件式がfalthの時抜ける。無限ループしやすいので注意
// {

//   const pass = '0723';
//   let guess = prompt('please pass');
//   while (guess !== pass){
//     guess = prompt('please more pass');
//   }
//   alert('good')
// }

// break文の例
// let input = prompt('入力ください')
// while (true) {
//   input = prompt(input);
//   if (input === 'exit') break;
// }

for (let i = 1; i < 100; i++) {
  console.log(i);
  if (i === 3) break;
   // if文の実行分が１行の時は｛｝は省略できる
}

// 数字当てゲーム
// let maxnum = parseInt(prompt('数字当てゲームーmax数字を決めて'));
// //文字列の入力には再度prompt NaNはfalthyなので!でtrueにする
// while (!maxnum || maxnum < 0) {
//  maxnum = parseInt(prompt('整数の自然数をいれて'));
// }

// const randomNum = Math.floor(Math.random() * maxnum )+ 1
// console.log(randomNum);

// let answer = parseInt(prompt('CPが数字を決めました、予想してください'))
// let answerCount = 1;
// while (parseInt(answer) !== randomNum) {
//   if (answer === 'z') break;
//   answerCount++;
//   if (answer > randomNum) {
//     answer = prompt('もっと小さい zでエスケープ');
//   } else {
//     answer = prompt('もっと大きい zでエスケープ');
//   }
// }
// if (answer === 'z'){
//   console.log('ゲームを終了します')
// } else {
//   console.log(`${answerCount}回で正解`)
// }