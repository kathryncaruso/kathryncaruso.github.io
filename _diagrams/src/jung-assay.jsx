import React, { useState, useRef, useCallback } from "react";
import {
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
  Flame,
  FlaskRound,
  Microscope,
  RefreshCw,
  Thermometer,
  Image,
  FileText,
  Activity,
  BarChart3,
  ArrowRight,
} from "lucide-react";

/* ─────────────────────────────────────────────
   OCEAN GARDEN PALETTE
   Indigo (Part I) → Teal (Part II) → Emerald (Part III)
   ───────────────────────────────────────────── */

const P = {
  i: {
    primary: "#4338ca",
    secondary: "#6366f1",
    light: "#818cf8",
    cardBg: "#eef2ff",
    cardBorder: "#c7d2fe",
    darkText: "#312e81",
    gradient: "linear-gradient(135deg, #4338ca, #6366f1)",
  },
  ii: {
    primary: "#0e7490",
    secondary: "#0891b2",
    light: "#06b6d4",
    cardBg: "#ecfeff",
    cardBorder: "#a5f3fc",
    darkText: "#164e63",
    gradient: "linear-gradient(135deg, #0e7490, #06b6d4)",
  },
  iii: {
    primary: "#047857",
    secondary: "#059669",
    light: "#10b981",
    cardBg: "#ecfdf5",
    cardBorder: "#a7f3d0",
    darkText: "#064e3b",
    gradient: "linear-gradient(135deg, #047857, #10b981)",
  },
  warn: "#dc2626",
  warnBg: "#fef2f2",
  warnBorder: "#fecaca",
  success: "#059669",
  amber: "#d97706",
  amberBg: "#fffbeb",
  amberBorder: "#fde68a",
  slate: "#64748b",
};

/* ─────────────────────────────────────────────
   EXPORT UTILITIES
   ───────────────────────────────────────────── */

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
  link.download = "jung-assay-v2-protocol.png";
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
          .map((r) => r.cssText)
          .join("\n");
      } catch (e) {
        return "";
      }
    })
    .join("\n");
  const blob = new Blob(
    [
      `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><defs><style type="text/css"><![CDATA[${styles}]]></style></defs><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml">${element.outerHTML}</div></foreignObject></svg>`,
    ],
    { type: "image/svg+xml;charset=utf-8" }
  );
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "jung-assay-v2-protocol.svg";
  link.href = url;
  link.click();
  URL.revokeObjectURL(url);
}

const ExportToolbar = ({ contentRef }) => {
  const [exporting, setExporting] = useState(false);
  const handlePNG = useCallback(async () => {
    if (!contentRef.current) return;
    setExporting(true);
    try {
      await exportPNG(contentRef.current);
    } catch (e) {
      console.error(e);
    }
    setExporting(false);
  }, [contentRef]);
  return (
    <div className="fixed top-3 right-3 z-50 flex gap-2" style={{ fontFamily: "'Roboto', sans-serif" }}>
      <button
        onClick={handlePNG}
        disabled={exporting}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium shadow-md"
        style={{ background: P.i.gradient, color: "white", opacity: exporting ? 0.6 : 1, border: "none", cursor: exporting ? "wait" : "pointer" }}
      >
        <Image className="w-3.5 h-3.5" />
        {exporting ? "Exporting…" : "PNG"}
      </button>
      <button
        onClick={() => contentRef.current && exportSVG(contentRef.current)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium shadow-md"
        style={{ background: P.ii.gradient, color: "white", border: "none", cursor: "pointer" }}
      >
        <FileText className="w-3.5 h-3.5" />
        SVG
      </button>
    </div>
  );
};

/* ─────────────────────────────────────────────
   COMPACT REUSABLE COMPONENTS
   ───────────────────────────────────────────── */

const StepCard = ({
  number,
  title,
  icon: Icon,
  children,
  accent = P.ii.secondary,
  accentLight = P.ii.cardBg,
  accentBorder = P.ii.cardBorder,
  className = "",
}) => (
  <div className={`relative rounded-xl border p-3 shadow-sm ${className}`} style={{ background: accentLight, borderColor: accentBorder }}>
    <div className="flex items-start gap-2.5">
      <div
        className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-sm"
        style={{ background: accent }}
      >
        {number}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-1">
          <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: accent }} />
          <h3 className="font-medium text-gray-800 text-sm leading-tight">{title}</h3>
        </div>
        <div className="text-gray-600 text-xs leading-relaxed">{children}</div>
      </div>
    </div>
  </div>
);

const FlowArrow = () => (
  <div className="flex justify-center py-0.5">
    <ArrowDown className="w-4 h-4 text-slate-300" />
  </div>
);

const SectionHeader = ({ title, subtitle, icon: Icon, gradient }) => (
  <div className="rounded-xl px-4 py-3 text-white shadow-md mb-3" style={{ background: gradient }}>
    <div className="flex items-center gap-2.5">
      {Icon && <Icon className="w-5 h-5 opacity-90" />}
      <div>
        <h2 className="text-base font-bold tracking-tight" style={{ fontFamily: "'Roboto', sans-serif" }}>
          {title}
        </h2>
        {subtitle && <p className="text-xs opacity-85 mt-0.5">{subtitle}</p>}
      </div>
    </div>
  </div>
);

const InfoChip = ({ label, value, icon: Icon, color = P.slate }) => (
  <div
    className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 shadow-sm border text-xs"
    style={{ background: "rgba(255,255,255,0.85)", borderColor: "#e2e8f0" }}
  >
    {Icon && <Icon className="w-3 h-3" style={{ color }} />}
    <span className="text-slate-500">{label}:</span>
    <span className="font-semibold text-slate-800">{value}</span>
  </div>
);

const ExpandableSection = ({ title, icon: Icon, children, defaultOpen = false, accentColor = P.slate }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl overflow-hidden shadow-sm" style={{ border: "1.5px solid #e2e8f0", background: "white" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2.5 flex items-center justify-between"
        style={{ background: "#f8fafc", cursor: "pointer", border: "none" }}
      >
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4" style={{ color: accentColor }} />
          <span className="font-medium text-slate-800 text-sm">{title}</span>
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
      </button>
      {isOpen && <div className="px-4 py-3 border-t border-slate-100">{children}</div>}
    </div>
  );
};

/* ─────────────────────────────────────────────
   TWO-TRACK VISUAL TIMELINE
   ───────────────────────────────────────────── */

const TransferTimeline = () => {
  const totalDays = 28;
  const pct = (day) => (day / totalDays) * 100;
  const xPos = (day) => `calc(2% + ${pct(day)}% * 0.96)`;

  const timepoints = [
    { label: "T0", day: 0, phase: "w1", role: "t0" },
    { label: "Mid", day: 3.5, phase: "w1", role: "mid" },
    { label: "Final", day: 7, phase: "w1", role: "final" },
    { label: "T0", day: 7, phase: "w2", role: "t0" },
    { label: "Mid", day: 10.5, phase: "w2", role: "mid" },
    { label: "Final", day: 14, phase: "w2", role: "final" },
    { label: "T0", day: 14, phase: "w3", role: "t0" },
    { label: "Mid", day: 17.5, phase: "w3", role: "mid" },
    { label: "Final", day: 21, phase: "w3", role: "final" },
    { label: "T0", day: 21, phase: "w4", role: "t0" },
    { label: "Mid", day: 24.5, phase: "w4", role: "mid" },
    { label: "Final", day: 28, phase: "w4", role: "final" },
  ];

  const phaseColors = {
    w1: { bg: "#eef2ff", ring: "#6366f1", dot: "#4338ca", text: "#312e81" },
    w2: { bg: "#ecfeff", ring: "#06b6d4", dot: "#0891b2", text: "#164e63" },
    w3: { bg: "#ecfdf5", ring: "#10b981", dot: "#059669", text: "#064e3b" },
    w4: { bg: "#fffbeb", ring: "#f59e0b", dot: "#d97706", text: "#92400e" },
  };

  const tc = { bg: "#fce7f3", ring: "#ec4899", dot: "#db2777", text: "#9d174d", light: "#fbcfe8" };

  const phases = [
    { key: "w1", startDay: 0, endDay: 7, label: "Window 1" },
    { key: "w2", startDay: 7, endDay: 14, label: "Window 2" },
    { key: "w3", startDay: 14, endDay: 21, label: "Window 3" },
    { key: "w4", startDay: 21, endDay: 28, label: "Window 4" },
  ];

  const passages = [
    { label: "P0", day: 0, note: "Inoculate", isInoc: true },
    { label: "P1", day: 7, note: "1st transfer", isInoc: false },
    { label: "P2", day: 14, note: "2nd transfer", isInoc: false },
    { label: "P3", day: 21, note: "3rd transfer", isInoc: false },
  ];

  const dayMap = {};
  timepoints.forEach((tp) => {
    if (!dayMap[tp.day]) dayMap[tp.day] = [];
    dayMap[tp.day].push(tp);
  });

  const axisTicks = [0, 3, 4, 7, 10, 11, 14, 17, 18, 21, 24, 25, 28];
  const RAIL_Y = 48;
  const SAMPLING_H = 110;
  const TRANSFER_H = 105;

  return (
    <div
      className="rounded-xl overflow-hidden mb-3"
      style={{ background: "#ffffff", border: "2px solid #c7d2fe", boxShadow: "0 4px 24px rgba(99,102,241,0.06)" }}
    >
      <div className="flex items-center justify-between" style={{ padding: "12px 24px", background: P.ii.gradient, color: "white" }}>
        <div className="flex items-center gap-2.5">
          <Clock className="w-4 h-4" style={{ opacity: 0.9 }} />
          <h2 className="text-sm font-light tracking-wide">Sampling &amp; Culture Transfer Timeline</h2>
        </div>
        <span className="text-xs font-light" style={{ opacity: 0.8 }}>
          28-Day Assay Window
        </span>
      </div>

      <div className="flex flex-wrap gap-2.5 justify-center" style={{ padding: "12px 24px 6px" }}>
        <div
          className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-light"
          style={{ background: P.ii.cardBg, color: P.ii.darkText, border: `1px solid ${P.ii.secondary}` }}
        >
          <TestTube2 className="w-3 h-3" />
          Sampling Timepoints <span style={{ opacity: 0.6 }}>(12 measurements)</span>
        </div>
        <div
          className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-light"
          style={{ background: tc.bg, color: tc.text, border: `1px solid ${tc.ring}` }}
        >
          <RefreshCw className="w-3 h-3" />
          Serial Transfer <span style={{ opacity: 0.6 }}>(every 7 d)</span>
        </div>
      </div>

      <div style={{ padding: "12px 0 0" }}>
        <div className="flex items-center gap-1.5" style={{ padding: "0 24px", marginBottom: 6 }}>
          <div className="rounded-full" style={{ width: 8, height: 8, background: P.ii.primary }} />
          <span className="uppercase tracking-wider font-light" style={{ fontSize: "0.6rem", color: P.ii.primary }}>
            Sampling Timepoints
          </span>
          <span className="font-light" style={{ fontSize: "0.6rem", color: "#9ca3af" }}>
            (T0 / Mid / Final per window)
          </span>
        </div>

        <div className="relative" style={{ height: SAMPLING_H, margin: "0 24px" }}>
          <div
            className="absolute rounded-full"
            style={{
              left: "2%",
              right: "2%",
              top: RAIL_Y,
              height: 6,
              background: "linear-gradient(90deg, #c7d2fe, #a5f3fc, #a7f3d0, #fde68a)",
              opacity: 0.35,
            }}
          />

          {phases.map((ph) => {
            const c = phaseColors[ph.key];
            const x1 = pct(ph.startDay),
              x2 = pct(ph.endDay);
            return (
              <React.Fragment key={ph.key}>
                <div
                  className="absolute"
                  style={{
                    left: `calc(2% + ${x1}% * 0.96)`,
                    width: `calc(${x2 - x1}% * 0.96)`,
                    top: 75,
                    height: 12,
                    borderBottom: `2px solid ${c.ring}`,
                    opacity: 0.25,
                  }}
                />
                <div
                  className="absolute text-center uppercase tracking-wider font-light"
                  style={{ left: `calc(2% + ${(x1 + x2) / 2}% * 0.96)`, top: 92, transform: "translateX(-50%)", fontSize: "0.55rem", color: c.text }}
                >
                  {ph.label}
                </div>
              </React.Fragment>
            );
          })}

          {Object.entries(dayMap).map(([dayStr, tps]) => {
            const day = parseFloat(dayStr);
            const x = xPos(day);

            if (tps.length === 2) {
              const prev = tps[0],
                next = tps[1];
              const cP = phaseColors[prev.phase],
                cN = phaseColors[next.phase];
              return (
                <div
                  key={dayStr}
                  className="absolute flex flex-col items-center"
                  style={{ left: x, top: 0, transform: "translateX(-50%)", width: 72 }}
                >
                  <div className="flex gap-1" style={{ marginBottom: 3 }}>
                    <div
                      className="rounded-md font-light"
                      style={{ padding: "1px 5px", fontSize: "0.55rem", background: cP.bg, color: cP.text, border: `1.5px solid ${cP.ring}` }}
                    >
                      {prev.label}
                    </div>
                    <div
                      className="rounded-md font-light"
                      style={{ padding: "1px 5px", fontSize: "0.55rem", background: cN.bg, color: cN.text, border: `1.5px solid ${cN.ring}` }}
                    >
                      {next.label}
                    </div>
                  </div>
                  <div style={{ width: 4, height: 8, background: `linear-gradient(to right, ${cP.ring}, ${cN.ring})`, opacity: 0.4 }} />
                  <div
                    className="rounded-full shadow-sm"
                    style={{
                      width: 18,
                      height: 18,
                      background: `conic-gradient(${cP.dot} 0deg 180deg, ${cN.dot} 180deg 360deg)`,
                      border: "2px solid white",
                    }}
                  />
                </div>
              );
            }

            const tp = tps[0];
            const c = phaseColors[tp.phase];
            const isT0 = tp.role === "t0";
            const dotSz = isT0 ? 18 : tp.role === "final" ? 16 : 14;
            const ringSz = dotSz + 6;

            return (
              <div key={dayStr} className="absolute flex flex-col items-center" style={{ left: x, top: 0, transform: "translateX(-50%)", width: 52 }}>
                <div
                  className="rounded-md font-light"
                  style={{
                    padding: "2px 8px",
                    fontSize: "0.65rem",
                    marginBottom: 3,
                    background: c.bg,
                    color: c.text,
                    border: `1.5px solid ${c.ring}`,
                  }}
                >
                  {tp.label}
                </div>
                <div style={{ width: 2, height: 8, background: c.ring, opacity: 0.4 }} />
                {isT0 ? (
                  <div
                    className="rounded-full flex items-center justify-center"
                    style={{ width: ringSz, height: ringSz, border: `1.5px dashed ${c.ring}`, opacity: 0.8 }}
                  >
                    <div
                      className="rounded-full shadow-sm"
                      style={{
                        width: dotSz,
                        height: dotSz,
                        background: `radial-gradient(circle at 35% 35%, ${c.ring}, ${c.dot})`,
                        border: "2px solid white",
                      }}
                    />
                  </div>
                ) : (
                  <div
                    className="rounded-full shadow-sm"
                    style={{
                      width: dotSz,
                      height: dotSz,
                      background: `radial-gradient(circle at 35% 35%, ${c.ring}, ${c.dot})`,
                      border: "2px solid white",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ padding: "6px 0" }}>
        <div className="relative" style={{ height: 28, margin: "0 24px" }}>
          <div className="absolute" style={{ left: "2%", right: "2%", top: 0, height: 2, background: "#cbd5e1", borderRadius: 1 }} />
          {axisTicks.map((day) => (
            <div key={day} className="absolute flex flex-col items-center" style={{ left: xPos(day), top: -3, transform: "translateX(-50%)" }}>
              <div style={{ width: 1.5, height: 8, background: "#94a3b8" }} />
              <span className="font-light" style={{ fontSize: "0.65rem", color: "#6b7280", marginTop: 2 }}>
                {day}
              </span>
            </div>
          ))}
          <div
            className="absolute font-light"
            style={{ left: "50%", bottom: 0, transform: "translateX(-50%) translateY(calc(100% + 2px))", fontSize: "0.65rem", color: "#9ca3af" }}
          >
            Day
          </div>
        </div>
      </div>

      <div style={{ padding: "0 0 16px" }}>
        <div className="flex items-center gap-1.5" style={{ padding: "0 24px", marginBottom: 6 }}>
          <div className="rounded-full" style={{ width: 8, height: 8, background: tc.dot }} />
          <span className="uppercase tracking-wider font-light" style={{ fontSize: "0.6rem", color: tc.text }}>
            Serial Transfers
          </span>
          <span className="font-light" style={{ fontSize: "0.6rem", color: "#9ca3af" }}>
            (1:100 dilution every 7 days)
          </span>
        </div>

        <div className="relative" style={{ height: TRANSFER_H, margin: "0 24px" }}>
          <div className="absolute rounded-full" style={{ left: "2%", right: "2%", top: 48, height: 6, background: tc.light, opacity: 0.5 }} />

          {[7, 14, 21, 28].map((day, i) => {
            const startDay = i === 0 ? 0 : [7, 14, 21][i - 1];
            const x1 = pct(startDay),
              x2 = pct(day);
            return (
              <div
                key={`br-${i}`}
                className="absolute"
                style={{
                  left: `calc(2% + ${x1}% * 0.96)`,
                  width: `calc(${x2 - x1}% * 0.96)`,
                  top: 42,
                  height: 18,
                  borderBottom: `2px dashed ${tc.ring}`,
                  borderRight: `1.5px solid ${tc.ring}`,
                  ...(i === 0 ? { borderLeft: `1.5px solid ${tc.ring}` } : {}),
                  opacity: 0.35,
                  borderRadius: "0 0 4px 4px",
                }}
              />
            );
          })}

          {passages.map((p, i) => {
            const isAbove = i % 2 === 0;
            const isInoc = p.isInoc;
            const dotBg = isInoc
              ? `radial-gradient(circle at 35% 35%, ${P.ii.light}, ${P.ii.primary})`
              : `radial-gradient(circle at 35% 35%, ${tc.ring}, ${tc.dot})`;
            const badgeBg = isInoc ? P.ii.cardBg : tc.bg;
            const badgeColor = isInoc ? P.ii.darkText : tc.text;
            const badgeBorder = isInoc ? P.ii.secondary : tc.ring;
            const IconCmp = isInoc ? Microscope : RefreshCw;

            return (
              <div
                key={p.label}
                className="absolute flex flex-col items-center"
                style={{ left: xPos(p.day), transform: "translateX(-50%)", width: 70, top: isAbove ? 0 : 37 }}
              >
                {isAbove ? (
                  <>
                    <div
                      className="rounded-md font-light"
                      style={{
                        padding: "2px 8px",
                        fontSize: "0.65rem",
                        background: badgeBg,
                        color: badgeColor,
                        border: `1.5px solid ${badgeBorder}`,
                      }}
                    >
                      {p.label}
                    </div>
                    <span className="font-light" style={{ fontSize: "0.6rem", color: badgeColor, opacity: 0.7, whiteSpace: "nowrap" }}>
                      {p.note}
                    </span>
                    <div style={{ width: 2, height: 6, background: badgeBorder, opacity: 0.4 }} />
                    <div
                      className="rounded-full flex items-center justify-center shadow-sm"
                      style={{ width: 22, height: 22, background: dotBg, border: "2px solid white" }}
                    >
                      <IconCmp className="text-white" style={{ width: 11, height: 11 }} />
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="rounded-full flex items-center justify-center shadow-sm"
                      style={{ width: 22, height: 22, background: dotBg, border: "2px solid white" }}
                    >
                      <IconCmp className="text-white" style={{ width: 11, height: 11 }} />
                    </div>
                    <div style={{ width: 2, height: 6, background: badgeBorder, opacity: 0.4 }} />
                    <div
                      className="rounded-md font-light"
                      style={{
                        padding: "2px 8px",
                        fontSize: "0.65rem",
                        background: badgeBg,
                        color: badgeColor,
                        border: `1.5px solid ${badgeBorder}`,
                      }}
                    >
                      {p.label}
                    </div>
                    <span className="font-light" style={{ fontSize: "0.6rem", color: badgeColor, opacity: 0.7, whiteSpace: "nowrap" }}>
                      {p.note}
                    </span>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ margin: "0 24px 12px" }}>
        <div className="rounded-lg" style={{ background: P.ii.cardBg, border: `1px solid ${P.ii.cardBorder}`, padding: "8px 12px" }}>
          <p className="font-light flex items-center gap-1.5" style={{ fontSize: "0.6rem", color: P.ii.darkText, marginBottom: 4 }}>
            <AlertTriangle className="w-3 h-3" style={{ color: P.ii.secondary }} />
            <span className="font-medium">Transfer Day Workflow (Days 7, 14, 21)</span>
          </p>
          <div className="flex items-center gap-1.5 flex-wrap" style={{ fontSize: "0.6rem" }}>
            {[
              { label: "\u2460 Final sample (outgoing)", bg: tc.bg, color: tc.text },
              { label: "\u2461 Prep fresh tubes", bg: P.iii.cardBg, color: P.iii.darkText },
              { label: "\u2462 Transfer 1:100", bg: P.iii.cardBg, color: P.iii.darkText },
              { label: "\u2463 T\u2080 sample (incoming)", bg: P.i.cardBg, color: P.i.darkText },
              { label: "\u2464 Incubate 15\u00b0C", bg: P.ii.cardBg, color: P.ii.darkText },
            ].map((s, i) => (
              <React.Fragment key={i}>
                <span className="rounded px-1.5 py-0.5 font-medium" style={{ background: s.bg, color: s.color }}>
                  {s.label}
                </span>
                {i < 4 && <ArrowRight className="w-2.5 h-2.5 text-slate-300" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   ISOLATE PANEL
   ───────────────────────────────────────────── */

const IsolatePanel = () => {
  const sources = [
    { name: "Gilkey Glacier", isolates: ["GG7", "GG8", "GG22", "GG27B"], color: P.i.primary, bg: P.i.cardBg },
    { name: "Glacier NP", isolates: ["GNP009", "GNP012", "GNP013", "GNP014"], color: P.ii.secondary, bg: P.ii.cardBg },
    {
      name: "Cotton Glacier",
      isolates: ["CGS1", "CGS6", "CGS7", "CG23.3", "CG23.4", "CG23.6", "CG9.2", "CG9.7", "CG9.11"],
      color: P.ii.primary,
      bg: "#e0f2fe",
    },
    { name: "Pony Lake", isolates: ["PL15", "PL16"], color: P.iii.secondary, bg: P.iii.cardBg },
    { name: "Marr Pond", isolates: ["MP_M2"], color: P.amber, bg: P.amberBg },
  ];
  return (
    <div className="relative rounded-lg p-3" style={{ background: "rgba(255,255,255,0.7)", border: "1px solid #e2e8f0" }}>
      <p className="text-xs font-medium text-slate-600 mb-2 uppercase tracking-wider">20 Isolates · 5 Source Environments</p>
      <div className="flex flex-wrap gap-1.5">
        {sources.map((src) => (
          <div key={src.name} className="rounded-md px-2 py-1.5" style={{ background: src.bg, border: `1px solid ${src.color}22` }}>
            <p className="font-medium mb-0.5" style={{ color: src.color, fontSize: "10px" }}>
              {src.name}
            </p>
            <div className="flex flex-wrap gap-0.5">
              {src.isolates.map((iso) => (
                <span
                  key={iso}
                  className="rounded px-1 py-0.5 font-medium"
                  style={{ background: "rgba(255,255,255,0.8)", color: src.color, fontSize: "9px" }}
                >
                  {iso}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */

export default function JungAssayFlowchartV2() {
  const contentRef = useRef(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
      `}</style>

      <ExportToolbar contentRef={contentRef} />

      <div
        ref={contentRef}
        className="min-h-screen p-4"
        style={{
          background: "linear-gradient(135deg, #f0f4ff 0%, #ecfeff 40%, #ecfdf5 80%, #f8fafc 100%)",
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 300,
        }}
      >
        <div className="max-w-5xl mx-auto">
          {/* ═══════════ HEADER ═══════════ */}
          <div className="text-center mb-6 pt-2">
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-3"
              style={{ background: P.i.primary, color: "white" }}
            >
              <FlaskConical className="w-3.5 h-3.5" />
              SOP — v2
            </div>
            <h1 className="text-3xl mb-2 tracking-tight" style={{ color: "#0f172a", fontWeight: 700 }}>
              28-Day Ureolytic Activity Assay
            </h1>
            <p className="text-sm mb-1" style={{ color: P.i.secondary, fontWeight: 400 }}>
              Serial Transfer Design · Jung et al. (1975) Colorimetric Method
            </p>
            <p className="text-xs" style={{ color: "#64748b" }}>
              OPA + NED → pink chromophore → 505 nm
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <InfoChip label="Isolates" value="20 × 3 reps" icon={Microscope} color={P.i.secondary} />
              <InfoChip label="Tubes" value="66/transfer" icon={TestTube2} color={P.ii.secondary} />
              <InfoChip label="Timepoints" value="12 total" icon={Clock} color={P.ii.primary} />
              <InfoChip label="Transfers" value="4 (every 7d)" icon={RefreshCw} color={P.iii.secondary} />
              <InfoChip label="Detection" value="505 nm" icon={Eye} color={P.iii.primary} />
            </div>
          </div>

          {/* ═══════════ PART I — INDIGO ═══════════ */}
          <SectionHeader
            title="Part I — Media Preparation"
            subtitle="Succinate-based defined medium · Complete before Day 0"
            icon={Beaker}
            gradient={P.i.gradient}
          />

          <div className="grid grid-cols-2 gap-2 mb-2">
            <StepCard
              number="1A"
              title="Combust Glass Culture Tubes"
              icon={Flame}
              accent={P.i.primary}
              accentLight={P.i.cardBg}
              accentBorder={P.i.cardBorder}
            >
              <div className="grid grid-cols-2 gap-1 mt-1">
                <div className="bg-white rounded px-1.5 py-1 border text-center" style={{ borderColor: P.i.cardBorder }}>
                  <p className="text-lg font-bold" style={{ color: P.i.primary }}>
                    450°C
                  </p>
                  <p className="text-slate-500" style={{ fontSize: "9px" }}>
                    5 hours
                  </p>
                </div>
                <div className="bg-white rounded px-1.5 py-1 border text-center" style={{ borderColor: P.i.cardBorder }}>
                  <p className="text-lg font-bold" style={{ color: P.i.primary }}>
                    66+
                  </p>
                  <p className="text-slate-500" style={{ fontSize: "9px" }}>
                    tubes/transfer
                  </p>
                </div>
              </div>
              <p className="text-slate-400 mt-1" style={{ fontSize: "9px" }}>
                16×150 mm borosilicate · Cool in oven · No scratches near OD read zone
              </p>
            </StepCard>

            <StepCard
              number="1B"
              title="Autoclave Tube Closures"
              icon={Flame}
              accent={P.i.secondary}
              accentLight={P.i.cardBg}
              accentBorder={P.i.cardBorder}
            >
              <div className="bg-white rounded px-2 py-1.5 border mt-0.5" style={{ borderColor: P.i.cardBorder }}>
                <p className="text-xs">
                  <span className="font-bold" style={{ color: P.i.secondary }}>
                    121°C
                  </span>{" "}
                  · 15 psi · 15–20 min dry cycle
                </p>
              </div>
              <p className="text-slate-400 mt-1" style={{ fontSize: "9px" }}>
                Wrap in foil · Label autoclave tape with date/initials
              </p>
            </StepCard>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-2">
            <StepCard
              number="1C"
              title="Prepare Base Medium"
              icon={Beaker}
              accent={P.i.primary}
              accentLight={P.i.cardBg}
              accentBorder={P.i.cardBorder}
            >
              <div className="grid grid-cols-2 gap-1 mt-1">
                {[
                  ["Succinate·6H₂O", "1.126 g/L"],
                  ["Yeast extract", "0.1 g/L"],
                  ["K₂HPO₄", "0.3 g/L"],
                  ["Milli-Q", "to 1 L"],
                ].map(([n, v]) => (
                  <div key={n} className="bg-white rounded px-1.5 py-1 border text-center" style={{ borderColor: P.i.cardBorder }}>
                    <p className="text-slate-500" style={{ fontSize: "9px" }}>
                      {n}
                    </p>
                    <p className="font-bold text-xs" style={{ color: P.i.primary }}>
                      {v}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-slate-400 mt-1" style={{ fontSize: "9px" }}>
                Carbon-matched to 0.5 g/L glucose (16.67 mmol C/L)
              </p>
            </StepCard>

            <StepCard number="1D" title="Adjust pH" icon={Droplets} accent={P.i.secondary} accentLight={P.i.cardBg} accentBorder={P.i.cardBorder}>
              <div className="flex items-center gap-2">
                <div className="bg-white rounded px-2.5 py-1.5 border text-center flex-shrink-0" style={{ borderColor: P.i.cardBorder }}>
                  <p className="text-lg font-bold leading-tight" style={{ color: P.i.secondary }}>
                    6.8 <span className="text-xs font-normal text-slate-400">± 0.2</span>
                  </p>
                </div>
                <p className="text-xs text-slate-600">Adjust with 1 M HCl or 1 M NaOH</p>
              </div>
            </StepCard>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-2">
            <StepCard
              number="1E"
              title="Autoclave Base Medium"
              icon={Flame}
              accent={P.i.light}
              accentLight={P.i.cardBg}
              accentBorder={P.i.cardBorder}
            >
              <p className="mt-0.5">Liquid cycle · 121°C, 15 psi, 20 min/L · ~230 mL/transfer · ~1 L total</p>
            </StepCard>

            <StepCard
              number="1F"
              title="Filter-Sterilize Urea Stock"
              icon={Filter}
              accent={P.i.primary}
              accentLight={P.i.cardBg}
              accentBorder={P.i.cardBorder}
            >
              <p className="mt-0.5">
                <span className="font-medium" style={{ color: P.i.primary }}>
                  10% (w/v)
                </span>{" "}
                — 20 g in 200 mL · Filter 0.22 µm
              </p>
              <p className="text-slate-400 mt-0.5" style={{ fontSize: "9px" }}>
                Store 4°C · Use within 1 week
              </p>
              <p className="mt-1 flex items-center gap-1" style={{ fontSize: "9px", color: P.warn }}>
                <AlertTriangle className="w-2.5 h-2.5" />
                Do NOT autoclave urea — degrades at high temp
              </p>
            </StepCard>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-6">
            <StepCard
              number="1G"
              title="Combine to Final Medium"
              icon={FlaskRound}
              accent={P.i.secondary}
              accentLight={P.i.cardBg}
              accentBorder={P.i.cardBorder}
            >
              <p className="font-medium text-slate-700 mt-0.5">Final: 2% urea (20 g/L)</p>
              <div className="grid grid-cols-2 gap-1.5 mt-1">
                <div className="bg-white rounded px-2 py-1.5 border text-center" style={{ borderColor: P.i.cardBorder }}>
                  <p className="text-lg font-bold" style={{ color: P.i.primary }}>
                    80%
                  </p>
                  <p className="text-slate-500" style={{ fontSize: "9px" }}>
                    Base medium
                  </p>
                </div>
                <div className="bg-white rounded px-2 py-1.5 border text-center" style={{ borderColor: P.i.cardBorder }}>
                  <p className="text-lg font-bold" style={{ color: P.i.secondary }}>
                    20%
                  </p>
                  <p className="text-slate-500" style={{ fontSize: "9px" }}>
                    10% Urea stock
                  </p>
                </div>
              </div>
              <p className="text-slate-400 mt-1" style={{ fontSize: "9px" }}>
                Work in BSC · Mix gently by swirling
              </p>
            </StepCard>

            <StepCard
              number="1H"
              title="Prepare 5% Nitric Acid"
              icon={AlertTriangle}
              accent={P.warn}
              accentLight={P.warnBg}
              accentBorder={P.warnBorder}
            >
              <p className="mt-0.5">For sample preservation</p>
              <div className="bg-white rounded px-2 py-1.5 border mt-1" style={{ borderColor: P.warnBorder }}>
                <p className="text-xs">
                  <span className="font-bold" style={{ color: P.warn }}>
                    950 mL
                  </span>{" "}
                  DI +{" "}
                  <span className="font-bold" style={{ color: P.warn }}>
                    50 mL
                  </span>{" "}
                  conc. HNO₃
                </p>
              </div>
              <p className="mt-1 flex items-center gap-1" style={{ fontSize: "9px", color: P.warn }}>
                <AlertTriangle className="w-2.5 h-2.5" />
                Always add acid to water! Fume hood.
              </p>
            </StepCard>
          </div>

          {/* ═══════════ PART II — TEAL ═══════════ */}
          <SectionHeader
            title="Part II — Experiment Setup & Serial Transfers"
            subtitle="Days 0–28 · Inoculation, transfers, and sampling"
            icon={Microscope}
            gradient={P.ii.gradient}
          />

          <IsolatePanel />
          <FlowArrow />

          <div className="grid grid-cols-2 gap-2 mb-2">
            <StepCard
              number="2A"
              title="Prepare Starter Cultures"
              icon={FlaskConical}
              accent={P.ii.primary}
              accentLight={P.ii.cardBg}
              accentBorder={P.ii.cardBorder}
            >
              <div className="space-y-1.5 mt-0.5">
                <div className="bg-white rounded px-2 py-1.5 border" style={{ borderColor: P.ii.cardBorder }}>
                  <p className="font-medium" style={{ color: P.ii.primary, fontSize: "10px" }}>
                    Test Isolates (20)
                  </p>
                  <p className="text-slate-600" style={{ fontSize: "9px" }}>
                    R2A plate → colony → 10 mL R2A broth in 50 mL Falcon
                  </p>
                  <p className="text-slate-600" style={{ fontSize: "9px" }}>
                    15°C, 150 RPM, 4 days (Day −4)
                  </p>
                </div>
                <div className="bg-white rounded px-2 py-1.5 border" style={{ borderColor: P.ii.cardBorder }}>
                  <p className="font-medium" style={{ color: P.ii.primary, fontSize: "10px" }}>
                    Positive Control (<em>S. pasteurii</em>)
                  </p>
                  <p className="text-slate-600" style={{ fontSize: "9px" }}>
                    −80°C freezer stock → 10 mL BHI broth in 50 mL Falcon
                  </p>
                  <p className="text-slate-600" style={{ fontSize: "9px" }}>
                    15°C, 150 RPM, 4 days
                  </p>
                </div>
              </div>
            </StepCard>

            <StepCard
              number="2B"
              title="Standardize Inocula"
              icon={BarChart3}
              accent={P.ii.secondary}
              accentLight={P.ii.cardBg}
              accentBorder={P.ii.cardBorder}
            >
              <div className="bg-white rounded-lg px-3 py-2 border text-center mt-1" style={{ borderColor: P.ii.cardBorder }}>
                <p className="text-slate-600" style={{ fontSize: "10px" }}>
                  Target OD₆₀₀
                </p>
                <p className="text-2xl font-bold" style={{ color: P.ii.secondary }}>
                  0.02–0.04
                </p>
              </div>
              <p className="text-slate-500 mt-1" style={{ fontSize: "9px" }}>
                V₁ = (0.025 × 3,000 µL) ÷ True OD · Round to nearest 5 µL
              </p>
            </StepCard>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-6">
            <StepCard
              number="2C"
              title="Inoculate — Day 0"
              icon={Microscope}
              accent={P.ii.light}
              accentLight={P.ii.cardBg}
              accentBorder={P.ii.cardBorder}
            >
              <div className="grid grid-cols-3 gap-1 mt-1">
                {[
                  ["60", "Isolates", "20×3"],
                  ["3", "Pos ctrl", "S. pasteurii"],
                  ["3", "Neg ctrl", "Uninoc."],
                ].map(([n, l, s]) => (
                  <div key={l} className="bg-white rounded px-1.5 py-1.5 border text-center" style={{ borderColor: P.ii.cardBorder }}>
                    <p className="text-lg font-bold" style={{ color: P.ii.primary }}>
                      {n}
                    </p>
                    <p className="text-slate-600" style={{ fontSize: "9px" }}>
                      {l}
                    </p>
                    <p className="text-slate-400 italic" style={{ fontSize: "8px" }}>
                      {s}
                    </p>
                  </div>
                ))}
              </div>
              <p
                className="rounded px-2 py-1 mt-1.5 flex items-center gap-1 border"
                style={{ fontSize: "9px", color: P.ii.darkText, background: P.ii.cardBg, borderColor: P.ii.cardBorder }}
              >
                <CheckCircle2 className="w-2.5 h-2.5" />
                T₀ samples · OD₆₀₀ · pH · 15°C, 150 RPM
              </p>
            </StepCard>

            <StepCard
              number="2D"
              title="Culture Maintenance"
              icon={RefreshCw}
              accent={P.ii.primary}
              accentLight={P.ii.cardBg}
              accentBorder={P.ii.cardBorder}
            >
              <div className="bg-white rounded px-2 py-1.5 border mt-0.5" style={{ borderColor: P.ii.cardBorder }}>
                <div className="flex gap-4">
                  <span className="text-xs flex items-center gap-1">
                    <Thermometer className="w-3 h-3" style={{ color: P.ii.secondary }} />
                    <span className="font-medium">15°C</span>
                  </span>
                  <span className="text-xs flex items-center gap-1">
                    <RefreshCw className="w-3 h-3" style={{ color: P.ii.secondary }} />
                    <span className="font-medium">150 RPM</span>
                  </span>
                </div>
              </div>
              <div className="rounded px-2 py-1.5 mt-1.5" style={{ background: "rgba(255,255,255,0.5)", border: `1px dashed ${P.ii.cardBorder}` }}>
                <p className="font-medium flex items-center gap-1" style={{ color: P.ii.darkText, fontSize: "10px" }}>
                  <Clock className="w-3 h-3" />
                  Transfer every 7 days (Days 7, 14, 21)
                </p>
                <p className="text-slate-600 mt-0.5" style={{ fontSize: "9px" }}>
                  30 µL → 3 mL fresh medium (1:100) · BSC · Label clearly
                </p>
              </div>
            </StepCard>
          </div>

          {/* ═══════════ SAMPLING — TEAL ═══════════ */}
          <SectionHeader title="Sampling" subtitle="3 timepoints per window · 12 total" icon={TestTube2} gradient={P.ii.gradient} />

          <TransferTimeline />

          <div className="grid grid-cols-3 gap-2 mb-6">
            <StepCard number="3A" title="Measure pH" icon={Droplets} accent={P.ii.primary} accentLight={P.ii.cardBg} accentBorder={P.ii.cardBorder}>
              <p className="mt-0.5">Record at each timepoint · Tracks alkalinization from urea hydrolysis</p>
            </StepCard>

            <StepCard number="3B" title="Measure OD₆₀₀" icon={Eye} accent={P.ii.secondary} accentLight={P.ii.cardBg} accentBorder={P.ii.cardBorder}>
              <div className="bg-white rounded px-2 py-1.5 border mt-0.5" style={{ borderColor: P.ii.cardBorder }}>
                <p className="text-xs font-medium" style={{ color: P.ii.secondary }}>
                  Direct reads in glass tubes
                </p>
                <p className="text-slate-500" style={{ fontSize: "9px" }}>
                  Blank with uninoculated neg. ctrl tube
                </p>
              </div>
              <p className="text-slate-400 mt-1" style={{ fontSize: "9px" }}>
                Same spectrophotometer · Same tube orientation · Record time (HH:MM)
              </p>
            </StepCard>

            <StepCard
              number="3C"
              title="Preserve Urea Samples"
              icon={TestTube2}
              accent={P.ii.light}
              accentLight={P.ii.cardBg}
              accentBorder={P.ii.cardBorder}
            >
              <div className="bg-white rounded px-2 py-1.5 border mt-0.5" style={{ borderColor: P.ii.cardBorder }}>
                <p className="text-xs">
                  <span className="font-medium" style={{ color: P.ii.primary }}>
                    30 µL
                  </span>{" "}
                  sample +{" "}
                  <span className="font-medium" style={{ color: P.ii.primary }}>
                    570 µL
                  </span>{" "}
                  5% HNO₃
                </p>
                <p className="text-slate-400" style={{ fontSize: "9px" }}>
                  1:20 dilution · Vortex · 4°C
                </p>
              </div>
              <p className="mt-1 flex items-center gap-1" style={{ fontSize: "9px", color: P.amber }}>
                <AlertTriangle className="w-2.5 h-2.5" />
                Matrix-match standards!
              </p>
            </StepCard>
          </div>

          {/* ═══════════ PART III — EMERALD ═══════════ */}
          <SectionHeader
            title="Part III — Reading the Jung Assay"
            subtitle="Colorimetric urea quantification · Can be batched"
            icon={FlaskConical}
            gradient={P.iii.gradient}
          />

          <div className="flex flex-wrap justify-center gap-2 mb-3">
            <InfoChip label="λ" value="505 nm" icon={Eye} color={P.iii.primary} />
            <InfoChip label="Range" value="0–2 g/L" icon={Target} color={P.iii.secondary} />
            <InfoChip label="Incubation" value="37°C, 30 min" icon={ThermometerSun} color={P.iii.light} />
            <InfoChip label="Scale" value="216 wells/tp (3 plates)" icon={BarChart3} color={P.iii.primary} />
          </div>

          <StepCard
            number="4A"
            title="Prepare Reagents"
            icon={Beaker}
            accent={P.iii.primary}
            accentLight={P.iii.cardBg}
            accentBorder={P.iii.cardBorder}
            className="mb-2"
          >
            <div className="grid grid-cols-3 gap-1.5 mt-1">
              {[
                { label: "R1", name: "Brij-L23", detail: "33% v/v · 1 mL + 29 mL DI" },
                { label: "R2", name: "OPA", detail: "200 mg OPA + 74 mL H₂SO₄ + R1 → 1 L" },
                { label: "R3", name: "NED", detail: "600 mg NED + 5 g boric + 222 mL H₂SO₄ + R1 → 1 L" },
              ].map((r) => (
                <div key={r.label} className="bg-white rounded px-2 py-1.5 border" style={{ borderColor: P.iii.cardBorder }}>
                  <p className="font-bold uppercase text-slate-400" style={{ fontSize: "9px" }}>
                    {r.label}
                  </p>
                  <p className="font-medium text-xs" style={{ color: P.iii.primary }}>
                    {r.name}
                  </p>
                  <p className="text-slate-500" style={{ fontSize: "9px" }}>
                    {r.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-slate-400 mt-1" style={{ fontSize: "9px" }}>
              Amber bottles · RT · Stable several weeks · Discard NED if dark brown
            </p>
          </StepCard>

          <div className="grid grid-cols-2 gap-2 mb-2">
            <StepCard
              number="4B"
              title="Standards (Fresh Daily)"
              icon={BarChart3}
              accent={P.iii.secondary}
              accentLight={P.iii.cardBg}
              accentBorder={P.iii.cardBorder}
            >
              <div className="bg-white rounded px-2 py-1.5 border mt-0.5" style={{ borderColor: P.iii.cardBorder }}>
                <p className="text-xs font-medium text-slate-700 mb-1">Stock: 2.0 g/L (0.200 g / 100 mL)</p>
                <div className="flex items-center gap-0.5 flex-wrap">
                  {["0.00", "0.25", "0.50", "1.00", "1.50", "2.00"].map((c, i) => (
                    <React.Fragment key={c}>
                      <span
                        className="rounded px-1.5 py-0.5 font-medium"
                        style={{ background: `rgba(4,120,87,${0.08 + i * 0.15})`, color: P.iii.darkText, fontSize: "9px" }}
                      >
                        {c}
                      </span>
                      {i < 5 && <ArrowRight className="w-2 h-2 text-slate-300" />}
                    </React.Fragment>
                  ))}
                  <span className="text-slate-400 ml-1" style={{ fontSize: "9px" }}>
                    g/L
                  </span>
                </div>
              </div>
            </StepCard>

            <StepCard
              number="4C"
              title="Load Samples & Standards"
              icon={Pipette}
              accent={P.iii.light}
              accentLight={P.iii.cardBg}
              accentBorder={P.iii.cardBorder}
            >
              <p className="mt-0.5">
                Pipette{" "}
                <span className="font-medium" style={{ color: P.iii.primary }}>
                  10 µL
                </span>{" "}
                per well (triplicates)
              </p>
              <p className="text-slate-400 mt-1" style={{ fontSize: "9px" }}>
                66 samples × 3 + 18 std = 216 wells → 3 plates/tp
              </p>
            </StepCard>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-2">
            <StepCard
              number="4D"
              title="Add Reagent 2 (OPA)"
              icon={FlaskConical}
              accent={P.iii.primary}
              accentLight={P.iii.cardBg}
              accentBorder={P.iii.cardBorder}
            >
              <p className="mt-0.5">
                <span className="font-medium" style={{ color: P.iii.primary }}>
                  125 µL
                </span>{" "}
                to all wells · Multi-channel · Slowly
              </p>
            </StepCard>

            <StepCard
              number="4E"
              title="Add Reagent 3 (NED)"
              icon={FlaskConical}
              accent={P.iii.secondary}
              accentLight={P.iii.cardBg}
              accentBorder={P.iii.cardBorder}
            >
              <p className="mt-0.5">
                <span className="font-medium" style={{ color: P.iii.secondary }}>
                  125 µL
                </span>{" "}
                to all wells · Total: <span className="font-medium">260 µL</span>/well
              </p>
            </StepCard>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-6">
            <StepCard number="4F" title="Mix & Incubate" icon={Timer} accent={P.iii.light} accentLight={P.iii.cardBg} accentBorder={P.iii.cardBorder}>
              <div className="grid grid-cols-2 gap-1.5 mt-1">
                <div className="bg-white rounded px-2 py-2 border text-center" style={{ borderColor: P.iii.cardBorder }}>
                  <p className="text-xl font-bold" style={{ color: P.iii.secondary }}>
                    450
                  </p>
                  <p className="text-slate-500" style={{ fontSize: "9px" }}>
                    RPM · 1 min
                  </p>
                </div>
                <div className="bg-white rounded px-2 py-2 border text-center" style={{ borderColor: P.iii.cardBorder }}>
                  <p className="text-xl font-bold" style={{ color: P.iii.secondary }}>
                    37°C
                  </p>
                  <p className="text-slate-500" style={{ fontSize: "9px" }}>
                    30 min · lid on
                  </p>
                </div>
              </div>
            </StepCard>

            <StepCard number="4G" title="Read at 505 nm" icon={Eye} accent={P.iii.primary} accentLight={P.iii.cardBg} accentBorder={P.iii.cardBorder}>
              <div className="bg-white rounded px-2 py-1.5 border mt-0.5" style={{ borderColor: P.iii.cardBorder }}>
                <div className="flex items-center gap-0.5">
                  {[
                    { color: "#fefce8", label: "0" },
                    { color: "#fde68a", label: ".25" },
                    { color: "#fdba74", label: ".50" },
                    { color: "#f9a8d4", label: "1.0" },
                    { color: "#f472b6", label: "1.5" },
                    { color: "#ec4899", label: "2.0" },
                  ].map(({ color, label }) => (
                    <div key={label} className="flex-1 text-center">
                      <div className="h-4 rounded" style={{ background: color }} />
                      <p className="text-slate-400" style={{ fontSize: "8px" }}>
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-1 flex items-center gap-1" style={{ fontSize: "9px", color: P.warn }}>
                <AlertTriangle className="w-2.5 h-2.5" />
                Hazardous waste only — no drain
              </p>
            </StepCard>
          </div>

          {/* ═══════════ EXPANDABLE SECTIONS ═══════════ */}
          <div className="space-y-2 mb-6">
            <ExpandableSection title="Quality Control Criteria" icon={CheckCircle2} defaultOpen={true} accentColor={P.iii.secondary}>
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["R² ≥ 0.97", "Standard Curve", "(pref. ≥ 0.99)"],
                  ["< 5%", "Triplicate CV", ""],
                  ["< 0.05", "Blank Abs.", ""],
                ].map(([v, l, n]) => (
                  <div key={l} className="rounded-lg p-3 text-center" style={{ background: P.iii.cardBg, border: `1px solid ${P.iii.cardBorder}` }}>
                    <p className="text-2xl font-bold" style={{ color: P.iii.secondary }}>
                      {v}
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">{l}</p>
                    {n && (
                      <p className="text-slate-400" style={{ fontSize: "9px" }}>
                        {n}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </ExpandableSection>

            <ExpandableSection title="Analysis Workflow" icon={BarChart3} accentColor={P.iii.primary}>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg p-3" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                  <p className="font-medium text-xs text-slate-700 mb-2">Standard Curve</p>
                  <div className="text-slate-600 space-y-1" style={{ fontSize: "10px" }}>
                    <p>1. Average triplicates: A_mean = (A₁+A₂+A₃)/3</p>
                    <p>2. Blank subtract: A_corr = A_mean − A_blank</p>
                    <p>3. Plot A_corr vs [urea]</p>
                    <p>4. Linear fit: y = mx + b (R² ≥ 0.97)</p>
                  </div>
                </div>
                <div className="rounded-lg p-3" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                  <p className="font-medium text-xs text-slate-700 mb-2">Sample Concentration</p>
                  <div className="text-slate-600 space-y-1" style={{ fontSize: "10px" }}>
                    <p>1. Average & blank-subtract samples</p>
                    <p>2. C_meas = (A_corr − b) / m</p>
                    <p>3. C_sample = C_meas × DF</p>
                  </div>
                </div>
              </div>
            </ExpandableSection>

            <div className="grid grid-cols-2 gap-2">
              <ExpandableSection title="Controls" icon={Target} accentColor={P.ii.secondary}>
                <div className="space-y-2">
                  <div className="rounded-lg p-3" style={{ background: P.i.cardBg, border: `1px solid ${P.i.cardBorder}` }}>
                    <p className="font-medium text-xs" style={{ color: P.i.primary }}>
                      ➕ Positive — <em>S. pasteurii</em> (×3)
                    </p>
                    <p className="text-slate-600" style={{ fontSize: "10px" }}>
                      Expect rapid urea depletion
                    </p>
                  </div>
                  <div className="rounded-lg p-3" style={{ background: "#f8fafc", border: "1px solid #cbd5e1" }}>
                    <p className="font-medium text-xs text-slate-700">➖ Negative — Uninoculated (×3)</p>
                    <p className="text-slate-600" style={{ fontSize: "10px" }}>
                      Urea stays ~20 g/L
                    </p>
                  </div>
                </div>
              </ExpandableSection>

              <ExpandableSection title="Safety" icon={AlertTriangle} accentColor={P.warn}>
                <div className="rounded-lg p-3" style={{ background: P.amberBg, border: `1px solid ${P.amberBorder}` }}>
                  <p className="font-medium text-xs mb-1.5" style={{ color: P.amber }}>
                    ⚠️ Fume hood for all acid/reagent work
                  </p>
                  <div className="grid grid-cols-2 gap-2" style={{ fontSize: "10px" }}>
                    <div className="text-slate-600 space-y-0.5">
                      <p className="font-medium text-slate-700">Hazards:</p>
                      <p>• H₂SO₄ — Corrosive</p>
                      <p>• HNO₃ — Oxidizer</p>
                      <p>• OPA — Toxic</p>
                      <p>• NED — Carcinogen risk</p>
                    </div>
                    <div className="text-slate-600 space-y-0.5">
                      <p className="font-medium text-slate-700">PPE:</p>
                      <p>• Lab coat</p>
                      <p>• Nitrile gloves</p>
                      <p>• Safety glasses/shield</p>
                    </div>
                  </div>
                </div>
              </ExpandableSection>
            </div>

            <ExpandableSection title="Materials Estimate" icon={Beaker} accentColor={P.ii.primary}>
              <table className="w-full text-xs">
                <thead>
                  <tr style={{ borderBottom: "2px solid #e2e8f0" }}>
                    <th className="py-1.5 pr-3 text-left text-slate-600 font-medium">Item</th>
                    <th className="py-1.5 pr-3 text-left text-slate-600 font-medium">Qty</th>
                    <th className="py-1.5 text-left text-slate-600 font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600" style={{ fontSize: "11px" }}>
                  {[
                    ["Growth medium", "~1 L", "~230 mL × 4 transfers"],
                    ["Glass culture tubes", "~66/transfer", "Combusted; replaced each window"],
                    ["Microcentrifuge tubes", "~792", "66/tp × 12 timepoints"],
                    ["96-well plates (Jung)", "~36", "3/tp × 12"],
                    ["50 mL Falcon tubes", "~25", "For starter cultures"],
                  ].map(([item, qty, notes]) => (
                    <tr key={item} style={{ borderBottom: "1px solid #f1f5f9" }}>
                      <td className="py-1.5 pr-3 font-medium text-slate-700">{item}</td>
                      <td className="py-1.5 pr-3 font-semibold" style={{ color: P.ii.secondary }}>
                        {qty}
                      </td>
                      <td className="py-1.5 text-slate-500">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ExpandableSection>
          </div>

          <div className="text-center text-xs pb-4" style={{ color: "#94a3b8" }}>
            <p>
              Jung, D., Biggs, H., Erikson, J., & Ledyard, P. U. (1975) <em>Clinical Chemistry</em> 21(8):1136–1140
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
