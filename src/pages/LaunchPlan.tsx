import React, { useEffect, useRef, useState } from "react";

/**
 * AI Website Builder — Professional drag-and-drop website builder with AI assistance
 * - Advanced block library with modern components
 * - AI-powered content generation and suggestions
 * - Professional UI with smooth animations
 * - Real-time preview and editing
 * - Export to multiple formats (HTML, React, JSON)
 * - Theme customization and branding options
 * - Responsive design preview
 */

/* ---------- types & helpers ---------- */

type BlockType = "hero" | "features" | "testimonials" | "pricing" | "cta" | "image" | "text" | "stats" | "team" | "contact";

type Theme = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  muted: string;
};

type Block = {
  id: string;
  type: BlockType;
  data: any;
  style?: {
    background?: string;
    paddingY?: number;
    borderRadius?: number;
    headingSize?: number;
    bodySize?: number;
    lineHeight?: number;
    fontFamily?: string;
    fontWeight?: number;
    color?: string;
    textAlign?: "left" | "center" | "right";
    imgHeight?: number;
    imgFit?: "cover" | "contain";
    maxWidth?: string;
    margin?: string;
  };
};

type ExportFormat = "json" | "html";

const DEFAULT_THEME: Theme = {
  primary: "#3b82f6",
  secondary: "#1e40af",
  accent: "#f59e0b",
  background: "#ffffff",
  text: "#111827",
  muted: "#6b7280"
};

const SAMPLE_IMAGE = "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80";

function uid(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

const starter = (brand = "AI Website Builder", theme: Theme = DEFAULT_THEME) => [
  {
    id: "hero-1",
    type: "hero",
    data: {
      headline: `Build Stunning Websites with ${brand}`,
      subheading: "Transform your ideas into beautiful, responsive websites in minutes",
      copy: "Our AI-powered builder helps you create professional websites with drag-and-drop simplicity. No coding required.",
      primary: "Start Building",
      secondary: "Watch Demo",
      image: SAMPLE_IMAGE,
      badges: ["AI-Powered", "No Code", "Mobile Ready"]
    },
    style: { paddingY: 80, borderRadius: 0, headingSize: 48, bodySize: 18, lineHeight: 1.6, fontFamily: "Inter, system-ui", fontWeight: 800, color: theme.text, textAlign: "center", imgHeight: 400, imgFit: "cover", maxWidth: "1200px", margin: "0 auto" },
  },
  {
    id: "features-1",
    type: "features",
    data: {
      title: "Powerful Features",
      subtitle: "Everything you need to create amazing websites",
      items: [
        { icon: "🚀", title: "Lightning Fast", desc: "Build and deploy websites in minutes, not hours" },
        { icon: "🎨", title: "Beautiful Templates", desc: "Professional designs that impress your visitors" },
        { icon: "📱", title: "Mobile Responsive", desc: "Perfect on every device, automatically" },
        { icon: "🤖", title: "AI Assistant", desc: "Smart suggestions and content generation" },
        { icon: "🔧", title: "Customizable", desc: "Full control over design and functionality" },
        { icon: "📊", title: "Analytics Ready", desc: "Track performance and optimize results" }
      ]
    },
    style: { paddingY: 60, borderRadius: 0, headingSize: 36, bodySize: 16, lineHeight: 1.5, fontFamily: "Inter, system-ui", fontWeight: 700, color: theme.text, textAlign: "center", maxWidth: "1200px", margin: "0 auto" },
  },
  {
    id: "stats-1",
    type: "stats",
    data: {
      title: "Trusted by Thousands",
      stats: [
        { number: "10K+", label: "Websites Built" },
        { number: "99.9%", label: "Uptime" },
        { number: "4.9★", label: "User Rating" },
        { number: "24/7", label: "Support" }
      ]
    },
    style: { paddingY: 60, borderRadius: 0, headingSize: 32, bodySize: 14, lineHeight: 1.4, fontFamily: "Inter, system-ui", fontWeight: 700, color: theme.text, textAlign: "center", background: "#f8fafc", maxWidth: "1200px", margin: "0 auto" },
  },
  {
    id: "testimonials-1",
    type: "testimonials",
    data: {
      title: "What Our Users Say",
      testimonials: [
        { name: "Sarah Johnson", role: "CEO, TechStart", content: "This builder transformed how we create websites. Saved us months of development time.", avatar: "👩‍💼" },
        { name: "Mike Chen", role: "Designer", content: "The AI suggestions are incredibly helpful. It's like having a design partner.", avatar: "👨‍🎨" },
        { name: "Emily Davis", role: "Marketing Manager", content: "Finally, a tool that understands what modern businesses need.", avatar: "👩‍💼" }
      ]
    },
    style: { paddingY: 60, borderRadius: 0, headingSize: 32, bodySize: 16, lineHeight: 1.5, fontFamily: "Inter, system-ui", fontWeight: 700, color: theme.text, textAlign: "center", maxWidth: "1200px", margin: "0 auto" },
  },
  {
    id: "cta-1",
    type: "cta",
    data: { title: `Ready to Build Your Dream Website?`, desc: "Join thousands of creators who are already building amazing websites with AI.", button: "Start Free Trial", secondary: "Schedule Demo" },
    style: { paddingY: 80, borderRadius: 0, headingSize: 40, bodySize: 18, lineHeight: 1.5, fontFamily: "Inter, system-ui", fontWeight: 800, color: "#ffffff", textAlign: "center", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", maxWidth: "800px", margin: "0 auto" },
  },
];

export default function AIWebsiteBuilder() {
  // Core state
  const [brand, setBrand] = useState(() => {
    try { return localStorage.getItem("ai_builder_brand") || "AI Website Builder"; } catch { return "AI Website Builder"; }
  });
  
  const [theme, setTheme] = useState<Theme>(() => {
    try { 
      const saved = localStorage.getItem("ai_builder_theme");
      return saved ? JSON.parse(saved) : DEFAULT_THEME;
    } catch { return DEFAULT_THEME; }
  });

  const [blocks, setBlocks] = useState(() => {
    try {
      const s = localStorage.getItem("ai_builder_blocks");
      if (s) return JSON.parse(s);
    } catch {}
    return starter(brand, theme);
  });
  
  const [exportFormat, setExportFormat] = useState<ExportFormat>("json");
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isInspectorOpen, setIsInspectorOpen] = useState(false);

  useEffect(() => { try { localStorage.setItem("ai_builder_blocks", JSON.stringify(blocks)); } catch {} }, [blocks]);
  useEffect(() => { try { localStorage.setItem("ai_builder_brand", brand); } catch {} }, [brand]);
  useEffect(() => { try { localStorage.setItem("ai_builder_theme", JSON.stringify(theme)); } catch {} }, [theme]);

  // selection & history
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const undoStack = useRef<Block[][]>([]);
  const redoStack = useRef<Block[][]>([]);

  const snapshotPush = (next: Block[]) => {
    try { undoStack.current.push(JSON.parse(JSON.stringify(blocks))); } catch { undoStack.current.push(blocks.slice()); }
    if (undoStack.current.length > 80) undoStack.current.shift();
    redoStack.current = [];
    setBlocks(next);
  };

  const undo = () => {
    const prev = undoStack.current.pop();
    if (!prev) return;
    redoStack.current.push(JSON.parse(JSON.stringify(blocks)));
    setBlocks(prev);
    setSelectedId(null);
  };
  const redo = () => {
    const nx = redoStack.current.pop();
    if (!nx) return;
    undoStack.current.push(JSON.parse(JSON.stringify(blocks)));
    setBlocks(nx);
    setSelectedId(null);
  };

  // block operations
  // Enhanced block creation with AI suggestions
  const addBlock = (type: BlockType, index?: number, aiGenerated = false) => {
    const newB: Block = {
      id: uid(type),
      type,
      data:
        type === "hero"
          ? { 
              headline: aiGenerated ? `Welcome to ${brand}` : `New ${brand} Hero`, 
              subheading: "Transform your digital presence",
              copy: "Create something amazing with our AI-powered builder", 
              primary: "Get Started", 
              secondary: "Learn More", 
              image: SAMPLE_IMAGE,
              badges: aiGenerated ? ["AI Generated", "Professional"] : ["Custom"]
            }
          : type === "features"
          ? { 
              title: aiGenerated ? "Key Features" : "Features", 
              subtitle: "What makes us special",
              items: [
                { icon: "✨", title: "Smart Design", desc: "AI-powered layout optimization" },
                { icon: "🚀", title: "Fast Performance", desc: "Lightning-fast loading speeds" },
                { icon: "📱", title: "Mobile First", desc: "Perfect on all devices" }
              ] 
            }
          : type === "testimonials"
          ? { 
              title: "Customer Stories", 
              testimonials: [
                { name: "Alex Johnson", role: "CEO", content: "Amazing platform that transformed our business.", avatar: "👤" },
                { name: "Sarah Smith", role: "Designer", content: "Intuitive and powerful. Highly recommended!", avatar: "👩" }
              ] 
            }
          : type === "pricing"
          ? { 
              title: "Simple Pricing", 
              plans: [
                { name: "Starter", price: "$9/mo", features: ["5 Pages", "Basic Templates", "Email Support"] },
                { name: "Pro", price: "$29/mo", features: ["Unlimited Pages", "Premium Templates", "Priority Support", "AI Assistant"] },
                { name: "Enterprise", price: "Custom", features: ["Everything", "Custom Development", "Dedicated Support"] }
              ] 
            }
          : type === "stats"
          ? { 
              title: "By the Numbers", 
              stats: [
                { number: "1000+", label: "Happy Customers" },
                { number: "99.9%", label: "Uptime" },
                { number: "4.9★", label: "Rating" },
                { number: "24/7", label: "Support" }
              ] 
            }
          : type === "team"
          ? { 
              title: "Meet Our Team", 
              members: [
                { name: "John Doe", role: "CEO", bio: "Visionary leader with 15+ years experience", avatar: "👨‍💼" },
                { name: "Jane Smith", role: "CTO", bio: "Tech expert driving innovation", avatar: "👩‍💻" },
                { name: "Mike Johnson", role: "Designer", bio: "Creative mind behind our beautiful designs", avatar: "🎨" }
              ] 
            }
          : type === "contact"
          ? { 
              title: "Get In Touch", 
              email: "hello@example.com", 
              phone: "+1 (555) 123-4567", 
              address: "123 Business St, City, State 12345" 
            }
          : type === "image"
          ? { src: SAMPLE_IMAGE, caption: "Professional image", alt: "Image description" }
          : type === "text"
          ? { text: "Editable text content. Click to edit and make it your own.", title: "Content Section" }
          : { text: "New content block" },
      style: { 
        paddingY: type === "hero" ? 80 : type === "cta" ? 80 : 60, 
        borderRadius: 0, 
        headingSize: type === "hero" ? 48 : 36, 
        bodySize: 18, 
        lineHeight: 1.6, 
        fontFamily: "Inter, system-ui", 
        fontWeight: 700, 
        color: theme.text, 
        textAlign: "center", 
        maxWidth: "1200px", 
        margin: "0 auto",
        background: type === "stats" ? "#f8fafc" : undefined
      },
    };
    const next = [...blocks];
    if (index === undefined) next.push(newB); else next.splice(index, 0, newB);
    snapshotPush(next);
    setSelectedId(newB.id);
  };

  const updateBlock = (id: string, patch: any) => {
    const next = blocks.map((b: Block) => (b.id === id ? { ...b, data: { ...b.data, ...patch } } : b));
    snapshotPush(next);
  };

  const patchStyle = (id: string, patch: any) => {
    const next = blocks.map((b: Block) => (b.id === id ? { ...b, style: { ...b.style, ...patch } } : b));
    snapshotPush(next);
  };

  const duplicateBlock = (id: string) => {
    const next = [...blocks];
    const i = next.findIndex((b: Block) => b.id === id);
    if (i === -1) return;
    const copy = JSON.parse(JSON.stringify(next[i]));
    copy.id = uid(copy.type);
    next.splice(i + 1, 0, copy);
    snapshotPush(next);
    setSelectedId(copy.id);
  };

  const removeBlock = (id: string) => {
    snapshotPush(blocks.filter((b: Block) => b.id !== id));
    setSelectedId(null);
  };

  const moveBlock = (id: string, dir: "up" | "down") => {
    const idx = blocks.findIndex((b: Block) => b.id === id);
    if (idx === -1) return;
    const arr = [...blocks];
    const [it] = arr.splice(idx, 1);
    const newIdx = dir === "up" ? Math.max(0, idx - 1) : Math.min(arr.length, idx + 1);
    arr.splice(newIdx, 0, it);
    snapshotPush(arr);
    setSelectedId(id);
  };

  // export / import
  // Enhanced export functionality
  const exportWebsite = () => {
    if (exportFormat === "json") {
      const payload = JSON.stringify({ brand, theme, blocks }, null, 2);
      navigator.clipboard?.writeText(payload).then(() => alert("Website JSON copied to clipboard!"), () => alert("Copy failed"));
    } else if (exportFormat === "html") {
      const html = generateHTML(blocks, theme);
      navigator.clipboard?.writeText(html).then(() => alert("HTML code copied to clipboard!"), () => alert("Copy failed"));
    }
  };

  const generateHTML = (blocks: Block[], theme: Theme): string => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${brand}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', system-ui, -apple-system, sans-serif; line-height: 1.6; color: ${theme.text}; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .section { padding: 60px 0; }
    .text-center { text-align: center; }
    .btn { padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block; margin: 8px; }
    .btn-primary { background: ${theme.primary}; color: white; }
    .btn-secondary { background: transparent; color: ${theme.primary}; border: 2px solid ${theme.primary}; }
  </style>
</head>
<body>
  ${blocks.map(block => generateBlockHTML(block)).join('\n')}
</body>
</html>`;
  };

  const generateBlockHTML = (block: Block): string => {
    switch (block.type) {
      case "hero":
        return `<section class="section text-center" style="${block.style ? `padding: ${block.style.paddingY || 80}px 0;` : ''}">
          <div class="container">
            <h1 style="font-size: ${block.style?.headingSize || 48}px;">${block.data.headline}</h1>
            <p style="font-size: ${block.style?.bodySize || 18}px; margin: 20px 0;">${block.data.copy}</p>
            <div>
              <a href="#" class="btn btn-primary">${block.data.primary}</a>
              <a href="#" class="btn btn-secondary">${block.data.secondary}</a>
            </div>
          </div>
        </section>`;
      default:
        return `<section class="section"><div class="container"><p>${block.type} block</p></div></section>`;
    }
  };

  const importWebsite = () => {
    const txt = prompt("Paste website JSON here");
    if (!txt) return;
    try {
      const parsed = JSON.parse(txt);
      if (Array.isArray(parsed.blocks)) {
        snapshotPush(parsed.blocks);
        if (parsed.brand) setBrand(parsed.brand);
        if (parsed.theme) setTheme(parsed.theme);
        alert("Website imported successfully!");
      } else alert("Invalid format");
    } catch {
      alert("Invalid JSON");
    }
  };

  // drag reorder
  const draggingId = useRef<string | null>(null);
  const onDragStart = (e: React.DragEvent, id: string) => { draggingId.current = id; try { e.dataTransfer.setData("text/plain", id); } catch {} };
  const onDrop = (e: React.DragEvent, overId?: string) => {
    e.preventDefault();
    const id = draggingId.current || e.dataTransfer.getData("text/plain");
    if (!id) return;
    const from = blocks.findIndex((b: Block) => b.id === id);
    const to = overId ? blocks.findIndex((b: Block) => b.id === overId) : blocks.length - 1;
    if (from === -1 || to === -1) return;
    const arr = [...blocks];
    const [mv] = arr.splice(from, 1);
    arr.splice(to + (from < to ? 0 : 0), 0, mv);
    snapshotPush(arr);
    draggingId.current = null;
  };

  // Chatbot: local parser (Lovable AI)
  const [messages, setMessages] = useState(() => {
    try {
      const s = localStorage.getItem("lovable_chat");
      if (s) return JSON.parse(s);
    } catch {}
    return [{ id: uid("m"), role: "assistant", text: "Hi — I'm Lovable, your friendly app builder. Try: \"add hero\", \"add features about analytics and security\", \"set brand to MyBrand\", \"make landing for MyBrand\".", time: new Date().toLocaleTimeString() }];
  });
  useEffect(() => { try { localStorage.setItem("lovable_chat", JSON.stringify(messages)); } catch {} }, [messages]);
  const pushMsg = (role: string, text: string) => setMessages((m: any[]) => [...m, { id: uid("m"), role, text, time: new Date().toLocaleTimeString() }]);

  const processChat = async (text: string) => {
    if (!text || !text.trim()) return;
    pushMsg("user", text);
    pushMsg("assistant", "Thinking... ✨");

    const lc = text.toLowerCase();

    // brand
    const mBrand = text.match(/set brand to\s+(.+)/i);
    if (mBrand) {
      const name = mBrand[1].trim();
      setBrand(name);
      snapshotPush(starter(name) as Block[]);
      pushMsg("assistant", `Set brand to "${name}" and reset a starter layout.`);
      return;
    }

    // make landing for <name>
    const mMake = text.match(/make (?:a )?landing (?:for )?(.+)/i);
    if (mMake) {
      const name = mMake[1].trim();
      setBrand(name);
      snapshotPush(starter(name) as Block[]);
      pushMsg("assistant", `Made a starter landing for "${name}".`);
      return;
    }

    // add blocks: "add features about analytics and security"
    const mAdd = text.match(/add (hero|features|feature|image|cta|text)(?: about (.+))?/i);
    if (mAdd) {
      let t = mAdd[1];
      if (t === "feature") t = "features";
      const about = mAdd[2];
      if (t === "features" && about) {
        const parts = about.split(/,|and/).map((s: string) => s.trim()).filter(Boolean);
        const block = { id: uid("features"), type: "features", data: { items: parts.map((p: string) => ({ icon: "✨", title: p.charAt(0).toUpperCase() + p.slice(1), desc: `Learn about ${p}` })) }, style: { paddingY: 36 } };
        snapshotPush([...blocks, block] as Block[]);
        pushMsg("assistant", `Added features: ${parts.join(", ")}.`);
        return;
      }
      addBlock(t as BlockType);
      pushMsg("assistant", `Added a ${t} block.`);
      return;
    }

    // set headline
    const mHead = text.match(/set headline to\s+(.+)/i);
    if (mHead) {
      const val = mHead[1].trim();
      const hero = blocks.slice().reverse().find((b: Block) => b.type === "hero") || blocks[0];
      if (hero) {
        updateBlock(hero.id, { headline: val });
        pushMsg("assistant", `Set headline to: "${val}".`);
      } else pushMsg("assistant", "Couldn't find a hero block to update.");
      return;
    }

    // export / import / undo / redo
    if (/export/i.test(text)) { exportWebsite(); pushMsg("assistant", "Exported website to clipboard."); return; }
    if (/import/i.test(text)) { importWebsite(); pushMsg("assistant", "Import attempted (check prompt)."); return; }
    if (/undo/i.test(text)) { undo(); pushMsg("assistant", "Undid last change."); return; }
    if (/redo/i.test(text)) { redo(); pushMsg("assistant", "Redo applied."); return; }

    // fallback guidance
    pushMsg("assistant", `Sorry, I didn't understand that. Try: "add features about analytics and security", "set headline to Welcome", "make landing for Acme".`);
  };

  // quick keyboard handlers
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") { if (e.shiftKey) redo(); else undo(); }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "y") redo();
      if ((e.key === "Delete" || e.key === "Backspace") && selectedId) removeBlock(selectedId);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedId, blocks]);

  // Enhanced block renderers for professional website builder
  const HeroBlock = ({ b, selected }: { b: Block; selected: boolean }) => {
    const s = b.style || {};
    return (
      <section
        className={`ai-block ai-hero ${selected ? "ai-selected" : ""}`}
        style={{ 
          background: s.background || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: (s.paddingY ?? 80) + "px", 
          textAlign: s.textAlign || "center",
          color: s.color || "#ffffff",
          position: "relative",
          overflow: "hidden"
        }}
        onClick={() => setSelectedId(b.id)}
        draggable
        onDragStart={(e) => onDragStart(e, b.id)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e, b.id)}
      >
        <div style={{ maxWidth: s.maxWidth || "1200px", margin: s.margin || "0 auto", position: "relative", zIndex: 1 }}>
          {b.data.badges && (
            <div style={{ marginBottom: 24, display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
              {b.data.badges.map((badge: string, i: number) => (
                <span key={i} style={{ 
                  background: "rgba(255,255,255,0.2)", 
                  padding: "4px 12px", 
                  borderRadius: "20px", 
                  fontSize: "12px", 
                  fontWeight: 600 
                }}>
                  {badge}
                </span>
              ))}
            </div>
          )}
          <h1 
            contentEditable={selected} 
            suppressContentEditableWarning 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedId(b.id);
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = '2px solid #3b82f6';
              e.currentTarget.style.outlineOffset = '2px';
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline = 'none';
              e.currentTarget.style.outlineOffset = '0';
              updateBlock(b.id, { headline: e.currentTarget.textContent });
            }} 
            className="ai-hero-heading ai-editable-text"
            style={{ 
              fontSize: (s.headingSize ?? 48) + "px", 
              lineHeight: 1.2, 
              fontFamily: s.fontFamily, 
              fontWeight: s.fontWeight || 800,
              marginBottom: 24,
              cursor: selected ? 'text' : 'pointer',
              transition: 'outline 0.2s ease'
            }}
          >
            {b.data.headline}
          </h1>
          {b.data.subheading && (
            <h3 
              contentEditable={selected} 
              suppressContentEditableWarning 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedId(b.id);
              }}
              onFocus={(e) => {
                e.currentTarget.style.outline = '2px solid #3b82f6';
                e.currentTarget.style.outlineOffset = '2px';
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = 'none';
                e.currentTarget.style.outlineOffset = '0';
                updateBlock(b.id, { subheading: e.currentTarget.textContent });
              }} 
              className="ai-editable-text"
              style={{ 
                fontSize: "24px", 
                lineHeight: 1.4, 
                fontFamily: s.fontFamily,
                fontWeight: 600,
                marginBottom: 16,
                opacity: 0.9,
                cursor: selected ? 'text' : 'pointer',
                transition: 'outline 0.2s ease'
              }}
            >
              {b.data.subheading}
            </h3>
          )}
          <p 
            contentEditable={selected} 
            suppressContentEditableWarning 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedId(b.id);
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = '2px solid #3b82f6';
              e.currentTarget.style.outlineOffset = '2px';
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline = 'none';
              e.currentTarget.style.outlineOffset = '0';
              updateBlock(b.id, { copy: e.currentTarget.textContent });
            }} 
            className="ai-editable-text"
            style={{ 
              fontSize: (s.bodySize ?? 18) + "px", 
              lineHeight: s.lineHeight ?? 1.6, 
              fontFamily: s.fontFamily,
              marginBottom: 32,
              maxWidth: "600px",
              margin: "0 auto 32px",
              cursor: selected ? 'text' : 'pointer',
              transition: 'outline 0.2s ease'
            }}
          >
            {b.data.copy}
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="ai-btn ai-btn-primary" style={{ background: "#ffffff", color: theme.primary, border: "none" }}>
              {b.data.primary}
            </button>
            <button className="ai-btn ai-btn-secondary" style={{ background: "transparent", color: "#ffffff", border: "2px solid #ffffff" }}>
              {b.data.secondary}
            </button>
          </div>
        </div>
        {b.data.image && (
          <div style={{ 
            position: "absolute", 
            top: 0, 
            right: 0, 
            width: "50%", 
            height: "100%", 
            opacity: 0.1,
            backgroundImage: `url(${b.data.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }} />
        )}
      </section>
    );
  };

  const FeaturesBlock = ({ b, selected }: { b: Block; selected: boolean }) => {
    const s = b.style || {};
    return (
      <section
        className={`ai-block ai-features ${selected ? "ai-selected" : ""}`}
        style={{ 
          padding: (s.paddingY ?? 60) + "px", 
          background: s.background || "#ffffff",
          textAlign: s.textAlign || "center"
        }}
        onClick={() => setSelectedId(b.id)}
        draggable
        onDragStart={(e) => onDragStart(e, b.id)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e, b.id)}
      >
        <div style={{ maxWidth: s.maxWidth || "1200px", margin: s.margin || "0 auto" }}>
          <h2 
            contentEditable={selected} 
            suppressContentEditableWarning 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedId(b.id);
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = '2px solid #3b82f6';
              e.currentTarget.style.outlineOffset = '2px';
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline = 'none';
              e.currentTarget.style.outlineOffset = '0';
              updateBlock(b.id, { title: e.currentTarget.textContent });
            }} 
            className="ai-editable-text"
            style={{ 
              fontSize: (s.headingSize ?? 36) + "px", 
              lineHeight: 1.2, 
              fontFamily: s.fontFamily, 
              fontWeight: s.fontWeight || 700,
              marginBottom: 16,
              color: s.color || theme.text,
              cursor: selected ? 'text' : 'pointer',
              transition: 'outline 0.2s ease'
            }}
          >
            {b.data.title}
          </h2>
          {b.data.subtitle && (
            <p 
              contentEditable={selected} 
              suppressContentEditableWarning 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedId(b.id);
              }}
              onFocus={(e) => {
                e.currentTarget.style.outline = '2px solid #3b82f6';
                e.currentTarget.style.outlineOffset = '2px';
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = 'none';
                e.currentTarget.style.outlineOffset = '0';
                updateBlock(b.id, { subtitle: e.currentTarget.textContent });
              }} 
              className="ai-editable-text"
              style={{ 
                fontSize: (s.bodySize ?? 18) + "px", 
                lineHeight: 1.6, 
                fontFamily: s.fontFamily,
                marginBottom: 48,
                color: theme.muted,
                maxWidth: "600px",
                margin: "0 auto 48px",
                cursor: selected ? 'text' : 'pointer',
                transition: 'outline 0.2s ease'
              }}
            >
              {b.data.subtitle}
            </p>
          )}
          <div className="ai-features-grid" style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
            gap: 24 
          }}>
            {b.data.items.map((it: any, i: number) => (
              <div key={i} className="ai-feature-card" style={{
                padding: 24,
                borderRadius: 12,
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                textAlign: "left",
                transition: "transform 0.2s, box-shadow 0.2s"
              }}>
                <div style={{ 
                  fontSize: 28, 
                  marginBottom: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "#ffffff"
                }}>
                  {it.icon}
                </div>
                <h4 
                  contentEditable={selected} 
                  suppressContentEditableWarning 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedId(b.id);
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.outline = '2px solid #3b82f6';
                    e.currentTarget.style.outlineOffset = '2px';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.outline = 'none';
                    e.currentTarget.style.outlineOffset = '0';
                    const v = e.currentTarget.textContent || "";
                    const copy = [...b.data.items]; 
                    copy[i] = { ...copy[i], title: v }; 
                    updateBlock(b.id, { items: copy });
                  }}
                  className="ai-editable-text"
                  style={{ 
                    fontSize: 20, 
                    fontWeight: 700, 
                    marginBottom: 12,
                    color: theme.text,
                    cursor: selected ? 'text' : 'pointer',
                    transition: 'outline 0.2s ease'
                  }}
                >
                  {it.title}
                </h4>
                <p 
                  contentEditable={selected} 
                  suppressContentEditableWarning 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedId(b.id);
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.outline = '2px solid #3b82f6';
                    e.currentTarget.style.outlineOffset = '2px';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.outline = 'none';
                    e.currentTarget.style.outlineOffset = '0';
                    const v = e.currentTarget.textContent || "";
                    const copy = [...b.data.items]; 
                    copy[i] = { ...copy[i], desc: v }; 
                    updateBlock(b.id, { items: copy });
                  }}
                  className="ai-editable-text"
                  style={{ 
                    fontSize: 16, 
                    lineHeight: 1.6,
                    color: theme.muted,
                    cursor: selected ? 'text' : 'pointer',
                    transition: 'outline 0.2s ease'
                  }}
                >
                  {it.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Additional block renderers for professional website builder
  const TestimonialsBlock = ({ b, selected }: { b: Block; selected: boolean }) => {
    const s = b.style || {};
    return (
      <section
        className={`ai-block ai-testimonials ${selected ? "ai-selected" : ""}`}
        style={{ 
          padding: (s.paddingY ?? 60) + "px", 
          background: s.background || "#f8fafc",
          textAlign: s.textAlign || "center"
        }}
        onClick={() => setSelectedId(b.id)}
        draggable
        onDragStart={(e) => onDragStart(e, b.id)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e, b.id)}
      >
        <div style={{ maxWidth: s.maxWidth || "1200px", margin: s.margin || "0 auto" }}>
          <h2 
            contentEditable={selected} 
            suppressContentEditableWarning 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedId(b.id);
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = '2px solid #3b82f6';
              e.currentTarget.style.outlineOffset = '2px';
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline = 'none';
              e.currentTarget.style.outlineOffset = '0';
              updateBlock(b.id, { title: e.currentTarget.textContent });
            }} 
            className="ai-editable-text"
            style={{ 
              fontSize: (s.headingSize ?? 32) + "px", 
              fontFamily: s.fontFamily, 
              fontWeight: s.fontWeight || 700,
              marginBottom: 48,
              color: s.color || theme.text,
              cursor: selected ? 'text' : 'pointer',
              transition: 'outline 0.2s ease'
            }}
          >
            {b.data.title}
          </h2>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
            gap: 24 
          }}>
            {b.data.testimonials.map((testimonial: any, i: number) => (
              <div key={i} style={{
                padding: 24,
                borderRadius: 12,
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                textAlign: "left"
              }}>
                <div style={{ fontSize: 24, marginBottom: 16 }}>{testimonial.avatar}</div>
                <p style={{ 
                  fontSize: 16, 
                  lineHeight: 1.6,
                  marginBottom: 16,
                  fontStyle: "italic",
                  color: theme.muted
                }}>
                  "{testimonial.content}"
                </p>
                <div>
                  <div style={{ fontWeight: 700, color: theme.text }}>{testimonial.name}</div>
                  <div style={{ fontSize: 14, color: theme.muted }}>{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const PricingBlock = ({ b, selected }: { b: Block; selected: boolean }) => {
    const s = b.style || {};
    return (
      <section
        className={`ai-block ai-pricing ${selected ? "ai-selected" : ""}`}
        style={{ 
          padding: (s.paddingY ?? 60) + "px", 
          background: s.background || "#ffffff",
          textAlign: s.textAlign || "center"
        }}
        onClick={() => setSelectedId(b.id)}
        draggable
        onDragStart={(e) => onDragStart(e, b.id)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e, b.id)}
      >
        <div style={{ maxWidth: s.maxWidth || "1200px", margin: s.margin || "0 auto" }}>
          <h2 
            contentEditable={selected} 
            suppressContentEditableWarning 
            onBlur={(e) => updateBlock(b.id, { title: e.currentTarget.textContent })} 
            style={{ 
              fontSize: (s.headingSize ?? 36) + "px", 
              fontFamily: s.fontFamily, 
              fontWeight: s.fontWeight || 700,
              marginBottom: 48,
              color: s.color || theme.text
            }}
          >
            {b.data.title}
          </h2>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", 
            gap: 24 
          }}>
            {b.data.plans.map((plan: any, i: number) => (
              <div key={i} style={{
                padding: 32,
                borderRadius: 12,
                background: i === 1 ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" : "#ffffff",
                border: "1px solid #e2e8f0",
                textAlign: "center",
                color: i === 1 ? "#ffffff" : theme.text
              }}>
                <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>{plan.name}</h3>
                <div className="price" style={{ fontSize: 48, fontWeight: 800, marginBottom: 24 }}>{plan.price}</div>
                <ul style={{ listStyle: "none", padding: 0, marginBottom: 32 }}>
                  {plan.features.map((feature: string, j: number) => (
                    <li key={j} style={{ marginBottom: 12 }}>✓ {feature}</li>
                  ))}
                </ul>
                <button className="ai-btn ai-btn-primary" style={{
                  background: i === 1 ? "#ffffff" : theme.primary,
                  color: i === 1 ? theme.primary : "#ffffff",
                  border: "none",
                  width: "100%"
                }}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const StatsBlock = ({ b, selected }: { b: Block; selected: boolean }) => {
    const s = b.style || {};
    return (
      <section
        className={`ai-block ai-stats ${selected ? "ai-selected" : ""}`}
        style={{ 
          padding: (s.paddingY ?? 60) + "px", 
          background: s.background || "#f8fafc",
          textAlign: s.textAlign || "center"
        }}
        onClick={() => setSelectedId(b.id)}
        draggable
        onDragStart={(e) => onDragStart(e, b.id)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e, b.id)}
      >
        <div style={{ maxWidth: s.maxWidth || "1200px", margin: s.margin || "0 auto" }}>
          <h2 
            contentEditable={selected} 
            suppressContentEditableWarning 
            onBlur={(e) => updateBlock(b.id, { title: e.currentTarget.textContent })} 
            style={{ 
              fontSize: (s.headingSize ?? 32) + "px", 
              fontFamily: s.fontFamily, 
              fontWeight: s.fontWeight || 700,
              marginBottom: 48,
              color: s.color || theme.text
            }}
          >
            {b.data.title}
          </h2>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", 
            gap: 24 
          }}>
            {b.data.stats.map((stat: any, i: number) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div className="number" style={{ 
                  fontSize: 48, 
                  fontWeight: 800, 
                  color: theme.primary,
                  marginBottom: 8 
                }}>
                  {stat.number}
                </div>
                <div className="label" style={{ fontSize: 16, color: theme.muted }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const TeamBlock = ({ b, selected }: { b: Block; selected: boolean }) => {
    const s = b.style || {};
    return (
      <section
        className={`ai-block ai-team ${selected ? "ai-selected" : ""}`}
        style={{ 
          padding: (s.paddingY ?? 60) + "px", 
          background: s.background || "#ffffff",
          textAlign: s.textAlign || "center"
        }}
        onClick={() => setSelectedId(b.id)}
        draggable
        onDragStart={(e) => onDragStart(e, b.id)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e, b.id)}
      >
        <div style={{ maxWidth: s.maxWidth || "1200px", margin: s.margin || "0 auto" }}>
          <h2 
            contentEditable={selected} 
            suppressContentEditableWarning 
            onBlur={(e) => updateBlock(b.id, { title: e.currentTarget.textContent })} 
            style={{ 
              fontSize: (s.headingSize ?? 36) + "px", 
              fontFamily: s.fontFamily, 
              fontWeight: s.fontWeight || 700,
              marginBottom: 48,
              color: s.color || theme.text
            }}
          >
            {b.data.title}
          </h2>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", 
            gap: 24 
          }}>
            {b.data.members.map((member: any, i: number) => (
              <div key={i} style={{
                padding: 24,
                borderRadius: 12,
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                textAlign: "center"
              }}>
                <div style={{ 
                  fontSize: 48, 
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "#ffffff",
                  margin: "0 auto 16px"
                }}>
                  {member.avatar}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: theme.text }}>
                  {member.name}
                </h3>
                <div style={{ fontSize: 14, color: theme.muted, marginBottom: 16 }}>{member.role}</div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: theme.muted }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const ContactBlock = ({ b, selected }: { b: Block; selected: boolean }) => {
    const s = b.style || {};
    return (
      <section
        className={`ai-block ai-contact ${selected ? "ai-selected" : ""}`}
        style={{ 
          padding: (s.paddingY ?? 60) + "px", 
          background: s.background || "#ffffff",
          textAlign: s.textAlign || "center"
        }}
        onClick={() => setSelectedId(b.id)}
        draggable
        onDragStart={(e) => onDragStart(e, b.id)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e, b.id)}
      >
        <div style={{ maxWidth: s.maxWidth || "600px", margin: s.margin || "0 auto" }}>
          <h2 
            contentEditable={selected} 
            suppressContentEditableWarning 
            onBlur={(e) => updateBlock(b.id, { title: e.currentTarget.textContent })} 
            style={{ 
              fontSize: (s.headingSize ?? 36) + "px", 
              fontFamily: s.fontFamily, 
              fontWeight: s.fontWeight || 700,
              marginBottom: 48,
              color: s.color || theme.text
            }}
          >
            {b.data.title}
          </h2>
          <div style={{ display: "grid", gap: 24, textAlign: "left" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ fontSize: 24 }}>📧</div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Email</div>
                <div style={{ color: theme.muted }}>{b.data.email}</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ fontSize: 24 }}>📞</div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Phone</div>
                <div style={{ color: theme.muted }}>{b.data.phone}</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ fontSize: 24 }}>📍</div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Address</div>
                <div style={{ color: theme.muted }}>{b.data.address}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const CTABlock = ({ b, selected }: { b: Block; selected: boolean }) => {
    const s = b.style || {};
    return (
      <section
        className={`ai-block ai-cta ${selected ? "ai-selected" : ""}`}
        style={{ 
          background: s.background || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: (s.paddingY ?? 80) + "px", 
          textAlign: s.textAlign || "center",
          color: s.color || "#ffffff"
        }}
        onClick={() => setSelectedId(b.id)}
        draggable
        onDragStart={(e) => onDragStart(e, b.id)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e, b.id)}
      >
        <div style={{ maxWidth: s.maxWidth || "800px", margin: s.margin || "0 auto" }}>
          <h2 
            contentEditable={selected} 
            suppressContentEditableWarning 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedId(b.id);
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = '2px solid #ffffff';
              e.currentTarget.style.outlineOffset = '2px';
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline = 'none';
              e.currentTarget.style.outlineOffset = '0';
              updateBlock(b.id, { title: e.currentTarget.textContent });
            }} 
            className="ai-editable-text"
            style={{ 
              fontSize: (s.headingSize ?? 40) + "px", 
              lineHeight: 1.2, 
              fontFamily: s.fontFamily, 
              fontWeight: s.fontWeight || 800,
              marginBottom: 16,
              cursor: selected ? 'text' : 'pointer',
              transition: 'outline 0.2s ease'
            }}
          >
            {b.data.title}
          </h2>
          <p 
            contentEditable={selected} 
            suppressContentEditableWarning 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedId(b.id);
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = '2px solid #ffffff';
              e.currentTarget.style.outlineOffset = '2px';
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline = 'none';
              e.currentTarget.style.outlineOffset = '0';
              updateBlock(b.id, { desc: e.currentTarget.textContent });
            }} 
            className="ai-editable-text"
            style={{ 
              fontSize: (s.bodySize ?? 18) + "px", 
              lineHeight: 1.6, 
              fontFamily: s.fontFamily,
              marginBottom: 32,
              maxWidth: "600px",
              margin: "0 auto 32px",
              cursor: selected ? 'text' : 'pointer',
              transition: 'outline 0.2s ease'
            }}
          >
            {b.data.desc}
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="ai-btn ai-btn-primary" style={{ background: "#ffffff", color: theme.primary, border: "none" }}>
              {b.data.button}
            </button>
            {b.data.secondary && (
              <button className="ai-btn ai-btn-secondary" style={{ background: "transparent", color: "#ffffff", border: "2px solid #ffffff" }}>
                {b.data.secondary}
              </button>
            )}
          </div>
        </div>
      </section>
    );
  };

  const ImageBlock = ({ b, selected }: { b: Block; selected: boolean }) => {
    const s = b.style || {};
    return (
      <section
        className={`ai-block ai-image ${selected ? "ai-selected" : ""}`}
        style={{ 
          padding: (s.paddingY ?? 60) + "px", 
          background: s.background || "#ffffff",
          textAlign: s.textAlign || "center"
        }}
        onClick={() => setSelectedId(b.id)}
        draggable
        onDragStart={(e) => onDragStart(e, b.id)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e, b.id)}
      >
        <div style={{ maxWidth: s.maxWidth || "1200px", margin: s.margin || "0 auto" }}>
          <img 
            src={b.data.src || SAMPLE_IMAGE} 
            alt={b.data.alt || "Image"}
            style={{ 
              width: "100%", 
              height: (s.imgHeight ?? 400) + "px", 
              objectFit: s.imgFit || "cover",
              borderRadius: (s.borderRadius ?? 16) + "px"
            }}
          />
          {b.data.caption && (
            <p 
              contentEditable={selected} 
              suppressContentEditableWarning 
              onBlur={(e) => updateBlock(b.id, { caption: e.currentTarget.textContent })} 
              style={{ 
                fontSize: 16, 
                lineHeight: 1.6,
                marginTop: 16,
                color: theme.muted
              }}
            >
              {b.data.caption}
            </p>
          )}
        </div>
      </section>
    );
  };

  const TextBlock = ({ b, selected }: { b: Block; selected: boolean }) => {
    const s = b.style || {};
    return (
      <section
        className={`ai-block ai-text ${selected ? "ai-selected" : ""}`}
        style={{ 
          padding: (s.paddingY ?? 60) + "px", 
          background: s.background || "#ffffff",
          textAlign: s.textAlign || "left"
        }}
        onClick={() => setSelectedId(b.id)}
        draggable
        onDragStart={(e) => onDragStart(e, b.id)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e, b.id)}
      >
        <div style={{ maxWidth: s.maxWidth || "800px", margin: s.margin || "0 auto" }}>
          {b.data.title && (
            <h2 
              contentEditable={selected} 
              suppressContentEditableWarning 
              onBlur={(e) => updateBlock(b.id, { title: e.currentTarget.textContent })} 
              style={{ 
                fontSize: (s.headingSize ?? 32) + "px", 
                fontFamily: s.fontFamily, 
                fontWeight: s.fontWeight || 700,
                marginBottom: 24,
                color: s.color || theme.text
              }}
            >
              {b.data.title}
            </h2>
          )}
          <div 
            contentEditable={selected} 
            suppressContentEditableWarning 
            onBlur={(e) => updateBlock(b.id, { text: e.currentTarget.textContent })} 
            style={{ 
              fontSize: (s.bodySize ?? 18) + "px", 
              lineHeight: s.lineHeight ?? 1.6, 
              fontFamily: s.fontFamily,
              color: s.color || theme.text
            }}
          >
            {b.data.text}
          </div>
        </div>
      </section>
    );
  };

  // Enhanced render function with all new block types
  const renderBlock = (b: Block) => {
    const selected = selectedId === b.id;
    switch (b.type) {
      case "hero": return <HeroBlock b={b} selected={selected} key={b.id} />;
      case "features": return <FeaturesBlock b={b} selected={selected} key={b.id} />;
      case "testimonials": return <TestimonialsBlock b={b} selected={selected} key={b.id} />;
      case "pricing": return <PricingBlock b={b} selected={selected} key={b.id} />;
      case "stats": return <StatsBlock b={b} selected={selected} key={b.id} />;
      case "team": return <TeamBlock b={b} selected={selected} key={b.id} />;
      case "contact": return <ContactBlock b={b} selected={selected} key={b.id} />;
      case "cta": return <CTABlock b={b} selected={selected} key={b.id} />;
      case "image": return <ImageBlock b={b} selected={selected} key={b.id} />;
      case "text": return <TextBlock b={b} selected={selected} key={b.id} />;
      default: return <div key={b.id}>Unknown block type: {b.type}</div>;
    }
  };

  const selectedBlock = blocks.find((b: Block) => b.id === selectedId) || null;

  return (
    <>
      <style>{`
        :root {
          --bg: #ffffff;
          --muted: #6b7280;
          --accent: #3b82f6;
          --card: #ffffff;
          --shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
          --border: #e2e8f0;
        }
        
        * { box-sizing: border-box; }
        body { 
          margin: 0; 
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          color: #111827;
        }

        /* Professional Builder UI */
        .ai-builder { min-height: 100vh; padding: 20px; }
        .ai-container { 
          max-width: 1600px; 
          margin: 0 auto; 
          display: grid; 
          grid-template-columns: 320px 1fr 360px; 
          gap: 24px; 
          align-items: start;
        }

        /* Enhanced Palette */
        .ai-palette { 
          background: var(--card); 
          border-radius: 20px; 
          padding: 24px; 
          box-shadow: var(--shadow); 
          border: 1px solid var(--border);
          position: sticky;
          top: 20px;
        }
        .ai-palette h3 { 
          margin: 0 0 20px 0; 
          font-size: 20px; 
          font-weight: 700; 
          color: #111827;
        }
        .ai-block-category { margin-bottom: 24px; }
        .ai-category-title { 
          font-size: 12px; 
          font-weight: 600; 
          text-transform: uppercase; 
          letter-spacing: 0.5px;
          color: var(--muted); 
          margin-bottom: 12px; 
        }
        .ai-block-item { 
          display: flex; 
          align-items: center; 
          justify-content: space-between; 
          gap: 12px; 
          padding: 16px; 
          border-radius: 12px; 
          border: 1px solid var(--border);
          cursor: pointer; 
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); 
          transition: all 0.2s ease;
          margin-bottom: 8px;
        }
        .ai-block-item:hover { 
          transform: translateY(-2px); 
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          border-color: var(--accent);
        }
        .ai-block-item .left { display: flex; gap: 12px; align-items: center; }
        .ai-block-icon { 
          width: 48px; 
          height: 48px; 
          border-radius: 12px; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); 
          color: #ffffff; 
          font-weight: 700; 
          font-size: 20px;
        }
        .ai-block-info { flex: 1; }
        .ai-block-title { font-weight: 600; font-size: 14px; color: #111827; margin-bottom: 2px; }
        .ai-block-desc { font-size: 12px; color: var(--muted); }
        .ai-block-action { 
          font-size: 12px; 
          font-weight: 600; 
          color: var(--accent); 
          background: rgba(59, 130, 246, 0.1);
          padding: 4px 8px;
          border-radius: 6px;
        }

        /* Enhanced Canvas */
        .ai-canvas { 
          background: var(--card); 
          border-radius: 20px; 
          padding: 32px; 
          box-shadow: var(--shadow); 
          min-height: 80vh; 
          border: 1px solid var(--border);
          position: relative;
        }
        .ai-canvas-header { 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          margin-bottom: 32px; 
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border);
        }
        .ai-canvas-title { 
          font-size: 24px; 
          font-weight: 700; 
          color: #111827; 
        }
        .ai-canvas-subtitle { 
          font-size: 14px; 
          color: var(--muted); 
          margin-top: 4px; 
        }
        .ai-device-viewer { 
          display: flex; 
          gap: 8px; 
          background: #f8fafc; 
          padding: 4px; 
          border-radius: 8px; 
        }
        .ai-device-btn { 
          padding: 8px 12px; 
          border: none; 
          background: transparent; 
          border-radius: 6px; 
          cursor: pointer; 
          font-size: 12px; 
          font-weight: 500;
          transition: all 0.2s;
        }
        .ai-device-btn.active { 
          background: var(--card); 
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); 
        }
        .ai-canvas-content { 
          display: flex; 
          flex-direction: column; 
          gap: 0; 
        }
        .ai-block { 
          position: relative; 
          transition: all 0.2s ease; 
          cursor: pointer;
        }
        .ai-block:hover { transform: translateY(-1px); }
        .ai-selected { 
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3); 
          border-radius: 16px;
        }
        .ai-block-controls { 
          position: absolute; 
          top: -40px; 
          left: 0; 
          right: 0; 
          display: flex; 
          gap: 8px; 
          padding: 8px; 
          background: var(--card); 
          border-radius: 8px; 
          box-shadow: var(--shadow); 
          z-index: 10;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .ai-block:hover .ai-block-controls,
        .ai-selected .ai-block-controls { opacity: 1; }
        .ai-control-btn { 
          padding: 6px 12px; 
          border: 1px solid var(--border); 
          background: var(--card); 
          border-radius: 6px; 
          cursor: pointer; 
          font-size: 12px; 
          font-weight: 500;
          transition: all 0.2s;
        }
        .ai-control-btn:hover { background: #f8fafc; }
        .ai-control-btn.danger { color: #ef4444; border-color: #fecaca; }
        .ai-control-btn.danger:hover { background: #fef2f2; }

        /* Enhanced Inspector */
        .ai-inspector { 
          display: flex; 
          flex-direction: column; 
          gap: 20px; 
        }
        .ai-panel { 
          background: var(--card); 
          padding: 24px; 
          border-radius: 20px; 
          box-shadow: var(--shadow); 
          border: 1px solid var(--border);
        }
        .ai-panel-header { 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          margin-bottom: 20px; 
        }
        .ai-panel-title { 
          font-size: 18px; 
          font-weight: 700; 
          color: #111827; 
        }
        .ai-panel-subtitle { 
          font-size: 14px; 
          color: var(--muted); 
          margin-top: 4px; 
        }
        .ai-form-group { margin-bottom: 20px; }
        .ai-form-label { 
          display: block; 
          font-size: 12px; 
          font-weight: 600; 
          color: var(--muted); 
          margin-bottom: 8px; 
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .ai-form-input, .ai-form-select, .ai-form-textarea { 
          width: 100%; 
          padding: 12px 16px; 
          border-radius: 8px; 
          border: 1px solid var(--border); 
          font-size: 14px; 
          font-family: inherit;
          transition: all 0.2s;
        }
        .ai-form-input:focus, 
        .ai-form-select:focus, 
        .ai-form-textarea:focus { 
          outline: none; 
          border-color: var(--accent); 
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); 
        }
        .ai-form-textarea { min-height: 100px; resize: vertical; }
        .ai-color-picker { 
          display: flex; 
          gap: 8px; 
          flex-wrap: wrap; 
        }
        .ai-color-option { 
          width: 32px; 
          height: 32px; 
          border-radius: 8px; 
          cursor: pointer; 
          border: 2px solid transparent; 
          transition: all 0.2s;
        }
        .ai-color-option:hover { transform: scale(1.1); }
        .ai-color-option.selected { border-color: #111827; }

        /* Enhanced AI Chat */
        .ai-chat { 
          display: flex; 
          flex-direction: column; 
          height: 400px; 
        }
        .ai-chat-messages { 
          flex: 1; 
          overflow-y: auto; 
          display: flex; 
          flex-direction: column; 
          gap: 12px; 
          padding: 16px; 
          background: #f8fafc; 
          border-radius: 12px; 
          margin-bottom: 16px;
        }
        .ai-message { 
          padding: 12px 16px; 
          border-radius: 12px; 
          max-width: 80%; 
          font-size: 14px;
          line-height: 1.5;
        }
        .ai-message.user { 
          align-self: flex-end; 
          background: var(--accent); 
          color: white; 
        }
        .ai-message.assistant { 
          align-self: flex-start; 
          background: white; 
          color: #111827; 
          border: 1px solid var(--border);
        }
        .ai-message-time { 
          font-size: 11px; 
          opacity: 0.7; 
          margin-top: 6px; 
        }
        .ai-chat-input { 
          display: flex; 
          gap: 8px; 
        }
        .ai-chat-input input { 
          flex: 1; 
        }
        .ai-send-btn { 
          padding: 12px 20px; 
          background: var(--accent); 
          color: white; 
          border: none; 
          border-radius: 8px; 
          cursor: pointer; 
          font-weight: 600;
          transition: all 0.2s;
        }
        .ai-send-btn:hover { background: #1d4ed8; }

        /* Buttons */
        .ai-btn { 
          padding: 12px 20px; 
          border-radius: 8px; 
          border: 1px solid var(--border); 
          cursor: pointer; 
          font-size: 14px; 
          font-weight: 600;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .ai-btn-primary { 
          background: var(--accent); 
          color: white; 
          border-color: var(--accent); 
        }
        .ai-btn-primary:hover { background: #1d4ed8; }
        .ai-btn-secondary { 
          background: transparent; 
          color: var(--accent); 
          border-color: var(--accent); 
        }
        .ai-btn-secondary:hover { 
          background: rgba(59, 130, 246, 0.1); 
        }
        .ai-btn-ghost { 
          background: transparent; 
          border-color: var(--border); 
          color: var(--muted);
        }
        .ai-btn-ghost:hover { 
          background: #f8fafc; 
          color: #111827;
        }

        /* Editable Text Elements */
        .ai-editable-text {
          position: relative;
          border-radius: 4px;
          padding: 2px 4px;
          margin: -2px -4px;
        }
        .ai-editable-text:hover {
          background: rgba(59, 130, 246, 0.05);
        }
        .ai-editable-text:focus {
          background: rgba(59, 130, 246, 0.1);
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        
        /* Responsive Design */
        @media (max-width: 1400px) {
          .ai-container { grid-template-columns: 300px 1fr 340px; gap: 20px; }
          .ai-builder { padding: 16px; }
        }
        @media (max-width: 1200px) {
          .ai-container { grid-template-columns: 280px 1fr 320px; gap: 16px; }
          .ai-builder { padding: 12px; }
        }
        @media (max-width: 1024px) {
          .ai-container { grid-template-columns: 260px 1fr; gap: 16px; }
          .ai-inspector { position: fixed; top: 0; right: -100%; width: 360px; height: 100vh; background: var(--card); z-index: 1000; transition: right 0.3s ease; box-shadow: -4px 0 24px rgba(0, 0, 0, 0.1); }
          .ai-inspector.open { right: 0; }
          .ai-mobile-toggle { display: block; position: fixed; bottom: 20px; right: 20px; width: 56px; height: 56px; background: var(--accent); color: white; border: none; border-radius: 50%; font-size: 20px; cursor: pointer; z-index: 999; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3); }
        }
        @media (max-width: 768px) {
          .ai-container { grid-template-columns: 1fr; gap: 12px; }
          .ai-palette { position: fixed; top: 0; left: -100%; width: 280px; height: 100vh; background: var(--card); z-index: 1000; transition: left 0.3s ease; box-shadow: 4px 0 24px rgba(0, 0, 0, 0.1); overflow-y: auto; }
          .ai-palette.open { left: 0; }
          .ai-canvas { margin-top: 60px; }
          .ai-inspector { width: 100%; right: -100%; }
          .ai-inspector.open { right: 0; }
          .ai-mobile-toggle { bottom: 16px; right: 16px; width: 48px; height: 48px; font-size: 18px; }
          .ai-palette-toggle { display: block; position: fixed; top: 16px; left: 16px; width: 48px; height: 48px; background: var(--card); border: 1px solid var(--border); border-radius: 12px; font-size: 18px; cursor: pointer; z-index: 999; box-shadow: var(--shadow); }
        }
        @media (max-width: 480px) {
          .ai-builder { padding: 8px; }
          .ai-canvas { padding: 20px; min-height: 70vh; }
          .ai-palette { width: 100%; left: -100%; }
          .ai-palette.open { left: 0; }
          .ai-palette-toggle { width: 40px; height: 40px; font-size: 16px; }
          .ai-mobile-toggle { width: 40px; height: 40px; font-size: 16px; bottom: 12px; right: 12px; }
        }

        /* Mobile-specific utilities */
        .ai-mobile-toggle { display: none; }
        .ai-palette-toggle { display: none; }
        .ai-overlay { display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); z-index: 998; }
        .ai-overlay.show { display: block; }

        /* Touch-friendly interactions */
        @media (max-width: 768px) {
          .ai-block-item { padding: 20px; margin-bottom: 12px; }
          .ai-block-icon { width: 56px; height: 56px; font-size: 24px; }
          .ai-control-btn { padding: 12px 16px; font-size: 14px; min-height: 44px; }
          .ai-btn { padding: 16px 24px; font-size: 16px; min-height: 44px; }
          .ai-form-input, .ai-form-select, .ai-form-textarea { padding: 16px; font-size: 16px; min-height: 44px; }
          
          /* Disable hover effects on touch devices */
          .ai-block-item:hover { transform: none; box-shadow: var(--shadow); }
          .ai-block-item:active { transform: scale(0.98); }
          .ai-feature-card:hover { transform: none; }
          .ai-feature-card:active { transform: scale(0.98); }
          .ai-btn:hover { transform: none; }
          .ai-btn:active { transform: scale(0.95); }
          .ai-control-btn:hover { transform: none; }
          .ai-control-btn:active { transform: scale(0.95); }
          
          /* Larger touch targets */
          .ai-block-controls { gap: 12px; }
          .ai-color-option { width: 40px; height: 40px; }
          .ai-device-btn { padding: 12px 16px; min-height: 40px; }
          .ai-chat-messages { gap: 16px; }
          .ai-message { padding: 16px 20px; }
        }

        /* Responsive Block Typography */
        @media (max-width: 768px) {
          .ai-hero-heading { font-size: 32px !important; }
          .ai-hero h3 { font-size: 20px !important; }
          .ai-hero p { font-size: 16px !important; }
          .ai-features h2 { font-size: 28px !important; }
          .ai-features h4 { font-size: 18px !important; }
          .ai-features p { font-size: 14px !important; }
          .ai-testimonials h2 { font-size: 28px !important; }
          .ai-testimonials p { font-size: 14px !important; }
          .ai-pricing h2 { font-size: 28px !important; }
          .ai-pricing h3 { font-size: 20px !important; }
          .ai-pricing .price { font-size: 36px !important; }
          .ai-stats h2 { font-size: 28px !important; }
          .ai-stats .number { font-size: 36px !important; }
          .ai-stats .label { font-size: 14px !important; }
          .ai-team h2 { font-size: 28px !important; }
          .ai-team h3 { font-size: 18px !important; }
          .ai-team p { font-size: 14px !important; }
          .ai-contact h2 { font-size: 28px !important; }
          .ai-cta h2 { font-size: 32px !important; }
          .ai-cta p { font-size: 16px !important; }
          .ai-text h2 { font-size: 28px !important; }
          .ai-text div { font-size: 16px !important; }
        }
        @media (max-width: 480px) {
          .ai-hero-heading { font-size: 28px !important; }
          .ai-hero h3 { font-size: 18px !important; }
          .ai-hero p { font-size: 14px !important; }
          .ai-features h2 { font-size: 24px !important; }
          .ai-features h4 { font-size: 16px !important; }
          .ai-features p { font-size: 13px !important; }
          .ai-testimonials h2 { font-size: 24px !important; }
          .ai-testimonials p { font-size: 13px !important; }
          .ai-pricing h2 { font-size: 24px !important; }
          .ai-pricing h3 { font-size: 18px !important; }
          .ai-pricing .price { font-size: 32px !important; }
          .ai-stats h2 { font-size: 24px !important; }
          .ai-stats .number { font-size: 32px !important; }
          .ai-stats .label { font-size: 13px !important; }
          .ai-team h2 { font-size: 24px !important; }
          .ai-team h3 { font-size: 16px !important; }
          .ai-team p { font-size: 13px !important; }
          .ai-contact h2 { font-size: 24px !important; }
          .ai-cta h2 { font-size: 28px !important; }
          .ai-cta p { font-size: 14px !important; }
          .ai-text h2 { font-size: 24px !important; }
          .ai-text div { font-size: 14px !important; }
        }

        /* Tablet-specific optimizations */
        @media (min-width: 769px) and (max-width: 1024px) {
          .ai-container { grid-template-columns: 240px 1fr 300px; gap: 20px; }
          .ai-palette { padding: 20px; }
          .ai-inspector { padding: 20px; }
          .ai-canvas { padding: 24px; }
          .ai-block-item { padding: 14px; }
          .ai-block-icon { width: 44px; height: 44px; font-size: 18px; }
          .ai-feature-card { padding: 20px; }
          .ai-form-input, .ai-form-select, .ai-form-textarea { padding: 14px; }
          
          /* Tablet typography */
          .ai-canvas-title { font-size: 22px; }
          .ai-panel-title { font-size: 17px; }
          .ai-palette h3 { font-size: 19px; }
          
          /* Optimized grids for tablet */
          .ai-features-grid { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
          .ai-testimonials .ai-grid { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
          .ai-pricing .ai-grid { grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 20px; }
          .ai-stats .ai-grid { grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 20px; }
          .ai-team .ai-grid { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }
        }
        @media (max-width: 768px) {
          .ai-canvas-title { font-size: 20px; }
          .ai-canvas-subtitle { font-size: 12px; }
          .ai-panel-title { font-size: 16px; }
          .ai-panel-subtitle { font-size: 12px; }
          .ai-palette h3 { font-size: 18px; }
          .ai-category-title { font-size: 11px; }
          .ai-block-title { font-size: 13px; }
          .ai-block-desc { font-size: 11px; }
          .ai-block-action { font-size: 11px; }
          .ai-form-label { font-size: 11px; }
        }
        @media (max-width: 480px) {
          .ai-canvas-title { font-size: 18px; }
          .ai-canvas-subtitle { font-size: 11px; }
          .ai-panel-title { font-size: 14px; }
          .ai-panel-subtitle { font-size: 11px; }
          .ai-palette h3 { font-size: 16px; }
          .ai-category-title { font-size: 10px; }
          .ai-block-title { font-size: 12px; }
          .ai-block-desc { font-size: 10px; }
          .ai-block-action { font-size: 10px; }
          .ai-form-label { font-size: 10px; }
        }
        .ai-loading { 
          display: inline-block; 
          width: 16px; 
          height: 16px; 
          border: 2px solid #f3f3f3; 
          border-top: 2px solid var(--accent); 
          border-radius: 50%; 
          animation: spin 1s linear infinite; 
        }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        /* Empty State */
        .ai-empty-state { 
          text-align: center; 
          padding: 60px 20px; 
          color: var(--muted); 
        }
        .ai-empty-state-icon { 
          font-size: 48px; 
          margin-bottom: 16px; 
          opacity: 0.5; 
        }
        .ai-empty-state-title { 
          font-size: 18px; 
          font-weight: 600; 
          margin-bottom: 8px; 
          color: #111827; 
        }
        .ai-empty-state-desc { 
          font-size: 14px; 
          margin-bottom: 24px; 
        }
      `}</style>
      
      <div className="ai-builder">
        {/* Mobile Overlay */}
        <div 
          className={`ai-overlay ${isPaletteOpen || isInspectorOpen ? 'show' : ''}`}
          onClick={() => {
            setIsPaletteOpen(false);
            setIsInspectorOpen(false);
          }}
        />
        
        {/* Mobile Toggle Buttons */}
        <button 
          className="ai-palette-toggle"
          onClick={() => {
            setIsPaletteOpen(!isPaletteOpen);
            setIsInspectorOpen(false);
          }}
        >
          🎨
        </button>
        
        <button 
          className="ai-mobile-toggle"
          onClick={() => {
            setIsInspectorOpen(!isInspectorOpen);
            setIsPaletteOpen(false);
          }}
        >
          ⚙️
        </button>
        
        <div className="ai-container">
          {/* Enhanced Palette */}
          <div className={`ai-palette ${isPaletteOpen ? 'open' : ''}`}>
            <h3>🎨 Block Library</h3>
            
            <div className="ai-block-category">
              <div className="ai-category-title">Essential Blocks</div>
              {["hero", "features", "cta"].map((type) => (
                <div
                  key={type}
                  className="ai-block-item"
                  draggable
                  onDragStart={(e) => { try { e.dataTransfer.setData("component/type", type); } catch {} }}
                  onClick={() => addBlock(type as BlockType)}
                >
                  <div className="left">
                    <div className="ai-block-icon">{type[0].toUpperCase()}</div>
                    <div className="ai-block-info">
                      <div className="ai-block-title">{type.charAt(0).toUpperCase() + type.slice(1)}</div>
                      <div className="ai-block-desc">
                        {type === "hero" && "Landing section with headline and CTA"}
                        {type === "features" && "Showcase key features and benefits"}
                        {type === "cta" && "Call-to-action with buttons"}
                      </div>
                    </div>
                  </div>
                  <div className="ai-block-action">+ Add</div>
                </div>
              ))}
            </div>

            <div className="ai-block-category">
              <div className="ai-category-title">Content Blocks</div>
              {["text", "image", "testimonials", "stats"].map((type) => (
                <div
                  key={type}
                  className="ai-block-item"
                  draggable
                  onDragStart={(e) => { try { e.dataTransfer.setData("component/type", type); } catch {} }}
                  onClick={() => addBlock(type as BlockType)}
                >
                  <div className="left">
                    <div className="ai-block-icon">{type[0].toUpperCase()}</div>
                    <div className="ai-block-info">
                      <div className="ai-block-title">{type.charAt(0).toUpperCase() + type.slice(1)}</div>
                      <div className="ai-block-desc">
                        {type === "text" && "Custom text content"}
                        {type === "image" && "Image with caption"}
                        {type === "testimonials" && "Customer reviews"}
                        {type === "stats" && "Key metrics and numbers"}
                      </div>
                    </div>
                  </div>
                  <div className="ai-block-action">+ Add</div>
                </div>
              ))}
            </div>

            <div className="ai-block-category">
              <div className="ai-category-title">Business Blocks</div>
              {["pricing", "team", "contact"].map((type) => (
                <div
                  key={type}
                  className="ai-block-item"
                  draggable
                  onDragStart={(e) => { try { e.dataTransfer.setData("component/type", type); } catch {} }}
                  onClick={() => addBlock(type as BlockType)}
                >
                  <div className="left">
                    <div className="ai-block-icon">{type[0].toUpperCase()}</div>
                    <div className="ai-block-info">
                      <div className="ai-block-title">{type.charAt(0).toUpperCase() + type.slice(1)}</div>
                      <div className="ai-block-desc">
                        {type === "pricing" && "Pricing plans and tiers"}
                        {type === "team" && "Team member profiles"}
                        {type === "contact" && "Contact information"}
                      </div>
                    </div>
                  </div>
                  <div className="ai-block-action">+ Add</div>
                </div>
              ))}
            </div>

            <div className="ai-form-group">
              <label className="ai-form-label">Brand Name</label>
              <input 
                className="ai-form-input" 
                value={brand} 
                onChange={(e) => setBrand(e.target.value)} 
                onBlur={() => { snapshotPush(starter(brand, theme) as Block[]); }} 
                placeholder="Your Brand"
              />
            </div>

            <div className="ai-form-group">
              <label className="ai-form-label">Export Format</label>
              <select 
                className="ai-form-select" 
                value={exportFormat} 
                onChange={(e) => setExportFormat(e.target.value as ExportFormat)}
              >
                <option value="json">JSON</option>
                <option value="html">HTML</option>
              </select>
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
              <button className="ai-btn ai-btn-primary" onClick={exportWebsite}>
                📤 Export
              </button>
              <button className="ai-btn ai-btn-ghost" onClick={importWebsite}>
                📥 Import
              </button>
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <button className="ai-btn ai-btn-ghost" onClick={undo}>↶ Undo</button>
              <button className="ai-btn ai-btn-ghost" onClick={redo}>↷ Redo</button>
            </div>
          </div>

          {/* Enhanced Canvas */}
          <div className="ai-canvas" onDragOver={(e) => e.preventDefault()} onDrop={(e) => onDrop(e)}>
            <div className="ai-canvas-header">
              <div>
                <div className="ai-canvas-title">Preview — {brand}</div>
                <div className="ai-canvas-subtitle">Live preview • Drag to reorder • Click to edit</div>
              </div>
            </div>

            <div className="ai-canvas-content">
              {blocks.map((b: Block) => (
                <div key={b.id} style={{ position: "relative" }}>
                  {renderBlock(b)}
                  {selectedId === b.id && (
                    <div className="ai-block-controls">
                      <button className="ai-control-btn" onClick={() => duplicateBlock(b.id)}>📋 Duplicate</button>
                      <button className="ai-control-btn" onClick={() => moveBlock(b.id, "up")}>⬆️ Up</button>
                      <button className="ai-control-btn" onClick={() => moveBlock(b.id, "down")}>⬇️ Down</button>
                      <button className="ai-control-btn danger" onClick={() => removeBlock(b.id)}>🗑️ Delete</button>
                    </div>
                  )}
                </div>
              ))}
              {blocks.length === 0 && (
                <div className="ai-empty-state">
                  <div className="ai-empty-state-icon">🚀</div>
                  <div className="ai-empty-state-title">Start Building Your Website</div>
                  <div className="ai-empty-state-desc">Add blocks from the palette or ask the AI assistant to help you get started</div>
                  <button className="ai-btn ai-btn-primary" onClick={() => addBlock("hero", undefined, true)}>
                    ✨ Generate with AI
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Inspector & AI Chat */}
          <div className={`ai-inspector ${isInspectorOpen ? 'open' : ''}`}>
            <div className="ai-panel">
              <div className="ai-panel-header">
                <div>
                  <div className="ai-panel-title">🎨 Inspector</div>
                  <div className="ai-panel-subtitle">
                    {selectedBlock ? `Editing: ${selectedBlock.type}` : "Select a block to edit"}
                  </div>
                </div>
              </div>

              {selectedBlock ? (
                <div>
                  <div className="ai-form-group">
                    <label className="ai-form-label">Block Type</label>
                    <div style={{ 
                      padding: "12px 16px", 
                      background: "#f8fafc", 
                      borderRadius: "8px",
                      fontWeight: 600,
                      color: "#111827"
                    }}>
                      {selectedBlock.type.charAt(0).toUpperCase() + selectedBlock.type.slice(1)}
                    </div>
                  </div>

                  {/* Dynamic form fields based on block type */}
                  {selectedBlock.type === "hero" && (
                    <>
                      <div className="ai-form-group">
                        <label className="ai-form-label">Headline</label>
                        <input 
                          className="ai-form-input" 
                          defaultValue={selectedBlock.data.headline} 
                          onBlur={(e) => updateBlock(selectedBlock.id, { headline: e.target.value })} 
                        />
                      </div>
                      <div className="ai-form-group">
                        <label className="ai-form-label">Subheading</label>
                        <input 
                          className="ai-form-input" 
                          defaultValue={selectedBlock.data.subheading || ""} 
                          onBlur={(e) => updateBlock(selectedBlock.id, { subheading: e.target.value })} 
                        />
                      </div>
                      <div className="ai-form-group">
                        <label className="ai-form-label">Description</label>
                        <textarea 
                          className="ai-form-textarea" 
                          defaultValue={selectedBlock.data.copy} 
                          onBlur={(e) => updateBlock(selectedBlock.id, { copy: e.target.value })} 
                        />
                      </div>
                      <div className="ai-form-group">
                        <label className="ai-form-label">Primary Button</label>
                        <input 
                          className="ai-form-input" 
                          defaultValue={selectedBlock.data.primary} 
                          onBlur={(e) => updateBlock(selectedBlock.id, { primary: e.target.value })} 
                        />
                      </div>
                    </>
                  )}

                  {selectedBlock.type === "features" && (
                    <div className="ai-form-group">
                      <label className="ai-form-label">Features (comma separated)</label>
                      <input 
                        className="ai-form-input" 
                        defaultValue={selectedBlock.data.items.map((it: any) => it.title).join(", ")} 
                        onBlur={(e) => {
                          const list = e.target.value.split(",").map((s: string) => s.trim()).filter(Boolean).map((t: string) => ({ 
                            icon: "✨", 
                            title: t, 
                            desc: `Description for ${t}` 
                          }));
                          updateBlock(selectedBlock.id, { items: list });
                        }} 
                      />
                    </div>
                  )}

                  <div className="ai-form-group">
                    <label className="ai-form-label">Background Color</label>
                    <div className="ai-color-picker">
                      {["#ffffff", "#f8fafc", "#fef3c7", "#dbeafe", "#ede9fe", "#fce7f3"].map((color) => (
                        <div
                          key={color}
                          className={`ai-color-option ${selectedBlock.style?.background === color ? "selected" : ""}`}
                          style={{ background: color }}
                          onClick={() => patchStyle(selectedBlock.id, { background: color })}
                        />
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
                    <button className="ai-btn ai-btn-ghost" onClick={() => duplicateBlock(selectedBlock.id)}>
                      📋 Duplicate
                    </button>
                    <button className="ai-btn ai-btn-ghost danger" onClick={() => removeBlock(selectedBlock.id)}>
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              ) : (
                <div className="ai-empty-state">
                  <div className="ai-empty-state-icon">👆</div>
                  <div className="ai-empty-state-title">No Block Selected</div>
                  <div className="ai-empty-state-desc">Click on any block to start editing its content and style</div>
                </div>
              )}
            </div>

            <div className="ai-panel">
              <div className="ai-panel-header">
                <div>
                  <div className="ai-panel-title">🤖 AI Assistant</div>
                  <div className="ai-panel-subtitle">Type commands to build your website</div>
                </div>
              </div>

              <div className="ai-chat">
                <div className="ai-chat-messages">
                  {messages.map((m: any) => (
                    <div key={m.id} className={`ai-message ${m.role === "user" ? "user" : "assistant"}`}>
                      <div>{m.text}</div>
                      <div className="ai-message-time">{m.time}</div>
                    </div>
                  ))}
                </div>
                <div className="ai-chat-input">
                  <input 
                    id="ai-chat-input" 
                    className="ai-form-input" 
                    placeholder='Try: "add features about AI and design"' 
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                      if (e.key === "Enter") {
                        const v = (e.target as HTMLInputElement).value;
                        (e.target as HTMLInputElement).value = "";
                        processChat(v);
                      }
                    }} 
                  />
                  <button className="ai-send-btn" onClick={() => {
                    const el = document.getElementById("ai-chat-input") as HTMLInputElement;
                    if (!el) return;
                    const v = el.value;
                    el.value = "";
                    processChat(v);
                  }}>
                    Send
                  </button>
                </div>
              </div>

              <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button className="ai-btn ai-btn-ghost" onClick={() => processChat("add features about AI, design, and performance")}>
                  ✨ Add Features
                </button>
                <button className="ai-btn ai-btn-ghost" onClick={() => processChat(`create landing page for ${brand}`)}>
                  🚀 Generate Landing
                </button>
                <button className="ai-btn ai-btn-ghost" onClick={() => processChat("add testimonials and pricing")}>
                  💼 Add Business
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
