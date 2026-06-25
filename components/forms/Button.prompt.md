The brand action button — cyan primary, blue secondary, outline/ghost/danger; use it for any clickable action.

```jsx
<Button variant="primary" size="md" onClick={save}>Book assessment</Button>
<Button variant="outline" iconLeft={<svg.../>}>Download spec</Button>
```

Variants: `primary` (cyan), `secondary` (blue), `outline`, `ghost`, `danger`. Sizes: `sm` / `md` / `lg`. Supports `iconLeft` / `iconRight`, `fullWidth`, and standard button attributes (`disabled`, `onClick`, `type`).
