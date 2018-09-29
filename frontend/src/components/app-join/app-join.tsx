import { Component, State } from "@stencil/core";

@Component({
  tag: "app-join",
  styleUrl: "app-join.css"
})
export class AppJoin {
  @State()
  user: object;
  @State()
  displayResponse: boolean;
  @State()
  isDisabled: boolean;
  @State()
  message: string;

  constructor() {
    this.isDisabled = false;
  }

  handleChange = e => {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.user = { ...this.user, ...newState };
  };

  handleSubmit = e => {
    e.preventDefault();
    this.isDisabled = true;
    fetch("http://localhost:8000/api/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.user)
    })
      .then(r => r.json())
      .then(re => (re.user ? this.handleSuccess(re) : this.handleError(re)));
  };

  handleSuccess({ user }) {
    localStorage.setItem("userInfo", JSON.stringify(user));
    this.message =
      "Congrats! You're signed up! Redirecting to your dashboard now ...";
    this.displayResponse = true;
    setTimeout(() => (window.location.href = "/dashboard"), 4000);
  }

  handleError({ code }) {
    switch (code) {
      case "UsernameExistsException":
        this.message =
          "A user with this information already exists. Please select a different username/email or reset your password.";
        break;
      case "InvalidParameterException":
        this.message =
          "Oh no! Your password must be at least eight characters long and contain one capital letter and one special character.";
        break;
      default:
        this.message =
          "An error occurred while processing your request. Please check your information or try again later.";
        break;
    }
    this.displayResponse = true;
    setTimeout(() => (this.displayResponse = this.isDisabled = false), 5000);
  }

  render() {
    const responseTpl = <p>{this.message}</p>;

    const joinTpl = (
      <div class="join-form-container">
        <p class="login-intro">
          join and store your content in the cloud with ease.
        </p>
        <form onSubmit={this.handleSubmit}>
          <app-input
            disabled={this.isDisabled}
            onInput={this.handleChange}
            id="username"
            name="username"
            type="text"
            label="username"
          />
          <app-input
            disabled={this.isDisabled}
            onInput={this.handleChange}
            id="email"
            name="email"
            type="email"
            label="email"
          />
          <app-input
            disabled={this.isDisabled}
            onInput={this.handleChange}
            id="password"
            name="password"
            type="password"
            label="password"
          />
          <app-input
            disabled={this.isDisabled}
            onInput={this.handleChange}
            id="confirm-password"
            label="confirm password"
            name="confirmPassword"
            type="password"
          />
          <app-button type="submit" disabled={this.isDisabled}>
            {this.isDisabled ? "" : "join"}
          </app-button>
        </form>
      </div>
    );

    return (
      <div id="app-join" class="layout-main">
        {this.displayResponse ? responseTpl : joinTpl}
      </div>
    );
  }
}
