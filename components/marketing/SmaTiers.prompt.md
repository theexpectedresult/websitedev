Service & Maintenance Agreement tier strip — Standard / Priority / Premium, Premium gold-highlighted.

```jsx
import { smaTiers, smaNote } from "…/services";
<SmaTiers tiers={smaTiers} note={smaNote} />
```

Defaults to the three standard tiers when `tiers` is omitted. Feed `smaTiers` + `smaNote` from `services.ts`.
