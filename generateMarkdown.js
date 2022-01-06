// create function to render markdown
function generateMarkdown(data){
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>${data.username}'s Portfolio Page</title>
  </head>
  <body>
  <header>
    <h1>${data.username}'s Portfolio Page</h1>
    <nav class = "navbar navbar-dark bg-dark">
      <ul class="container-fluid">
        <li><a class="navbar-toggler" href="#About">About</a></li>
        <li><a class="navbar-toggler" href="#Projects">Projects</a></li>
        <li><a class="navbar-toggler" href="#Contacts">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <section>
      <h2 id="About">About</h2>
      <h3>${data.username}</h3>
      <p>${data.bio}</p>
      <p>${data.location}</p>
    </section>
    <section>
      <h2 id="Projects">Projects</h2>
      <article>
        <h3>Project 1</h3>
        <p>Description of Project 1</p>
      </article>
      <article>
        <h3>Project 2</h3>
        <p>Description of Project 2</p>
      </article>
      <article>
        <h3>Project 3</h3>
        <p>Description of Project 3</p>
      </article>
      <article>
        <h3>Project 4</h3>
        <p>Description of Project 4</p>
      </article>
      <article>
        <h3>Project 5</h3>
        <p>Description of Project 5</p>
      </article>
    </section>
    <section>
      <h2 id="Contacts">Contact</h2>
      <h3><a href="${data.linkedIn}">LinkedIn Profile</a></h3>
      <h3><a href="https://github.com/${data.github}">Github Profile</a></h3>
    </section>
  </main>
  
  
  
    <script src="./index.js"></script>
  </body>
  </html>`
}

// create module to export markdown
module.exports = generateMarkdown;