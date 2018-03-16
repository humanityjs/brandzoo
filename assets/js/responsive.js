$(() => {
  $('body #sub').on('click', () => {
    $('body #sub').toggleClass('show-sub');
  });

  $('body #openNav').on('click', () => {
    $('body nav.small-screen').css({
      left: '0px',
      transition: 'left 1s ease'
    })
  })

  $('body #closeNav').on('click', () => {
    $('body nav.small-screen').css({
      left: '-300px',
      transition: 'left 1s ease'
    })
  })
})