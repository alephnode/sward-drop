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
    return (
      <stencil-route
        url={this.url}
        component={
          localStorage.getItem("userInfo") ? this.component : "app-forbidden"
        }
      />
    );
  }
}
