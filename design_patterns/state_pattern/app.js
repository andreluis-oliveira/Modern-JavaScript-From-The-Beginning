// Home State
const HomeState = function HomeState(page) {
  document.querySelector('#heading').textContent = null;

  document.querySelector('#content').innerHTML = `
  <div class="p-5 mb-4 bg-light rounded-3">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">Hello, world!</h1>
      <p class="col-md-8 fs-4">
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
      </p>
      <button class="btn btn-primary btn-lg" type="button">Learn more</button>
    </div>
  </div>
  `;
};

// About state
const AboutState = function AboutState(page) {
  document.querySelector('#heading').textContent = 'About Us';

  document.querySelector('#content').innerHTML = `
    <p>This is the about page.</p>
  `;
};

// Contact state
const ContactState = function ContactState(page) {
  document.querySelector('#heading').textContent = 'Contact Us';

  document.querySelector('#content').innerHTML = `
  <form>
    <div class="form-group mb-3">
      <label for="email">Email address</label>
      <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group mb-3">
      <label for="message">Message</label>
      <textarea class="form-control" id="message" name="message"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  `;
};

const PageState = function PageState() {
  let currentState = new HomeState(this);

  this.init = function init() {
    this.change(new HomeState());
  };

  this.change = function (state) {
    currentState = state;
  };
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI vars
const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

// Home
home.addEventListener('click', (e) => {
  page.change(new HomeState());

  e.preventDefault();
});

// About
about.addEventListener('click', (e) => {
  page.change(new AboutState());

  e.preventDefault();
});

// Contact
contact.addEventListener('click', (e) => {
  page.change(new ContactState());

  e.preventDefault();
});
