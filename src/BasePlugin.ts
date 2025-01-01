import React from 'react';
import { PluginManifest, PluginConfig } from './types/plugin';

export abstract class BasePlugin {
  manifest: PluginManifest;
  protected config: PluginConfig;

  constructor(manifestData?: Partial<PluginManifest>) {
    this.manifest = manifestData as PluginManifest || {} as PluginManifest;
    this.config = manifestData?.config || {};
  }

  getConfig(): PluginConfig {
    return this.config;
  }

  abstract render(): React.ReactElement;
}
