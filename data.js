// ===== Trust evolution: same backbone, different framing =====
window.TRUST = [
  { id: "tribe", en: "Tribal", zh: "部落", scale: "10² · ~−10000",
    en_desc: "Trust is biological. You cooperate with people who share your gene pool, your campfire, your fate. Verification is gossip; punishment is exile. Maximum scale ≈ Dunbar's 150.",
    zh_desc: "信任是生物性的。你与共享基因、营火、命运的人合作。验证靠流言，惩罚靠流放。规模上限约为邓巴的 150 人。" },
  { id: "religion", en: "Religious", zh: "宗教", scale: "10⁶ · ~−3000+",
    en_desc: "Trust is shared cosmology. A god, a scripture, a priesthood. The first technology that lets a million strangers cooperate without meeting — and the first that requires heretics.",
    zh_desc: "信任是共享的宇宙观。一位神、一部经、一个祭司团。这是首项让百万陌生人协作的技术——也是首项需要异端的技术。" },
  { id: "imperial", en: "Imperial", zh: "帝国", scale: "10⁷ · ~−500+",
    en_desc: "Trust is enforced. Standing armies, written law, taxation, paved roads. Persia, Rome, Han, Maurya, Tang. Trust by hierarchy is trust at swordpoint.",
    zh_desc: "信任由强制实现。常备军、成文法、税收、官道。波斯、罗马、汉、孔雀、唐。等级制下的信任，是刀尖下的信任。" },
  { id: "institution", en: "Institutional", zh: "机构", scale: "10⁸ · 1500+",
    en_desc: "Trust is procedural. Courts, charters, audits, double-entry books. Capital crosses oceans because you trust the auditor. The state becomes a database; you become a row.",
    zh_desc: "信任是程序性的。法庭、章程、审计、复式账本。资本可跨洋流动，因为你信任审计师。国家成为数据库，你成为其中一行。" },
  { id: "computational", en: "Computational", zh: "计算", scale: "10⁹ · 1995+",
    en_desc: "Trust is platform-mediated. eBay reputation, Stripe APIs, Uber ratings, Google PageRank. The platform replaces the bureau, and extracts a 30% rent for being the new referee.",
    zh_desc: "信任由平台中介。eBay 声誉、Stripe API、Uber 评分、Google PageRank。平台取代官僚，并以三成抽成作为新仲裁者的代价。" },
  { id: "cryptographic", en: "Cryptographic", zh: "密码学", scale: "10¹⁰ · 2009+",
    en_desc: "Trust is mathematical. The trust referee becomes a polynomial. Bitcoin verifies a payment; Ethereum verifies a contract; a zk-rollup verifies a million transactions in a single proof. The first new trust primitive in 400 years that requires no central authority.",
    zh_desc: "信任成为数学。信任的仲裁者成为一个多项式。比特币验证支付，以太坊验证合约，zk-rollup 用单一证明验证百万笔交易。这是 400 年来首个无须中央权威的全新信任原语。" }
];

// ===== Math foundations lab — six interactive primitives =====
window.MATH = [
  {
    id: "field", en: "Finite Field", zh: "有限域", glyph: "F_p",
    en_desc: "Numbers that wrap around at a prime p. Addition, subtraction, multiplication, even division all stay inside {0, 1, ..., p-1}. ZK arithmetic lives here because integer overflow becomes a feature instead of a bug.",
    zh_desc: "在素数 p 处回卷的数。加、减、乘乃至除，都不离开 {0, 1, …, p-1}。ZK 运算在此栖居，因为整数溢出变成特性而非缺陷。",
    en_intuition: "p = 7 → 5 + 4 = 2, 6 × 5 = 2. The clock on the wall is F_12.",
    zh_intuition: "p = 7 → 5 + 4 = 2，6 × 5 = 2。墙上的钟，就是 F_12。"
  },
  {
    id: "curve", en: "Elliptic Curve", zh: "椭圆曲线", glyph: "y² = x³ + ax + b",
    en_desc: "A smooth cubic curve over a field. The points form a group under a geometric \"add\" operation: connect two points with a line, find where it meets the curve a third time, reflect across the x-axis. Reversing this is the discrete log problem — the basis of half of modern cryptography.",
    zh_desc: "域上的光滑三次曲线。其上的点在几何'加法'下构成群：两点连线、与曲线相交于第三点，沿 x 轴反射。逆运算即离散对数问题——它是现代密码学一半的根基。",
    en_intuition: "secp256k1, Curve25519, BN254, BLS12-381 — every signature you've ever made lives on a curve like this.",
    zh_intuition: "secp256k1、Curve25519、BN254、BLS12-381——你曾发出的每一个签名，都生活在如此曲线之上。"
  },
  {
    id: "merkle", en: "Merkle Tree", zh: "默克尔树", glyph: "h₁₂₃₄",
    en_desc: "A binary tree of hashes. Each parent is the hash of its two children. With log₂(N) hashes you can prove a single leaf belongs to a tree of N — the data structure that lets a phone verify a 700-GB blockchain.",
    zh_desc: "由哈希构成的二叉树。每个父节点是两个子节点的哈希。仅需 log₂(N) 个哈希即可证明某叶子属于 N 大小的树——这是让手机能验证 700 GB 区块链的数据结构。",
    en_intuition: "Bitcoin SPV. Plasma. Every L2 inclusion proof. The most-used cryptographic primitive after the hash function itself.",
    zh_intuition: "比特币 SPV、Plasma、所有 L2 入块证明。仅次于哈希函数本身、最被使用的密码学原语。"
  },
  {
    id: "commit", en: "Polynomial Commitment", zh: "多项式承诺", glyph: "Com(p(x))",
    en_desc: "A constant-size object that commits to an entire polynomial — possibly of degree 2²⁰ or higher — yet later lets you reveal a single evaluation p(z) and prove it was that exact polynomial. KZG, FRI, IPA, Hyrax. The economic miracle of modern ZK.",
    zh_desc: "一个常数大小的对象，承诺一个可能 2²⁰ 阶以上的多项式，并允许稍后公开某个求值 p(z) 并证明它来自那个多项式。KZG、FRI、IPA、Hyrax。这是现代 ZK 的经济奇迹。",
    en_intuition: "Plonk, Marlin, Halo2, Plonky2 all rest on this. \"Commit to all your work; later reveal only what's asked.\"",
    zh_intuition: "Plonk、Marlin、Halo2、Plonky2 皆建于此之上。'先提交全部工作，后续只揭示被询问者。'"
  },
  {
    id: "pairing", en: "Bilinear Pairing", zh: "双线性配对", glyph: "e(A, B)",
    en_desc: "A function e: G₁ × G₂ → G_T satisfying e(aP, bQ) = e(P, Q)^{ab}. Lets you check multiplicative relationships between curve points — the secret sauce of pairing-based zk-SNARKs (Groth16, KZG-based Plonk).",
    zh_desc: "函数 e: G₁ × G₂ → G_T，满足 e(aP, bQ) = e(P, Q)^{ab}。它让你能在曲线点之间检查乘法关系——是基于配对的 zk-SNARK（Groth16、KZG-based Plonk）的秘方。",
    en_intuition: "BLS signatures, Zcash Sapling, Filecoin proofs, Polygon zkEVM all use pairings. Slow, sweet, deep magic.",
    zh_intuition: "BLS 签名、Zcash Sapling、Filecoin 证明、Polygon zkEVM 皆用配对。缓慢、甜美、深奥的魔法。"
  },
  {
    id: "interactive", en: "Interactive Proof", zh: "交互证明", glyph: "P ⇄ V",
    en_desc: "A multi-round game between prover and verifier where the verifier sends random challenges. After r rounds the verifier accepts only if a cheating prover would have to be lucky one chance in 2^r. Fiat-Shamir collapses this into a single non-interactive proof by replacing the verifier's randomness with a hash.",
    zh_desc: "证明者与验证者之间的多轮博弈，验证者随机出题。经过 r 轮，唯有'作弊证明者侥幸通过的概率小于 2^{-r}'时，验证者才接受。Fiat-Shamir 变换以哈希替代验证者随机性，将其压缩为单次非交互证明。",
    en_intuition: "Sigma protocols, Schnorr signatures, sumcheck, GKR. The deepest design pattern in modern cryptography.",
    zh_intuition: "Sigma 协议、Schnorr 签名、sumcheck、GKR。现代密码学最深的设计模式。"
  }
];

// ===== Seven narratives =====
window.NARRATIVES = [
  { id: "A", en: "Privacy as human freedom", zh: "隐私即人之自由",
    en_thesis: "Surveillance is the prerequisite of authoritarianism. ZK gives you payments and identity that are verifiable but unobservable. The cypherpunk lineage from Chaum (1981) to Zcash (2016) to Tornado Cash (2019) to today's privacy pools.",
    zh_thesis: "监视是威权的前提。ZK 给你可验证而不可观察的支付与身份。密码朋克的谱系：从 Chaum（1981）至 Zcash（2016）至 Tornado Cash（2019），再至今日的隐私池。",
    en_pioneer: "Chaum · Hal Finney · Zooko · Eli Ben-Sasson · Roman Storm",
    zh_pioneer: "乔姆 · 哈尔·芬尼 · Zooko · 本-萨松 · 罗曼·斯托姆"
  },
  { id: "B", en: "Scalable decentralized computation", zh: "可扩展的去中心化计算",
    en_thesis: "L1 chains can't host the world. ZK rollups, validity proofs and zkVMs let an L2 process millions of transactions and post a single proof. The bandwidth of civilization compresses through a polynomial.",
    zh_thesis: "L1 链承载不了世界。ZK 汇总、有效性证明与 zkVM 让 L2 处理百万级交易，仅提交一份证明。文明的带宽通过一个多项式被压缩。",
    en_pioneer: "Vitalik Buterin · StarkWare · Matter Labs · RISC Zero · Succinct",
    zh_pioneer: "Vitalik · StarkWare · Matter Labs · RISC Zero · Succinct"
  },
  { id: "C", en: "Trustless internet infrastructure", zh: "无信任的互联网基础设施",
    en_thesis: "DNS, BGP, certificates, identity providers — every layer of the current internet has a trusted root. ZK proposes that every layer be made verifiable: zk-DNS, zk-TLS, zk-email. The internet stops asking you to trust someone.",
    zh_thesis: "DNS、BGP、证书、身份提供者——现今互联网每一层都有可信根。ZK 主张每层都可验证：zk-DNS、zk-TLS、zk-email。互联网不再要求你去信任某人。",
    en_pioneer: "zk-email · Plume · TLSNotary · DECO",
    zh_pioneer: "zk-email · Plume · TLSNotary · DECO"
  },
  { id: "D", en: "Digital sovereignty", zh: "数字主权",
    en_thesis: "Self-custody of keys is the new self-custody of arms. Hardware wallets, social recovery, sovereign rollups. The smallest unit of a free person is a seed phrase only they can recompute.",
    zh_thesis: "自我托管密钥即新的自我持有武器。硬件钱包、社交恢复、主权汇总。自由之人的最小单位，是仅其本人可重算的助记词。",
    en_pioneer: "Cypherpunk manifesto · Trezor · Ledger · ENS · Lens",
    zh_pioneer: "密码朋克宣言 · Trezor · Ledger · ENS · Lens"
  },
  { id: "E", en: "Mathematics replacing institutions", zh: "数学取代机构",
    en_thesis: "Banks, registries, courts and notaries are replaced by short programs whose outputs are proofs. The clearing-house becomes a smart contract. The notary becomes a circuit. The judge becomes a verifier.",
    zh_thesis: "银行、登记处、法院、公证由短程序替代，其输出即证明。清算所成为智能合约，公证人成为电路，法官成为验证者。",
    en_pioneer: "Szabo's smart contracts · MakerDAO · Compound · Uniswap",
    zh_pioneer: "萨博的智能合约 · MakerDAO · Compound · Uniswap"
  },
  { id: "F", en: "Programmable truth", zh: "可编程真理",
    en_thesis: "Truth becomes a public good with a market. Every claim — including AI outputs — ships with a proof of how it was produced. Verifiable inference, attestation, oracles, ZK-ML.",
    zh_thesis: "真理成为带市场的公共品。任何主张——包括 AI 输出——都附带一份关于其生成方式的证明。可验证推理、属性证明、预言机、ZK-ML。",
    en_pioneer: "Modulus Labs · Giza · EZKL · Ora",
    zh_pioneer: "Modulus Labs · Giza · EZKL · Ora"
  },
  { id: "G", en: "Civilization-scale coordination", zh: "文明级协调",
    en_thesis: "A polity is a graph of cryptographically verified relationships, not a contiguous territory. Reputation, attestation, voting power and credentials become portable. The nation-state becomes one provider among many.",
    zh_thesis: "政体是一张密码学验证关系的图，而非连续的领土。声誉、属性证明、投票权与凭证皆可携带。民族国家成为众多供应商之一。",
    en_pioneer: "Network state thesis · Proof of Humanity · Worldcoin · DAOs",
    zh_pioneer: "网络国家论 · Proof of Humanity · Worldcoin · DAO"
  }
];

// ===== Cypherpunk culture cards =====
window.CULTURE = [
  { en: "Code is law", zh: "代码即法",
    en_desc: "First articulated by Lessig (1999) as a warning, embraced by Ethereum (2014) as a creed. Smart contracts execute as written; \"intent\" is whatever the bytecode does. Immutability is a feature.",
    zh_desc: "莱西格（1999）首言，作警告；以太坊（2014）拥之为信条。智能合约按字面执行；'意图'即字节码所为。不可变性是特性。" },
  { en: "Don't trust, verify", zh: "勿信，验",
    en_desc: "The bumper sticker of Bitcoin culture. Run your own node; check your own signatures; build your own proofs. Trust starts as a design failure to be eliminated.",
    zh_desc: "比特币文化的车贴标语。自运节点、自验签名、自构证明。信任被视为待消除的设计失败。" },
  { en: "Open source or it didn't happen", zh: "不开源即等于没有",
    en_desc: "From Linux to Bitcoin to every L1 worth using. Verifiability begins at the source code. Closed-source crypto is a contradiction in terms.",
    zh_desc: "从 Linux 到比特币，再到一切值得使用的 L1。可验证始于源代码。闭源密码学是自相矛盾。" },
  { en: "Anon by default", zh: "匿名作默认",
    en_desc: "Pseudonyms (Satoshi, gakonst, samczsun, 0xfoobar) are the norm. Reputation is measured in commits, proofs, and audits — not in faces or résumés.",
    zh_desc: "化名（中本聪、gakonst、samczsun、0xfoobar）是常态。声誉由提交、证明与审计衡量——而非脸或履历。" },
  { en: "Memes as protocols", zh: "迷因作为协议",
    en_desc: "\"WAGMI\" / \"NGMI\" / \"gm\" / \"ser\" / \"frens\". A vocabulary too small for serious institutions and too useful for builders to stop using. Memes route attention faster than press releases.",
    zh_desc: "'WAGMI' / 'NGMI' / 'gm' / 'ser' / 'frens'。对正式机构而言词汇过小，对建造者而言效用过大。迷因比新闻稿更快地路由注意力。" },
  { en: "Forks over schism", zh: "分叉胜于分裂",
    en_desc: "When a religion disagrees, it schisms forever. When a protocol disagrees, it forks — and both versions run. The Bitcoin/BCH/BSV trifurcation is the cultural template.",
    zh_desc: "宗教不合则永久分裂；协议不合则分叉——两版同时运行。比特币 / BCH / BSV 的三分是其文化范式。" }
];

// ===== Future scenarios =====
window.FUTURES = [
  { en: "Cryptographic personhood", zh: "密码学人格",
    en_desc: "Proof-of-humanity (iris hash, biometric ZK, social-graph attestation) replaces the passport as the foundation of digital identity. Sybil-resistance becomes a public utility.",
    zh_desc: "唯一人类证明（虹膜哈希、生物特征 ZK、社交图证明）取代护照，成为数字身份的根基。抗女巫成为公共事业。" },
  { en: "Verifiable AI inference", zh: "可验证 AI 推理",
    en_desc: "Every LLM output ships with a proof: this token sequence was produced by model M with weights hash H on input I, with no post-hoc edit. ZK-ML and verifiable inference end the \"trust the API\" era.",
    zh_desc: "每条 LLM 输出附带证明：此 token 序列由权重哈希为 H 的模型 M、在输入 I 上生成，且无任何事后修改。ZK-ML 与可验证推理终结'信任 API'的时代。" },
  { en: "Network states", zh: "网络国家",
    en_desc: "Cloud-first nations whose membership, voting and treasuries are anchored on-chain. Citizenship becomes a proof; territory follows from it (or doesn't, in the limit case).",
    zh_desc: "云优先的国族，其成员资格、投票与国库皆锚定链上。公民身份成为一个证明；领土次之（极端情形下甚至无之）。" },
  { en: "Programmable jurisdictions", zh: "可编程辖区",
    en_desc: "Smart contracts that execute legal rules — taxes, inheritance, corporate governance — and present a proof to the relevant state. \"Code is law\" without rhetoric.",
    zh_desc: "执行法律规则的智能合约——税务、继承、公司治理——并向相关国家出示证明。无须口号的'代码即法'。" },
  { en: "Agent-to-agent markets", zh: "代理之间的市场",
    en_desc: "AI agents transacting at machine speed need cryptographic receipts, not Stripe. Recursive proofs let two strangers' agents settle without their owners present, on rails neither owner can rug-pull.",
    zh_desc: "以机器速度交易的 AI 代理需要密码学回执，而非 Stripe。递归证明使两位陌生人的代理在双方主人皆缺席、且任一方都无法 Rug 的轨道上完成清算。" },
  { en: "Civilizational ledger", zh: "文明账本",
    en_desc: "One recursive proof per epoch summarising the planet's verifiable computation. A meta-system that even non-cryptographic civilizations can audit.",
    zh_desc: "每一纪元一份递归证明，概括行星的可验证计算。是一种连非密码学文明也能审计的元系统。" }
];

// ===== Risks =====
window.RISKS = [
  { en: "Proving monopoly", zh: "证明垄断",
    en_desc: "Generating a billion-gate proof needs GPU clusters that few can afford. Decentralised proof networks risk re-centralising at the prover layer." ,
    zh_desc: "生成十亿门级证明需要少数人才能负担的 GPU 集群。去中心化证明网络可能在证明者层重新集中。"},
  { en: "Surveillance paradox", zh: "监视悖论",
    en_desc: "\"Selective disclosure\" sounds liberating; in practice, governments may mandate proofs of so many properties that ZK becomes the perfect compliance system." ,
    zh_desc: "'选择性披露'听来解放；实务上，政府可能要求证明的属性如此之多，以致 ZK 成为完美的合规系统。"},
  { en: "Cryptographic opacity", zh: "密码学不透明",
    en_desc: "The proof is verifiable; what it proves is encoded in a circuit almost no one reads. The audit set for civilization-grade systems may be ~50 people." ,
    zh_desc: "证明可被验证；其所证明的内容编码于电路中，几乎无人通读。文明级系统的审计圈，或仅约 50 人。"},
  { en: "Governance capture", zh: "治理俘获",
    en_desc: "Token-weighted DAO governance recapitulates plutocracy. \"Trustless\" code requires maintainers, who become a new priesthood." ,
    zh_desc: "代币加权 DAO 治理重演金权政治。'无信任'代码需要维护者，他们成为新的祭司团。"},
  { en: "Quantum break", zh: "量子破解",
    en_desc: "BLS/BN curves are not post-quantum. Hash-based systems (STARKs, Plonky2) are. A premature win for non-PQ systems would be a long-tail civilizational risk." ,
    zh_desc: "BLS/BN 曲线非抗量子。基于哈希的系统（STARK、Plonky2）则抗量子。非抗量子系统过早胜出，将构成长尾级文明风险。"},
  { en: "Social-layer drift", zh: "社会层漂移",
    en_desc: "The math is sound. The communities, foundations and exchanges that surround it can capture, rugpull, or simply disappear. The math doesn't save you from the people." ,
    zh_desc: "数学无误。围绕它的社区、基金会与交易所，仍可俘获、Rug、或干脆消失。数学救不了你免于他人。"}
];

// ===== Consensus systems =====
window.CONSENSUS = [
  { en: "Bitcoin · Nakamoto PoW", zh: "比特币 · 中本聪 PoW",
    en_basis: "Energy → block proposal", zh_basis: "能量换出块权",
    en_finality: "Probabilistic, ~1 hour", zh_finality: "概率性，~1 小时",
    en_zk: "—", zh_zk: "—" },
  { en: "Ethereum PoS", zh: "以太坊 PoS",
    en_basis: "Stake + slashing", zh_basis: "质押与惩罚",
    en_finality: "Deterministic, ~13 min", zh_finality: "确定性，~13 分钟",
    en_zk: "ZK-EVM, validity rollups", zh_zk: "ZK-EVM、有效性汇总" },
  { en: "Optimistic Rollup", zh: "乐观汇总",
    en_basis: "Fault proofs, 7-day delay", zh_basis: "欺诈证明，七日延期",
    en_finality: "Effective: 7 days", zh_finality: "有效性确认：7 日",
    en_zk: "Indirect — via challenge", zh_zk: "间接——通过挑战机制" },
  { en: "Validity (ZK) Rollup", zh: "有效性（ZK）汇总",
    en_basis: "Succinct proof per batch", zh_basis: "每批一份简洁证明",
    en_finality: "L1 inclusion", zh_finality: "L1 入块",
    en_zk: "Native — every state delta proven", zh_zk: "原生——每个状态变更都被证明" },
  { en: "Proof aggregation networks", zh: "证明聚合网络",
    en_basis: "Recursive proof markets", zh_basis: "递归证明市场",
    en_finality: "L1, single π", zh_finality: "L1，单一 π",
    en_zk: "Civilization-scale — Psy, =nil;, Aligned", zh_zk: "文明级 —— Psy、=nil;、Aligned" }
];
