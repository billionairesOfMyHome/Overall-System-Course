import $ from 'jquery'
import './app1.css'

const $btn1 = $('#add1');
const $btn2 = $('#minus1');
const $btn3 = $('#mul2');
const $btn4 = $('#divide2');
const $num = $('#num');
const n = localStorage.getItem('n');
$num.text(n ? n : 100)
$btn1.on('click', () => {
  let n = Number($num.text())
  n++
  $num.text(n)
  localStorage.setItem('n', n);
})
$btn2.on('click', () => {
  let n = Number($num.text())
  n--
  $num.text(n)
  localStorage.setItem('n', n);
})
$btn3.on('click', () => {
  let n = Number($num.text())
  n *= 2
  $num.text(n)
  localStorage.setItem('n', n);
})
$btn4.on('click', () => {
  let n = Number($num.text())
  n /= 2
  $num.text(n)
  localStorage.setItem('n', n);
})