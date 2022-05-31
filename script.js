const BTN__STYLE = document.querySelectorAll('.btn__style');
const BLOCK__TEXT = document.querySelector('.block__text');

// ----------------------------------------------------------------
// STYLE TEXT
// -----------------------------------------------------------------

BTN__STYLE.forEach(element => {
    element.addEventListener('click', (event) => {
        if (element.textContent == 'b') {
            BLOCK__TEXT.classList.toggle('class__bold');
        } else if (element.textContent == 'i') {
            BLOCK__TEXT.classList.toggle('class__italic');
        } else if (element.textContent == 'u') {
            if (BLOCK__TEXT.classList.contains('class__decoration_through')) {
                BLOCK__TEXT.classList.remove('class__decoration_through');
                BLOCK__TEXT.classList.toggle('class__decoration');
            } else {
                BLOCK__TEXT.classList.toggle('class__decoration');
            }
        } else if (element.textContent == 's') {
            if (BLOCK__TEXT.classList.contains('class__decoration')) {
                BLOCK__TEXT.classList.remove('class__decoration');
                BLOCK__TEXT.classList.toggle('class__decoration_through');
            } else {
                BLOCK__TEXT.classList.toggle('class__decoration_through');
            }
        } else {
            BLOCK__TEXT.fontStyle = 'normal';
        }
    });
});
// --------------------------------------------------------------------
// TEXT-ALIGN
// ---------------------------------------------------------------------

const BTN__ALIGN = document.querySelectorAll('.btn__style__align');

BTN__ALIGN.forEach(element => {
    element.addEventListener('click', (event) => {
        if (element.classList.contains('class__left')) {
            BLOCK__TEXT.classList.remove('class__center', 'class__right');
            BLOCK__TEXT.classList.add('class__left');
        } else if (element.classList.contains('class__right')) {
            BLOCK__TEXT.classList.remove('class__center', 'class__left');
            BLOCK__TEXT.classList.add('class__right');
        } else if (element.classList.contains('class__center')) {
            BLOCK__TEXT.classList.remove('class__right', 'class__left');
            BLOCK__TEXT.classList.add('class__center');
        }
    });
});
// --------------------------------------------------------------------
// FONT FAMILY
// ---------------------------------------------------------------------
const FONT__FAMILY = document.querySelector('.form__select_family');

for (let i = 0; i < FONT__FAMILY.length; i++) {
    FONT__FAMILY[i].style.fontFamily = FONT__FAMILY[i].value;
}

FONT__FAMILY.addEventListener('change', (event) => {
    BLOCK__TEXT.style.fontFamily = event.target.value;
});

// ------------------------------------------------------
// FONT SIZE
// -------------------------------------------------------
const FONT__SIZE = document.querySelector('.form__select_size');

for (let i = 0; i < FONT__SIZE.length; i++) {
    FONT__SIZE[i].style.fontSize = FONT__SIZE[i].value;
}

FONT__SIZE.addEventListener('change', (event) => {
    BLOCK__TEXT.style.fontSize = event.target.value;
});
// ----------------------------------------------------------
//FONT COLOR
// ----------------------------------------------------------
const BLOCK_COLOR = document.querySelector('.block__color');
const BLOCK_SECTION_COLOR = document.querySelector('.section__color');
const FORM_BTN_COLOR_TEXT = document.querySelector('.form__btn__color__text');
const MAIN = document.querySelector('.main');
const CLOSE = document.querySelectorAll('.close__my');
const BLOCK_ELEM_SECTION_COLOR = document.querySelector('.block__section__color');
const BLOCK_P = document.querySelector('.block__text');
const BLOCK_P_LOREM = document.querySelectorAll('.block__text__p');

FORM_BTN_COLOR_TEXT.addEventListener('click', (event) => {
    event.preventDefault();
    BLOCK_SECTION_COLOR.classList.remove('hide');
    BLOCK_SECTION_COLOR.classList.add('show');
});
CLOSE.forEach(btn => {
    btn.addEventListener('click', () => {
        BLOCK_SECTION_COLOR.classList.remove('show');
        BLOCK_SECTION_COLOR.classList.add('hide');

        TAB_BACKGROUND.classList.remove('show');
        TAB_BACKGROUND.classList.add('hide');
    });
});


BLOCK_P.addEventListener('click', (event) => {
    // console.log(event.target);
    if ((event.target == BLOCK_P) || (event.target == BLOCK_P_LOREM)) {
        BLOCK_SECTION_COLOR.classList.remove('show');
        BLOCK_SECTION_COLOR.classList.add('hide');
    }
});
BLOCK_ELEM_SECTION_COLOR.addEventListener('click', () => {
    const colorText = getComputedStyle(event.target).backgroundColor;
    BLOCK__TEXT.style.color = colorText;
});

// ----------------------------------------------
// BACKGROUND
// -----------------------------------------------

const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}
document.querySelector('.tabs__nav-btn').click();
// ---------------------------------------------
const TAB_BACKGROUND = document.querySelector('.tabs');
const FORM_BTN_COLOR_BACKGROUND = document.querySelector('.form__btn__background');
const BACKGROUND_COLOR = document.querySelector('.background_color');

FORM_BTN_COLOR_BACKGROUND.addEventListener('click', () => {
    event.preventDefault();
    TAB_BACKGROUND.classList.remove('hide');
    TAB_BACKGROUND.classList.add('show');
});
// CLOSE.addEventListener('click', () => {
//     console.log('close');
//     TAB_BACKGROUND.classList.remove('show');
//     TAB_BACKGROUND.classList.add('hide');
// });

BACKGROUND_COLOR.addEventListener('click', () => {
    const colorBack = getComputedStyle(event.target).backgroundColor;
    BLOCK__TEXT.style.backgroundColor = colorBack;
});
// ------------------------------------------------------
const BACKGROUND_IMG = document.querySelector('.background__img');
BACKGROUND_IMG.addEventListener('click', () => {
    const backImg = getComputedStyle(event.target).backgroundImage;
    const backImgSize = getComputedStyle(event.target).backgroundSize;
    BLOCK__TEXT.style.backgroundImage = backImg;
    BLOCK__TEXT.style.backgroundSize = backImgSize;
});
// --------------------------------------------
const INPUT_FILE = document.querySelector('#input__file');

INPUT_FILE.addEventListener('change', () => {
    console.log(event.target.files[0].name);
});
// --------------------------------------------------------------
// form input registor
// --------------------------------------------------
const FORM = document.querySelector('.form');
const LOCK_ICON = document.querySelector('.material-symbols-outlined__my');
const MAIN_ELEM = document.querySelector('.main');
const FORM_EXIST_REGIST = document.querySelector('.form__exist__regist');
const FORM_CLOSE = document.querySelector('.form__close');
const FORM_BTN = document.querySelector('.form__btn');
const FORM_INPUT = document.querySelector('.form_input');
const FORM_PASSWD = document.querySelector('.form_passwd');
const ERRORS = document.querySelector('.errors');
const CREATE_BTN = document.querySelector('.btn__1');
const EDITOR_BTN = document.querySelector('.editor__btn');
const CANCEL_BTN = document.querySelector('.cancel');
const SIGN_OUT_BTN = document.querySelector('.sign__out');



LOCK_ICON.addEventListener('click', () => {
    event.preventDefault();
    FORM.classList.add('active');
    MAIN_ELEM.classList.add('opacity');

    if (LOCK_ICON.textContent == 'lock_open' && !EDITOR_BTN.getAttribute('disabled')) {
        FORM_EXIST_REGIST.classList.remove('hide');
        FORM_EXIST_REGIST.classList.add('show');
        FORM.classList.remove('active');
        MAIN_ELEM.classList.remove('opacity');
    }
});

SIGN_OUT_BTN.addEventListener('click', () => {
    FORM_EXIST_REGIST.classList.remove('show');
    FORM_EXIST_REGIST.classList.add('hide');
    CREATE_BTN.setAttribute('disabled', 'enable');
    LOCK_ICON.innerHTML = `<span class="material-symbols-outlined">lock</span>`;
});

CANCEL_BTN.addEventListener('click', () => {
    FORM_EXIST_REGIST.classList.remove('show');
    FORM_EXIST_REGIST.classList.add('hide');
});

FORM_BTN.addEventListener('click', (event) => {
    event.preventDefault();
    if (FORM_INPUT.value == '' && FORM_PASSWD.value == '') {
        ERRORS.textContent = 'Value is empty';
        ERRORS.style.color = 'red';
    } else if (FORM_INPUT.value == 'admin' && FORM_PASSWD.value == 'admin') {
        CREATE_BTN.removeAttribute('disabled');
        FORM.classList.remove('active');
        MAIN_ELEM.classList.remove('opacity');
        LOCK_ICON.innerHTML = `<span class="material-symbols-outlined">lock_open</span>`;
    } else {
        ERRORS.textContent = 'Please check your login or password';
        ERRORS.style.color = 'red';
    }
});


FORM_CLOSE.addEventListener('click', () => {
    FORM.classList.remove('active');
    MAIN_ELEM.classList.remove('opacity');
});

// ----------------------------------------------------
// EDITOR
// ----------------------------------------------------
const WRAPPER = document.querySelector('.wrapper');
const HEADER_MAIN_ELEM = document.querySelector('.header__main');
const BLOCK_TEXT_P = document.querySelector('.block__text__p');
const HEADER_TEXTAREA = document.querySelector('.header__textarea');
const HEADER = document.querySelector('header');
const HEADER_SAVE_BTN = document.querySelector('.header__save__btn');

CREATE_BTN.addEventListener('click', () => {
    HEADER.classList.add('hide');
    MAIN_ELEM.classList.add('hide');
    WRAPPER.classList.remove('hide');
    WRAPPER.classList.add('show');
    HEADER_TEXTAREA.value = BLOCK_TEXT_P.innerHTML;
});
HEADER_SAVE_BTN.addEventListener('click', () => {
    WRAPPER.classList.remove('show');
    WRAPPER.classList.add('hide');

    HEADER.classList.remove('hide');
    MAIN_ELEM.classList.remove('hide');
    BLOCK_TEXT_P.innerHTML = HEADER_TEXTAREA.value;
});
// table
const TABLE_BLOCK_ELEM = document.querySelector('.table__block');
const HEADER_CREATE_TAB_BTN = document.querySelector('.header__create__table__btn');
const FORM_CLOSE_CREATE = document.querySelector('.form__close__create');

HEADER_CREATE_TAB_BTN.addEventListener('click', () => {
    TABLE_BLOCK_ELEM.classList.remove('hide');
    TABLE_BLOCK_ELEM.classList.add('show');
    HEADER_MAIN_ELEM.style.opacity = '0.3';
});
FORM_CLOSE_CREATE.addEventListener('click', () => {
    TABLE_BLOCK_ELEM.classList.remove('show');
    TABLE_BLOCK_ELEM.classList.add('hide');
    HEADER_MAIN_ELEM.style.opacity = '1';
});

// create
const TR_ELEM = document.getElementById('table__count_tr');
const TD_ELEM = document.getElementById('table__count_td');
const CREATE_TABLE_BTN = document.querySelector('.table__btn__create');
const MAIN_TABLE_BLOCK = document.querySelector('.main__table__block');
const TABLE_STYLE = document.getElementById('table__select__style');
const TABLE_COLOR = document.getElementById('table__select__color');
const TABLE_WIDTH_TD = document.getElementById('table__width_td');
const TABLE_HEIGHT_TD = document.getElementById('table__height_td');
const TABLE_WIDTH_BORDER = document.getElementById('table__width_border');


CREATE_TABLE_BTN.addEventListener('click', (event) => {
    event.preventDefault();

    let countTR = TR_ELEM.value;
    let countTD = TD_ELEM.value;
    let table = document.createElement('table');

    for (i = 1; i <= countTR; i++) {
        let tr = document.createElement('tr');
        for (j = 1; j <= countTD; j++) {
            let td = document.createElement('td');
            td.textContent = `td${i}/${j}`;
            td.style.borderStyle = TABLE_STYLE.value;
            td.style.borderColor = TABLE_COLOR.value;
            td.style.borderWidth = TABLE_WIDTH_BORDER.value + 'px';
            td.style.width = TABLE_WIDTH_TD.value + 'px';
            td.style.height = TABLE_HEIGHT_TD.value + 'px';
            tr.appendChild(td);
        }
        table.appendChild(tr);
        table.style.margin = '20px';
        table.style.borderStyle = TABLE_STYLE.value;
        table.style.borderColor = TABLE_COLOR.value;
        table.style.borderWidth = TABLE_WIDTH_BORDER.value + 'px';
        // =TABLE_WIDTH_TD.value;
    }
    HEADER_TEXTAREA.value += table.outerHTML;
});

// LIST

const HEADER_LIST_BTN = document.querySelector('.header__list__btn');
const HEADER_LIST_NUMBER_BTN = document.querySelector('.header__list__number_btn');
const LIST_BLOCK_ELEM = document.querySelector('.list_block');
const LIST_BLOCK_TWO_ELEM = document.querySelector('.list__block__two');
const FORM_CLOSE_LIST = document.querySelector('.form__close__list');
const FORM_CLOSE_LIST__TWO = document.querySelector('.form__close__list__two');
const LIST_COUNT_LI = document.getElementById('list__count_li');
const LIST_LI_TYPE = document.getElementById('list__li__type');
const LIST_CREATE_BTN = document.querySelector('.list__btn__create');
const LIST_CREATE_UL_BTN = document.querySelector('.list__btn__ul');
const LIST_RESET_BTN = document.querySelector('.list__btn__reset');
const LIST_FORM = document.querySelector('.list__form');
const LIST_UL_COUNT= document.getElementById('list__count_li__two'); 
const LIST_UL_TYPE= document.getElementById('list__count_li__two__type'); 

HEADER_LIST_BTN.addEventListener('click', () => {
    LIST_BLOCK_ELEM.classList.remove('hide');
    LIST_BLOCK_ELEM.classList.add('show');
    HEADER_MAIN_ELEM.style.opacity = '0.3';
});
FORM_CLOSE_LIST.addEventListener('click', () => {
    LIST_BLOCK_ELEM.classList.remove('show');
    LIST_BLOCK_ELEM.classList.add('hide');
    HEADER_MAIN_ELEM.style.opacity = '1';
});

LIST_RESET_BTN.addEventListener('click', () => {
    event.preventDefault();
    LIST_FORM.reset();
});

LIST_CREATE_BTN.addEventListener('click', (event) => {
    event.preventDefault();
    let ol = document.createElement('ol');
    ol.setAttribute('type',`${LIST_LI_TYPE.value}`);
    
    for (i = 1; i <= LIST_COUNT_LI.value; i++) {
        let li = document.createElement('li');
        li.textContent = `item${i}`;
        ol.appendChild(li);
    }
      HEADER_TEXTAREA.value += ol.outerHTML;
});

// ---------------------------
HEADER_LIST_NUMBER_BTN.addEventListener('click', () => {
    LIST_BLOCK_TWO_ELEM.classList.remove('hide');
    LIST_BLOCK_TWO_ELEM.classList.add('show');
    HEADER_MAIN_ELEM.style.opacity = '0.3';
});

LIST_CREATE_UL_BTN.addEventListener('click',(event)=>{
    event.preventDefault();
    let ul = document.createElement('ul');
    ul.setAttribute('type',`${LIST_UL_TYPE.value}`);
        for (j = 1; j <= LIST_UL_COUNT.value; j++) {
            console.log(j);
            let li_2 = document.createElement('li');
            li_2.textContent = `item${j}`;
            ul.appendChild(li_2);
        }
      HEADER_TEXTAREA.value += ul.outerHTML;   
});

FORM_CLOSE_LIST__TWO.addEventListener('click', () => {
    LIST_BLOCK_TWO_ELEM.classList.remove('show');
    LIST_BLOCK_TWO_ELEM.classList.add('hide');
    HEADER_MAIN_ELEM.style.opacity = '1';
});