function compareText() {
  const text1 = document.getElementById("text1").value.split(" ");
  const text2 = document.getElementById("text2").value.split(" ");
  const result = document.getElementById("result");

  let i = 0, j = 0;
  let output = "";

  while (i < text1.length || j < text2.length) {
    if (text1[i] === text2[j]) {
      output += text1[i] + " ";
      i++;
      j++;
    } else if (text2[j] && !text1.includes(text2[j])) {
      output += `<span class="added">${text2[j]}</span> `;
      j++;
    } else if (text1[i] && !text2.includes(text1[i])) {
      output += `<span class="removed">${text1[i]}</span> `;
      i++;
    } else {
      if (text1[i]) {
        output += `<span class="removed">${text1[i]}</span> `;
        i++;
      }
      if (text2[j]) {
        output += `<span class="added">${text2[j]}</span> `;
        j++;
      }
    }
  }

  result.innerHTML = output;
}