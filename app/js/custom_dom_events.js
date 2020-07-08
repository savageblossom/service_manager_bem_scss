$('#header__toggle_menu').on('click', () => {
    let selectedBurgerTarget = $('#header__toggle_menu_target'),
        isToggled = true;

    if(selectedBurgerTarget.css('display') == 'none') isToggled = false;
    if(!isToggled)  selectedBurgerTarget.css('display', 'flex');
    else selectedBurgerTarget.css('display', 'none');
})

$('#contactForm').on('submit', () => {
    // Выбор инпутов
    const formInputList = $('#firstName, #lastName, #tel, #email, #message');

    // Проверка свойства value у выбранных инпутов на заполненность
    for(const [k, v] of Object.entries(formInputList)) {
        let inputId = '#'+v.id;
        if(v.value == '' || (inputId == '#tel' && v.value.includes('_'))) {
            if(!($(inputId).prev().hasClass('contact_us__error'))) {
                $(inputId).before($('<div class="contact_us__error">Please fill in the blank field</div>'))
            }
        }
        else {
            $(inputId).prev().remove()
        }
    }
    
    if($('.contact_us__error').length == 0) {
        alert('Письмо отправлено успешно!')
    }
    event.preventDefault();
})

$("#tel").inputmask({"mask": "9 (999) 999-99-99"});
$("#email").inputmask({
        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
        greedy: false,
    onBeforePaste: function (pastedValue, opts) {
        pastedValue = pastedValue.toLowerCase();
        return pastedValue.replace("mailto:", "");
    },
    definitions: {
        '*': {
            validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
            casing: "lower"
        }
    }
});