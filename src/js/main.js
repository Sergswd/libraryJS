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

$('#trigger').click(() => $('#trigger').createModal({
  text: {
    title: 'Modal title',
    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, dolorum natus temporibus soluta aperiam asperiores, inventore vero officiis cumque assumenda velit, aliquam amet nemo deserunt ducimus voluptatum voluptatem? Provident, illum.'
  },
  btns: {
    count: 3,
    settings: [
      [
        'Close',
        ['btn-danger', 'mr-10'],
        true
      ],
      [
        'Save changes',
        ['btn-success'],
        false,
        () => {
          alert('Данные сохранены');
        }
      ],
      [
        'Alert',
        ['btn-warning', 'ml-10'],
        false,
        () => {
          alert('opened');
        }
      ]
    ]
  }
}));