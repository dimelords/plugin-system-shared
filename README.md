# Plugin System Shared

## Overview
This package provides shared types, interfaces, and base classes for a dynamic plugin system.

## Installation
```bash
npm install plugin-system-shared
```

## Usage
```typescript
import { BasePlugin, PluginManifest } from 'plugin-system-shared';

// Extend BasePlugin in your specific plugin
class MyPlugin extends BasePlugin {
  render() {
    // Implement rendering logic
  }
}
```

## Features
- BasePlugin abstract class
- PluginManifest interface
- Type definitions for plugin system
