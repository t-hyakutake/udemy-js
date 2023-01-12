
console.log('メソッド');
// stringのメソッド
// thing.method();
// 変数や文字列の後に.メソッド（）の順
console.log('string'.length); 
// 'string'.length これはプロパティの参照。
let hello = 'hello project';
console.log(hello.toUpperCase());
let spacehello = '  hello! project  ';
let slimhello = spacehello.trim().toUpperCase();// メソッドは続けて複数書ける
console.log(slimhello);

console.log('メソッドの引数');
// thing.method(arg); 引数をいれて動かすメソッドもある
console.log(hello.indexOf('p'));// 6
//slice(とり始めindex数, [終了index数])
//index の-は後ろからの数
console.log(hello.slice(6, 9));// pro
console.log(hello.slice(-7));// project
console.log(hello.slice(-7, -2));// proje
console.log(hello.replace('project', 'morning')); // hello morning
// replaceは置き換える

console.log('条件分岐');
console.log('if文');
// if (条件文true か faulth) { trueで実行分 } else if ( ) { } else { }
let score = 92;
if ( score > 90) {
  console.log('great');
} else if (score > 70){
  console.log('good');
} else {
  console.log('you\'re fire')
}; //great

//ifのネスト
if ( score > 90) {
  if (score % 2 === 0){
    console.log('great&偶数')
  } else {
    console.log('great&奇数')
  }
} else {
  console.log('other')
}

//truthy falsy
//falthy とは false 0 ''stringなし null undefined Nan 
//（空白入力はfalsyではない）truthyはそれ以外
if (0) {
  console.log('true')
} else {
  console.log('false')
}
// if () {
//   console.log('true')
// } else {
//   console.log('false')
// } これはエラーでfalseとはならない
if (null) {
  console.log('true')
} else {
  console.log('false')
}

console.log('論理演算')
//&&and, ||or, !not
if (score > 90 && score % 2 === 0){
  console.log('９０以上かつ偶数')
} else {
  console.log('以外')
}

if (score > 90 && score % 2 !== 0){
  console.log('９０以上かつ偶数')
} else {
  console.log('以外')
}
// let userinpt = prompt('入力ください');
// if (!userinpt) {
//   prompt('なにか入力ください')
// }
//falsyな空入力をnot!でtrueにしている

console.log('switch文')
{
  // let month = prompt('switch文を処理します１２までの数字を入力ください。')
  // switch (month){
  //   case '1':
  //     window.alert('１月');
  //     break;
  //   case '2':
  //     alert('２月')
  //     break;
  //   case '3':
  //   case '4':
  //   case '5':
  //     alert('３～５月')
  //     break;
  //   default:
  //     alert('６月以降')
  // }
}

// 配列
console.log('配列')
{
  let row = [true, 23, '文字列', null];
  console.log(row); //true, 23, '文字列', null
  console.log(row[0]); //true
  console.log(row[2]); //文字列
  console.log(row[4]); //undefined
  console.log(row[2][1]); // 字
  row[1] = 48; //配列の中身は変更できる
  console.log(row[1]);//48
  console.log('push,pop,unshift,shift');
  row.pop(); //最期を削除(nullを削除)
  row.push(12);//最期に追加
  row.shift(); //最初を削除
  row.unshift(null); //最初にnullを追加
  console.log(row); //null, 48, '文字列', 12
}


const roomNumber = [201, 202, 203];
console.log(roomNumber[2]);
{
  console.log('配列のメソッド')
  //concat();
  let inaguralClass = ['中澤', '飯田', '安倍'];
  let secondClass =['保田', '市井', '矢口'];
  let morning = inaguralClass.concat(secondClass); //配列を結合して新しい配列を作る
  console.log(morning);
  console.log(morning.includes('安倍')) ; // true
  console.log(morning.indexOf('飯田')) ; // 1
  console.log(morning.slice(1,4)) //['飯田', '安倍', '保田']
  //slice(開始index,終了index);
  console.log(inaguralClass.splice(1, 2, '石黒')); 
  //spliceは配列自体を変更する
  // splice(削除開始index, 削除する数, 追加)
  console.log(inaguralClass);//['石黒', '中澤']
  console.log(morning.reverse()); // 配列自体を変更する、逆順になる
}
console.log('配列の等価性');
console.log([1, 2, 3] === [1, 2, 3]); // false
{
  let num = [1, 2, 3];
  numCopy = num;
  console.log(num === numCopy); // true
  //配列では配列の中身をみているのではなくて、配列の保存先を検証している
}
console.log('配列の変更const');
{
  const colors = ['red', 'yellow',];
  colors.push('blue');
  console.log(colors); // ['red', 'yellow', 'blue']
  //中身の変更はできる
  // colors = ['green', 'gray'];
  //これは再定義してメモリの場所を変更する事になるのでエラー
  let newColors = ['red', 'blue'];
  console.log(newColors = ['gray', 'blue']); // もちろんletなら可能
}
console.log('多次元の配列（配列のネスト）')

// オブジェクト
console.log('オブジェクト')
let num = {red:1, 1999:2, 2022:'new'};
console.log(num)
// 値を取得する方法は２パターンある
// 変数.key か 変数['key']
// console.log(num.red)
console.log(num.red) // 1
// console.log(num.'red') // エラー
console.log(num['red']); // 1
num['blue'] = true;
// num.2022 //これはエラーになる
console.log(num['2022']); // 'new'
// keyはstringに変換される
num[1999] = 5;
//''無しでも可能だが、これはナンバーの1999をstringに変換してアクセスしている
{
  console.log('オブジェクトの変数でのアクセス方法')
  const signal = {red:'stop', yellow:'caution', blue:'go'}
  // 変数になっているkeyでアクセスする
  const currentSignal = 'red'
  console.log(signal.currentSignal);
   //エラーにはならないがだめ。（これは'currentSignal'というkeyを探すのでundefined）
  console.log(signal[currentSignal]); //stop
  console.log(signal['red'] + signal['blue']) //stopgo
  
}

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

// passとguessが一致しないと、whileで繰り返す
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

// let answer = prompt('CPが数字を決めました、予想してください')
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

console.log('for of 文') 
// for (変数 of 列挙可能なオブジェクト){
//   処理内容
// }
// 列挙可能なオブジェクトを順番に変数にいれていくイメージ
// const morning = ['譜久村','生田', '石田','小田','野中', '牧野', '横山']
for (mmember of morning) {
  console.log(mmember)
}
// const jj = [
//   ['宮崎', '金澤', '宮本', '植村'],
//   ['段原', '稲場'],
//   ['工藤', '松永'],
//   ['井上'],
//   ['有澤', '入江', '江端']
for (jjclass of jj){
  for (jjmember of jjclass) {
    console.log(jjmember)
  }
}

let leaders = {morning:'譜久村', アンジュルム:'竹内', jj:'植村', つばき:'山岸', beyo:'一岡', ocha:'斎藤'}
console.log(leaders)
for (group of Object.keys(leaders)) {
  console.log(`${group}リーダーは${leaders[group]}`);
}
// 下の for in も同じように使える
// for (group in leaders) {
//   console.log(`${group}は${leaders[group]}`)
// }
