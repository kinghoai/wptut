import { hoai } from './hoai'
import "./styles/main.scss";

console.log(hoai('lam thanh hoai'))

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const odd = numbers.filter(n => n % 2 == 1);
console.log(odd);