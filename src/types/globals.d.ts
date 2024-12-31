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

export type UseState = <T>(initialState: T | (() => T)) => [T, (newState: T | ((prevState: T) => T)) => void];
export type UseEffect = (effect: () => void | (() => void), deps?: any[]) => void;
export type UseRef = <T>(initialValue: T | null) => { current: T | null };
export type UseCallback = <T extends (...args: any[]) => any>(callback: T, deps: any[]) => T;
export type UseMemo = <T>(factory: () => T, deps: any[]) => T;

export {};
