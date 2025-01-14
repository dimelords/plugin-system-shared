import type { PluginManifest, PluginConfig } from './types/plugin';

export abstract class BasePlugin {
  manifest: PluginManifest;
  React = window.React;
  
  constructor(manifest?: Partial<PluginManifest>) {
    this.manifest = manifest as PluginManifest || {} as PluginManifest;
  }
  
  getConfig(): PluginConfig {
    return this.manifest.config || {};
  }
  
  abstract render(): React.ReactElement;
}
