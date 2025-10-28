export function validateContact(values) {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.name) errors.name = "Name is required";
  if (!values.email) errors.email = "Email is required";
  else if (!regex.test(values.email)) errors.email = "Invalid email";

  return errors;
}