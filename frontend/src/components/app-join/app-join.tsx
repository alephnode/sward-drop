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
  message: string;

  handleChange = e => {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.user = { ...this.user, ...newState };
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:8000/api/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.user)
    }).then(
      r => (r.status === 201 ? this.handleSuccess() : this.handleError())
    );
  };

  handleSuccess() {
    this.message = "Congrats! You're signed up!";
    this.displayResponse = true;
    setTimeout(() => (window.location.href = "/"), 4000);
  }

  handleError() {
    this.message =
      "Oh no! Your password must be at least eight characters long and contain one capital letter and one special character.";
    this.displayResponse = true;
    setTimeout(() => (this.displayResponse = false), 4000);
  }

  render() {
    const responseTpl = <p>{this.message}</p>;

    const joinTpl = (
      <div>
        <p class="login-intro">
          join and store your content in the cloud with ease.
        </p>
        <form onSubmit={this.handleSubmit}>
          <app-input
            onInput={this.handleChange}
            id="username"
            name="username"
            type="text"
            label="username"
          />
          <app-input
            onInput={this.handleChange}
            id="email"
            name="email"
            type="email"
            label="email"
          />
          <app-input
            onInput={this.handleChange}
            id="password"
            name="password"
            type="password"
            label="password"
          />
          <app-input
            onInput={this.handleChange}
            id="confirm-password"
            label="confirm password"
            name="confirmPassword"
            type="password"
          />
          <app-button type="submit">join</app-button>
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
