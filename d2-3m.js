

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const colors = ['red', 'yellow', 'green'];
    const currentColor = button.style.backgroundColor;
    const nextColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
    
    button.style.backgroundColor = nextColor;
    
    setTimeout(() => {
      button.style.backgroundColor = currentColor;
    }, 2000);
  });
});