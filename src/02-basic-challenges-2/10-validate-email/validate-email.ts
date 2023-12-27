export default function validateEmail(email: string): boolean {
  const includesAt = email.split("").includes("@");
  const includesDot = email.split("").includes(".");
  const username = email.split("@")[0];
  const domain = email.split("@")[1];

  if (username && domain && includesAt && includesDot) {
    return true;
  }

  return false;
}
