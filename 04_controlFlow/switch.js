// syntax
// switch (key) {
//   case value:
//     content
//     break;
//   default:
//     content
//     break;
// }
// ------------------------------

const month = 3;

switch (month) {
  case 1:
    console.log(`${month}: January`)
    break;
  case 2:
    console.log(`${month}: February`)
    break;
  case 3:
    console.log(`${month}: March`)
    break;
  case 4:
    console.log(`${month}: April`)
    break;
  default:
    console.log(`${month} is not a month`)
    break;
}