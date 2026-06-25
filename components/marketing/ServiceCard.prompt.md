The signature ER Tech pamphlet card — a coloured gradient cap over an accent-bulleted capability list. Web and print share it.

```jsx
<ServiceCard
  accent="sec"
  icon={<i data-lucide="shield" />}
  title="Security & Alarm"
  items={["Intrusion alarm system", "Door & window sensors", "24/7 monitored service"]}
/>
```

`accent` (`sec`/`vid`/`acc`/`net`/`rec`/`av`) sets both the cap gradient and the bullet colour via the `[data-accent]` token helper. Feed it straight from `services.ts` pillars.
