import { Component, Prop } from "@stencil/core";

@Component({
  tag: "app-input",
  styleUrl: "app-input.css"
})
export class AppInput {
  @Prop()
  name: string;
  @Prop()
  id: string;
  @Prop()
  type: string;
  @Prop()
  label: string;
  @Prop()
  disabled: boolean;

  render() {
    return (
      <div id="app-input-container">
        <label htmlFor={this.id}>{this.label}</label>
        <input
          type={this.type}
          name={this.name}
          id={this.id}
          disabled={this.disabled}
        />
      </div>
    );
  }
}
