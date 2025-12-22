```js
// Import the class only
import { AuroBanner } from '@aurodesignsystem/auro-banner/class';

// Register with a custom name if desired
AuroBanner.register('custom-banner');
```

This will create a new custom element `<custom-banner>` that behaves exactly like `<auro-banner>`, allowing both sets of components to coexist on the same page without interfering with each other.
