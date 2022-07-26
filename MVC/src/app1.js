import $ from 'jquery'
import './app1.css'

const html = `<section id="app1">
<div class="output">
  <span id="num">100</span>
</div>
<div class="actions">
  <button id="add1">+1</button>
  <button id="minus1">-1</button>
  <button id="mul2">x2</button>
  <button id="divide2">÷2</button>
</div>
</section>`;

const $element = $(html).prependTo('body>.page');

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