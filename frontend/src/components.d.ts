/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
/* tslint:disable */

import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';




declare global {
  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}

  namespace StencilComponents {

    interface AppHome {

    }

    interface AppJoin {

    }

    interface AppLogin {

    }

    interface AppRoot {

    }

    interface AppButton {
      'contained': boolean;
      'disabled': boolean;
      'link': string;
      'type': string;
    }

    interface AppHeader {

    }

    interface AppInput {
      'disabled': boolean;
      'id': string;
      'label': string;
      'name': string;
      'type': string;
    }
  }


    interface HTMLAppHomeElement extends StencilComponents.AppHome, HTMLStencilElement {}

    var HTMLAppHomeElement: {
      prototype: HTMLAppHomeElement;
      new (): HTMLAppHomeElement;
    };
    

    interface HTMLAppJoinElement extends StencilComponents.AppJoin, HTMLStencilElement {}

    var HTMLAppJoinElement: {
      prototype: HTMLAppJoinElement;
      new (): HTMLAppJoinElement;
    };
    

    interface HTMLAppLoginElement extends StencilComponents.AppLogin, HTMLStencilElement {}

    var HTMLAppLoginElement: {
      prototype: HTMLAppLoginElement;
      new (): HTMLAppLoginElement;
    };
    

    interface HTMLAppRootElement extends StencilComponents.AppRoot, HTMLStencilElement {}

    var HTMLAppRootElement: {
      prototype: HTMLAppRootElement;
      new (): HTMLAppRootElement;
    };
    

    interface HTMLAppButtonElement extends StencilComponents.AppButton, HTMLStencilElement {}

    var HTMLAppButtonElement: {
      prototype: HTMLAppButtonElement;
      new (): HTMLAppButtonElement;
    };
    

    interface HTMLAppHeaderElement extends StencilComponents.AppHeader, HTMLStencilElement {}

    var HTMLAppHeaderElement: {
      prototype: HTMLAppHeaderElement;
      new (): HTMLAppHeaderElement;
    };
    

    interface HTMLAppInputElement extends StencilComponents.AppInput, HTMLStencilElement {}

    var HTMLAppInputElement: {
      prototype: HTMLAppInputElement;
      new (): HTMLAppInputElement;
    };
    

  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {
    'app-home': JSXElements.AppHomeAttributes;
    'app-join': JSXElements.AppJoinAttributes;
    'app-login': JSXElements.AppLoginAttributes;
    'app-root': JSXElements.AppRootAttributes;
    'app-button': JSXElements.AppButtonAttributes;
    'app-header': JSXElements.AppHeaderAttributes;
    'app-input': JSXElements.AppInputAttributes;
    }
  }

  namespace JSXElements {

    export interface AppHomeAttributes extends HTMLAttributes {

    }

    export interface AppJoinAttributes extends HTMLAttributes {

    }

    export interface AppLoginAttributes extends HTMLAttributes {

    }

    export interface AppRootAttributes extends HTMLAttributes {

    }

    export interface AppButtonAttributes extends HTMLAttributes {
      'contained'?: boolean;
      'disabled'?: boolean;
      'link'?: string;
      'type'?: string;
    }

    export interface AppHeaderAttributes extends HTMLAttributes {

    }

    export interface AppInputAttributes extends HTMLAttributes {
      'disabled'?: boolean;
      'id'?: string;
      'label'?: string;
      'name'?: string;
      'type'?: string;
    }
  }

  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement
    'app-join': HTMLAppJoinElement
    'app-login': HTMLAppLoginElement
    'app-root': HTMLAppRootElement
    'app-button': HTMLAppButtonElement
    'app-header': HTMLAppHeaderElement
    'app-input': HTMLAppInputElement
  }

  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-join': HTMLAppJoinElement;
    'app-login': HTMLAppLoginElement;
    'app-root': HTMLAppRootElement;
    'app-button': HTMLAppButtonElement;
    'app-header': HTMLAppHeaderElement;
    'app-input': HTMLAppInputElement;
  }
}
declare global { namespace JSX { interface StencilJSX {} } }

