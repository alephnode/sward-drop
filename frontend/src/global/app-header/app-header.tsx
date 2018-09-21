import { Component } from "@stencil/core";

@Component({
  tag: "app-header",
  styleUrl: "app-header.css"
})
export class AppHeader {
  render() {
    return (
      <div id="app-header-container">
        <h2>
          <slot />
        </h2>
      </div>
    );
  }
}
