export const checkField = (fieldID: string, labelID: string): boolean => {
  const field = document.getElementById(fieldID)! as HTMLInputElement;
  const label = document.getElementById(labelID)! as HTMLLabelElement;
  if (!field.value || field.value.length == 0) {
    label.style.display = "block";
    return false;
  }
  label.style.display = "none";
  return true;
};

export const checkPasswords = (
  passwordID: string,
  repeatPasswordID: string,
  labelID: string
): boolean => {
  const password = document.getElementById(passwordID)! as HTMLInputElement;
  const repeatPassword = document.getElementById(
    repeatPasswordID
  )! as HTMLInputElement;
  const label = document.getElementById(labelID)! as HTMLLabelElement;
  if (password.value != repeatPassword.value) {
    label.style.display = "block";
    return false;
  }
  label.style.display = "none";
  return true;
};

export const checkEmailValidity = (
  emailID: string,
  labelID: string
): boolean => {
  const email = document.getElementById(emailID)! as HTMLInputElement;
  const label = document.getElementById(labelID)! as HTMLLabelElement;
  if (
    !email.value.includes("@") ||
    !email.value.includes(".") ||
    email.value.includes(" ")
  ) {
    label.style.display = "block";
    return false;
  }
  label.style.display = "none";
  return true;
};

export const checkUsernameValidity = (
  usernameID: string,
  labelID: string
): boolean => {
  const username = document.getElementById(usernameID)! as HTMLInputElement;
  const label = document.getElementById(labelID)! as HTMLLabelElement;
  const charactersAllowed = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "_",
    "-",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "@",
    "!",
    "~",
    "#",
    "$",
  ];
  for (let i = 0; i < username.value.length; i++) {
    if (!charactersAllowed.includes(username.value.charAt(i).toLowerCase())) {
      label.style.display = "block";
      return false;
    }
  }
  label.style.display = "none";
  return true;
};
