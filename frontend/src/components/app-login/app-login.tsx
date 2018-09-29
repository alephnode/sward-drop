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
      .then(re => (re.payload ? this.handleSuccess(re) : this.handleError(re)));
  };

  handleSuccess({ payload }) {
    localStorage.setItem("tokenInfo", JSON.stringify({ ...payload }));
    this.message =
      "Congrats! You're logged in! Redirecting to your dashboard now ...";
    this.displayResponse = true;
    setTimeout(() => (window.location.href = "/dashboard"), 4000);
  }

  handleError({ code }) {
    switch (code) {
      case "UserNotConfirmedException":
        this.message =
          "A confirmation request was sent to you via email. Please check your email or sign up again.";
        break;
      case "NotAuthorizedException":
        this.message =
          "Oh no! Your username or password are incorrect. Please try again or reset your password.";
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
            label="username or email"
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
