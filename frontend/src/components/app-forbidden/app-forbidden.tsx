import { Component } from "@stencil/core";

@Component({
  tag: "app-forbidden",
  styleUrl: "app-forbidden.css"
})
export class AppForbidden {
  render() {
    return (
      <div id="app-forbidden" class="layout-main">
        <div class="message-styles">
          <p>You do not have access to view this page.</p>
          <app-button link="/join">JOIN</app-button>
          <app-button link="/login" secondary>
            LOG IN
          </app-button>
        </div>
      </div>
    );
  }
}
