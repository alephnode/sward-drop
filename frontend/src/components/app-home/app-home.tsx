import { Component, State } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  @State()
  successfulUpload: Boolean;

  @State()
  errorUpload: Boolean;

  @State()
  path: String;

  constructor() {
    this.successfulUpload = false;
  }

  handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    const file = e.target[0].files[0];
    formData.append("file", file);
    fetch("http://localhost:8000/api/upload-file", {
      method: "POST",
      headers: {
        Accept: "application/json, application/xml, text/play, text/html, *.*"
      },
      body: formData
    }).then(
      r =>
        r.status === 201
          ? this.handleUploadSuccess(r.text())
          : (this.errorUpload = true)
    );
  };

  handleUploadSuccess = path => {
    this.successfulUpload = true;
    Promise.resolve(path).then(v => (this.path = v));
  };

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
