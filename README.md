# poc-components

A Proof-of-concept react library with typescript, rollup, swc and various styling library support.

## Usage

Importing components :

```javascript
// MyComponent.jsx / .tsx
import { Button } from "poc-components";

export default function MyComponent() {
  return <Button>Hello</Button>;
}
```

CJS or ESM will be consumed depending on your bundler configuration. Components require (in CJS) or import (in ESM) their own CSS so downstream bundlers can include only the CSS you need in your final build or easily code-split it if you use dynamic imports.

### Theming

Importing theme :

```javascript
// index.js
import "poc-components/themes/red.css";
```

CSS variables can also be defined / managed by the consumer for complexes use cases.

### Standalone

A standalone (everything is bundled in one big file) build for this library is also provided :

```javascript
// index.js
import "poc-components/standalone/index.css";
import "poc-components/themes/light.css";

// MyComponent.jsx
import { Button } from "poc-components/standalone";
```
