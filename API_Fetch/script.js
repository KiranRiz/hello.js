let url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then(response => response.json())
  .then(data => {
    let div = document.getElementById("data");

    data.forEach(user => {
      div.innerHTML += user.name;
    });
  });
