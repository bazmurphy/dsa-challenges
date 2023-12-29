// export default function validateEmail(email: string): boolean {
//   let includesAt = false;
//   let includesDot = false;
//   let username = false;
//   let domain = false;

//   for (let i = 0; i < email.length; i++) {
//     if (email[i] === "@") {
//       includesAt = true;
//       if (email[i - 1]) {
//         username = true;
//       }
//       if (email[i + 1]) {
//         domain = true;
//       }
//     } else if (email[i] === ".") {
//       includesDot = true;
//     }
//   }

//   return username && domain && includesAt && includesDot;
// }

export default function validateEmail(email: string): boolean {
  const includesAt = email.includes("@");
  const includesDot = email.includes(".");
  const emailSplit = email.split("@");
  const username = Boolean(emailSplit[0]);
  const domain = Boolean(emailSplit[1]);

  return username && domain && includesAt && includesDot;
}

// Regex is the most performant:

// export function validateEmail(email: string): boolean {
//   const emailRegex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[a-zAz]{2,4}$/;
//   return emailRegex.test(email);
// }

// export default function validateEmail(email: string): boolean {
//   if (email.indexOf("@") === -1) {
//     return false;
//   }

//   const [local, domain] = email.split("@");

//   if (local.length === 0 || domain.length < 3) {
//     return false;
//   }

//   const domainExtension = domain.split(".");
//   if (domainExtension.length < 2 || domainExtension[1].length < 2) {
//     return false;
//   }

//   return true;
// }
