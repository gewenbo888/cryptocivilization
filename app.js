// ===== Cryptocivilization — interactions =====
(() => {
  const html = document.documentElement;

  const setLang = (lang) => {
    html.setAttribute("data-lang", lang);
    document.querySelectorAll(".lang-toggle button").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
    try { localStorage.setItem("cc-lang", lang); } catch(_) {}
  };
  document.querySelectorAll(".lang-toggle button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
  try { const s = localStorage.getItem("cc-lang"); if (s) setLang(s); } catch(_) {}

  const setTheme = (t) => {
    html.setAttribute("data-theme", t);
    document.querySelectorAll(".theme-toggle button").forEach(b => b.classList.toggle("active", b.dataset.themeSet === t));
    try { localStorage.setItem("cc-theme", t); } catch(_) {}
  };
  document.querySelectorAll(".theme-toggle button").forEach(b => b.addEventListener("click", () => setTheme(b.dataset.themeSet)));
  try { const s = localStorage.getItem("cc-theme"); if (s) setTheme(s); } catch(_) {}

  // ===== ZK explainer canvas =====
  const zk = document.getElementById("zk-canvas");
  if (zk) {
    const W = 1000, H = 380;
    const tlabel = (en, zh, attrs) =>
      `<text ${attrs} lang="en">${en}</text><text ${attrs} lang="zh">${zh}</text>`;
    let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">`;

    // Decorative grid corners (terminal feel)
    s += `<defs>
      <marker id="arrowP" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--phosphor)"/>
      </marker>
      <marker id="arrowA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--amber)"/>
      </marker>
    </defs>`;

    // Witness panel
    s += `<g>
      <rect x="40" y="80" width="180" height="220" rx="4" fill="var(--bg-3)" stroke="var(--phosphor)" stroke-width="1.4" stroke-dasharray="2 2" opacity="0.8"/>
      ${tlabel("01 · WITNESS w", "01 · 见证 w", `x="60" y="108" font-family="JetBrains Mono, monospace" font-size="11" fill="var(--amber)" letter-spacing="2"`)}
      ${tlabel("the secret you hold", "你所持有的秘密", `x="60" y="130" font-family="Space Grotesk, sans-serif" font-size="12" fill="var(--ink-soft)" font-style="italic"`)}
      <text x="60" y="170" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--phosphor)">› private_key</text>
      <text x="60" y="190" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--phosphor)">› preimage</text>
      <text x="60" y="210" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--phosphor)">› balance</text>
      <text x="60" y="230" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--phosphor)">› credential</text>
      <text x="60" y="250" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--phosphor)">› ai_weights</text>
      <text x="60" y="270" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--phosphor)">› biometric</text>
    </g>`;

    // Prover
    s += `<circle cx="340" cy="190" r="60" fill="var(--bg-3)" stroke="var(--phosphor)" stroke-width="1.5"/>`;
    s += tlabel("02 · PROVER P", "02 · 证明者 P", `x="340" y="180" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" fill="var(--phosphor)" letter-spacing="2" font-weight="600"`);
    s += tlabel("π = SNARK(C, x, w)", "π = SNARK(C, x, w)", `x="340" y="208" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" fill="var(--ink-soft)"`);
    s += `<path d="M 222 190 L 278 190" stroke="var(--amber)" stroke-width="1.5" marker-end="url(#arrowA)"/>`;

    // Verifier
    s += `<g>
      <rect x="640" y="135" width="160" height="110" rx="4" fill="var(--bg-3)" stroke="var(--rose)" stroke-width="1.5"/>
      ${tlabel("03 · VERIFIER V", "03 · 验证者 V", `x="720" y="165" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" fill="var(--rose)" letter-spacing="2" font-weight="600"`)}
      ${tlabel("V(C, x, π) → {0, 1}", "V(C, x, π) → {0, 1}", `x="720" y="190" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" fill="var(--ink)"`)}
      ${tlabel("ms · KB", "毫秒 · KB级", `x="720" y="218" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="var(--ink-soft)"`)}
    </g>`;

    // Proof crossing
    s += `<path d="M 400 190 Q 520 130 640 190" fill="none" stroke="var(--phosphor)" stroke-width="2" stroke-dasharray="6 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-30" dur="2.4s" repeatCount="indefinite"/>
    </path>`;
    s += tlabel("π", "π", `x="520" y="118" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="20" fill="var(--phosphor)" font-weight="600"`);
    s += tlabel("succinct · zero-knowledge · sound", "简洁 · 零知识 · 可靠", `x="520" y="135" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="var(--ink-soft)" letter-spacing="1.5"`);

    // Public statement
    s += `<g>
      <rect x="240" y="290" width="500" height="56" rx="4" fill="none" stroke="var(--line-2)" stroke-dasharray="3 3"/>
      ${tlabel("04 · PUBLIC STATEMENT  x", "04 · 公开命题  x", `x="260" y="312" font-family="JetBrains Mono, monospace" font-size="11" fill="var(--amber)" letter-spacing="1.5"`)}
      ${tlabel("∃ w  such that  C(x, w) = 1", "存在 w  使得  C(x, w) = 1", `x="490" y="334" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="13" fill="var(--ink)"`)}
    </g>`;

    // Recursion glyph
    s += `<g transform="translate(880, 80)">
      <circle r="34" fill="none" stroke="var(--violet)" stroke-width="1.2" stroke-dasharray="3 2"/>
      <circle r="14" fill="none" stroke="var(--violet)" stroke-width="1.5"/>
      ${tlabel("recursion", "递归", `x="0" y="-44" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="var(--violet)" letter-spacing="2"`)}
      ${tlabel("π verifies π", "π 验证 π", `x="0" y="3" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="var(--ink-soft)"`)}
      <path d="M 0 -14 A 14 14 0 0 1 14 0" fill="none" stroke="var(--rose)" stroke-width="2"/>
      <polygon points="0,-3 6,0 0,3" fill="var(--rose)" transform="translate(14,0)"/>
    </g>`;

    s += `</svg>`;
    zk.innerHTML = s;
  }

  // ===== Trust ladder =====
  const tEl = document.getElementById("trust-ladder");
  if (tEl && window.TRUST) {
    tEl.innerHTML = window.TRUST.map((t, i) => `
      <div class="trust-rung${t.id === "cryptographic" ? " peak" : ""}">
        <div class="rung-num">0${i+1}</div>
        <div class="rung-meta">
          <div class="name"><span lang="en">${t.en}</span><span lang="zh">${t.zh}</span></div>
          <div class="scale">${t.scale}</div>
        </div>
        <div class="rung-body">
          <p lang="en">${t.en_desc}</p>
          <p lang="zh">${t.zh_desc}</p>
        </div>
      </div>
    `).join("");
  }

  // ===== Math lab =====
  const mEl = document.getElementById("math-lab");
  if (mEl && window.MATH) {
    mEl.innerHTML = window.MATH.map(m => `
      <div class="lab-card">
        <div class="glyph">${m.glyph}</div>
        <h3><span lang="en">${m.en}</span><span lang="zh">${m.zh}</span></h3>
        <p lang="en">${m.en_desc}</p>
        <p lang="zh">${m.zh_desc}</p>
        <div class="intuition">
          <span lang="en">${m.en_intuition}</span><span lang="zh">${m.zh_intuition}</span>
        </div>
      </div>
    `).join("");
  }

  // ===== Narratives =====
  const nEl = document.getElementById("narratives");
  if (nEl && window.NARRATIVES) {
    nEl.innerHTML = window.NARRATIVES.map(n => `
      <div class="narrative">
        <div class="glyph">${n.id}</div>
        <h3><span lang="en">${n.en}</span><span lang="zh">${n.zh}</span></h3>
        <p lang="en">${n.en_thesis}</p>
        <p lang="zh">${n.zh_thesis}</p>
        <div class="pioneer"><span lang="en">${n.en_pioneer}</span><span lang="zh">${n.zh_pioneer}</span></div>
      </div>
    `).join("");
  }

  // ===== Culture =====
  const cEl = document.getElementById("culture-grid");
  if (cEl && window.CULTURE) {
    cEl.innerHTML = window.CULTURE.map(c => `
      <div class="card">
        <div class="meta">▸ Norm</div>
        <h3><span lang="en">${c.en}</span><span lang="zh">${c.zh}</span></h3>
        <p lang="en">${c.en_desc}</p>
        <p lang="zh">${c.zh_desc}</p>
      </div>
    `).join("");
  }

  // ===== Consensus =====
  const consBody = document.getElementById("consensus-body");
  if (consBody && window.CONSENSUS) {
    consBody.innerHTML = window.CONSENSUS.map(c => {
      const isProof = (c.zh_zk && c.zh_zk.includes("原生")) || (c.en && c.en.toLowerCase().includes("aggregation"));
      return `<tr${isProof ? ' class="proof"' : ''}>
        <td><span lang="en">${c.en}</span><span lang="zh">${c.zh}</span></td>
        <td><span lang="en">${c.en_basis}</span><span lang="zh">${c.zh_basis}</span></td>
        <td><span lang="en">${c.en_finality}</span><span lang="zh">${c.zh_finality}</span></td>
        <td><span lang="en">${c.en_zk}</span><span lang="zh">${c.zh_zk}</span></td>
      </tr>`;
    }).join("");
  }

  // ===== Risks =====
  const rEl = document.getElementById("risks-grid");
  if (rEl && window.RISKS) {
    rEl.innerHTML = window.RISKS.map(r => `
      <div class="card rose">
        <div class="meta">⚠ Risk</div>
        <h3><span lang="en">${r.en}</span><span lang="zh">${r.zh}</span></h3>
        <p lang="en">${r.en_desc}</p>
        <p lang="zh">${r.zh_desc}</p>
      </div>
    `).join("");
  }

  // ===== Futures =====
  const fEl = document.getElementById("futures-grid");
  if (fEl && window.FUTURES) {
    fEl.innerHTML = window.FUTURES.map(f => `
      <div class="card violet">
        <div class="meta">▶ Scenario</div>
        <h3><span lang="en">${f.en}</span><span lang="zh">${f.zh}</span></h3>
        <p lang="en">${f.en_desc}</p>
        <p lang="zh">${f.zh_desc}</p>
      </div>
    `).join("");
  }

  // ===== Simulator =====
  const sim = document.getElementById("simulator");
  if (sim) {
    const ctrls = {
      math:        document.getElementById("ctrl-math"),
      crypto:      document.getElementById("ctrl-crypto"),
      compute:     document.getElementById("ctrl-compute"),
      consensus:   document.getElementById("ctrl-consensus"),
      incentives:  document.getElementById("ctrl-incentives"),
      shared:      document.getElementById("ctrl-shared")
    };
    const update = () => {
      const v = Object.fromEntries(Object.entries(ctrls).map(([k,c]) => [k, parseFloat(c.value)/100]));
      Object.keys(ctrls).forEach(k => {
        const lbl = document.querySelector(`[data-val="${k}"]`);
        if (lbl) lbl.textContent = ctrls[k].value;
      });

      const trust = clamp01(0.3*v.crypto + 0.25*v.math + 0.2*v.consensus + 0.15*v.shared + 0.1*v.compute - 0.05);
      const coordination = clamp01(0.3*v.consensus + 0.25*v.shared + 0.2*v.incentives + 0.15*v.compute + 0.1*v.crypto - 0.05);
      const sovereignty = clamp01(0.35*v.crypto + 0.25*v.math + 0.2*v.shared + 0.2*v.consensus - 0.1);
      const fragility = clamp01(0.3*Math.abs(v.crypto - v.shared) + 0.25*Math.abs(v.compute - v.math) + 0.2*(1 - v.consensus) + 0.15*(1 - v.incentives) + 0.1);

      const set = (id, val) => {
        const fill = document.querySelector(`[data-meter="${id}"] .bar-fill`);
        const num  = document.querySelector(`[data-meter="${id}"] .num`);
        if (fill) fill.style.width = (val*100).toFixed(0) + "%";
        if (num)  num.textContent  = (val*100).toFixed(0);
      };
      set("trust", trust);
      set("coordination", coordination);
      set("sovereignty", sovereignty);
      set("fragility", fragility);

      const summaryEn = document.getElementById("sim-summary-en");
      const summaryZh = document.getElementById("sim-summary-zh");
      let label_en, label_zh;
      if (trust > .75 && coordination > .7 && sovereignty > .65 && fragility < .45) {
        label_en = `Mathematical-civilization regime — math (${pct(v.math)}), crypto (${pct(v.crypto)}) and consensus (${pct(v.consensus)}) compound; shared reality (${pct(v.shared)}) is anchored on chain rather than in any institution. Sovereignty does not require an army to defend it. The end-state target of the ZK civilization thesis.`;
        label_zh = `数学文明体制——数学（${pct(v.math)}）、密码学（${pct(v.crypto)}）、共识（${pct(v.consensus)}）相互放大；共享现实（${pct(v.shared)}）锚定于链上而非任一机构。主权无须军队保卫。这是 ZK 文明命题的终态目标。`;
      } else if (v.compute > .7 && v.crypto < .4 && v.shared > .6) {
        label_en = `Surveillance-platform archetype — large compute, large coordination, but cryptography weakened. The shape of 2024-vintage platform capitalism: trust-by-API, governance-by-EULA. AI capacity outpaces verification capacity.`;
        label_zh = `监视平台原型——算力与协调皆强，但密码学被削弱。这是 2024 年代平台资本主义的形态：信任由 API 决定，治理由用户协议决定。AI 能力超过验证能力。`;
      } else if (v.crypto > .7 && v.shared < .35) {
        label_en = `Fortress-cypherpunk archetype — strong cryptography, no shared reality. Each node is sovereign and disconnected. Resilient against the state, fragile against everything else.`;
        label_zh = `堡垒型密码朋克——密码学强大，共享现实缺失。每个节点皆主权但彼此断裂。抗国家而脆弱于其余。`;
      } else if (v.math > .8 && v.crypto > .7 && v.compute > .7) {
        label_en = `Recursive-proof market — Psy Protocol / Aligned / =nil; class. Specialised provers, public proof markets, civilization-scale aggregation. The economic substrate of the next decade if the math survives quantum and the social layer doesn't capture itself.`;
        label_zh = `递归证明市场——Psy / Aligned / =nil; 这一类。专业证明者、公共证明市场、文明级聚合。若数学经受量子且社会层未自我俘获，则为下一十年的经济基质。`;
      } else if (fragility > .7) {
        label_en = `High-fragility configuration — components are mismatched. Cryptographic guarantees outrun the social capacity to use them, or vice versa. Most known historical chain failures sit here.`;
        label_zh = `高脆弱配置——组件规模不匹配。密码学保证超出社会使用能力，或反之。多数已知的链失败案例落于此区。`;
      } else {
        label_en = `Mixed profile — adjust the dials to model a regime: 1990s internet, 2010s platforms, 2020s ZK rollups, surveillance state, or a hypothetical 2040s civilization-scale ledger.`;
        label_zh = `混合画像——调节旋钮以模拟某种体制：1990 年代互联网、2010 年代平台、2020 年代 ZK 汇总、监视国家，或2040 年代假设的文明级账本。`;
      }
      if (summaryEn) summaryEn.textContent = label_en;
      if (summaryZh) summaryZh.textContent = label_zh;
    };
    Object.values(ctrls).forEach(c => c && c.addEventListener("input", update));
    update();
  }

  function clamp01(x){ return Math.max(0, Math.min(1, x)); }
  function pct(x){ return Math.round(x*100) + "%"; }
})();
