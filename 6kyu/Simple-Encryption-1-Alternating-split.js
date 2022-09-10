//my solution:
function encrypt(text, n) {
    if(n <= 0) {
      return text
    } else if(!text) {
      return null
    }
    
    while(n > 0) {
      let odd = []
      let even = []
    
      text.split('').forEach((x,i) => {
        if(i % 2 !== 0) {
          odd.push(x)
        } else {
          even.push(x)
        }
     })
      
      text = odd.concat(even).join('')
      n--
    }
    
    return text
}
  
function decrypt(encryptedText, n) {
    while(n > 0) {
      let odd = encryptedText.slice(0, Math.floor(encryptedText.length / 2))
      let even = encryptedText.slice(Math.floor(encryptedText.length/2, encryptedText.length - 1))
      
      encryptedText = []
      for(let i = 0; i < even.length; i++) {
        encryptedText.push(even[i], odd[i])
      }
      encryptedText = encryptedText.join('')
      n--
    }
    return encryptedText
}

//top solution:
function encrypt(text, n) {
    console.log(text, n);
    if (!text || n <= 0) return text; 
    while (n--) {
      let ans = '';
      for (let i = 1; i < text.length; i += 2) {
        ans += text[i];
      }
      for (let i = 0; i < text.length; i += 2) {
        ans += text[i];
      }
      text = ans;
    }
    return text;
}
  
function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;
    const ans = new Array(encryptedText.length);
    while (n--) {
      let j = 0;
      for (let i = 1; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      for (let i = 0; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      encryptedText = ans.join('');
    }
    return encryptedText;
}

//beautiful use of reduce
function encrypt(text, n=0) {
    return n<1 || text==null ? text : encrypt( [...text].reduce(([a,b],v,i)=> i%2 ? [a+v,b]:[a,b+v],['','']).join(''), n-1)
}
  
function decrypt(text, n) {
    return n<1 || text==null ? text : decrypt( [...text].slice(text.length/2).map((v,i) => v+text[i] ).join('').slice(0,text.length), n-1)
}