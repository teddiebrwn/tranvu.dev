export function isStep1Valid(name: string, email: string): boolean {
  if (name.trim() === "") return false;
  if (email.trim() === "") return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}
