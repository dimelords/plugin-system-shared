# Plugin System Shared Library

Shared types and utilities for plugin system development. Provides type-safe access to globally available dependencies.

## Installation

```bash
npm install git+https://github.com/dimelords/plugin-system-shared.git
```

## Usage

### React Hooks
```typescript
import { getReactHooks } from 'plugin-system-shared';

const { useState, useEffect } = getReactHooks();

function Component() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);
}
```

### Global Types
```typescript
// Global window types are automatically available
const react = window.React;               // Properly typed
const reactDom = window.ReactDOM;         // Properly typed
```

## Available Globals

The following libraries are available globally and properly typed:

### React Core
- React (hooks, components, types)
- ReactDOM (rendering utilities)

## Development

### Setup
```bash
npm install
```

### Build
```bash
npm run build
```

### Adding New Globals

1. Add type imports to `src/types/globals.d.ts`:
```typescript
import type { NewLibrary } from 'new-library';
```

2. Extend Window interface:
```typescript
declare global {
  interface Window {
    NewLibrary: typeof NewLibrary;
  }
}
```

3. Add type exports if needed:
```typescript
export type NewLibraryType = typeof NewLibrary;
```

### Adding Utilities

1. Create new utility file in `src/utils/`:
```typescript
// src/utils/newUtil.ts
export function newHelper() {
  const lib = window.NewLibrary;
  // Implementation
}
```

2. Export from `src/index.ts`:
```typescript
export * from './utils/newUtil';
```

## Type Safety

The library provides TypeScript types for:
- Window globals
- React hooks
- Library components
- Utility functions

Example type checking:
```typescript
// Error: Property 'unknownHook' does not exist
const { unknownHook } = getReactHooks();

// Error: window.UnknownLib is not defined
const lib = window.UnknownLib;
```

## Projects Using This Library

- plugin-repo - Plugin repository with build system
- dynamic - Dynamic plugin loader and runtime

## Contributing

1. Add new globals to `src/types/globals.d.ts`
2. Add corresponding utilities if needed
3. Update documentation
4. Build and test
5. Submit pull request