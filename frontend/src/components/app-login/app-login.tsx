import { Component } from "@stencil/core";

@Component({
  tag: "app-login",
  styleUrl: "app-login.css"
})
export class AppLogin {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div id="app-login" class="app-login layout-main">
        <p class="login-intro">log in to view your account information.</p>
        <form onSubmit={this.handleSubmit}>
          <app-input
            id="username"
            name="app-username"
            type="text"
            label="username"
          />
          <app-input
            id="password"
            name="app-password"
            type="password"
            label="password"
          />
          <app-button type="submit">login</app-button>
        </form>
      </div>
    );
  }
}
