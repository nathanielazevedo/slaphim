let button = document.querySelector('#button')
let message = document.querySelector('#message')

button.addEventListener('click', async function(evt){
  evt.preventDefault();
  let result = await axios.get('https://slaphim.herokuapp.com/addslap')
  console.log(result.data.message)
  message.innerText = result.data.message;
})