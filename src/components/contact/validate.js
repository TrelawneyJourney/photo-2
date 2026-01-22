export function validate(values) {
  const errors = {};

  if (!values.name || values.name.length < 2) {
    errors.name = "El nombre debe tener al menos 2 caracteres";
  }

  if (!values.email || !values.email.includes("@")) {
    errors.email = "Email inválido";
  }

  if (!values.message || values.message.length < 10) {
    errors.message = "El mensaje es muy corto";
  }

  return errors;
}
