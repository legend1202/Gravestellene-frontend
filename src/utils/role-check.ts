export function isAdminFn(inputValue: string) {
  let isAdmin = false;
  if (inputValue === "ADMIN") {
    isAdmin = true;
  }

  return isAdmin;
}
