export function isAdminFn(inputValue: string) {
  let isAdmin = false;
  if (inputValue === "ADMIN") {
    isAdmin = true;
  }

  return isAdmin;
}

export function isFellesraadFn(inputValue: string) {
  let isAdmin = false;
  if (inputValue === "FELLESAAD") {
    isAdmin = true;
  }

  return isAdmin;
}
