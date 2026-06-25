// scripts/share.mjs
// Dev convenience: run `astro dev` and a Cloudflare quick tunnel together so the
// local site is reachable at a public https://<random>.trycloudflare.com URL.
//
//   npm run share        (Ctrl+C stops both)
//
// Requires `cloudflared` on PATH (winget install --id Cloudflare.cloudflared,
// or `brew install cloudflared`). The Astro config already sets server.host:true
// and allows *.trycloudflare.com hosts. No effect on `npm run build`.

import { spawn } from "node:child_process";

const children = [];
let shuttingDown = false;
let tunnelStarted = false;

function shutdown(code = 0) {
  if (shuttingDown) return;
  shuttingDown = true;
  for (const c of children) {
    try {
      c.kill();
    } catch {
      /* ignore */
    }
  }
  process.exit(code);
}
process.on("SIGINT", () => shutdown(0));
process.on("SIGTERM", () => shutdown(0));

// 1) Start the Astro dev server (shell:true so it resolves the local `astro` bin).
const dev = spawn("astro", ["dev"], { shell: true });
children.push(dev);
dev.on("exit", (code) => shutdown(code ?? 0));
dev.stderr.on("data", (b) => process.stderr.write(b));

// 2) When the dev server announces its port, open the tunnel against it.
function startTunnel(url) {
  if (tunnelStarted) return;
  tunnelStarted = true;
  console.log(`\n[share] dev server up at ${url} — opening Cloudflare tunnel…\n`);
  const cf = spawn("cloudflared", ["tunnel", "--url", url], { shell: true });
  children.push(cf);
  cf.stdout.on("data", (b) => process.stdout.write(b));
  cf.stderr.on("data", (b) => process.stdout.write(b)); // tunnel URL prints on stderr
  cf.on("error", (err) => {
    if (err.code === "ENOENT") {
      console.error(
        "\n[share] `cloudflared` not found on PATH. Install it, then re-run `npm run share`:\n" +
          "   Windows:  winget install --id Cloudflare.cloudflared\n" +
          "   macOS:    brew install cloudflared\n" +
          "   Linux:    https://pkg.cloudflare.com/\n" +
          "Your local dev server above is still running.\n"
      );
    } else {
      console.error("[share] tunnel error:", err);
    }
  });
}

dev.stdout.on("data", (buf) => {
  const s = buf.toString();
  process.stdout.write(s);
  const m = s.match(/localhost:(\d+)/i);
  if (m) startTunnel(`http://localhost:${m[1]}`);
});
