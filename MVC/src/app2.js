import $ from 'jquery'
import './app2.css'

const html = `<section id="app2">
<ul class="tab-bar">
  <li><span>1111</span></li>
  <li><span>222</span></li>
</ul>
<ol class="tab-content">
  <li>内容1</li>
  <li>内容2</li>
</ol>
</section>`;

const $element = $(html).appendTo('body>.page');

const $tabBar = $('#app2 .tab-bar');
const $tabContent = $('#app2 .tab-content')
const localKey = 'app2-ind';
const ind = localStorage.getItem(localKey) || 0;

$tabBar.on('click', 'li', (e) => {
  const $li = $(e.currentTarget);
  $li.addClass('selected')
    .siblings().removeClass('selected');
  const ind = $li.index();
  localStorage.setItem(localKey, ind);
  $tabContent.children()
    .eq(ind).addClass('active')
    .siblings().removeClass('active');
})

$tabBar.children().eq(ind).trigger('click');

