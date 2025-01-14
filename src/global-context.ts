import type { ComponentType } from 'react';
import type { PluginManifest, PluginConfig } from './types/plugin';

export interface GlobalPluginContext {
  React: any;
  ShadcnUI: Record<string, ComponentType>;
  PluginSystem: {
    BasePlugin: any;
  };
}

export const MediaFlow: GlobalPluginContext = {
  React: null,
  ShadcnUI: {},
  PluginSystem: {
    BasePlugin: null
  }
};