import { Component, State } from "@stencil/core";

@Component({
  tag: "app-login",
  styleUrl: "app-login.css"
})
export class AppLogin {
  @State()
  user: object;
  @State()
  isDisabled: boolean;
  @State()
  message: string;
  @State()
  displayResponse: boolean;

  handleChange = e => {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.user = { ...this.user, ...newState };
  };

  handleSubmit = e => {
    e.preventDefault();
    this.isDisabled = true;
    fetch("http://localhost:8000/api/login", {
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
    const formTpl = (
      <div id="login-container">
        <p class="login-intro">log in to view your account information.</p>
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
            id="password"
            name="password"
            type="password"
            label="password"
          />
          <app-button type="submit" disabled={this.isDisabled}>
            {this.isDisabled ? "" : "login"}
          </app-button>
        </form>
      </div>
    );

    const responseTpl = <p>{this.message}</p>;

    return (
      <div id="app-login" class="app-login layout-main">
        {this.displayResponse ? responseTpl : formTpl}
      </div>
    );
  }
}
