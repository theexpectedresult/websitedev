The base content surface — white, hairline border, soft navy-tinted shadow, 12px radius.

```jsx
<Card accent>
  <h3>Avigilon camera package</h3>
  <p>4× H5A bullet cameras, NVR, 30-day retention.</p>
</Card>
<Card interactive onClick={open}>…</Card>
```

`accent` adds the cyan→blue top bar; `interactive` lifts on hover; `padded={false}` removes inner padding (for full-bleed media).
