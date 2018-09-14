/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
/* tslint:disable */

import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';


import {
  MatchResults,
} from '@stencil/router';


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

    interface AppProfile {
      'match': MatchResults;
    }

    interface AppRoot {

    }
  }


    interface HTMLAppHomeElement extends StencilComponents.AppHome, HTMLStencilElement {}

    var HTMLAppHomeElement: {
      prototype: HTMLAppHomeElement;
      new (): HTMLAppHomeElement;
    };
    

    interface HTMLAppProfileElement extends StencilComponents.AppProfile, HTMLStencilElement {}

    var HTMLAppProfileElement: {
      prototype: HTMLAppProfileElement;
      new (): HTMLAppProfileElement;
    };
    

    interface HTMLAppRootElement extends StencilComponents.AppRoot, HTMLStencilElement {}

    var HTMLAppRootElement: {
      prototype: HTMLAppRootElement;
      new (): HTMLAppRootElement;
    };
    

  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {
    'app-home': JSXElements.AppHomeAttributes;
    'app-profile': JSXElements.AppProfileAttributes;
    'app-root': JSXElements.AppRootAttributes;
    }
  }

  namespace JSXElements {

    export interface AppHomeAttributes extends HTMLAttributes {

    }

    export interface AppProfileAttributes extends HTMLAttributes {
      'match'?: MatchResults;
    }

    export interface AppRootAttributes extends HTMLAttributes {

    }
  }

  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement
    'app-profile': HTMLAppProfileElement
    'app-root': HTMLAppRootElement
  }

  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
  }
}
declare global { namespace JSX { interface StencilJSX {} } }

