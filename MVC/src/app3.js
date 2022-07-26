import $ from 'jquery'
import './app3.css'

const html = `<section id="app3">
<div class="square">
</div>
</section>`;

const $element = $(html).appendTo('body>.page');

const $square = $('#app3 .square');
const localKey = 'app3-active';

/* if (localStorage.getItem(localKey) === 'yes') {
  $square.addClass('active');
} */
const active = localStorage.getItem(localKey) === 'yes';
$square.toggleClass('active', active)

$square.on('click', () => {
  if ($square.hasClass('active')) {
    localStorage.setItem(localKey, 'no');
    $square.removeClass('active');
  } else {
    localStorage.setItem(localKey, 'yes');
    $square.addClass('active');
  }
})