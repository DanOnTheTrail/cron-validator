function init(validator) {
  function validateListener() {
    const expression = document
      .getElementById('cron')
      .value;
    const result = validator(expression);

    let message = '';
    switch (result) {
      case 'INVALID_LENGTH':
        message = 'Invalid cron expression!';
        break;
      case 'VALID':
        message = 'Valid cron expression!';
        break;
      default:
        message = 'Unrecognized error';
        break;
    }

    document
      .getElementById('message-box')
      .textContent = message;
  }

  document
    .getElementById('validate')
    .addEventListener("click", validateListener);
}

export default { init }
