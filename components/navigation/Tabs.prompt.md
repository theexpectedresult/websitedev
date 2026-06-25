Underline tab bar with a cyan active indicator; controlled or uncontrolled.

```jsx
<Tabs
  defaultValue="overview"
  tabs={[
    { id: "overview", label: "Overview" },
    { id: "orders", label: "Work orders", badge: 12 },
    { id: "devices", label: "Devices" },
  ]}
  onChange={setTab}
/>
```

Each tab needs `id` + `label`; optional `badge` count. Pass `value` to control it.
