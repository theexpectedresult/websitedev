/* ER Tech Services — operations / project-tracker dashboard UI kit.
   Consumes design-system primitives. Lucide line icons via CDN. */
const PDS = window.ERTechServicesDesignSystem_dceeff;
const { Button, Input, Card, Stat, StatusChip, Badge, Avatar, Tabs } = PDS;

function PIcon({ name, size = 20, color = "var(--text-muted)", stroke = 1.9 }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-lucide", name);
      ref.current.appendChild(el);
      window.lucide.createIcons({ attrs: { width: size, height: size, stroke: color, "stroke-width": stroke }, nameAttr: "data-lucide", icons: window.lucide.icons });
    }
  }, [name, size, color, stroke]);
  return <span ref={ref} style={{ display: "inline-flex", width: size, height: size }} />;
}

const NAV = [
  ["layout-dashboard", "Dashboard"],
  ["clipboard-list", "Work orders"],
  ["cctv", "Devices"],
  ["users", "Clients"],
  ["settings", "Settings"],
];

const ORDERS = [
  ["WO-2041", "Avigilon 12-cam retrofit", "Harbour Logistics", "complete", "Installed", "D. Kessler"],
  ["WO-2042", "Control4 whole-home AV", "Westview Residence", "progress", "In progress", "R. Singh"],
  ["WO-2043", "Access control — 6 doors", "Meridian Offices", "parts", "Needs parts", "A. Pham"],
  ["WO-2044", "Alarm.com monitoring setup", "Cedar Dental", "complete", "Installed", "D. Kessler"],
  ["WO-2045", "Araknis network refresh", "Lonsdale Studio", "blocked", "Blocked", "J. Vega"],
  ["WO-2046", "Crestron boardroom", "Pacific Capital", "info", "Scheduled", "R. Singh"],
];

const DEVICES = [
  ["Avigilon H5A", "Cameras", 248, 250, "complete"],
  ["DSC PowerSeries", "Alarm panels", 31, 31, "complete"],
  ["Araknis AN-310", "Network switches", 18, 19, "parts"],
  ["Control4 EA-5", "Controllers", 22, 22, "complete"],
];

function Sidebar({ active, setActive }) {
  return (
    <aside style={{ width: 230, flex: "none", background: "var(--surface-dark)", color: "var(--text-on-dark)", display: "flex", flexDirection: "column", padding: "var(--space-5) var(--space-3)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", padding: "0 var(--space-2) var(--space-5)" }}>
        <img src="../../assets/icons/ertech-favicon-192.png" alt="" style={{ height: 32 }} />
        <div style={{ color: "#fff", fontWeight: "var(--fw-bold)", fontSize: "var(--fs-base)", lineHeight: 1 }}>ER Tech<br/><span style={{ fontSize: "var(--fs-xs)", fontWeight: "var(--fw-medium)", color: "rgba(255,255,255,0.6)" }}>Operations</span></div>
      </div>
      <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {NAV.map(([icon, label]) => {
          const on = active === label;
          return (
            <button key={label} onClick={() => setActive(label)}
              style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "0.6rem 0.75rem", border: "none", borderRadius: "var(--radius-md)", cursor: "pointer", textAlign: "left",
                background: on ? "rgba(57,198,192,0.18)" : "transparent", color: on ? "#fff" : "rgba(255,255,255,0.72)", fontFamily: "var(--font-sans)", fontSize: "var(--fs-sm)", fontWeight: on ? "var(--fw-semibold)" : "var(--fw-medium)" }}>
              <PIcon name={icon} size={18} color={on ? "var(--brand)" : "rgba(255,255,255,0.5)"} />
              {label}
            </button>
          );
        })}
      </nav>
      <div style={{ marginTop: "auto", padding: "var(--space-3)", borderRadius: "var(--radius-md)", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
        <Avatar name="Dana Kessler" size={36} />
        <div style={{ fontSize: "var(--fs-xs)" }}>
          <div style={{ color: "#fff", fontWeight: "var(--fw-semibold)" }}>Dana Kessler</div>
          <div style={{ color: "rgba(255,255,255,0.55)" }}>Lead integrator</div>
        </div>
      </div>
    </aside>
  );
}

function TopBar({ title }) {
  return (
    <div style={{ height: 64, flex: "none", borderBottom: "1px solid var(--border)", background: "var(--white)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 var(--space-6)" }}>
      <h1 style={{ font: "var(--text-h3)", color: "var(--text-strong)", margin: 0 }}>{title}</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
        <div style={{ width: 240 }}>
          <Input placeholder="Search work orders, sites…" iconLeft={<PIcon name="search" size={16} color="var(--text-muted)" />} />
        </div>
        <Button variant="primary" size="sm" iconLeft={<PIcon name="plus" size={16} color="#fff" />}>New work order</Button>
      </div>
    </div>
  );
}

function StatRow() {
  const stats = [
    ["clipboard-list", "Open work orders", "12", "+3 this week", "up"],
    ["cctv", "Devices online", "319", "of 322", "flat"],
    ["circle-alert", "Needs attention", "2", "1 blocked · 1 parts", "down"],
    ["check-circle-2", "Closed this month", "47", "+11 vs last", "up"],
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-4)" }}>
      {stats.map(([icon, label, value, delta, tone]) => (
        <Card key={label}><Stat label={label} value={value} delta={delta} deltaTone={tone} icon={<PIcon name={icon} size={18} color="var(--brand-deep)" />} /></Card>
      ))}
    </div>
  );
}

function OrdersTable({ limit }) {
  const rows = limit ? ORDERS.slice(0, limit) : ORDERS;
  const th = { textAlign: "left", fontSize: "var(--fs-xs)", fontWeight: "var(--fw-semibold)", letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--text-muted)", padding: "0 var(--space-4) var(--space-3)" };
  const td = { padding: "var(--space-3) var(--space-4)", fontSize: "var(--fs-sm)", color: "var(--text-body)", borderTop: "1px solid var(--border)" };
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead><tr>
        <th style={th}>Order</th><th style={th}>Project</th><th style={th}>Client</th><th style={th}>Status</th><th style={th}>Owner</th>
      </tr></thead>
      <tbody>
        {rows.map(([id, proj, client, status, label, owner]) => (
          <tr key={id}>
            <td style={{ ...td, fontFamily: "var(--font-mono)", color: "var(--text-strong)", fontWeight: "var(--fw-medium)" }}>{id}</td>
            <td style={{ ...td, color: "var(--text-strong)", fontWeight: "var(--fw-medium)" }}>{proj}</td>
            <td style={td}>{client}</td>
            <td style={td}><StatusChip status={status}>{label}</StatusChip></td>
            <td style={td}><span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-2)" }}><Avatar name={owner} size={26} />{owner}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function DevicePanel() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
      {DEVICES.map(([name, kind, online, total, status]) => (
        <div key={name} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
          <div style={{ width: 36, height: 36, borderRadius: "var(--radius-md)", background: "var(--brand-soft)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
            <PIcon name="cpu" size={18} color="var(--brand-deep)" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "var(--fs-sm)", fontWeight: "var(--fw-semibold)", color: "var(--text-strong)" }}>{name}</div>
            <div style={{ fontSize: "var(--fs-xs)", color: "var(--text-muted)" }}>{kind}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-sm)", color: "var(--text-strong)" }}>{online}/{total}</div>
            <StatusChip status={status} dot={false}>{online === total ? "All online" : "Check"}</StatusChip>
          </div>
        </div>
      ))}
    </div>
  );
}

function Dashboard() {
  const [tab, setTab] = React.useState("active");
  const limit = tab === "active" ? 4 : undefined;
  return (
    <div style={{ padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <StatRow />
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "var(--space-5)", alignItems: "start" }}>
        <Card padded={false}>
          <div style={{ padding: "var(--space-5) var(--space-5) 0" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-3)" }}>
              <h3 style={{ font: "var(--text-h3)", color: "var(--text-strong)", margin: 0 }}>Work orders</h3>
              <Button variant="ghost" size="sm" iconRight={<PIcon name="arrow-right" size={16} color="var(--brand-deep)" />}>View all</Button>
            </div>
            <Tabs value={tab} onChange={setTab} tabs={[{ id: "active", label: "Active", badge: 4 }, { id: "all", label: "All", badge: 6 }]} />
          </div>
          <div style={{ padding: "var(--space-2) var(--space-1) var(--space-3)" }}><OrdersTable limit={limit} /></div>
        </Card>
        <Card>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-4)" }}>
            <h3 style={{ font: "var(--text-h3)", color: "var(--text-strong)", margin: 0 }}>Device fleet</h3>
            <Badge tone="soft">99% up</Badge>
          </div>
          <DevicePanel />
        </Card>
      </div>
    </div>
  );
}

function WorkOrdersPage() {
  return (
    <div style={{ padding: "var(--space-6)" }}>
      <Card padded={false}>
        <div style={{ padding: "var(--space-5)" }}>
          <OrdersTable />
        </div>
      </Card>
    </div>
  );
}

function PortalApp() {
  const [active, setActive] = React.useState("Dashboard");
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [active]);
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden", fontFamily: "var(--font-sans)", background: "var(--bg-subtle)" }}>
      <Sidebar active={active} setActive={setActive} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <TopBar title={active} />
        <div style={{ flex: 1, overflowY: "auto" }}>
          {active === "Work orders" ? <WorkOrdersPage /> : <Dashboard />}
        </div>
      </div>
    </div>
  );
}

window.ERTechPortalApp = PortalApp;
