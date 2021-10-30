
let s1 = '()'
let s2 = '()[]{}'
let s3 = '(]'



function isVakid(s){       
  const brackets = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  let st =[]
  for (let i = 0; i < s.length; i++) {
    if (isClosedBracket(s[i])) {
      if (brackets[s[i]] !== st.pop()) return false;
      }else{
        st.push(s[i])
      }
    }

  
  return st.length === 0
}

function isClosedBracket(ch){
  return [')','}',']'].indexOf(ch) > -1
}
  
console.log(isVakid(s2));