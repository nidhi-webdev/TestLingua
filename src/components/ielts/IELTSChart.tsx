"use client";

import {
  LineChart, Line,
  BarChart, Bar,
  PieChart, Pie, Cell,
  ResponsiveContainer,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LabelList,
} from "recharts";

// ── Shared IELTS styles ────────────────────────────────────────────────────
const AXIS_STYLE = { fontSize: 11, fill: "#374151", fontFamily: "Georgia, serif" };
const GRID_STYLE = { stroke: "#e5e7eb", strokeDasharray: "3 3" };
const LEGEND_STYLE = { fontSize: 12, fontFamily: "Georgia, serif" };

// ─────────────────────────────────────────────────────────────────────────────
// LINE GRAPH  — Fish & Meat consumption 1979–2004
// ─────────────────────────────────────────────────────────────────────────────
const lineData = [
  { year: "1979", Chicken: 150, Beef: 215, Lamb: 150, Fish: 60 },
  { year: "1984", Chicken: 175, Beef: 200, Lamb: 140, Fish: 58 },
  { year: "1989", Chicken: 200, Beef: 185, Lamb: 125, Fish: 56 },
  { year: "1994", Chicken: 235, Beef: 170, Lamb: 110, Fish: 57 },
  { year: "1999", Chicken: 250, Beef: 160, Lamb: 100, Fish: 55 },
  { year: "2004", Chicken: 260, Beef: 155, Lamb: 90,  Fish: 52 },
];
const LINE_COLORS: Record<string, string> = {
  Chicken: "#7c3aed", Beef: "#db2777", Lamb: "#d97706", Fish: "#0891b2",
};

function LineGraphChart() {
  return (
    <div className="font-serif">
      <p className="text-xs text-center text-slate-500 mb-4 leading-relaxed italic">
        Figure 1: Consumption of fish and selected meats in a European country, 1979–2004 (grams per person per week)
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={lineData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid {...GRID_STYLE} />
          <XAxis dataKey="year" tick={AXIS_STYLE} label={{ value: "Year", position: "insideBottom", offset: -2, style: AXIS_STYLE }} />
          <YAxis tick={AXIS_STYLE} label={{ value: "Grams / person / week", angle: -90, position: "insideLeft", offset: 10, style: AXIS_STYLE }} domain={[40, 280]} />
          <Tooltip contentStyle={{ fontSize: 12, fontFamily: "Georgia, serif" }} />
          <Legend wrapperStyle={LEGEND_STYLE} />
          {Object.keys(LINE_COLORS).map((key) => (
            <Line key={key} type="monotone" dataKey={key} stroke={LINE_COLORS[key]} strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// BAR CHART  — UK telephone call minutes 1995–2002
// ─────────────────────────────────────────────────────────────────────────────
const barData = [
  { year: "1995", Local: 72,  National: 38, Mobile: 2  },
  { year: "1996", Local: 74,  National: 40, Mobile: 4  },
  { year: "1997", Local: 76,  National: 43, Mobile: 8  },
  { year: "1998", Local: 75,  National: 42, Mobile: 15 },
  { year: "1999", Local: 74,  National: 45, Mobile: 25 },
  { year: "2000", Local: 73,  National: 47, Mobile: 38 },
  { year: "2001", Local: 72,  National: 46, Mobile: 46 },
  { year: "2002", Local: 70,  National: 44, Mobile: 52 },
];
const BAR_COLORS = { Local: "#7c3aed", National: "#0891b2", Mobile: "#d97706" };

function BarChartView() {
  return (
    <div>
      <p className="text-xs text-center text-slate-500 mb-4 italic">
        Figure 1: Total minutes of telephone calls in the UK by category, 1995–2002 (billions)
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={barData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid {...GRID_STYLE} />
          <XAxis dataKey="year" tick={AXIS_STYLE} />
          <YAxis tick={AXIS_STYLE} label={{ value: "Billions of minutes", angle: -90, position: "insideLeft", offset: 12, style: AXIS_STYLE }} />
          <Tooltip contentStyle={{ fontSize: 12 }} />
          <Legend wrapperStyle={LEGEND_STYLE} />
          <Bar dataKey="Local"    fill={BAR_COLORS.Local}    />
          <Bar dataKey="National" fill={BAR_COLORS.National} />
          <Bar dataKey="Mobile"   fill={BAR_COLORS.Mobile}   />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PIE CHART  — Main reasons for migration to & from UK, 2007
// ─────────────────────────────────────────────────────────────────────────────
const pieInData = [
  { name: "Work",      value: 34 },
  { name: "Study",     value: 28 },
  { name: "Family",    value: 19 },
  { name: "Other",     value: 19 },
];
const pieOutData = [
  { name: "Work",      value: 27 },
  { name: "Study",     value: 8  },
  { name: "Family",    value: 21 },
  { name: "Other",     value: 44 },
];
const PIE_COLORS = ["#7c3aed", "#0891b2", "#d97706", "#6b7280"];

const renderPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
  const RADIAN = Math.PI / 180;
  const r = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + r * Math.cos(-midAngle * RADIAN) * 1.6;
  const y = cy + r * Math.sin(-midAngle * RADIAN) * 1.6;
  return (
    <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fontSize={10} fill="#374151">
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function PieChartView() {
  return (
    <div>
      <p className="text-xs text-center text-slate-500 mb-2 italic">
        Figure 1: Main reasons for migration to and from the UK, 2007
      </p>
      <div className="grid grid-cols-2 gap-4">
        {[{ label: "Immigration", data: pieInData }, { label: "Emigration", data: pieOutData }].map(({ label, data }) => (
          <div key={label}>
            <p className="text-xs text-center font-bold text-slate-700 mb-1">{label}</p>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie data={data} cx="50%" cy="50%" outerRadius={65} dataKey="value" labelLine={false} label={renderPieLabel}>
                  {data.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ fontSize: 11 }} formatter={(v: number) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TABLE  — Consumer spending (%) in five countries, 2002
// ─────────────────────────────────────────────────────────────────────────────
const tableData = [
  { country: "Ireland",    food: "28.9%", clothing: "6.4%", leisure: "4.0%" },
  { country: "Italy",      food: "16.3%", clothing: "9.0%", leisure: "3.4%" },
  { country: "Spain",      food: "18.8%", clothing: "6.5%", leisure: "1.9%" },
  { country: "Sweden",     food: "15.8%", clothing: "5.4%", leisure: "3.2%" },
  { country: "Turkey",     food: "32.1%", clothing: "6.7%", leisure: "4.3%" },
];

function TableView() {
  return (
    <div>
      <p className="text-xs text-center text-slate-500 mb-4 italic">
        Table 1: Percentage of consumer spending on different items in five countries, 2002
      </p>
      <table className="w-full text-sm border-collapse border border-slate-300 font-serif">
        <thead>
          <tr className="bg-slate-100">
            <th className="border border-slate-300 px-3 py-2 text-left text-xs font-bold text-slate-700">Country</th>
            <th className="border border-slate-300 px-3 py-2 text-center text-xs font-bold text-slate-700">Food &amp; Non-alcoholic<br />beverages</th>
            <th className="border border-slate-300 px-3 py-2 text-center text-xs font-bold text-slate-700">Clothing &amp;<br />footwear</th>
            <th className="border border-slate-300 px-3 py-2 text-center text-xs font-bold text-slate-700">Leisure &amp;<br />Education</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, i) => (
            <tr key={row.country} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
              <td className="border border-slate-300 px-3 py-2 font-semibold text-slate-800">{row.country}</td>
              <td className="border border-slate-300 px-3 py-2 text-center text-slate-700">{row.food}</td>
              <td className="border border-slate-300 px-3 py-2 text-center text-slate-700">{row.clothing}</td>
              <td className="border border-slate-300 px-3 py-2 text-center text-slate-700">{row.leisure}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAP  — Islip town centre, now vs. planned 2024
// ─────────────────────────────────────────────────────────────────────────────
function MapView() {
  return (
    <div>
      <p className="text-xs text-center text-slate-500 mb-4 italic">
        Figure 1: Maps showing the centre of Islip as it is now (left) and the development plan (right)
      </p>
      <div className="grid grid-cols-2 gap-4">
        {["Now (2004)", "Proposed (2024)"].map((label, i) => (
          <div key={label} className="border border-slate-300 rounded-lg p-3 bg-white">
            <p className="text-xs font-bold text-center text-slate-700 mb-2">{label}</p>
            <svg viewBox="0 0 200 160" className="w-full" style={{ fontFamily: "Georgia, serif" }}>
              {/* Main road */}
              <rect x="0" y="70" width="200" height="20" fill="#fde68a" stroke="#92400e" strokeWidth="1" />
              <text x="100" y="83" textAnchor="middle" fontSize="7" fill="#92400e" fontWeight="bold">MAIN ROAD</text>

              {/* North area */}
              <rect x="10"  y="10" width="80"  height="55" fill="#bbf7d0" stroke="#166534" strokeWidth="1" />
              <text x="50"  y="40" textAnchor="middle" fontSize="8" fill="#166534">Park</text>

              {/* Shops / new housing */}
              {i === 0 ? (
                <>
                  <rect x="100" y="10" width="90"  height="55" fill="#ddd6fe" stroke="#5b21b6" strokeWidth="1" />
                  <text x="145" y="40" textAnchor="middle" fontSize="8" fill="#5b21b6">Shops</text>
                </>
              ) : (
                <>
                  <rect x="100" y="10" width="40"  height="55" fill="#ddd6fe" stroke="#5b21b6" strokeWidth="1" />
                  <text x="120" y="40" textAnchor="middle" fontSize="7" fill="#5b21b6">Shops</text>
                  <rect x="145" y="10" width="45"  height="55" fill="#fecaca" stroke="#991b1b" strokeWidth="1" />
                  <text x="167" y="40" textAnchor="middle" fontSize="7" fill="#991b1b">Housing</text>
                </>
              )}

              {/* South */}
              <rect x="10"  y="95" width="80"  height="55" fill="#fef9c3" stroke="#92400e" strokeWidth="1" />
              <text x="50"  y="125" textAnchor="middle" fontSize="8" fill="#92400e">School</text>

              {i === 0 ? (
                <>
                  <rect x="100" y="95" width="90"  height="55" fill="#e0f2fe" stroke="#0369a1" strokeWidth="1" />
                  <text x="145" y="125" textAnchor="middle" fontSize="8" fill="#0369a1">Farmland</text>
                </>
              ) : (
                <>
                  <rect x="100" y="95" width="90"  height="55" fill="#fecaca" stroke="#991b1b" strokeWidth="1" />
                  <text x="145" y="125" textAnchor="middle" fontSize="8" fill="#991b1b">New Housing</text>
                </>
              )}

              {/* Compass */}
              <text x="185" y="15" fontSize="10" fill="#374151">N</text>
              <line x1="186" y1="17" x2="186" y2="27" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow)" />
            </svg>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-3 justify-center text-xs flex-wrap">
        {[["#bbf7d0","#166534","Park"],["#ddd6fe","#5b21b6","Shops"],["#fecaca","#991b1b","Housing"],["#fef9c3","#92400e","School"],["#e0f2fe","#0369a1","Farmland"]].map(([bg,c,label]) => (
          <span key={label} className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm border" style={{ background: bg, borderColor: c }} /><span style={{ color: c }}>{label}</span></span>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROCESS DIAGRAM  — Brick manufacturing
// ─────────────────────────────────────────────────────────────────────────────
const processSteps = [
  { step: 1, label: "Clay Digging",   detail: "Heavy machinery digs clay from the ground" },
  { step: 2, label: "Sand & Water",   detail: "Clay is mixed with sand and water" },
  { step: 3, label: "Moulding",       detail: "Wire cut, mould, or extrusion method" },
  { step: 4, label: "Drying",         detail: "Brick-shaped clay dried for 24–48 hours" },
  { step: 5, label: "Kiln Firing",    detail: "Heated at 200°C then 1300°C in kiln" },
  { step: 6, label: "Cooling",        detail: "Cooling chambers, 48–72 hours" },
  { step: 7, label: "Packaging",      detail: "Graded, packaged, and delivered" },
];

function ProcessView() {
  return (
    <div>
      <p className="text-xs text-center text-slate-500 mb-5 italic">
        Figure 1: The process by which bricks are manufactured for the building industry
      </p>
      <div className="flex flex-col gap-0 relative">
        {processSteps.map((s, i) => (
          <div key={s.step} className="flex items-start gap-3 relative">
            {/* Connector line */}
            {i < processSteps.length - 1 && (
              <div className="absolute left-[19px] top-8 bottom-0 w-0.5 bg-purple-200 z-0" />
            )}
            {/* Circle */}
            <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold shadow-md">
              {s.step}
            </div>
            {/* Text */}
            <div className="pb-5">
              <p className="font-bold text-slate-800 text-sm leading-tight">{s.label}</p>
              <p className="text-xs text-slate-500 mt-0.5">{s.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main export — pick chart by test ID
// ─────────────────────────────────────────────────────────────────────────────
export default function IELTSChart({ testId }: { testId: string }) {
  if (testId === "task1-line-graph")  return <LineGraphChart />;
  if (testId === "task1-bar-chart")   return <BarChartView />;
  if (testId === "task1-pie-chart")   return <PieChartView />;
  if (testId === "task1-table")       return <TableView />;
  if (testId === "task1-map")         return <MapView />;
  if (testId === "task1-process")     return <ProcessView />;
  return null; // Task 2 — no visual
}
