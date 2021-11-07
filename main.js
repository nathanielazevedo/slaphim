let button = document.querySelector('#button')
let message = document.querySelector('#message')
let front = document.querySelector('.mainFront')

button.addEventListener('click', async function(evt){
  evt.preventDefault();
  // let result = await axios.get('https://slaphim.herokuapp.com/addslap')
  // console.log(result.data.message)
  button.disabled = true;
  let num = 10;
  let countdown = setInterval(() => {
    front.innerText = num;
    checkInterval(num)
    num--;
  }, 1000);

  function checkInterval(num){
    if(num == 0){
      clearInterval(countdown);
      button.disabled = false;
      front.innerText = "Slap Him!"
    }
  }
})



let title = document.getElementById('title')

let colors = ['blue', 'red', 'green', 'white'];

let i = 0

let interval = setInterval(() => {
  title.style.color = colors[i];
  i++;
  check(i);
}, 500)

function check(b){
  if(b == colors.lenght - 1){
    clearInterval(interval)
  }
}