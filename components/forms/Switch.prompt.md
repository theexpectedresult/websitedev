Cyan toggle switch for binary settings (arming, notifications, schedules).

```jsx
const [on, setOn] = React.useState(true);
<Switch checked={on} onChange={setOn} label="Arm at night" />
```

`onChange` receives the next boolean. Pass `label` for an inline caption.
