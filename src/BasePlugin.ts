import type { PluginManifest, PluginConfig } from './types/plugin';

export class BasePlugin {
    manifest: PluginManifest;
    protected config: PluginConfig;
    
    constructor(manifestData?: Partial<PluginManifest>) {
        this.manifest = {
            name: 'base',
            version: '1.0.0',
            displayName: 'Base Plugin',
            description: 'Base plugin implementation',
            author: 'Unknown',
            entryPoint: '',
            dependencies: [],
            packages: [],
            config: {
                theme: 'gray'
            },
            ...manifestData
        };
        this.config = this.manifest.config;
    }

    getConfig(): PluginConfig {
        return this.config;
    }

    render(): React.ReactElement {
        throw new Error('render() must be implemented by child class');
    }
}