import { Component } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  render() {
    return (
      <div id="app-home" class="layout-main">
        <div class="message-styles">
          <p>
            an alternative, open, transparent file-sharing solution brought to
            you by the creators of{" "}
            <a href="https://plant-help.co" target="_blank">
              plant help
            </a>
            . create an account or save the key provided at the end of the
            upload process to retrieve your data.
          </p>
          <app-button link="/join">GET STARTED</app-button>
        </div>
      </div>
    );
  }
}
