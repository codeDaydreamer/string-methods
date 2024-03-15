//String Methods
let username = `codedaydreamer`;

console.log(username.charAt(0));
console.log(username.indexOf(`d`));
console.log(username.lastIndexOf(`d`));
console.log(username.length);
console.log(username.trim());
console.log(username.toUpperCase(`d`));

 username = username.repeat(3);
 console.log(username);

 let result = username.startsWith(`c`);
 console.log(result);

 let telephone = `07-92-80-30-63`;
 telephone = telephone.replaceAll(`-`,``);
 telephone = telephone.padStart(15,`-`);
 

console.log(telephone);

