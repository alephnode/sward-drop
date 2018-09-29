import { Component, State } from "@stencil/core";

@Component({
  tag: "app-dashboard",
  styleUrl: "app-dashboard.css"
})
export class AppDashboard {
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
        <p>Welcome!</p>
        <form onSubmit={this.handleSubmit}>
          <input type="file" name="files[]" id="file-upload" />
          <label htmlFor="file-upload">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="17"
              viewBox="0 0 20 17"
            >
              <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
            </svg>{" "}
            <span>Choose a file…</span>
          </label>
          <app-button type="submit">upload file</app-button>
        </form>
      </div>
    );

    return (
      <div id="app-dashboard" class="layout-main">
        {this.successfulUpload
          ? successTpl
          : this.errorUpload
            ? errorTpl
            : checkForm}
      </div>
    );
  }
}
