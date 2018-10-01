import { Component } from "@stencil/core";
import "@stencil/router";
import "@stencil/state-tunnel";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css"
})
export class AppRoot {
  logout() {
    localStorage.setItem("tokenInfo", "");
    window.location.href = "/";
  }
  render() {
    const guestNavTpl = (
      <div class="nav-links">
        <stencil-route-link url="/join">
          <div>join</div>
        </stencil-route-link>
        <stencil-route-link url="/login">
          <div>login</div>
        </stencil-route-link>
      </div>
    );

    const userNavTpl = (
      <div class="nav-links">
        <stencil-route-link url="/dashboard">
          <div>dashboard</div>
        </stencil-route-link>
        <div onClick={this.logout}>logout</div>
      </div>
    );
    return (
      <div>
        <div id="nav-container">
          <stencil-route-link url="/">
            <header>
              <img src="../../assets/icon/drop_icon.svg" />
              <h1>sward drop</h1>
            </header>
          </stencil-route-link>
          {localStorage.getItem("tokenInfo") ? userNavTpl : guestNavTpl}
        </div>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/login" component="app-login" />
              <stencil-route url="/join" component="app-join" />
              <stencil-route url="/forbidden" component="app-forbidden" />
              <stencil-route-protected
                url="/dashboard"
                component="app-dashboard"
              />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
