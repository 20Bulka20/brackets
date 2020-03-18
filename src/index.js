// Implement function check(str, bracketsConfig), 
//that for given brackets sequence will return true if it is correct and false otherwise
// In the second param there is bracketsConfig - the array of pairs open-closed brackets. 
//Each subarray includes only 2 elements - opening and closing bracket

module.exports = function check(str, bracketsConfig) {
  let substr = bracketsConfig.map(el => el.join(''));
  let new_str = str;
  for (let i = 0; i < str.length; i++) {
    for (let k = 0; k < substr.length; k++) {
      new_str = new_str.replace((substr[k]), '');     
    }
  }
  if(new_str === '') return true;
  else return false;
}




//___________________________________________________________________________stack(ne rabotaet)
//   let substr = str.split(''),
//     stack = [],
//     open_brackets = ['(', '[', '{', '|', '1', '3', '5', '7', '8'],
//     close_brackets = [')', ']', '}', '|', '2', '4', '6', '7', '8'],
//     openIndex,
//     closeIndex;

//   for (let i=0; i < substr.length; i++) {
//     openIndex = open_brackets.indexOf(substr[i]);
//     if (openIndex !== -1) {
//       stack.push(substr[i]);   
//       continue;   
//     }

//     closeIndex = close_brackets.indexOf(substr[i]);
//     if (closeIndex !== -1) {
//       openIndex = stack.pop();
//       if (closeIndex !== openIndex) return false;

//     }
//   }

//   if (stack.length !== 0) {return false + "4if";}
//  else return true + '4if';
  // your solution
