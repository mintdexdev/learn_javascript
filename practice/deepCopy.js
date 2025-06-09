let obj = {
  name: "stellar",
  age: 20,
  social: {
    x: {
      ac1: "acc1",
      ac2: {
        availabe: "true",
        paid: "false",
      }
    },
    y: {
      user1: "account1",
      user2: {
        working: "true",
        color: [2, 3, 4, 5],
      }
    }
  }
}

const obj2 = deepCopy(obj);
obj2.social.y.user1 = "changed: newUser";
obj2.social.y.user2.color = "changed: red";
console.log(obj2)
console.log(obj)

// i prefer
function deepCopy(data) {
  if (typeof data !== 'object' || data === null) {
    return data;
  }
  let copied = Array.isArray(data) ? [] : {};
  for (const key of Object.keys(data)) {
    copied[key] = deepCopy(data[key])
  }
  return copied;
}

// function deepCopy(data) {
//   if (typeof data !== 'object' || data === null) {
//     return data;
//   }
//   let copied = Array.isArray(data) ? [] : {};
//   let keys = Object.keys(data);
//   for (let i = 0; i < keys.length; i++) {
//     copied[keys[i]] = deepCopy(data[keys[i]]);
//   }
//   return copied
// }