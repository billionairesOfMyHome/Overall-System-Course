import $ from 'jquery'
import './app2.css'

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

