function capitalizeFirstLetter(name){
  return name.charAt(0).toLowerCase() === name.charAt(0)? name.charAt(0).toUpperCase() + name.slice(1) : name;
}
const name1 = 'jane';
console.log(capitalizeFirstLetter(name1));
const name2 = 'Amarjeet';
console.log(capitalizeFirstLetter(name2))