import type React from 'react';
import type ReactDOM from 'react-dom';

declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> { }
    interface IntrinsicElements extends React.JSX.IntrinsicElements { }
    interface ElementChildrenAttribute { children: {}; }
  }
  
  interface Window {
    React: typeof React;
    ReactDOM: typeof ReactDOM;
  }
}