# fagnersales21/my-date

A simple package for handling dates with useful methods, such as: `toTimezone`, `difference`, `isBefore`, `isAfter`, etc.

### Installation
```
pnpm install @fagnersales21/my-date
```

Examples:
```typescript
import { now } from '@fagnersales21/my-date'

console.log(now('UTC').toDateString())
```