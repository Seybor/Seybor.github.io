const NUBMBER_OF_VARIATIONS = 14;
let notFound = 195;

const renderStart = (num) => {
  let currentElement = template.cloneNode(true);

  if (num === notFound) {
    currentElement.querySelector('.item--one').style.backgroundColor = 'orange';
    currentElement.querySelector('.item--two').style.backgroundColor = 'orange';
    currentElement.querySelector('.item--three').style.backgroundColor = 'orange';
    currentElement.querySelector('.item--four').style.backgroundColor = 'orange';

    currentElement.querySelector('.extension--one').style.backgroundColor = 'darkred';
    currentElement.querySelector('.extension--two').style.backgroundColor = 'darkred';
    currentElement.querySelector('.extension--three').style.backgroundColor = 'darkred';
    currentElement.querySelector('.extension--four').style.backgroundColor = 'darkred';

    return currentElement;
  }

  let index = (num % NUBMBER_OF_VARIATIONS) + 1;
  let extension = Math.ceil((num + 1) / NUBMBER_OF_VARIATIONS);

  switch (index) {
    case 1:
      {
        currentElement.querySelector('.item--one').style.backgroundColor = 'blue';
      }
      break;
    case 2:
      {
        currentElement.querySelector('.item--two').style.backgroundColor = 'blue';
      }
      break;
    case 3:
      {
        currentElement.querySelector('.item--three').style.backgroundColor = 'blue';
      }
      break;
    case 4:
      {
        currentElement.querySelector('.item--four').style.backgroundColor = 'blue';
      }
      break;
    case 5:
      {
        currentElement.querySelector('.item--one').style.backgroundColor = 'blue';
        currentElement.querySelector('.item--two').style.backgroundColor = 'blue';
      }
      break;
    case 6:
      {
        currentElement.querySelector('.item--two').style.backgroundColor = 'blue';
        currentElement.querySelector('.item--three').style.backgroundColor = 'blue';
      }
      break;
    case 7:
      {
        currentElement.querySelector('.item--three').style.backgroundColor = 'blue';
        currentElement.querySelector('.item--four').style.backgroundColor = 'blue';
      }
      break;
    case 8:
      {
        currentElement.querySelector('.item--four').style.backgroundColor = 'blue';
        currentElement.querySelector('.item--one').style.backgroundColor = 'blue';
      }
      break;
    case 9:
      {
        currentElement.querySelector('.item--one').style.backgroundColor = 'blue';
        currentElement.querySelector('.item--three').style.backgroundColor = 'blue';
      }
      break;
    case 10:
      {
        currentElement.querySelector('.item--two').style.backgroundColor = 'blue';
        currentElement.querySelector('.item--three').style.backgroundColor = 'blue';
      }
      break;
    case 11:
      {
        currentElement.querySelector('.item--one').style.backgroundColor = 'blue';
        currentElement.querySelector('.item--two').style.backgroundColor = 'blue';
        currentElement.querySelector('.item--three').style.backgroundColor = 'blue';
      }
      break;
    case 12:
      {
        currentElement.querySelector('.item--two').style.backgroundColor = 'blue';
        currentElement.querySelector('.item--three').style.backgroundColor = 'blue';
        currentElement.querySelector('.item--four').style.backgroundColor = 'blue';
      }
      break;
    case 13:
      {
        currentElement.querySelector('.item--three').style.backgroundColor = 'blue';
        currentElement.querySelector('.item--four').style.backgroundColor = 'blue';
        currentElement.querySelector('.item--one').style.backgroundColor = 'blue';
      }
      break;
    case 14:
      {
        currentElement.querySelector('.item--one').style.backgroundColor = 'blue';
        currentElement.querySelector('.item--two').style.backgroundColor = 'blue';
        currentElement.querySelector('.item--three').style.backgroundColor = 'blue';
        currentElement.querySelector('.item--four').style.backgroundColor = 'blue';
      }
      break;

    default:
      currentElement.querySelector('.item--one').style.backgroundColor = 'green';
  }

  switch (extension) {
    case 1:
      {
        currentElement.querySelector('.extension--one').style.backgroundColor = 'red';
      }
      break;
    case 2:
      {
        currentElement.querySelector('.extension--two').style.backgroundColor = 'red';
      }
      break;
    case 3:
      {
        currentElement.querySelector('.extension--three').style.backgroundColor = 'red';
      }
      break;
    case 4:
      {
        currentElement.querySelector('.extension--four').style.backgroundColor = 'red';
      }
      break;
    case 5:
      {
        currentElement.querySelector('.extension--one').style.backgroundColor = 'red';
        currentElement.querySelector('.extension--two').style.backgroundColor = 'red';
      }
      break;
    case 6:
      {
        currentElement.querySelector('.extension--two').style.backgroundColor = 'red';
        currentElement.querySelector('.extension--three').style.backgroundColor = 'red';
      }
      break;
    case 7:
      {
        currentElement.querySelector('.extension--three').style.backgroundColor = 'red';
        currentElement.querySelector('.extension--four').style.backgroundColor = 'red';
      }
      break;
    case 8:
      {
        currentElement.querySelector('.extension--four').style.backgroundColor = 'red';
        currentElement.querySelector('.extension--one').style.backgroundColor = 'red';
      }
      break;
    case 9:
      {
        currentElement.querySelector('.extension--one').style.backgroundColor = 'red';
        currentElement.querySelector('.extension--three').style.backgroundColor = 'red';
      }
      break;
    case 10:
      {
        currentElement.querySelector('.extension--two').style.backgroundColor = 'red';
        currentElement.querySelector('.extension--three').style.backgroundColor = 'red';
      }
      break;
    case 11:
      {
        currentElement.querySelector('.extension--one').style.backgroundColor = 'red';
        currentElement.querySelector('.extension--two').style.backgroundColor = 'red';
        currentElement.querySelector('.extension--three').style.backgroundColor = 'red';
      }
      break;
    case 12:
      {
        currentElement.querySelector('.extension--two').style.backgroundColor = 'red';
        currentElement.querySelector('.extension--three').style.backgroundColor = 'red';
        currentElement.querySelector('.extension--four').style.backgroundColor = 'red';
      }
      break;
    case 13:
      {
        currentElement.querySelector('.extension--three').style.backgroundColor = 'red';
        currentElement.querySelector('.extension--four').style.backgroundColor = 'red';
        currentElement.querySelector('.extension--one').style.backgroundColor = 'red';
      }
      break;
    case 14:
      {
        currentElement.querySelector('.extension--one').style.backgroundColor = 'red';
        currentElement.querySelector('.extension--two').style.backgroundColor = 'red';
        currentElement.querySelector('.extension--three').style.backgroundColor = 'red';
        currentElement.querySelector('.extension--four').style.backgroundColor = 'red';
      }
      break;

    default:
      currentElement.querySelector('.extension--one').style.backgroundColor = 'yellow';
  }
  return currentElement;
};

const render = (value) => {
  let fragment = document.createDocumentFragment();
  let arrValue = value.split('');
  let arrNum = [];

  console.log(arrValue);

  arrValue.forEach((el, id) => {
    if (MY_TABLE.includes(el)) {
      arrNum.push(MY_TABLE.indexOf(el));
    } else {
      arrNum.push(notFound);
    }
  });

  for (let i = 0; i < arrNum.length; i++) {
    fragment.append(renderStart(arrNum[i]));
  }

  grid.append(fragment);
};
