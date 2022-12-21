const sut = require('../index');

test('displays success message when input is valid', () => {
  document.body.innerHTML =
    '<button id="validate">Validate</button>'+
    '<input type="text" id="cron" />' +
    '<p id="message-box"></p>';
  document.getElementById('cron').setAttribute("value", "magic");
  function mockValidator () {
    return 'VALID';
  }
  sut.init(mockValidator);


  document.getElementById('validate').click();
  const result = document.getElementById('message-box').textContent;

  expect(result).toBe('Valid cron expression!');
});

test('displays error message when input is invalid', () => {
  document.body.innerHTML =
    '<button id="validate">Validate</button>'+
    '<input type="text" id="cron" />' +
    '<p id="message-box"></p>';
  document.getElementById('cron').setAttribute("value", "magic");
  function mockValidator () {
    return 'INVALID_LENGTH';
  }
  sut.init(mockValidator);

  document.getElementById('validate').click();
  const result = document.getElementById('message-box').textContent;

  expect(result).toBe('Invalid cron expression!');
});

test('displays unknown error message when status is unknown', () => {
  document.body.innerHTML =
    '<button id="validate">Validate</button>'+
    '<input type="text" id="cron" />' +
    '<p id="message-box"></p>';
  document.getElementById('cron').setAttribute("value", "magic");
  function mockValidator () {
    return '';
  }
  sut.init(mockValidator);

  document.getElementById('validate').click();
  const result = document.getElementById('message-box').textContent;

  expect(result).toBe('Unrecognized error');
});
