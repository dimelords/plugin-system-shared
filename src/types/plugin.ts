export interface PluginConfig {
    [key: string]: unknown;
}

export interface PluginPackage {
    name: string;
    version: string;
    globalName?: string;
    url: string;
}

export interface PluginManifest {
    name: string;
    version: string;
    displayName: string;
    description: string;
    author: string;
    entryPoint: string;
    dependencies: string[];
    packages: PluginPackage[];
    config: PluginConfig;
}

export interface ContentProps {
    manifest: PluginManifest;
    config: PluginConfig;
}