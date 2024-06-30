import { wrapper, shadow } from './hire.js';

const setinngsButton = document.querySelector('.quest-setting-visual');
const settingsPopup = document.querySelector('.settings');
const buttonsSettingWrite = document.querySelector('.settings-buttons-send');
const buttonsSettingEsc = document.querySelector('.settings-buttons-esc');

setinngsButton.addEventListener('click', () => {
  if (wrapper.classList.contains('down-close')) {
    wrapper.classList.remove('down-close');
  }
  if (settingsPopup.classList.contains('close')) {
    settingsPopup.classList.remove('close');
  }
  settingsPopup.classList.add('open');
  wrapper.classList.add('down-open');
  shadow.classList.remove('close');
  shadow.classList.add('open');
});

function SettingsClose() {
  shadow.classList.remove('open');
  wrapper.classList.remove('down-open');
  settingsPopup.classList.remove('open');
  wrapper.classList.add('down-close');
  shadow.classList.add('close');
  settingsPopup.classList.add('close');
}

buttonsSettingEsc.addEventListener('click', () => {
  SettingsClose();
  document.documentElement.style.setProperty('--color', `${colorDefaulText}`);
  document.documentElement.style.setProperty(
    '--color-background',
    `${colorDefaulBackground}`,
  );
  colorTextChange.value = defaultValueRange;
  spanColorChange.innerHTML = spanColorDefault;
  spanOrderChange.innerHTML = spanOrderDefault;

  colorTextChangeTwo.value = defaultValueRangeTwo;
  console.log(colorDefaulTextTwo);
  document.body.style.color = `rgb(${colorDefaulTextTwo})`;
  spanColorChangeTwo.innerHTML = spanColorDefaultTwo;
  spanOrderChangeTwo.innerHTML = spanOrderDefaultTwo;
});

buttonsSettingWrite.addEventListener('click', () => {
  SettingsClose();
  switch (colorTextChange.value) {
    case '0': {
      ChangeColorGlobal('232, 74, 74', 'red', '0');
      colorDefaulText = `rgb(232, 74, 74)`;
      colorDefaulBackground = `rgb(232, 74, 74, 0.7)`;

      defaultValueRange = 0;
      spanColorDefault = 'red';
      spanOrderDefault = 0;

      ChangeColorGlobalTwo('232, 74, 74', 'red', '0');
      spanColorDefaultTwo = 'red';
      spanOrderDefaultTwo = 0;
      defaultValueRangeTwo = 0;
      break;
    }
    case '10': {
      ChangeColorGlobal('30, 255, 0', 'green', '1');
      colorDefaulText = `rgb(30, 255, 0)`;
      colorDefaulBackground = `rgb(30, 255, 0, 0.7)`;
      defaultValueRange = 10;
      spanColorDefault = 'green';
      spanOrderDefault = 1;

      ChangeColorGlobalTwo('136, 0, 255', 'purple', '1');
      spanColorDefaultTwo = 'purple';
      spanOrderDefaultTwo = 1;
      defaultValueRangeTwo = 10;
      break;
    }
    case '20': {
      ChangeColorGlobal('0, 255, 200', 'cian', '2');
      colorDefaulText = `rgb(0, 255, 200)`;
      colorDefaulBackground = `rgb(0, 255, 200, 0.7)`;
      defaultValueRange = 20;
      spanColorDefault = 'cian';
      spanOrderDefault = 2;

      ChangeColorGlobalTwo('0, 229, 255', 'cian', '2');
      spanColorDefaultTwo = 'cian';
      spanOrderDefaultTwo = 2;
      defaultValueRangeTwo = 20;
      break;
    }
    case '30': {
      ChangeColorGlobal('0, 68, 255', 'blue', '3');
      colorDefaulText = `rgb(0, 68, 255)`;
      colorDefaulBackground = `rgb(0, 68, 255, 0.7)`;
      defaultValueRange = 30;
      spanColorDefault = 'blue';
      spanOrderDefault = 3;

      ChangeColorGlobalTwo('0, 255, 81', 'green', '3');
      spanColorDefaultTwo = 'green';
      spanOrderDefaultTwo = 3;
      defaultValueRangeTwo = 30;
      break;
    }
    case '40': {
      ChangeColorGlobal('140, 0, 255', 'purple', '4');
      colorDefaulText = `rgb(140, 0, 255)`;
      colorDefaulBackground = `rgb(140, 0, 255, 0.7)`;
      defaultValueRange = 40;
      spanColorDefault = 'purple';
      spanOrderDefault = 4;

      ChangeColorGlobalTwo('255, 249, 0', 'yellow', '4');
      spanColorDefaultTwo = 'yellow';
      spanOrderDefaultTwo = 4;
      defaultValueRangeTwo = 40;
      break;
    }
    case '50': {
      ChangeColorGlobal('234, 0, 255', `hot pink`, '5');
      colorDefaulText = `rgb(234, 0, 255)`;
      colorDefaulBackground = `rgb(234, 0, 255, 0.7)`;
      defaultValueRange = 50;
      spanColorDefault = `hot pink`;
      spanOrderDefault = 5;

      ChangeColorGlobalTwo('255, 255, 255', `white`, '5');
      spanColorDefaultTwo = 'white';
      spanOrderDefaultTwo = 5;
      defaultValueRangeTwo = 50;
      break;
    }
    case '60': {
      ChangeColorGlobal('255, 0, 170', 'pink', '6');
      colorDefaulText = `rgb(255, 0, 170)`;
      colorDefaulBackground = `rgb(255, 0, 170, 0.7)`;
      defaultValueRange = 60;
      spanColorDefault = 'pink';
      spanOrderDefault = 6;
      break;
    }
    case '70': {
      ChangeColorGlobal('255, 187, 0', 'orange', '7');
      colorDefaulText = `rgb(255, 187, 0)`;
      colorDefaulBackground = `rgb(255, 187, 0, 0.7)`;
      defaultValueRange = 70;
      spanColorDefault = 'orange';
      spanOrderDefault = 7;
      break;
    }
    case '80': {
      ChangeColorGlobal('255, 255, 255', 'white', '8`');
      colorDefaulText = `rgb(255, 255, 255)`;
      colorDefaulBackground = `rgb(255, 255, 255, 0.7)`;
      defaultValueRange = 80;
      spanColorDefault = 'white';
      spanOrderDefault = 8;
      break;
    }
  }
  //-----------------------Two--------------------------------

  switch (colorTextChangeTwo.value) {
    case '0': {
      ChangeColorGlobalTwo('232, 74, 74', 'red', '0');
      spanColorDefaultTwo = 'red';
      colorDefaulTextTwo = '232, 74, 74';
      spanOrderDefaultTwo = 0;
      defaultValueRangeTwo = 0;
      break;
    }
    case '10': {
      ChangeColorGlobalTwo('136, 0, 255', 'purple', '1');
      spanColorDefaultTwo = 'purple';
      spanOrderDefaultTwo = 1;
      colorDefaulTextTwo = '136, 0, 255';
      defaultValueRangeTwo = 10;
      break;
    }
    case '20': {
      ChangeColorGlobalTwo('0, 229, 255', 'cian', '2');
      spanColorDefaultTwo = 'cian';
      spanOrderDefaultTwo = 2;
      colorDefaulTextTwo = '0, 229, 255';
      defaultValueRangeTwo = 20;
      break;
    }
    case '30': {
      ChangeColorGlobalTwo('0, 255, 81', 'green', '3');
      spanColorDefaultTwo = 'green';
      spanOrderDefaultTwo = 3;
      colorDefaulTextTwo = '0, 255, 81';
      defaultValueRangeTwo = 30;
      break;
    }
    case '40': {
      ChangeColorGlobalTwo('255, 249, 0', 'yellow', '4');
      spanColorDefaultTwo = 'yellow';
      spanOrderDefaultTwo = 4;
      colorDefaulTextTwo = '255, 249, 0';
      defaultValueRangeTwo = 40;
      break;
    }
    case '50': {
      ChangeColorGlobalTwo('255, 255, 255', `white`, '5');
      spanColorDefaultTwo = 'white';
      spanOrderDefaultTwo = 5;
      colorDefaulTextTwo = '255, 255, 255';
      defaultValueRangeTwo = 50;
      break;
    }
  }
});

// -------------------------Color------------------------------------

let colorTextChange = document.getElementById('fader1');
let colorDefaulText = `rgb(232, 74, 74)`;
let colorDefaulBackground = `rgb(232, 74, 74, 0.7)`;
let defaultValueRange = 0;
let spanColorChange = document.querySelector('.span-color');
let spanColorDefault = 'red';
let spanOrderChange = document.querySelector('.span-order');
let spanOrderDefault = 0;
spanColorChange.innerHTML = spanColorDefault;
spanOrderChange.innerHTML = spanOrderDefault;

let spanColorChangeTwo = document.querySelector('.span-color-two');
let spanOrderChangeTwo = document.querySelector('.span-order-two');
let colorDefaulTextTwo = `255, 255, 255`;
let colorTextChangeTwo = document.getElementById('fader2');
let spanColorDefaultTwo = 'white';
let spanOrderDefaultTwo = 5;
let defaultValueRangeTwo = 50;
spanColorChangeTwo.innerHTML = spanColorDefaultTwo;
spanOrderChangeTwo.innerHTML = spanOrderDefaultTwo;

colorTextChange.addEventListener('input', () => {
  switch (colorTextChange.value) {
    case '0': {
      ChangeColorGlobal('232, 74, 74', 'red', '0');
      break;
    }
    case '10': {
      ChangeColorGlobal('30, 255, 0', 'green', '1');
      break;
    }
    case '20': {
      ChangeColorGlobal('0, 255, 200', 'cian', '2');
      break;
    }
    case '30': {
      ChangeColorGlobal('0, 68, 255', 'blue', '3');
      break;
    }
    case '40': {
      ChangeColorGlobal('140, 0, 255', 'purple', '4');
      break;
    }
    case '50': {
      ChangeColorGlobal('234, 0, 255', `hot pink`, '5');
      break;
    }
    case '60': {
      ChangeColorGlobal('255, 0, 170', 'pink', '6');
      break;
    }
    case '70': {
      ChangeColorGlobal('255, 187, 0', 'orange', '7');
      break;
    }
    case '80': {
      ChangeColorGlobal('255, 255, 255', 'white', '8');
      break;
    }
  }
});

function ChangeColorGlobal(color, nameColor, order) {
  document.documentElement.style.setProperty('--color', `rgb(${color})`);
  document.documentElement.style.setProperty(
    '--color-background',
    `rgb(${color}, 0.7)`,
  );
  spanColorChange.innerHTML = nameColor;
  spanOrderChange.innerHTML = order;
}

function ChangeColorGlobalTwo(color, nameColor, order) {
  document.documentElement.style.setProperty('--white', `rgb(${color})`);
  spanColorChangeTwo.innerHTML = nameColor;
  spanOrderChangeTwo.innerHTML = order;
}

// console.log(colorTextChange.value);

colorTextChangeTwo.addEventListener('input', () => {
  switch (colorTextChangeTwo.value) {
    case '0': {
      ChangeColorGlobalTwo('255, 0, 0', 'red', '0');
      break;
    }
    case '10': {
      ChangeColorGlobalTwo('136, 0, 255', 'purple', '1');
      break;
    }
    case '20': {
      ChangeColorGlobalTwo('0, 229, 255', 'cian', '2');
      break;
    }
    case '30': {
      ChangeColorGlobalTwo('0, 255, 81', 'green', '3');
      break;
    }
    case '40': {
      ChangeColorGlobalTwo('255, 249, 0', 'yellow', '4');
      break;
    }
    case '50': {
      ChangeColorGlobalTwo('255, 255, 255', `white`, '5');
      break;
    }
  }
});
