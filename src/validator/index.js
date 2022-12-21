function parse (expression) {
  const result = expression.split(' ');

  if (result.length !== 6) {
    return [];
  }

  return result;
}

function validate (expression) {
  const parsed = parse(expression);

  if (parsed.length === 0) {
    return 'INVALID_LENGTH';
  }

  return 'VALID';
}

module.exports = { validate, parse };
