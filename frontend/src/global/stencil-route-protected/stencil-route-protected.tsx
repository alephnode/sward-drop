import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: "stencil-route-protected"
})
export class AppInput {
  @Prop()
  url: string;
  @Prop()
  component: string;
  @State()
  verifiedComponent: string;
  render() {
    return localStorage.getItem("tokenInfo") ? (
      <stencil-route url={this.url} component={this.component} />
    ) : (
      <stencil-route url={this.url} component="app-forbidden" />
    );
  }
}
