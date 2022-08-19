import $ from 'jquery'
import './app1.css'

// 初始化 HTML
// 视图都放到 v
const v = {
  el: null,
  html: `<section id="app1">
  <div class="output">
    <span id="num">{{n}}</span>
  </div>
  <div class="actions">
    <button id="add1">+1</button>
    <button id="minus1">-1</button>
    <button id="mul2">x2</button>
    <button id="divide2">÷2</button>
  </div>
  </section>`,
  render: (container) => {
    if (!v.el) {
      $(v.html.replace('{{n}}', m.data.n)).prependTo($(container));
    } else {
      const newElement = $(v.html.replace('{{n}}', m.data.n));
      v.el.replaceAll(newElement);
      v.el = newElement;
    }
  },
  /* update: () => {
    c.ui.num.text(m.data.n || 100)
  } */
}
/* const html = `<section id="app1">
<div class="output">
  <span id="num">100</span>
</div>
<div class="actions">
  <button id="add1">+1</button>
  <button id="minus1">-1</button>
  <button id="mul2">x2</button>
  <button id="divide2">÷2</button>
</div>
</section>`; */

// const $element = $(html).prependTo('body>.page');

// 第一次渲染 html


// 初始化数据
// const n = localStorage.getItem('n');

// 数据相关都放到 m
const m = {
  data: {
    n: Number(localStorage.getItem('n'))
  }
}

// 将数据渲染到页面
// $num.text(n ? n : 100)

// 需要的重要元素
/* const $btn1 = $('#add1');
const $btn2 = $('#minus1');
const $btn3 = $('#mul2');
const $btn4 = $('#divide2');
const $num = $('#num'); */

// console.log($('#add1'));

// 其他放到 c
const c = {
  init(container) {
    v.render(container);
    c.ui = {
      btn1: $('#add1'),
      btn2: $('#minus1'),
      btn3: $('#mul2'),
      btn4: $('#divide2'),
      num: $('#num')
    }
    c.bindEvents();
  },
  bindEvents() {
    /* console.log(111);
    console.log(c.ui.btn1); */
    c.ui.btn1.on('click', () => {
      m.data.n += 1;
      v.render();
      localStorage.setItem('n', m.data.n);
    })
    c.ui.btn2.on('click', () => {
      m.data.n -= 1;
      v.render();
      localStorage.setItem('n', m.data.n);
    })
    c.ui.btn3.on('click', () => {
      m.data.n *= 2;
      v.render();
      localStorage.setItem('n', m.data.n);
    })
    c.ui.btn4.on('click', () => {
      m.data.n /= 2;
      v.render();
      localStorage.setItem('n', m.data.n);
    })
  }
}
// c.bindEvents();
c.init('body>.page');

// 绑定鼠标事件
/* $btn1.on('click', () => {
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
}) */