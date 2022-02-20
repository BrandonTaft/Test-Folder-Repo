

 function sqFeet(width, length){
    const squareFeet = width * length;
    squarefeet.textContent = "The Square Footage Is: " + squareFeet;
    }
    
      
      const form = document.getElementById('form');
      const squareFeet = document.getElementById('squarefeet');
      const length = document.getElementById('length');
      const width = document.getElementById('width');
      form.addEventListener('submit', event => {
  // submit event detected
  event.preventDefault()
  sqFeet(width.value, length.value)
})

function cubed(width2, length2, height2){
    const cube = width2 * length2 * height2;
    cubic.textContent = "The Sand Needs To Be: " + cube +"cubic feet";
    }
    
      
      const form2 = document.getElementById('form2');
      const cubic = document.getElementById('cubic');
      const length2 = document.getElementById('length2');
      const width2 = document.getElementById('width2');
      const height2 = document.getElementById('height2');
      form2.addEventListener('submit', event => {
  // submit event detected
  event.preventDefault()
  cubed(width2.value, length2.value, height2.value)
})