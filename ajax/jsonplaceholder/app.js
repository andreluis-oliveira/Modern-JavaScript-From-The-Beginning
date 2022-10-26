document.querySelector("button").addEventListener("click", getPosts);

function getPosts(e) {
  e.preventDefault();

  const number = document.querySelector("#number_posts").value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      let posts = response.slice(0, number);

      let output = "";

      posts.forEach(function (post) {
        output += `
                    <div class="col-sm-4 mb-2 post_preview">
                        <div class="border p-3">
                            <a href="#">
                                <img class="img-fluid" src="placeholder.svg">
                            </a>
                            <h4 class="title">
                                <a href="#" class="text-dark text-decoration-none">${post.title}</a>
                            </h4>
                        </div>
                    </div>
                `;
      });

      document.getElementById("posts").innerHTML = output;
    }
  };

  xhr.send();
}
