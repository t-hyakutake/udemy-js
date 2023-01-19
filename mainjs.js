
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
// for (初期化; 条件式trueの時に実行する; 増減式) {実行文}
for (let i = 2; i <= 5; i++){
  console.log(i)
}
// 無限ループに注意

// 偶数を表示
console.log("2から＋２を表示")
for (let i = 2; i <= 10; i += 2){
  console.log(i)
}
console.log('5づつ減らす')
for (let i = 20; i > 0; i -= 5){
  console.log(i)
}

const morning = ['hukumura','ikuta', '石田','小田','野中', '牧野', '横山']
for (let i = 0; i < morning.length; i++){
  console.log(morning[i])
}

for (let i = morning.length - 1; i >= 0; i--) {
  console.log(i, morning[i]);
}

for (i = 0; i < morning.length; i++){
    console.log(morning[i].toUpperCase());
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
// whileを使う時は、ループの回数が分からない時によく使う
//例えば、パスワードが一致しない時にループでpassを聞き続けるなど。

// passとguessが一致しないと、whileで繰り返す
//   const pass = '0723';
//   let guess = prompt('please pass');
//   while (guess !== pass){
//     guess = prompt('please more pass');
//   }
//   alert('good')
// }

// break文の例
// let input = prompt('入力ください　exit で脱出')
// while (true) {
//   input = prompt(input, 'exit ghiで脱出');
//   if (input === 'exit') break;
// } //exit 入力で脱出

for (let i = 1; i < 100; i++) {
  console.log(i);
  if (i === 3) break;
   // if文の実行分が１行の時は｛｝は省略できる
}

// 数字当てゲーム
// let maxnum = parseInt(prompt('数字当てゲームーmax数字を決めて'));
// // prompt の入力は数字でもstringになるのでparseIntでnamberにする
// // 文字列の入力には再度prompt NaNはfalthyなので!でtrueにする
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
for (let mmember of morning) {
  console.log(mmember)
}
// const jj = [
//   ['宮崎', '金澤', '宮本', '植村'],
//   ['段原', '稲場'],
//   ['工藤', '松永'],
//   ['井上'],
//   ['有澤', '入江', '江端']
for (let jjclass of jj){
  for (let jjmember of jjclass) {
    console.log(jjmember)
  }
}

console.log('オブジェクトの表示')
let leaders = {morning:'譜久村', アンジュルム:'竹内', jj:'植村', つばき:'山岸', beyo:'一岡', ocha:'斎藤'}
console.log(Object.keys(leaders)); //オブジェクトのkeyを取得
for (let group of Object.keys(leaders)) {
  console.log(`${group}リーダーは${leaders[group]}`);
}
// 下の for in も同じように使える
// for (group in leaders) {
//   console.log(`${group}は${leaders[group]}`)
// }

// for (変数宣言 例:group in オブジェクトの変数){
//   console.log(変数 例:group);
//} // 変数のkeyが表示

console.log('関数');
// 関数の定義の方法
// function function名(パラメータ){ 処理内容 }
// function名は camelcase が多い
{
function morningOrigin() {
  console.log('中澤,石黒,飯田,安倍,福田')
}
morningOrigin(); // 中澤,石黒,飯田,安倍,福田

function  morningmember(name) {
  console.log(`morningの${name}さん`)
}
morningmember('牧野'); // morningの牧野さん
morningmember(13); // morningの13さん
}
// 関数の中にfor文など使って複雑にする事ができる
function shout(message) {
  for (i = 0; i < 3; i++){
    console.log(`${message.toUpperCase()}`)
  } //繰り返しはfor文でできる
}
shout('hello world'); // HELLO WORLD ×3

//関数のパラメータを複数にする
function isSameNumbers(x, y) {
  if (x === y){
      console.log('ゾロ目');
  } else {
      console.log('ゾロ目じゃない');
  }
}
isSameNumbers(5,6); //ゾロ目じゃない
isSameNumbers(4,4); //ゾロ目

//関数 return で値を返す
{
function add(x, y){
  return x + y; 
  // const sum = x + y;
  // return sum;
  // という意味
  // returnの後は処理されないので、
  //if文の else{}など書かなくてもいい使い方もできる
}
let sum = add(5,8); 
console.log(sum) //13
sum = add(add(5,8),8);
console.log(sum); // 21
//sum = add(6, 9)
//console.log(sum); // 15
}
{
  function add(x, y) {
    console.log(x + y);
  }
  add(3, 7); // 10
  let sum = add(4,7) // 11
  console.log(sum) // undefined
  // return をしないと関数の結果を代入できない
}

// 25以上でtrue 25未満でfalse になる
function isShortsweather(tempreature) {
  if (tempreature >= 25) {
      return true
  }
  return false
}
console.log(isShortsweather(24)); // false

// 配列の最後の値をreturn かつ 配列が空の時 null
function lastElement(array) {
  if (array.length !== 0) {
  let last = array[array.length - 1]
  return last 
  } else {
    return null
  }
}
console.log(lastElement([])) // null
console.log(lastElement([2,4,8])) // 8

// string の一文字目だけを大文字にして残りの文字も+してreturn
function capitalize(str) {
  big = str[0].toUpperCase()
  return big + str.slice(1);
}
console.log(capitalize('naka')); // Naka
// 若しくは残りも変数にした方が読みやすいかも
{
  function firstup(str) {
    let first = str[0].toUpperCase();
    let rest = str.slice(1);
    return first + rest
  }
  console.log(firstup('fukumura')); //Fukumura
}

//配列のnumberを合計する
function sumArray(arr) {
  let sum = 0 
  for (i = 0; i < arr.length; i++ ) {
   sum = sum + arr[i]  
  }
  return sum
}
console.log(sumArray([1,2,5])); // 8

// 入力を曜日に変換する関数
function returnDay(number) {
  const week = {
    1:'Monday', 2:'Tuesday', 3:'Wednesday', 4:'Thursday', 5:'Friday', 6:'Saturday', 7:'Sunday'}
  
    if (1 > number || 7 < number) {
   return null
  }  
    return week[number] 
  }
console.log(returnDay(0));

console.log('変数のスコープ')
function collect() {
  let numnum = 7;
  console.log(num); 
  //consoleでcollect() で ７ 
}
// collect(); // 呼び出してもerror
// console.log(numnum); // error
// 関数内のletは関数内でしか適用されない

{
  let num = 7;
  function collect() {
    num = 9; //外での宣言を呼び出すだけ
    // let num = 9 //にしたら関数外では適用されず下のconsoleは 7 7が表示
  }
  console.log(num) // 7 関数前の宣言を適用
  collect() // 関数呼び出し
  console.log(num) // 9 関数内のnumが出る
} //この書き方はよくないので、外での宣言は使わないのが望ましい

let dog = '柴犬';
function dogrun() {
  let dog = '秋田犬'
  console.log(dog) //なぜか表示されないが'秋田犬'
  // 関数内の宣言を優先するが、関数内にない場合は外の宣言を適用する
}
console.log(dog) // 柴犬

for (i = 0; i < 4; i++){
  let greet = 'おはよう';
  // var greetNight = 'こんばんわ'; //varはブロック外でも適用されるので注意
  console.log(greet);
}
//console.log(greet); // not defined ブロック{}無いの宣言は外では使えない
// console.log(greetNight); //こんばんわ varはブロック外でも適用される

console.log('レキシカルスコープ');
//function内で宣言されていなくてもスコープして適用される
function lives() {
  const singers = ['髭男','misia','smap'];//外にconstしているがcall();で外を呼び出すので適用
  function call() {
    // const singers = ['髭男','misia','smap']; //関数内に定義されているのが普通
    for (let artist of singers) { //singersがfunctioの外でも適用される
      console.log(`${artist}がうたいます`)
    }
   }
   call();
}
lives(); //髭男がうたいます  misiaがうたいます smapがうたいます 
// なので、以下は別の宣言を適用する
const singers = ['モーニング娘', 'AKB']
function call() {
  for (let artist of singers) { 
    console.log(`${artist}がうたいます`)
  }
}
call();
//複雑なレキシカルスコープ
{
  let shout = '最初の叫び';
  function actfirst() {
    console.log(shout)
    // shout = 'secondのみの叫び'; //actsecond()ではここが適用される
  }
  function actsecond() {
    let shout = '後の叫び'
    actfirst();
  }
 // shout = '最後の叫び' // これだとこちらが適用される
}
actfirst(); //最初の叫び
actsecond();//最初の叫び
//定義されている場所をよく注意しましょう
console.log('関数式')
{
const sum = function sumsum(num) { //sumsumは定義できていない
  return num + num
}
console.log(sum(4)); // 8
// console.log(sumsum(6)); //これは定義できていないからエラー
}
// 関数の中身もただの値であることを認識しよう

// 関数の引数として関数をうけとる
{
  // サイコロを振って表示する関数
  function dice() {
    const roll = Math.floor(Math.random() * 6 ) + 1;
    console.log(roll)
  }
  // １回実行する関数
  function once(func) { //()をつけない
    func();
  }  
  once(dice); // 6までのランダム数
  // ５回実行する関数
  function passFive(fun) { //()をつけない
    for (i = 0; i < 5; i++) {
      fun();
    }
  }
  passFive(dice); // サイコロ５回
}
