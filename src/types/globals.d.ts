import type React from 'react';
import type ReactDOM from 'react-dom';
import type { PluginManifest, PluginConfig } from './plugin';

declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> { }
    interface IntrinsicElements extends React.JSX.IntrinsicElements { }
    interface ElementChildrenAttribute { children: {}; }
  }

  // Make ContentProps globally available
  interface ContentProps {
    manifest: PluginManifest;
    config: PluginConfig;
  }

  // Define BasePlugin as abstract class
  abstract class BasePlugin {
    manifest: PluginManifest;
    protected config: PluginConfig;
    constructor(manifestData?: Partial<PluginManifest>);
    getConfig(): PluginConfig;
    abstract render(): React.ReactElement;
  }

  interface Window {
    React: typeof React;
    ReactDOM: typeof ReactDOM;
  }
}
