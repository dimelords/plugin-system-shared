import type { PluginManifest, PluginConfig } from './plugin';

declare global {
  abstract class BasePlugin {
    manifest: PluginManifest;
    
    constructor(manifest?: Partial<PluginManifest>);
    
    getConfig(): PluginConfig;
    
    abstract render(): React.ReactElement;
  }
}

// Ensure the file is treated as a module
export {};
