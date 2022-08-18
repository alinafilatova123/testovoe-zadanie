fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    let container = document.querySelector('#table-body')
    let out = ''

    for(let post of posts){
      out += `
        <tr>
          <td>${post.title}</td>
          <td>${post.body}</td>
        </tr>
      `
    }
    container.innerHTML = out
  })