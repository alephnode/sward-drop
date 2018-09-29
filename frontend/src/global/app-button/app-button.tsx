import { Component, Prop } from "@stencil/core";

@Component({
  tag: "app-button",
  styleUrl: "app-button.css"
})
export class AppButton {
  @Prop()
  contained: boolean;
  @Prop()
  type: string;
  @Prop()
  disabled: boolean;
  @Prop()
  link: string;
  @Prop()
  secondary: boolean;

  render() {
    let btnTpl = (
      <button
        id="app-button"
        type={this.type}
        data-contained={this.contained}
        disabled={this.disabled}
        data-secondary={this.secondary}
      >
        {this.disabled ? "Saving..." : <slot />}
      </button>
    );

    let linkTpl = (
      <stencil-route-link url={this.link}>{btnTpl}</stencil-route-link>
    );

    return (
      <div class="app-button-container">{this.link ? linkTpl : btnTpl}</div>
    );
  }
}
