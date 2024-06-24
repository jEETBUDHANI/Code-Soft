  let string = "";
  let buttons = document.querySelectorAll('.button');
  Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
      const value = e.target.innerHTML.trim();
      if (value == '=') {
        try {
          string = eval(string);
          document.querySelector('.input').value = string;
        } catch (error) {
          document.querySelector('.input').value = "Error";
        }
      } else if (value == 'C') {
        string = "";
        document.querySelector('.input').value = string;
      } else {
        string += value;
        document.querySelector('.input').value = string;
      }
    });
  });
