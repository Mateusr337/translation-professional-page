export function isValidAnswers(answers) {
  for (const property in answers) {
    if (!answers[property]) return "Preencha todos os campos!";
  }
  if (!isValidEmail(answers.email)) return "Informe um e-mail válido!";
  if (!isPhoneValid(answers.phone)) return "Informe um telefone válido";
  return true;
}

function isValidEmail(email) {
  const emailRegex =
    /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase());
}

function isPhoneValid(phone) {
  phone = phone.replace("/[^0-9]/", "");
  return phone.match(
    /^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/
  );
}
