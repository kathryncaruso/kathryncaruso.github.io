import React, { useState, useRef, useCallback } from "react";
import {
  Flame,
  FlaskConical,
  Pipette,
  Timer,
  ThermometerSun,
  Eye,
  AlertTriangle,
  CheckCircle2,
  ArrowDown,
  Beaker,
  TestTube2,
  Clock,
  Target,
  ChevronDown,
  ChevronUp,
  Droplets,
  Filter,
  Microscope,
  Download,
  Image,
  FileText,
  Thermometer,
  BarChart3,
  Leaf,
  Scale,
  Layers,
  ClipboardList,
  Tag,
  Sun,
  Wheat,
  Zap,
  Minus,
  HelpCircle,
  XCircle,
} from "lucide-react";

/* ─────────────────────────────────────────────
   EXPORT UTILITIES
   ───────────────────────────────────────────── */

const ASPECT_RATIO = 16 / 9;
const EXPORT_WIDTH = 1920;
const EXPORT_HEIGHT = Math.round(EXPORT_WIDTH / ASPECT_RATIO);

async function exportPNG(element) {
  const { default: html2canvas } = await import("https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/+esm");
  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: null,
    width: element.scrollWidth,
    height: element.scrollHeight,
  });
  const link = document.createElement("a");
  link.download = "carbon-source-growth-assay.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function exportSVG(element) {
  const w = element.scrollWidth;
  const h = element.scrollHeight;
  const styles = Array.from(document.styleSheets)
    .map((sheet) => {
      try {
        return Array.from(sheet.cssRules)
          .map((rule) => rule.cssText)
          .join("\n");
      } catch (e) {
        return "";
      }
    })
    .join("\n");

  const svgString = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs><style type="text/css"><![CDATA[${styles}]]></style></defs>
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">${element.outerHTML}</div>
  </foreignObject>
</svg>`;
  const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "carbon-source-growth-assay.svg";
  link.href = url;
  link.click();
  URL.revokeObjectURL(url);
}

/* ─────────────────────────────────────────────
   EXPORT TOOLBAR
   ───────────────────────────────────────────── */

const ExportToolbar = ({ contentRef, onBack, showQuestions, setShowQuestions }) => {
  const [exporting, setExporting] = useState(false);

  const handlePNG = useCallback(async () => {
    if (!contentRef.current) return;
    setExporting(true);
    try {
      await exportPNG(contentRef.current);
    } catch (e) {
      console.error("PNG export failed:", e);
    }
    setExporting(false);
  }, [contentRef]);

  const handleSVG = useCallback(() => {
    if (!contentRef.current) return;
    exportSVG(contentRef.current);
  }, [contentRef]);

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold shadow-lg transition-all duration-200"
          style={{
            background: "linear-gradient(135deg, #64748b, #475569)",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          ← Protocols
        </button>
      )}
      <button
        onClick={() => setShowQuestions(!showQuestions)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold shadow-lg transition-all duration-200"
        style={{
          background: showQuestions ? "linear-gradient(135deg, #f59e0b, #d97706)" : "linear-gradient(135deg, #94a3b8, #64748b)",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {showQuestions ? <XCircle className="w-4 h-4" /> : <HelpCircle className="w-4 h-4" />}
        {showQuestions ? "Hide Questions" : "Show Questions"}
      </button>
      <button
        onClick={handlePNG}
        disabled={exporting}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold shadow-lg transition-all duration-200"
        style={{
          background: "linear-gradient(135deg, #059669, #10b981)",
          color: "white",
          opacity: exporting ? 0.6 : 1,
          border: "none",
          cursor: exporting ? "wait" : "pointer",
        }}
      >
        <Image className="w-4 h-4" />
        {exporting ? "Exporting…" : "Save PNG"}
      </button>
      <button
        onClick={handleSVG}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold shadow-lg transition-all duration-200"
        style={{
          background: "linear-gradient(135deg, #047857, #065f46)",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        <FileText className="w-4 h-4" />
        Save SVG
      </button>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MEASUREMENT SCHEDULE TIMELINE
   ───────────────────────────────────────────── */

const MeasurementTimeline = () => {
  const timepoints = [
    { day: 0, label: "D0", sub: "1 reading", count: 1, phase: 0 },
    { day: 1, label: "D1", sub: "3 readings", count: 3, phase: 0 },
    { day: 2, label: "D2", sub: "3 readings", count: 3, phase: 0 },
    { day: 4, label: "D4", sub: "1 reading", count: 1, phase: 1 },
    { day: 7, label: "D7", sub: "1 reading", count: 1, phase: 2 },
  ];

  const totalDays = 7;
  const pct = (day) => (day / totalDays) * 100;

  const phaseColors = [
    { bg: "#d1fae5", ring: "#10b981", text: "#065f46" },
    { bg: "#a7f3d0", ring: "#059669", text: "#064e3b" },
    { bg: "#6ee7b7", ring: "#047857", text: "#022c22" },
  ];

  return (
    <div
      className="rounded-2xl overflow-hidden mb-6 relative"
      style={{
        background: "linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 40%, #ecfdf5 70%, #f0fdf4 100%)",
        border: "2px solid #86efac",
        boxShadow: "0 4px 24px rgba(5,150,105,0.08)",
      }}
    >
      {/* Header */}
      <div
        className="px-6 py-4 flex items-center justify-between"
        style={{ background: "linear-gradient(135deg, #047857, #059669)", color: "white" }}
      >
        <div className="flex items-center gap-3">
          <BarChart3 className="w-5 h-5 opacity-90" />
          <h2 className="text-lg font-bold tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            OD<sub>600</sub> Measurement Schedule
          </h2>
        </div>
        <span className="text-sm opacity-80 font-medium">9 Timepoints · 1 Week</span>
      </div>

      {/* Timeline Track */}
      <div className="px-6 pt-5 pb-4">
        <div className="relative" style={{ height: 130 }}>
          {/* Rail */}
          <div
            className="absolute rounded-full"
            style={{
              left: "3%",
              right: "3%",
              top: 48,
              height: 6,
              background: "linear-gradient(90deg, #86efac, #34d399, #10b981)",
              opacity: 0.35,
            }}
          />

          {/* Interval annotations */}
          {timepoints.slice(0, -1).map((tp, i) => {
            const next = timepoints[i + 1];
            const midX = (pct(tp.day) + pct(next.day)) / 2;
            const gap = next.day - tp.day;
            return (
              <div
                key={`gap-${i}`}
                className="absolute text-center"
                style={{ left: `calc(3% + ${midX}% * 0.94)`, top: 70, transform: "translateX(-50%)" }}
              >
                <span className="text-xs text-gray-400 font-medium">+{gap}d</span>
              </div>
            );
          })}

          {/* Reading dots & labels */}
          {timepoints.map((tp, i) => {
            const x = pct(tp.day);
            const c = phaseColors[tp.phase];
            return (
              <div
                key={`r-${i}`}
                className="absolute flex flex-col items-center"
                style={{ left: `calc(3% + ${x}% * 0.94)`, top: 0, transform: "translateX(-50%)", width: 64 }}
              >
                <div
                  className="rounded-lg px-2 py-0.5 text-xs font-bold mb-1"
                  style={{ background: c.bg, color: c.text, border: `1.5px solid ${c.ring}` }}
                >
                  {tp.count > 1 ? `×${tp.count}` : "×1"}
                </div>
                <div style={{ width: 2, height: 8, background: c.ring, opacity: 0.4 }} />
                <div
                  className="rounded-full border-2 shadow-sm"
                  style={{
                    width: tp.count > 1 ? 20 : 16,
                    height: tp.count > 1 ? 20 : 16,
                    background: `radial-gradient(circle at 35% 35%, ${c.ring}, ${c.text})`,
                    borderColor: "white",
                  }}
                />
                <span className="text-xs text-gray-500 mt-1 font-bold">{tp.label}</span>
                <span className="text-gray-400 font-medium text-center" style={{ fontSize: 9, marginTop: 1 }}>
                  {tp.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Intensive early monitoring note */}
      <div className="px-6 pb-2">
        <div className="bg-emerald-50 rounded-lg p-2 border border-emerald-200 text-center">
          <p className="text-xs text-emerald-700 font-medium">Days 1 & 2: 3 timepoints each (M1, M2, M3) to capture early growth kinetics</p>
        </div>
      </div>

      {/* Footer note */}
      <div className="px-6 pb-4 text-center">
        <p className="text-xs text-gray-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          9 timepoints over 7 days · Blank with matching uninoculated medium before each condition
        </p>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   EXPERIMENTAL DESIGN VISUAL
   ───────────────────────────────────────────── */

const ExperimentalDesignGrid = () => {
  const isolates = [
    { name: "GG8", color: "#9333ea", stickerLabel: "Purple" },
    { name: "GG27B", color: "#2563eb", stickerLabel: "Blue" },
    { name: "GNP012", color: "#16a34a", stickerLabel: "Green" },
    { name: "GNP014", color: "#eab308", stickerLabel: "Yellow" },
  ];
  const conditions = [
    { name: "Malate", abbr: "Mal", color: "#f59e0b", bg: "#fef3c7" },
    { name: "Succinate", abbr: "Suc", color: "#8b5cf6", bg: "#ede9fe" },
    { name: "Acetate", abbr: "Ace", color: "#ef4444", bg: "#fee2e2" },
  ];

  return (
    <div
      className="rounded-2xl overflow-hidden mb-6"
      style={{
        background: "linear-gradient(135deg, #f0fdf4, #ecfdf5)",
        border: "2px solid #86efac",
        boxShadow: "0 4px 24px rgba(5,150,105,0.08)",
      }}
    >
      <div
        className="px-6 py-4 flex items-center justify-between"
        style={{ background: "linear-gradient(135deg, #047857, #059669)", color: "white" }}
      >
        <div className="flex items-center gap-3">
          <Layers className="w-5 h-5 opacity-90" />
          <h2 className="text-lg font-bold tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Experimental Design
          </h2>
        </div>
        <span className="text-sm opacity-80 font-medium">4 isolates × 3 conditions × 3 reps + 3 blanks = 39 tubes</span>
      </div>

      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left py-2 px-3 text-gray-600 font-semibold">Isolate</th>
                <th className="text-left py-2 px-3 text-gray-500 font-medium text-xs">Sticker</th>
                {conditions.map((c) => (
                  <th key={c.abbr} className="text-center py-2 px-3">
                    <div className="rounded-lg px-2 py-1 text-xs font-bold" style={{ background: c.bg, color: c.color }}>
                      {c.name}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {isolates.map((iso) => (
                <tr key={iso.name} className="border-t border-emerald-100">
                  <td className="py-2 px-3 font-semibold text-emerald-800">{iso.name}</td>
                  <td className="py-2 px-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full" style={{ background: iso.color }} />
                      <span className="text-xs text-gray-500">{iso.stickerLabel}</span>
                    </div>
                  </td>
                  {conditions.map((c) => (
                    <td key={`${iso.name}-${c.abbr}`} className="text-center py-2 px-3">
                      <div className="flex justify-center gap-1">
                        {[1, 2, 3].map((r) => (
                          <div
                            key={r}
                            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm"
                            style={{ background: iso.color, opacity: 0.7 + r * 0.1 }}
                          >
                            {r}
                          </div>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t-2 border-emerald-200">
                <td className="py-2 px-3 font-semibold text-gray-500 italic">Blank</td>
                <td className="py-2 px-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full" style={{ background: "#f97316" }} />
                    <span className="text-xs text-gray-500">Orange</span>
                  </div>
                </td>
                {conditions.map((c) => (
                  <td key={`blk-${c.abbr}`} className="text-center py-2 px-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mx-auto shadow-sm"
                      style={{ background: "#fff7ed", color: "#f97316", border: "2px dashed #f97316" }}
                    >
                      B
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Carbon matching note */}
        <div className="mt-4 bg-white rounded-lg p-3 border border-emerald-100 text-xs text-gray-600">
          <span className="font-semibold text-emerald-700">Molar carbon-matched:</span> All carbon sources at ~16.67 mmol C/L — Na DL-malate 0.742
          g/L, Na succinate hexahydrate 1.126 g/L, Na acetate 0.684 g/L
        </div>
      </div>
    </div>
  );
};

const QuestionSticker = ({ question, show }) => {
  if (!show) return null;
  return (
    <div
      className="absolute z-10 transition-all duration-300"
      style={{ top: "-12px", right: "-8px", transform: "rotate(3deg)", animation: "stickerAppear 0.4s ease-out" }}
    >
      <div
        className="relative px-3 py-2 text-xs font-medium shadow-lg"
        style={{
          background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
          border: "1px solid #fbbf24",
          borderRadius: "4px",
          color: "#92400e",
          maxWidth: "180px",
          minWidth: "140px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.5)",
          fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
        }}
      >
        <div className="flex items-start gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "#d97706" }} />
          <p style={{ lineHeight: "1.4" }}>{question}</p>
        </div>
      </div>
      <style>{`@keyframes stickerAppear { 0% { opacity: 0; transform: rotate(3deg) scale(0.8) translateY(-10px); } 60% { transform: rotate(3deg) scale(1.05) translateY(0); } 100% { opacity: 1; transform: rotate(3deg) scale(1) translateY(0); } }`}</style>
    </div>
  );
};

/* ─────────────────────────────────────────────
   REUSABLE COMPONENTS
   ───────────────────────────────────────────── */

const StepCard = ({ number, title, icon: Icon, children, color = "emerald", question, showQuestions }) => {
  const colorStyles = {
    emerald: "bg-emerald-50 border-emerald-200 hover:border-emerald-400",
    green: "bg-green-50 border-green-200 hover:border-green-400",
    teal: "bg-teal-50 border-teal-200 hover:border-teal-400",
    lime: "bg-lime-50 border-lime-200 hover:border-lime-400",
    amber: "bg-amber-50 border-amber-200 hover:border-amber-400",
    rose: "bg-rose-50 border-rose-200 hover:border-rose-400",
    violet: "bg-violet-50 border-violet-200 hover:border-violet-400",
    sky: "bg-sky-50 border-sky-200 hover:border-sky-400",
    orange: "bg-orange-50 border-orange-200 hover:border-orange-400",
    indigo: "bg-indigo-50 border-indigo-200 hover:border-indigo-400",
    cyan: "bg-cyan-50 border-cyan-200 hover:border-cyan-400",
    stone: "bg-stone-50 border-stone-200 hover:border-stone-400",
  };
  const iconColors = {
    emerald: "bg-emerald-600",
    green: "bg-green-600",
    teal: "bg-teal-600",
    lime: "bg-lime-600",
    amber: "bg-amber-600",
    rose: "bg-rose-600",
    violet: "bg-violet-600",
    sky: "bg-sky-600",
    orange: "bg-orange-600",
    indigo: "bg-indigo-600",
    cyan: "bg-cyan-600",
    stone: "bg-stone-600",
  };

  return (
    <div className={`relative rounded-xl border-2 p-5 transition-all duration-300 ${colorStyles[color]} shadow-sm hover:shadow-md`}>
      {question && <QuestionSticker question={question} show={showQuestions} />}
      <div className="flex items-start gap-4">
        <div
          className={`flex-shrink-0 w-12 h-12 ${iconColors[color]} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md`}
        >
          {number}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Icon className="w-5 h-5 text-gray-600" />
            <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
          </div>
          <div className="text-gray-600 text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
};

const FlowArrow = () => (
  <div className="flex justify-center py-2">
    <ArrowDown className="w-6 h-6 text-emerald-400" />
  </div>
);

const SectionHeader = ({ title, subtitle, color = "emerald" }) => {
  const bgColors = {
    emerald: "from-emerald-600 to-emerald-700",
    green: "from-green-600 to-green-700",
    teal: "from-teal-600 to-teal-700",
    amber: "from-amber-600 to-amber-700",
    rose: "from-rose-600 to-rose-700",
    lime: "from-lime-600 to-lime-700",
    stone: "from-stone-600 to-stone-700",
  };
  return (
    <div className={`bg-gradient-to-r ${bgColors[color]} rounded-xl p-4 text-white shadow-lg mb-4`}>
      <h2 className="text-xl font-bold">{title}</h2>
      {subtitle && <p className="text-sm opacity-90 mt-1">{subtitle}</p>}
    </div>
  );
};

const InfoBadge = ({ label, value, icon: Icon }) => (
  <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100">
    <Icon className="w-4 h-4 text-gray-500" />
    <span className="text-xs text-gray-500">{label}:</span>
    <span className="text-sm font-medium text-gray-800">{value}</span>
  </div>
);

const ExpandableSection = ({ title, icon: Icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-gray-600" />
          <span className="font-semibold text-gray-800">{title}</span>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {isOpen && <div className="p-5 border-t border-gray-100">{children}</div>}
    </div>
  );
};

/* ─────────────────────────────────────────────
   BENCH INOCULATION CARD (inline)
   ───────────────────────────────────────────── */

const benchIsolates = [
  { name: "GG8", color: "#7c3aed", stickerLabel: "Purple", inoculum: 85, medium: 2915, trueOD: 0.863 },
  { name: "GG27B", color: "#2563eb", stickerLabel: "Blue", inoculum: 455, medium: 2545, trueOD: 0.165 },
  { name: "GNP012", color: "#16a34a", stickerLabel: "Green", inoculum: 65, medium: 2935, trueOD: 1.115 },
  { name: "GNP014", color: "#ca8a04", stickerLabel: "Yellow", inoculum: 80, medium: 2920, trueOD: 0.956 },
];

const benchConditions = [
  { name: "Malate", abbr: "Mal", color: "#b45309", bg: "#fef3c7", reagent: "Na DL-malate", conc: "0.742 g/L" },
  { name: "Succinate", abbr: "Suc", color: "#7c3aed", bg: "#ede9fe", reagent: "Na succinate·6H₂O", conc: "1.126 g/L" },
  { name: "Acetate", abbr: "Ace", color: "#b91c1c", bg: "#fee2e2", reagent: "Na acetate", conc: "0.684 g/L" },
];

const BenchInoculationCard = () => {
  const [highlight, setHighlight] = useState(null);

  return (
    <div
      style={{
        fontFamily: "'DM Mono', 'Courier New', monospace",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #064e3b, #065f46)",
          borderRadius: "14px",
          padding: "16px 22px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          boxShadow: "0 4px 20px rgba(6,78,59,0.25)",
        }}
      >
        <div>
          <div style={{ fontSize: "11px", letterSpacing: "0.15em", opacity: 0.7, marginBottom: "2px" }}>CARBON SOURCE GROWTH ASSAY</div>
          <div style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.01em" }}>Bench Inoculation Reference</div>
        </div>
        <div style={{ textAlign: "right", fontSize: "11px", opacity: 0.75, lineHeight: 1.7 }}>
          <div>
            Target OD: <strong>0.025</strong>
          </div>
          <div>
            Tube vol: <strong>3000 µL</strong>
          </div>
          <div>
            Incubation: <strong>15°C, 150 RPM</strong>
          </div>
        </div>
      </div>

      {/* Inoculum volumes */}
      <div
        style={{
          background: "white",
          borderRadius: "14px",
          border: "2px solid #d1fae5",
          overflow: "hidden",
          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #ecfdf5, #d1fae5)",
            padding: "10px 18px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            borderBottom: "1px solid #d1fae5",
          }}
        >
          <Droplets size={15} color="#059669" />
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#065f46", letterSpacing: "0.08em" }}>INOCULUM VOLUMES PER TUBE</span>
          <span style={{ marginLeft: "auto", fontSize: "11px", color: "#6b7280" }}>Starter OD → inoculum µL + medium µL = 3000 µL</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {benchIsolates.map((iso, i) => (
            <div
              key={iso.name}
              onMouseEnter={() => setHighlight(iso.name)}
              onMouseLeave={() => setHighlight(null)}
              style={{
                padding: "14px 16px",
                borderRight: i < benchIsolates.length - 1 ? "1px solid #f0fdf4" : "none",
                transition: "background 0.15s",
                background: highlight === iso.name ? "#f0fdf4" : "white",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "10px" }}>
                <div
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: iso.color,
                    flexShrink: 0,
                    boxShadow: `0 0 0 2px ${iso.color}33`,
                  }}
                />
                <span style={{ fontWeight: 800, fontSize: "15px", color: "#111827" }}>{iso.name}</span>
                <span style={{ fontSize: "10px", color: "#9ca3af", marginLeft: "auto" }}>{iso.stickerLabel}</span>
              </div>
              <div style={{ fontSize: "10px", color: "#9ca3af", marginBottom: "6px" }}>
                Starter OD: <span style={{ color: "#374151", fontWeight: 600 }}>{iso.trueOD}</span>
              </div>
              <div style={{ marginBottom: "8px" }}>
                <div style={{ height: "10px", borderRadius: "6px", background: "#f3f4f6", overflow: "hidden" }}>
                  <div
                    style={{
                      width: `${(iso.inoculum / 3000) * 100}%`,
                      height: "100%",
                      background: iso.color,
                      borderRadius: "6px 0 0 6px",
                      minWidth: "3px",
                    }}
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "3px", fontSize: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#6b7280" }}>Inoculum</span>
                  <span
                    style={{
                      fontWeight: 800,
                      color: iso.color,
                      background: `${iso.color}15`,
                      borderRadius: "4px",
                      padding: "0 5px",
                    }}
                  >
                    {iso.inoculum} µL
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#6b7280" }}>Medium</span>
                  <span style={{ fontWeight: 600, color: "#374151" }}>{iso.medium} µL</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "2px dashed #e5e7eb",
            padding: "10px 18px",
            display: "flex",
            alignItems: "center",
            gap: "24px",
            background: "#fafafa",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <div style={{ width: "11px", height: "11px", borderRadius: "50%", border: "2px dashed #f97316" }} />
            <span style={{ fontWeight: 700, fontSize: "13px", color: "#6b7280" }}>Blanks (Orange)</span>
          </div>
          <span style={{ fontSize: "12px", color: "#9ca3af" }}>No inoculum —</span>
          <span style={{ fontWeight: 700, fontSize: "13px", color: "#374151" }}>3000 µL medium only</span>
          <span style={{ marginLeft: "auto", fontSize: "11px", color: "#9ca3af" }}>1 per condition</span>
        </div>
      </div>

      {/* Experimental design grid */}
      <div
        style={{
          background: "white",
          borderRadius: "14px",
          border: "2px solid #d1fae5",
          overflow: "hidden",
          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #ecfdf5, #d1fae5)",
            padding: "10px 18px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            borderBottom: "1px solid #d1fae5",
          }}
        >
          <Layers size={15} color="#059669" />
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#065f46", letterSpacing: "0.08em" }}>EXPERIMENTAL DESIGN</span>
          <span style={{ marginLeft: "auto", fontSize: "11px", color: "#6b7280" }}>4 isolates × 3 conditions × 3 reps + 3 blanks = 39 tubes</span>
        </div>
        <div style={{ padding: "12px 18px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "6px 10px", color: "#6b7280", fontWeight: 600, fontSize: "11px" }}>Isolate</th>
                <th style={{ textAlign: "left", padding: "6px 10px", color: "#6b7280", fontWeight: 600, fontSize: "11px" }}>Sticker</th>
                {benchConditions.map((c) => (
                  <th key={c.abbr} style={{ textAlign: "center", padding: "6px 10px" }}>
                    <div
                      style={{
                        borderRadius: "6px",
                        padding: "3px 10px",
                        background: c.bg,
                        color: c.color,
                        fontSize: "11px",
                        fontWeight: 800,
                        display: "inline-block",
                      }}
                    >
                      {c.name}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {benchIsolates.map((iso) => (
                <tr key={iso.name} style={{ borderTop: "1px solid #f0fdf4" }}>
                  <td style={{ padding: "7px 10px", fontWeight: 700, color: "#065f46" }}>{iso.name}</td>
                  <td style={{ padding: "7px 10px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: iso.color }} />
                      <span style={{ fontSize: "11px", color: "#6b7280" }}>{iso.stickerLabel}</span>
                    </div>
                  </td>
                  {benchConditions.map((c) => (
                    <td key={`${iso.name}-${c.abbr}`} style={{ textAlign: "center", padding: "7px 10px" }}>
                      <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
                        {[1, 2, 3].map((r) => (
                          <div
                            key={r}
                            style={{
                              width: "22px",
                              height: "22px",
                              borderRadius: "50%",
                              background: iso.color,
                              opacity: 0.6 + r * 0.13,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "10px",
                              fontWeight: 700,
                              color: "white",
                              boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
                            }}
                          >
                            {r}
                          </div>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
              <tr style={{ borderTop: "2px dashed #e5e7eb" }}>
                <td style={{ padding: "7px 10px", fontWeight: 600, color: "#9ca3af", fontStyle: "italic" }}>Blank</td>
                <td style={{ padding: "7px 10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", border: "2px dashed #f97316" }} />
                    <span style={{ fontSize: "11px", color: "#6b7280" }}>Orange</span>
                  </div>
                </td>
                {benchConditions.map((c) => (
                  <td key={`blk-${c.abbr}`} style={{ textAlign: "center", padding: "7px 10px" }}>
                    <div
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        border: "2px dashed #f97316",
                        background: "#fff7ed",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "10px",
                        fontWeight: 800,
                        color: "#f97316",
                        margin: "0 auto",
                      }}
                    >
                      B
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Carbon source footer */}
      <div
        style={{
          background: "white",
          borderRadius: "14px",
          border: "2px solid #d1fae5",
          overflow: "hidden",
          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #ecfdf5, #d1fae5)",
            padding: "10px 18px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            borderBottom: "1px solid #d1fae5",
          }}
        >
          <FlaskConical size={15} color="#059669" />
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#065f46", letterSpacing: "0.08em" }}>
            CARBON SOURCE MEDIA (molar carbon-matched to 0.5 g/L glucose = 16.67 mmol C/L)
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {benchConditions.map((c, i) => (
            <div
              key={c.abbr}
              style={{
                padding: "12px 16px",
                borderRight: i < benchConditions.length - 1 ? "1px solid #f0fdf4" : "none",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  borderRadius: "6px",
                  padding: "2px 8px",
                  background: c.bg,
                  color: c.color,
                  fontSize: "11px",
                  fontWeight: 800,
                  marginBottom: "6px",
                }}
              >
                {c.name}
              </div>
              <div style={{ fontSize: "12px", color: "#374151", fontWeight: 600 }}>{c.reagent}</div>
              <div style={{ fontSize: "13px", fontWeight: 800, color: c.color, marginTop: "2px" }}>{c.conc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */

export default function CarbonSourceGrowthAssay({ onBack }) {
  const contentRef = useRef(null);
  const [showQuestions, setShowQuestions] = useState(true);

  return (
    <>
      <ExportToolbar contentRef={contentRef} onBack={onBack} showQuestions={showQuestions} setShowQuestions={setShowQuestions} />

      <div ref={contentRef} className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Byline */}
          <div className="text-center text-sm text-gray-500 mb-6">
            <p className="font-semibold text-gray-700">Carbon Source Growth Assay — Interactive Diagram</p>
            <p>
              Kathryn E. Caruso ·{" "}
              <a href="https://orcid.org/0009-0003-2436-1791" className="text-emerald-700 underline" target="_blank" rel="noopener noreferrer">
                0009-0003-2436-1791
              </a>
            </p>
            <p>Center for Biofilm Engineering, Montana State University</p>
            <p>
              Updated March 2026 ·{" "}
              <a
                href="https://creativecommons.org/licenses/by-sa/4.0/"
                className="text-emerald-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC-BY-SA 4.0
              </a>
            </p>
            <details className="mt-2 inline-block text-left">
              <summary className="cursor-pointer text-emerald-700">How to cite this protocol</summary>
              <p className="mt-1 text-gray-600">
                Caruso, K.E. (2026). <em>Carbon Source Growth Assay — Interactive Diagram</em>. Center for Biofilm Engineering, Montana State
                University. https://kathryncaruso.github.io/methods/carbon-source-growth-assay-diagram/
              </p>
            </details>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Leaf className="w-4 h-4" />
              Growth Assay Protocol
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Carbon Source Growth Assay</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Determining preferred carbon source for cold-adapted ureolytic isolates via OD<sub>600</sub> growth curves
            </p>
          </div>

          {/* Overview badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <InfoBadge label="Isolates" value="GG8, GG27B, GNP012, GNP014" icon={Microscope} />
            <InfoBadge label="Conditions" value="3 carbon sources" icon={Wheat} />
            <InfoBadge label="Replicates" value="3 per treatment" icon={Layers} />
            <InfoBadge label="Duration" value="~7 days at 15°C" icon={ThermometerSun} />
            <InfoBadge label="Total tubes" value="39" icon={TestTube2} />
          </div>

          {/* Isolate Table */}
          <div
            className="rounded-2xl overflow-hidden mb-6"
            style={{
              background: "linear-gradient(135deg, #f0fdf4, #ecfdf5)",
              border: "2px solid #86efac",
              boxShadow: "0 4px 24px rgba(5,150,105,0.08)",
            }}
          >
            <div
              className="px-6 py-4 flex items-center justify-between"
              style={{ background: "linear-gradient(135deg, #047857, #059669)", color: "white" }}
            >
              <div className="flex items-center gap-3">
                <Microscope className="w-5 h-5 opacity-90" />
                <h2 className="text-lg font-bold tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Bacterial Isolates
                </h2>
              </div>
              <span className="text-sm opacity-80 font-medium">Cold-adapted ureolytic bacteria</span>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-emerald-100">
                      <th className="text-left py-2.5 px-3 rounded-tl-lg font-semibold text-emerald-800">Isolate</th>
                      <th className="text-left py-2.5 px-3 font-semibold text-emerald-800">Source</th>
                      <th className="text-left py-2.5 px-3 rounded-tr-lg font-semibold text-emerald-800">Rationale</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        iso: "GG8",
                        source: "Gilkey Glacier",
                        rationale: "Most basic of the Gilkey Glacier isolates (other than GG27B) following transfers",
                      },
                      { iso: "GG27B", source: "Gilkey Glacier", rationale: "Fast grower on glucose media" },
                      { iso: "GNP012", source: "Glacier National Park", rationale: "Has urea transporter" },
                      { iso: "GNP014", source: "Glacier National Park", rationale: "Has urea transporter and turned pink quickly initially" },
                    ].map(({ iso, source, rationale }, i) => (
                      <tr key={iso} className={i % 2 === 0 ? "bg-white" : "bg-emerald-50/50"}>
                        <td className="py-2 px-3 font-semibold text-emerald-800">{iso}</td>
                        <td className="py-2 px-3 text-gray-600">{source}</td>
                        <td className="py-2 px-3 text-gray-600 text-xs">{rationale}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Experimental Design Visual */}
          <ExperimentalDesignGrid />

          {/* ==================== */}
          {/* PART 1: PRE-EXPERIMENT PREPARATION */}
          {/* ==================== */}
          <SectionHeader title="Part 1: Pre-Experiment Preparation" subtitle="Glassware sterilization and equipment prep" color="stone" />

          <div className="space-y-1 mb-8">
            <StepCard number="1A" title="Combust Glassware" icon={Flame} color="orange">
              <div className="space-y-3">
                <p>Dry heat sterilization removes all organic residues from glass culture tubes</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-lg p-3 border border-orange-100 text-center">
                    <p className="text-2xl font-bold text-orange-600">450°C</p>
                    <p className="text-xs text-gray-600">Combustion oven</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-orange-100 text-center">
                    <p className="text-2xl font-bold text-orange-600">5 hours</p>
                    <p className="text-xs text-gray-600">Duration</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-orange-100">
                  <p className="text-xs text-gray-600">
                    <span className="font-semibold text-gray-700">Tubes:</span> 39 minimum + spares (16 × 150 mm DurexTM Borosilicate) • Wrap loosely
                    in aluminum foil
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    <span className="font-semibold text-gray-700">Cool down:</span> Leave in oven until completely cool — do NOT open door while hot
                    (thermal shock can crack glass)
                  </p>
                </div>
                <p className="text-xs text-amber-700 bg-amber-50 rounded px-2 py-1 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  Do NOT combust any plastic components (caps, stickers)
                </p>
              </div>
            </StepCard>

            <FlowArrow />

            <StepCard number="1B" title="Autoclave Closures & Equipment" icon={ThermometerSun} color="stone">
              <div className="space-y-3">
                <p>Autoclave all non-glass items that will contact sterile media or cultures</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-lg p-3 border border-stone-100 text-center">
                    <p className="text-2xl font-bold text-stone-600">121°C / 15 psi</p>
                    <p className="text-xs text-gray-600">Temperature / Pressure</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-stone-100 text-center">
                    <p className="text-2xl font-bold text-stone-600">15–20 min</p>
                    <p className="text-xs text-gray-600">Dry cycle</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-stone-100">
                  <p className="text-xs font-semibold text-gray-700 mb-1">Items to autoclave:</p>
                  <p className="text-xs text-gray-600">Tube caps/closures</p>
                </div>
                <p className="text-xs text-gray-500">Label autoclave tape with date and initials. Allow to dry and cool completely inside.</p>
              </div>
            </StepCard>
          </div>

          {/* ==================== */}
          {/* PART 2: MEDIA PREPARATION */}
          {/* ==================== */}
          <SectionHeader title="Part 2: Media Preparation" subtitle="3 base media — one per carbon source condition" color="emerald" />

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <InfoBadge label="Volume" value="200 mL per condition" icon={Beaker} />
            <InfoBadge label="Base:Urea" value="90:10 ratio" icon={FlaskConical} />
            <InfoBadge label="pH Target" value="6.8 ± 0.2" icon={Droplets} />
            <InfoBadge label="Carbon basis" value="16.67 mmol C/L" icon={Scale} />
          </div>

          {/* ==================== */}
          {/* ORIGINAL MEDIA FORMULATION */}
          {/* ==================== */}
          <div
            className="rounded-2xl overflow-hidden mb-6 relative"
            style={{
              background: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 40%, #ecfdf5 70%, #d1fae5 100%)",
              border: "2px solid #86efac",
              boxShadow: "0 4px 24px rgba(5,150,105,0.08)",
            }}
          >
            {/* Header */}
            <div
              className="px-6 py-4 flex items-center justify-between"
              style={{ background: "linear-gradient(135deg, #047857, #059669)", color: "white" }}
            >
              <div className="flex items-center gap-3">
                <FlaskConical className="w-5 h-5 opacity-90" />
                <h2 className="text-lg font-bold tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Original Media Formulation
                </h2>
              </div>
              <span className="text-sm opacity-80 font-medium">Reference — per liter</span>
            </div>

            <div className="p-6">
              {/* Recipe table */}
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-emerald-100">
                      <th className="text-left py-2.5 px-3 rounded-tl-lg font-semibold text-emerald-800">Component</th>
                      <th className="text-center py-2.5 px-3 font-semibold text-emerald-800">Amount</th>
                      <th className="text-left py-2.5 px-3 rounded-tr-lg font-semibold text-emerald-800">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { comp: "Yeast extract", amt: "0.1 g", note: "Complex N + vitamin source" },
                      { comp: "Glucose", amt: "0.5 g", note: "Primary carbon source (being replaced)" },
                      { comp: "K₂HPO₄", amt: "0.3 g", note: "Potassium phosphate buffer" },
                      { comp: "Urea", amt: "20 g", note: "Dissolved separately, filter sterilized" },
                    ].map(({ comp, amt, note }, i) => (
                      <tr key={i} className="bg-white">
                        <td className="py-2 px-3 font-medium text-gray-700">{comp}</td>
                        <td className="text-center py-2 px-3 text-gray-700 font-mono text-xs">{amt}</td>
                        <td className="py-2 px-3 text-gray-500 text-xs">{note}</td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-emerald-200 bg-emerald-50/50">
                      <td className="py-2 px-3 font-medium text-gray-500 italic" colSpan={3}>
                        <span className="text-xs">↕ pH adjusted to 6.8 ± 0.2 with 1 M HCl or NaOH</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Carbon content breakdown */}
              <div className="bg-white rounded-xl p-4 border border-emerald-200">
                <p className="text-sm font-semibold text-emerald-800 mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Carbon Content Reference (per liter)
                </p>
                <div className="rounded-lg p-3 border border-emerald-100" style={{ background: "linear-gradient(135deg, #ecfdf5, #d1fae5)" }}>
                  <p className="text-xs font-bold text-emerald-700 mb-1">Glucose</p>
                  <p className="text-lg font-bold text-emerald-600">16.67 mmol C/L</p>
                  <div className="text-xs text-gray-500 mt-1 space-y-0.5">
                    <p>C₆H₁₂O₆ • MW 180.16</p>
                    <p>0.5 g → 2.78 mmol × 6 C</p>
                    <p className="font-medium text-emerald-700">This is the target all conditions are matched to</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== */}
          {/* CARBON SOURCE CALCULATIONS */}
          {/* ==================== */}
          <div className="relative mb-6">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 40%, #ecfdf5 70%, #d1fae5 100%)",
                border: "2px solid #86efac",
                boxShadow: "0 4px 24px rgba(5,150,105,0.08)",
              }}
            >
              {/* Header */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ background: "linear-gradient(135deg, #047857, #059669)", color: "white" }}
              >
                <div className="flex items-center gap-3">
                  <Scale className="w-5 h-5 opacity-90" />
                  <h2 className="text-lg font-bold tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Carbon Source Concentrations
                  </h2>
                </div>
                <span className="text-sm opacity-80 font-medium">Sodium salt forms</span>
              </div>

              <div className="p-6">
                {/* Basis statement */}
                <div className="rounded-lg p-3 border border-emerald-200 bg-emerald-50 mb-5">
                  <div className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">
                      Matched on a <span className="font-bold text-emerald-800">molar carbon basis</span> to 0.5 g/L glucose (~16.67 mmol C/L). Using{" "}
                      <span className="font-semibold text-emerald-700">sodium salt forms</span> — biologically equivalent to free acids but more
                      stable and easier to handle.
                    </p>
                  </div>
                </div>

                {/* Comparison table */}
                <div className="overflow-x-auto mb-5">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-emerald-100">
                        <th className="text-left py-2.5 px-3 rounded-tl-lg font-semibold text-emerald-800">Carbon Source</th>
                        <th className="text-center py-2.5 px-3 font-semibold text-emerald-800">Formula</th>
                        <th className="text-center py-2.5 px-3 font-semibold text-emerald-800">MW (g/mol)</th>
                        <th className="text-center py-2.5 px-3 font-semibold text-emerald-800">Carbons</th>
                        <th className="text-center py-2.5 px-3 rounded-tr-lg font-semibold text-emerald-800">Mass for 16.67 mmol C/L</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-emerald-50/50 border-b border-emerald-100">
                        <td className="py-2 px-3 font-medium text-gray-400 italic">Glucose (reference)</td>
                        <td className="text-center py-2 px-3 text-gray-400 font-mono text-xs">C₆H₁₂O₆</td>
                        <td className="text-center py-2 px-3 text-gray-400 font-mono text-xs">180.16</td>
                        <td className="text-center py-2 px-3 text-gray-400 font-mono text-xs">6</td>
                        <td className="text-center py-2 px-3 text-gray-400 text-xs italic">0.500 g/L</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-2 px-3 font-medium text-gray-700">
                          Sodium DL-malate <span className="text-xs text-gray-400 font-normal">(disodium)</span>
                        </td>
                        <td className="text-center py-2 px-3 text-gray-600 font-mono text-xs">C₄H₄Na₂O₅</td>
                        <td className="text-center py-2 px-3 text-gray-600 font-mono text-xs">178.05</td>
                        <td className="text-center py-2 px-3 text-gray-600 font-mono text-xs">4</td>
                        <td className="text-center py-2 px-3 font-bold text-emerald-700 text-xs">0.742 g/L</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-2 px-3 font-medium text-gray-700">
                          Sodium succinate <span className="text-xs text-gray-400 font-normal">(dibasic hexahydrate)</span>
                        </td>
                        <td className="text-center py-2 px-3 text-gray-600 font-mono text-xs">C₄H₄Na₂O₄·6H₂O</td>
                        <td className="text-center py-2 px-3 text-gray-600 font-mono text-xs">270.14</td>
                        <td className="text-center py-2 px-3 text-gray-600 font-mono text-xs">4</td>
                        <td className="text-center py-2 px-3 font-bold text-emerald-700 text-xs">1.126 g/L</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-2 px-3 font-medium text-gray-700">
                          Sodium acetate <span className="text-xs text-gray-400 font-normal">(anhydrous, 99%)</span>
                        </td>
                        <td className="text-center py-2 px-3 text-gray-600 font-mono text-xs">C₂H₃NaO₂</td>
                        <td className="text-center py-2 px-3 text-gray-600 font-mono text-xs">82.03</td>
                        <td className="text-center py-2 px-3 text-gray-600 font-mono text-xs">2</td>
                        <td className="text-center py-2 px-3 font-bold text-emerald-700 text-xs">0.684 g/L</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Calculations */}
                <div className="space-y-3">
                  {/* Glucose reference */}
                  <div className="bg-white rounded-xl p-4 border border-emerald-200">
                    <p className="text-xs font-bold text-emerald-700 mb-2">Reference: Glucose at 0.5 g/L</p>
                    <div className="text-xs text-gray-600 space-y-1 font-mono">
                      <p>0.500 g/L ÷ 180.16 g/mol = 2.776 mmol/L</p>
                      <p>
                        2.776 mmol/L × 6 C/molecule = <span className="font-bold text-emerald-700">16.67 mmol C/L</span>
                      </p>
                    </div>
                  </div>

                  {/* Malate */}
                  <div className="bg-white rounded-xl p-4 border border-emerald-200">
                    <p className="text-xs font-bold text-emerald-700 mb-2">
                      Sodium DL-malate <span className="font-normal text-gray-500">(disodium, MW 178.05 g/mol, 4 C/molecule)</span>
                    </p>
                    <div className="text-xs text-gray-600 space-y-1 font-mono">
                      <p>16.67 mmol C ÷ 4 C/molecule = 4.167 mmol/L</p>
                      <p>
                        4.167 mmol/L × 178.05 g/mol = <span className="font-bold text-emerald-700">0.742 g/L</span>
                      </p>
                    </div>
                    <p className="text-xs text-amber-700 bg-amber-50 rounded px-2 py-1 mt-2 flex items-start gap-1">
                      <AlertTriangle className="w-3 h-3 flex-shrink-0 mt-0.5" />
                      <span>
                        DL-racemic mixture — only L-form is metabolically active (TCA cycle intermediate). Mass calculated on total malate;
                        effectively ~half the carbon may be bioavailable. Note as limitation when interpreting results.
                      </span>
                    </p>
                  </div>

                  {/* Succinate */}
                  <div className="bg-white rounded-xl p-4 border border-emerald-200">
                    <p className="text-xs font-bold text-emerald-700 mb-2">
                      Sodium succinate <span className="font-normal text-gray-500">(dibasic hexahydrate, MW 270.14 g/mol, 4 C/molecule)</span>
                    </p>
                    <div className="text-xs text-gray-600 space-y-1 font-mono">
                      <p>16.67 mmol C ÷ 4 C/molecule = 4.167 mmol/L</p>
                      <p>
                        4.167 mmol/L × 270.14 g/mol = <span className="font-bold text-emerald-700">1.126 g/L</span>
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      Hexahydrate form — a large fraction of the mass is water of crystallization, which is why the required mass is higher relative
                      to other carbon sources.
                    </p>
                  </div>

                  {/* Sodium acetate */}
                  <div className="bg-white rounded-xl p-4 border border-emerald-200">
                    <p className="text-xs font-bold text-emerald-700 mb-2">
                      Sodium acetate <span className="font-normal text-gray-500">(anhydrous, MW 82.03 g/mol, 2 C/molecule)</span>
                    </p>
                    <div className="text-xs text-gray-600 space-y-1 font-mono">
                      <p>16.67 mmol C ÷ 2 C/molecule = 8.333 mmol/L</p>
                      <p>
                        8.333 mmol/L × 82.03 g/mol = <span className="font-bold text-emerald-700">0.684 g/L</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== */}
          {/* MEDIA FORMULATION TABLE */}
          {/* ==================== */}
          <div
            className="rounded-2xl overflow-hidden mb-6"
            style={{
              background: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 40%, #ecfdf5 70%, #d1fae5 100%)",
              border: "2px solid #86efac",
              boxShadow: "0 4px 24px rgba(5,150,105,0.08)",
            }}
          >
            <div
              className="px-6 py-4 flex items-center justify-between"
              style={{ background: "linear-gradient(135deg, #047857, #059669)", color: "white" }}
            >
              <div className="flex items-center gap-3">
                <Beaker className="w-5 h-5 opacity-90" />
                <h2 className="text-lg font-bold tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Base Medium Formulation per Condition
                </h2>
              </div>
              <span className="text-sm opacity-80 font-medium">Per liter basis + 200 mL scale</span>
            </div>

            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-emerald-100">
                      <th className="text-left py-2.5 px-3 rounded-tl-lg font-semibold text-emerald-800">Component</th>
                      <th className="text-center py-2.5 px-3 font-semibold text-emerald-800">Malate (200 mL)</th>
                      <th className="text-center py-2.5 px-3 font-semibold text-emerald-800">Succinate (200 mL)</th>
                      <th className="text-center py-2.5 px-3 rounded-tr-lg font-semibold text-emerald-800">Acetate (200 mL)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Yeast extract", "0.020 g", "0.020 g", "0.020 g"],
                      ["Carbon source", "0.148 g", "0.225 g", "0.137 g"],
                      ["K₂HPO₄", "0.060 g", "0.060 g", "0.060 g"],
                      ["DI water", "to 200 mL", "to 200 mL", "to 200 mL"],
                    ].map(([comp, ...vals], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-emerald-50/50"}>
                        <td className="py-1.5 px-3 font-medium text-gray-700">{comp}</td>
                        {vals.map((v, j) => (
                          <td key={j} className="text-center py-1.5 px-3 text-gray-600 font-mono text-xs">
                            {v}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-1 mb-8">
            <StepCard number="2A" title="Weigh Base Medium Components" icon={Scale} color="emerald">
              <div className="space-y-3">
                <p className="font-medium text-gray-700">Per condition — scaled to 200 mL:</p>
                <p className="text-xs text-gray-500">
                  Follow the base medium preparation steps from the original urea-based growth medium protocol (Sections 1.1–1.5)
                </p>
                <div className="bg-white rounded-lg p-3 border border-emerald-100 text-xs text-gray-600 space-y-1">
                  <p>1. Weigh components for each condition</p>
                  <p>2. Dissolve in ~80% of target Milli-Q water volume (~160 mL)</p>
                </div>
              </div>
            </StepCard>

            <FlowArrow />

            <StepCard number="2B" title="Dissolve & Adjust pH" icon={Droplets} color="teal">
              <div className="space-y-3">
                <p>Dissolve components in ~80% target water volume, then adjust pH individually</p>
                <div className="flex items-center gap-4">
                  <div className="bg-white rounded-lg p-3 border border-teal-100 flex-1 text-center">
                    <p className="text-sm font-medium text-gray-700">Target pH</p>
                    <p className="text-2xl font-bold text-teal-600">6.8 ± 0.2</p>
                  </div>
                  <div className="flex-1 text-xs text-gray-600">
                    <p>Use 1M HCl or 1M NaOH</p>
                    <p className="mt-1">Record amount used for each condition</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">Bring to final volume of 200 mL after pH adjustment</p>
              </div>
            </StepCard>

            <FlowArrow />

            <StepCard number="2C" title="Autoclave Base Media" icon={ThermometerSun} color="emerald">
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-lg p-3 border border-emerald-100 text-center">
                    <p className="text-xl font-bold text-emerald-600">121°C / 15 psi</p>
                    <p className="text-xs text-gray-600">Temperature / Pressure</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-emerald-100 text-center">
                    <p className="text-xl font-bold text-emerald-600">15–20 min</p>
                    <p className="text-xs text-gray-600">Liquid cycle</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">Cool to room temperature before adding urea</p>
              </div>
            </StepCard>

            <FlowArrow />

            <StepCard number="2D" title="Prepare Urea Solution (20% w/v)" icon={FlaskConical} color="green">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-lg p-3 border border-green-100">
                    <p className="text-xs text-gray-500">Concentration</p>
                    <p className="font-semibold text-green-700">20 g urea / 100 mL DI</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-green-100">
                    <p className="text-xs text-gray-500">Storage</p>
                    <p className="font-semibold text-green-700">4°C, use within 1 week</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-100 text-xs text-gray-600">
                  <p>1. Dissolve at room temperature (do NOT heat)</p>
                  <p>
                    2. Filter sterilize through <span className="font-semibold">0.22 μm</span> syringe filter in BSC
                  </p>
                </div>
              </div>
            </StepCard>

            <FlowArrow />

            <StepCard number="2E" title="Combine Base + Urea → Final Medium" icon={Beaker} color="emerald">
              <div className="space-y-3">
                <p>
                  Aseptically combine in biosafety cabinet to achieve <span className="font-semibold text-emerald-700">2% (w/v) final urea</span>
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="bg-emerald-100 rounded-lg px-4 py-3 text-center">
                    <p className="text-2xl font-bold text-emerald-700">90%</p>
                    <p className="text-xs text-emerald-600">Base medium</p>
                  </div>
                  <span className="text-xl font-bold text-gray-400">+</span>
                  <div className="bg-green-100 rounded-lg px-4 py-3 text-center">
                    <p className="text-2xl font-bold text-green-700">10%</p>
                    <p className="text-xs text-green-600">Urea stock</p>
                  </div>
                  <span className="text-xl font-bold text-gray-400">=</span>
                  <div className="bg-teal-100 rounded-lg px-4 py-3 text-center">
                    <p className="text-2xl font-bold text-teal-700">Final</p>
                    <p className="text-xs text-teal-600">Per condition</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 text-center">
                  C₁V₁ = C₂V₂: (20%)(V₁) = (2%)(final volume) → V₁ = 10% of final volume as urea stock
                </p>
                <p className="text-xs text-gray-500 text-center">Mix gently by swirling</p>
              </div>
            </StepCard>
          </div>

          {/* ==================== */}
          {/* PART 3: INOCULUM PREPARATION */}
          {/* ==================== */}
          <SectionHeader title="Part 3: Inoculum Preparation" subtitle="OD-standardized inoculation — target starting OD 0.025" color="teal" />

          <div className="space-y-1 mb-8">
            <StepCard number="3A" title="Prepare Starter Cultures" icon={Microscope} color="teal">
              <div className="space-y-3">
                <p>For each of the 4 isolates (GG8, GG27B, GNP012, GNP014):</p>
                <div className="bg-white rounded-lg p-3 border border-teal-100 text-xs text-gray-600 space-y-1">
                  <p>1. Select an individual colony from the R2A agar plate</p>
                  <p>
                    2. Using a sterile loop, transfer the colony into a 50 mL Falcon tube containing{" "}
                    <span className="font-semibold text-teal-700">10 mL sterile R2A broth</span>
                  </p>
                  <p>
                    3. Incubate on a shaking incubator at <span className="font-semibold text-teal-700">15°C</span> until visibly turbid
                  </p>
                </div>
              </div>
            </StepCard>

            <FlowArrow />

            <StepCard number="3B" title="Standardize Inoculum" icon={Target} color="teal">
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 border border-teal-100 text-center">
                  <p className="text-sm font-medium text-gray-700">Target starting OD</p>
                  <p className="text-2xl font-bold text-teal-600">0.025</p>
                  <p className="text-xs text-gray-500">Adjusted per isolate via C₁V₁ = C₂V₂</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-teal-100 text-xs text-gray-600 space-y-1">
                  <p className="font-semibold text-teal-700 mb-1">Measure starter culture OD (cuvette dilution series):</p>
                  <p>1. Add a small volume of starter culture to 1000 µL Milli-Q water in a cuvette</p>
                  <p>
                    2. Measure OD<sub>600</sub>; if reading &gt;0.3, try a smaller volume or re-dilute
                  </p>
                  <p>
                    3. Back-calculate: <span className="font-mono font-semibold">True OD = measured OD × (total vol ÷ sample vol)</span>
                  </p>
                  <p>4. Repeat with additional volumes to confirm; average confirmatory reads</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-teal-100 text-xs text-gray-600">
                  <p className="font-semibold text-teal-700 mb-1">Calculate inoculum volume:</p>
                  <p className="font-mono">V₁ = (0.025 × 3000 µL) ÷ True OD</p>
                  <p className="mt-1 text-gray-500">Round to nearest 5 µL for pipetting accuracy</p>
                </div>
              </div>
            </StepCard>

            <FlowArrow />

            {/* Inoculum volumes table */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #f0fdfa, #ecfdf5)",
                border: "2px solid #99f6e4",
                boxShadow: "0 4px 24px rgba(13,148,136,0.08)",
              }}
            >
              <div
                className="px-6 py-3 flex items-center justify-between"
                style={{ background: "linear-gradient(135deg, #0f766e, #0d9488)", color: "white" }}
              >
                <div className="flex items-center gap-3">
                  <Pipette className="w-5 h-5 opacity-90" />
                  <h2 className="text-base font-bold tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Inoculum Volumes (2026-03-04)
                  </h2>
                </div>
                <span className="text-sm opacity-80 font-medium">Final tube vol: 3000 µL</span>
              </div>
              <div className="p-5">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-teal-100">
                        <th className="text-left py-2 px-3 rounded-tl-lg font-semibold text-teal-800">Isolate</th>
                        <th className="text-center py-2 px-3 font-semibold text-teal-800">True OD</th>
                        <th className="text-center py-2 px-3 font-semibold text-teal-800">Inoculum</th>
                        <th className="text-center py-2 px-3 font-semibold text-teal-800">Medium</th>
                        <th className="text-center py-2 px-3 rounded-tr-lg font-semibold text-teal-800">R2A Carryover</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { iso: "GG8", od: "0.863", inoc: "85 µL", med: "2915 µL", carry: "~2.8%", color: "#9333ea" },
                        { iso: "GG27B", od: "0.165", inoc: "455 µL", med: "2545 µL", carry: "~15%", color: "#2563eb", warn: true },
                        { iso: "GNP012", od: "1.115", inoc: "65 µL", med: "2935 µL", carry: "~2.2%", color: "#16a34a" },
                        { iso: "GNP014", od: "0.956", inoc: "80 µL", med: "2920 µL", carry: "~2.7%", color: "#ca8a04" },
                      ].map(({ iso, od, inoc, med, carry, color, warn }, i) => (
                        <tr key={iso} className={i % 2 === 0 ? "bg-white" : "bg-teal-50/50"}>
                          <td className="py-2 px-3 font-semibold" style={{ color }}>
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full" style={{ background: color }} />
                              {iso}
                            </div>
                          </td>
                          <td className="text-center py-2 px-3 text-gray-600 font-mono text-xs">{od}</td>
                          <td className="text-center py-2 px-3 font-bold text-teal-700 text-xs">{inoc}</td>
                          <td className="text-center py-2 px-3 text-gray-600 text-xs">{med}</td>
                          <td className="text-center py-2 px-3 text-xs">
                            <span className={warn ? "text-amber-600 font-semibold" : "text-gray-600"}>
                              {carry}
                              {warn && " ⚠️"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* GG27B warning */}
                <p className="text-xs text-amber-700 bg-amber-50 rounded px-2 py-1 mt-3 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  GG27B has ~15% R2A carryover due to low starter OD — note as potential confound
                </p>
              </div>
            </div>

            <FlowArrow />

            <StepCard number="3C" title="Inoculate Experimental Tubes" icon={Pipette} color="emerald">
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 border border-emerald-100 text-xs text-gray-600 space-y-1">
                  <p>1. Add the appropriate inoculum volume (per isolate) to each tube</p>
                  <p>
                    2. Bring to <span className="font-semibold text-emerald-700">3 mL final volume</span> with the corresponding condition medium
                  </p>
                  <p>3. Leave blank tubes uninoculated</p>
                  <p>4. Cap all tubes and record time of inoculation</p>
                  <p>
                    5. Measure and record{" "}
                    <span className="font-semibold text-emerald-700">
                      Day 0 OD<sub>600</sub>
                    </span>{" "}
                    for each tube to confirm starting density
                  </p>
                </div>
                <p className="text-xs text-emerald-700 bg-emerald-50 rounded px-2 py-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Day 0 OD confirms target of 0.025 was achieved across all tubes
                </p>
              </div>
            </StepCard>
          </div>

          {/* ==================== */}
          {/* PART 4: TUBE LABELING */}
          {/* ==================== */}
          <SectionHeader
            title="Part 4: Tube Labeling"
            subtitle="Color-coded stickers + naming convention: Isolate-CarbonSource-Replicate"
            color="lime"
          />

          <div className="space-y-1 mb-8">
            <StepCard number="4A" title="Color-Coded Sticker Scheme" icon={Tag} color="lime">
              <div className="space-y-3">
                <p className="font-medium text-gray-700">One sticker color per isolate for quick visual identification:</p>
                <div className="grid grid-cols-5 gap-2">
                  {[
                    { color: "#9333ea", label: "Purple", iso: "GG8" },
                    { color: "#2563eb", label: "Blue", iso: "GG27B" },
                    { color: "#16a34a", label: "Green", iso: "GNP012" },
                    { color: "#eab308", label: "Yellow", iso: "GNP014" },
                    { color: "#f97316", label: "Orange", iso: "Blanks" },
                  ].map(({ color, label, iso }) => (
                    <div key={label} className="bg-white rounded-lg p-3 border border-lime-100 text-center">
                      <div className="w-8 h-8 rounded-full mx-auto mb-1 shadow-sm" style={{ background: color }} />
                      <p className="text-xs font-bold text-gray-700">{label}</p>
                      <p className="text-xs text-gray-500">{iso}</p>
                    </div>
                  ))}
                </div>
              </div>
            </StepCard>

            <FlowArrow />

            <StepCard number="4B" title="Label All 39 Tubes" icon={ClipboardList} color="lime">
              <div className="space-y-3">
                <p className="font-medium text-gray-700">
                  Format: <code className="bg-lime-100 px-2 py-0.5 rounded text-lime-800">Isolate-CarbonSource-Replicate</code>
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    { label: "GG27B-Mal-1", desc: "Gilkey 27B, malate, rep 1" },
                    { label: "GG8-Suc-2", desc: "Gilkey 8, succinate, rep 2" },
                    { label: "GNP12-Ace-3", desc: "GNP 012, acetate, rep 3" },
                    { label: "BLK-Mal", desc: "Blank, malate" },
                  ].map(({ label, desc }) => (
                    <div key={label} className="bg-white rounded-lg p-2 border border-lime-100 text-center">
                      <p className="font-mono text-xs font-bold text-lime-700">{label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500">
                  36 inoculated tubes (4 isolates × 3 conditions × 3 replicates) + 3 blank tubes (1 per condition)
                </p>
              </div>
            </StepCard>
          </div>

          {/* ==================== */}
          {/* PART 5: INCUBATION */}
          {/* ==================== */}
          <SectionHeader title="Part 5: Incubation" subtitle="Cold-adapted growth conditions" color="teal" />

          <div className="space-y-1 mb-8">
            <StepCard number="5" title="Incubate with Agitation" icon={Sun} color="teal">
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white rounded-lg p-3 border border-teal-100 text-center">
                    <p className="text-2xl font-bold text-teal-600">15°C</p>
                    <p className="text-xs text-gray-600">Fridge incubator</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-teal-100 text-center">
                    <p className="text-2xl font-bold text-teal-600">150 RPM</p>
                    <p className="text-xs text-gray-600">Rotating shaker</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-teal-100 text-center">
                    <p className="text-2xl font-bold text-teal-600">~7 days</p>
                    <p className="text-xs text-gray-600">1 week</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">Ensure tubes are angled or positioned for adequate aeration and mixing</p>
              </div>
            </StepCard>
          </div>

          {/* ==================== */}
          {/* PART 6: OD600 MEASUREMENTS */}
          {/* ==================== */}
          <SectionHeader
            title="Part 6: OD600 Measurements"
            subtitle="Growth monitoring — intensive early sampling, then spaced readings"
            color="green"
          />

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <InfoBadge label="Wavelength" value="600 nm" icon={Eye} />
            <InfoBadge label="Readings" value="9 timepoints" icon={BarChart3} />
            <InfoBadge label="Frequency" value="Intensive D0–2, then D4, D7" icon={Clock} />
            <InfoBadge label="Format" value="Direct in 16 mm tubes" icon={TestTube2} />
          </div>

          {/* Measurement Timeline */}
          <MeasurementTimeline />

          <div className="space-y-1 mb-8">
            <StepCard number="6A" title="Blank with Matching Medium" icon={Minus} color="green">
              <div className="space-y-2">
                <p>
                  Blank the spectrophotometer with the <span className="font-semibold text-green-700">corresponding uninoculated medium</span> for
                  each condition:
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { blank: "BLK-Mal", reads: "All malate tubes", color: "#f59e0b" },
                    { blank: "BLK-Suc", reads: "All succinate tubes", color: "#8b5cf6" },
                    { blank: "BLK-Ace", reads: "All acetate tubes", color: "#ef4444" },
                  ].map(({ blank, reads, color }) => (
                    <div key={blank} className="bg-white rounded-lg p-2 border text-center" style={{ borderColor: color + "44" }}>
                      <p className="font-mono text-xs font-bold" style={{ color }}>
                        {blank}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">→ {reads}</p>
                    </div>
                  ))}
                </div>
              </div>
            </StepCard>

            <FlowArrow />

            <StepCard number="6B" title="Measure & Record" icon={Eye} color="emerald">
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-3 border border-emerald-100 text-xs text-gray-600 space-y-1">
                  <p>1. Remove tubes from shaker</p>
                  <p>2. Gently mix by inversion (2–3×) to resuspend settled cells</p>
                  <p>3. Blank with matching uninoculated medium</p>
                  <p>
                    4. Read OD<sub>600</sub> directly in glass culture tubes
                  </p>
                  <p>
                    5. <span className="font-semibold text-gray-700">Record time of measurement (HH:MM)</span> and OD immediately in data sheet
                  </p>
                  <p>
                    6. Note visual observations: <span className="font-semibold">turbidity, color changes</span>
                  </p>
                  <p>7. Return tubes to shaker promptly</p>
                </div>
                <p className="text-xs text-emerald-700 bg-emerald-50 rounded px-2 py-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Use same spectrophotometer, same tube orientation, and same technique each time
                </p>
              </div>
            </StepCard>
          </div>

          {/* ==================== */}
          {/* PART 7: ENDPOINT MEASUREMENTS */}
          {/* ==================== */}
          <SectionHeader title="Part 7: Endpoint Measurements (~Day 7)" subtitle="Final OD, pH, and visual assessment" color="emerald" />

          <div className="space-y-1 mb-8">
            <StepCard number="7A" title="Final OD600 Reading" icon={Eye} color="emerald">
              <div className="space-y-2">
                <p>
                  Take final OD<sub>600</sub> reading using the same procedure as Section 6
                </p>
              </div>
            </StepCard>

            <FlowArrow />

            <StepCard number="7B" title="Endpoint pH" icon={Droplets} color="indigo">
              <div className="space-y-3">
                <p>Measure pH of each tube — compare to initial pH of 6.8</p>
                <p className="text-xs text-gray-500">An increase toward alkaline suggests urease activity. Use pH meter (preferred) or pH strips.</p>
              </div>
            </StepCard>
          </div>

          {/* Expandable Sections */}
          <div className="space-y-4">
            <ExpandableSection title="Carbon Source Rationale" icon={Wheat} defaultOpen={true}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    name: "Sodium DL-malate (0.742 g/L)",
                    desc: "TCA cycle intermediate. Tests whether isolates can grow on C₄ organic acids. DL-racemic form — only L-isomer is biologically active.",
                    formula: "C₄H₄Na₂O₅",
                    mw: "178.05",
                    carbons: "4",
                  },
                  {
                    name: "Sodium succinate (1.126 g/L)",
                    desc: "TCA cycle intermediate. Tests C₄ dicarboxylate utilization. Hexahydrate form — account for water of crystallization.",
                    formula: "C₄H₄Na₂O₄·6H₂O",
                    mw: "270.14",
                    carbons: "4",
                  },
                  {
                    name: "Sodium acetate (0.684 g/L)",
                    desc: "Simple C₂ organic acid. Common soil metabolite. Tests whether isolates can grow on minimal carbon compounds.",
                    formula: "C₂H₃NaO₂",
                    mw: "82.03",
                    carbons: "2",
                  },
                ].map(({ name, desc, formula, mw, carbons }) => (
                  <div key={name} className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                    <p className="font-semibold text-emerald-700 mb-1">{name}</p>
                    <p className="text-xs text-gray-600 mb-2">{desc}</p>
                    <div className="text-xs text-gray-500 space-y-0.5">
                      <p>
                        Formula: <span className="font-mono">{formula}</span>
                      </p>
                      <p>
                        MW: {mw} g/mol • Carbons: {carbons}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ExpandableSection>

            <ExpandableSection title="Notes & Reminders" icon={ClipboardList}>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                  <p className="font-semibold text-emerald-800 mb-2">Aseptic Technique</p>
                  <p className="text-xs text-gray-600">
                    Work in biosafety cabinet for all sterile steps. Use sterile pipettes and tubes throughout. Always include uninoculated blanks.
                  </p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <p className="font-semibold text-amber-800 mb-2">Important Considerations</p>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>• Document colony morphology before transfer</p>
                    <p>• Record all observations (turbidity, color changes, pH, anomalies)</p>
                    <p>• DL-malate: only ~half the carbon may be bioavailable (L-form only)</p>
                    <p>• Succinate hexahydrate: large mass is mostly water of crystallization</p>
                    <p>• Keep original R2A plates as backup at 4°C</p>
                    <p>• If contamination suspected — note but do NOT discard; streak onto R2A at endpoint</p>
                  </div>
                </div>
                <div className="bg-sky-50 rounded-lg p-4 border border-sky-200">
                  <p className="font-semibold text-sky-800 mb-2">Spectrophotometer Check</p>
                  <p className="text-xs text-gray-600">
                    Confirm 16 mm tube fits in cuvette holder before starting. If path length ≠ 1 cm, note in methods — OD values are still valid for
                    relative comparisons within this experiment.
                  </p>
                </div>
              </div>
            </ExpandableSection>
          </div>

          {/* ==================== */}
          {/* BENCH INOCULATION REFERENCE CARD */}
          {/* ==================== */}
          <SectionHeader
            title="Bench Inoculation Reference Card"
            subtitle="Quick-reference for inoculation day — print and bring to bench"
            color="emerald"
          />

          <BenchInoculationCard />

          {/* Footer */}
          <div className="mt-8 text-center text-xs text-gray-500">
            <p>Carbon Source Growth Assay — Cold-adapted ureolytic bacteria</p>
            <p className="mt-1">MICP applications in permafrost environments</p>
          </div>
        </div>
      </div>
    </>
  );
}
