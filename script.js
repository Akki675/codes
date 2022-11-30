async function changeText() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/2')
  .then(response => response.json())
  .then(json => json)

  console.log(data)

document.getElementById("heading").innerText = data.title
document.getElementById("completed").innerText = data.completed

}   