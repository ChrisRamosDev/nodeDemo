document  
.querySelector(".request-complement")
.addEventListener('click', () => {
  fetch("/complement")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.querySelector('.complement').innerText = data.complement;
    })
    .catch((err) => {
      console.log(err)
    })
})