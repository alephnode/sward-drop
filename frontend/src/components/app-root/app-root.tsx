import { Component } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css"
})
export class AppRoot {
  render() {
    return (
      <div>
        <div id="nav-container">
          <stencil-route-link url="/">
            <header>
              <img src="../../assets/icon/drop_icon.svg" />
              <h1>sward drop</h1>
            </header>
          </stencil-route-link>
          <div class="nav-links">
            <stencil-route-link url="/join">
              <div>join</div>
            </stencil-route-link>
            <stencil-route-link url="/login">
              <div>login</div>
            </stencil-route-link>
          </div>
        </div>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/login" component="app-login" />
              <stencil-route url="/join" component="app-join" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
