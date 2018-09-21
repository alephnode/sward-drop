import { Component } from "@stencil/core";

@Component({
  tag: "app-join",
  styleUrl: "app-join.css"
})
export class AppJoin {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div id="app-join" class="layout-main">
        <p class="login-intro">
          join and store your content in the cloud with ease.
        </p>
        <form onSubmit={this.handleSubmit}>
          <app-input
            id="username"
            name="app-username"
            type="text"
            label="username"
          />
          <app-input id="email" name="app-email" type="text" label="email" />
          <app-input
            id="password"
            name="app-password"
            type="password"
            label="password"
          />
          <app-input
            id="confirm-password"
            label="confirm password"
            name="app-confirm-password"
            type="password"
          />
          <app-button type="submit">join</app-button>
        </form>
      </div>
    );
  }
}
