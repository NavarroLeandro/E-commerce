const dropdowns = document.querySelectorAll('.dropdownDetalles');

dropdowns.forEach(dropdownDetalles => {

    const select = dropdownDetalles.querySelector('.selectt');
    const caret = dropdownDetalles.querySelector('.caret');
    const menu = dropdownDetalles.querySelector('.menu');
    const options = dropdownDetalles.querySelector('.menu li');
    const selected = dropdownDetalles.querySelector('.selected');



    select.addEventListener('click', () => {
        select.classList.toggle('selectt-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });


    options.forEach(option => {
        option.addEventListener('click',() => {
            selected.innerText = option.innerText;
            select.classList.remove('selectt-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('activo');
            });
            
            option.classList.add('activo');
          });
        });
      });
