let call = 0;
const history: {
  called: number;
  argument: string;
  case: string;
  str: string | Record<string, string>;
}[] = [];

export default function reverseString(str: string): string {
  call++;

  history.push({
    called: call,
    argument: str,
    case: str === "" ? "base" : "recursive",
    str:
      str === ""
        ? ""
        : {
            "substring(1)": str.substring(1),
            "str.charAt(0)": str.charAt(0),
          },
  });

  // base case
  if (str === "") {
    return "";
  }

  // recursive case
  return reverseString(str.substring(1)) + str.charAt(0);
}

// export default function reverseString(str: string): string {
//   // base case
//   if (str === "") {
//     return str;
//   }

//   // recursive case
//   return reverseString(str.substring(1)) + str.charAt(0);
// }

reverseString("hello");
