import { ValidationError } from 'yup';

interface IErrors {
  [key: string]: string;
}

function getValidationErrors(error: ValidationError): IErrors {
  const validationErrors: IErrors = {};

  error.inner.forEach(err => {
    if (err.path) {
      validationErrors[err.path] = error.message;
    }
  });

  return validationErrors;
}

export { getValidationErrors };
