function validate () {

}

function parse (expression) {
  const result = expression.split(' ');

  if (result.length !== 6)
    return [];

  return result;
}

module.exports = { validate, parse };
