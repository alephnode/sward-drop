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

  render() {
    return (
      <div class="app-button-container">
        <button
          id="app-button"
          type={this.type}
          data-contained={this.contained}
        >
          <slot />
        </button>
      </div>
    );
  }
}
