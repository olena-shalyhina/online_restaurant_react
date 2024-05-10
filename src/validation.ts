export const emailValidation =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const nameValidation = /^([a-zA-Z'-\s]{2,30}|[а-яА-ЯёЁ'-\s]{2,30})$/;

export const phoneValidation = /^[+]{1}[0-9]{3}\s[0-9]{8}$/;
