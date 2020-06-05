document  
.querySelector(".request-insult")
.addEventListener('click', () => {
  fetch("/insult")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.querySelector('.insult').innerText = data.insult;
    })
    .catch((err) => {
      console.error(err)
    })
})