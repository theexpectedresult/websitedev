Labelled text input with hint/error states and a cyan focus ring.

```jsx
<Input label="Work email" type="email" placeholder="you@company.com" hint="We reply within one business day" />
<Input label="Site address" error="Required for a quote" />
```

Pass any native `<input>` attribute (`type`, `placeholder`, `value`, `onChange`, `disabled`). `error` overrides `hint` and turns the border red.
