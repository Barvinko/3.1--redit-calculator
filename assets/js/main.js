/*К сожелению не успел сверстать сайт, может завтра успею доделать.
Там проблема с выводом таблицы, но более-менее у меня в голове сложылось ка это реализовать, и в это мне поможет этот код с итернета:
var tag = '<div></div>';
var target = document.getElementById('target');
target.innerHTML = tag;

но пока-что только в консоли
*/ 
let sum = 100_000;
let term = 24;
let rate = 12;
let mRate = rate/12/100;
let dept = sum;
let monthPayment = sum * ((mRate * ((1 + mRate) ** term)) / (((1 + mRate) ** term) - 1));
monthPayment = +monthPayment.toFixed(2);
let overpayment = ((monthPayment * term) - sum).toFixed(2);
console.log(mRate);
console.log(monthPayment);

balans = [sum];

for (let i = 1; i <= term; i++) {
    let j = i-1;
    let bodyPath = 0;
    let ratePath = 0;

        ratePath = +(balans[j] * mRate).toFixed(2);
    if(i != term){
        bodyPath = +(monthPayment - ratePath).toFixed(2);
    }else{
        bodyPath = balans[j];
    }
    balans[i] = +(balans[j] - bodyPath).toFixed(2);

    console.log(`Баланс: ${balans[j]}, Выплата за долг: ${bodyPath.toFixed(2)}, Выплаты за кредит: ${ratePath.toFixed(2)}, Выплата: ${(bodyPath + ratePath).toFixed(2)}`);
}

console.log(`Переплата за использование кредита: ${overpayment}`);

