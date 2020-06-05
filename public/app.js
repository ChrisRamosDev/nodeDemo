document
  .querySelector('.request-fate')
  .addEventListener('click', () => {
      const randomizer = Math.ceil(Math.random() * 2);
      randomizer === 1 ?
      insulter() :
      complementer()
  })

const insulter = () => {
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
}

const complementer = () => {
  fetch("/complement")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.querySelector('.complement').innerText = data.complement;
    })
    .catch((err) => {
      console.error(err)
    })
}