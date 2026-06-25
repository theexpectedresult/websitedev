KPI / metric block for dashboards and project trackers.

```jsx
<Stat label="Open work orders" value="12" delta="+3 this week" deltaTone="up" />
<Stat label="Cameras online" value="248" unit="of 250" deltaTone="flat" />
```

Wrap in a `Card` for a tile. `deltaTone`: `up` (green) / `down` (red) / `flat` (gray).
