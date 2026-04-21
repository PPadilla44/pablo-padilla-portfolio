/// <reference types="react-scripts" />

// react-scroll's @types package (1.8.x) ships class component types
// incompatible with React 18's stricter JSX.Element rules.
// We override Link/Element to accept children and forward remaining props.
declare module "react-scroll" {
  import * as React from "react";

  export interface LinkProps {
    to: string;
    containerId?: string;
    activeClass?: string;
    activeStyle?: React.CSSProperties;
    spy?: boolean;
    smooth?: boolean | string;
    hashSpy?: boolean;
    offset?: number;
    delay?: number;
    isDynamic?: boolean;
    onSetActive?: (to: string) => void;
    onSetInactive?: () => void;
    ignoreCancelEvents?: boolean;
    duration?: number | ((distance: number) => number);
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    href?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    tabIndex?: number;
  }

  export interface ElementProps {
    name: string;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export const Link: React.FC<LinkProps>;
  export const Element: React.FC<ElementProps>;
  export const Events: {
    scrollEvent: {
      register: (event: string, callback: (to: string, element: Element) => void) => void;
      remove: (event: string) => void;
    };
  };
  export const scroller: {
    scrollTo: (to: string, props?: Partial<LinkProps>) => void;
  };
  export const animateScroll: {
    scrollToTop: (props?: Partial<LinkProps>) => void;
    scrollToBottom: (props?: Partial<LinkProps>) => void;
    scrollTo: (to: number, props?: Partial<LinkProps>) => void;
    scrollMore: (to: number, props?: Partial<LinkProps>) => void;
  };
}
