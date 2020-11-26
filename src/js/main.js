import './lib/lib';

$('#first').on('click', () => {
  $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
  $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
  $('.w-500').fadeToggle(800);
});

$('.wrap').html(
  `
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" id="DropdownMenuButton">Тренировки</button>
    <div class="dropdown-menu" data-toggle-id="DropdownMenuButton">
      <a href="#" class="dropdown-item">Кросфит</a>
      <a href="#" class="dropdown-item">Плавание</a>
      <a href="#" class="dropdown-item">Футбол</a>
    </div>
  </div>
  `
);

$('.dropdown-toggle').dropdown();