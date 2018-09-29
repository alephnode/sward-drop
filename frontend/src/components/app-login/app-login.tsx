import { Component, State } from "@stencil/core";

@Component({
  tag: "app-login",
  styleUrl: "app-login.css"
})
export class AppLogin {
  @State()
  user: object;

  handleChange = e => {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.user = { ...this.user, ...newState };
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div id="app-login" class="app-login layout-main">
        <p class="login-intro">log in to view your account information.</p>
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
            id="password"
            name="password"
            type="password"
            label="password"
          />
          <app-button type="submit">login</app-button>
        </form>
      </div>
    );
  }
}
