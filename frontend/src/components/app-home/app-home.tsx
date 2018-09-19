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
    const successTpl = (
      <div class="message-styles">
        <p>
          Success! your file has been uploaded{" "}
          <a href={`${this.path}`}>here.</a>
        </p>
        <button onClick={() => window.location.reload()}>return</button>
      </div>
    );

    const errorTpl = (
      <div class="message-styles">
        <p>Oh, no! Something went wrong. Please try again.</p>
        <button onClick={() => window.location.reload()}>retry</button>
      </div>
    );

    const checkForm = (
      <div class="message-styles">
        <p>
          an alternative, open, transparent file-sharing solution brought to you
          by the creators of{" "}
          <a href="https://plant-help.co" target="_blank">
            plant help
          </a>
          . create an account or save the key provided at the end of the upload
          process to retrieve your data.
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            file:
            <input type="file" name="files[]" />
          </label>
          <button type="submit">upload file</button>
        </form>
      </div>
    );

    return (
      <div class="app-home">
        {this.successfulUpload
          ? successTpl
          : this.errorUpload
            ? errorTpl
            : checkForm}
      </div>
    );
  }
}
