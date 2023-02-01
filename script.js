const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
let index = 0
jokeBtn.addEventListener('click', () => {
  jokeEl.innerHTML = jokes[++index].text
})
let jokes
generateJoke()

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://type.fit/api/quotes', config)
  const data = await res.json()
  jokes = data
  jokeEl.innerHTML = jokes[index].text
}

