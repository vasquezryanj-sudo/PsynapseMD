export default function CycleDiagram() {
  // Left circle nodes (hexagonal arrangement, 6 nodes)
  // Center of left half: ~200, 160. Radius ~100
  const cx = 200;
  const cy = 160;
  const r = 95;
  const nodeLabels = [
    "Note Written",
    "Claim Submitted",
    "Denied",
    "Re-documented",
    "Resubmitted",
    "Denied Again",
  ];

  // Positions for 6 nodes clockwise from top
  const nodeAngles = [-90, -30, 30, 90, 150, 210].map((deg) => (deg * Math.PI) / 180);
  const nodes = nodeAngles.map((angle) => ({
    x: cx + r * Math.cos(angle),
    y: cy + r * Math.sin(angle),
  }));

  // Build arrow paths between consecutive nodes (curved arcs)
  const arrows = nodes.map((start, i) => {
    const end = nodes[(i + 1) % nodes.length];
    // Midpoint with slight offset toward center for curvature
    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2;
    // Push control point toward center
    const cpX = midX + (cx - midX) * 0.2;
    const cpY = midY + (cy - midY) * 0.2;
    return { start, end, cpX, cpY };
  });

  // Right side nodes
  const rightNodes = [
    { x: 490, y: 160, label: "Dictate" },
    { x: 620, y: 160, label: "Review" },
    { x: 750, y: 160, label: "Authorize" },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox="0 0 870 320"
        className="w-full max-w-4xl mx-auto"
        aria-label="Documentation cycle comparison diagram"
        role="img"
      >
        {/* ─── LEFT HALF: The Documentation Trap ─── */}
        {/* Title */}
        <text
          x="200"
          y="28"
          textAnchor="middle"
          className="text-sm"
          style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
          fontSize="13"
          fontWeight="600"
          fill="#9CA3AF"
        >
          The Documentation Trap
        </text>

        {/* Arrow paths */}
        {arrows.map((arrow, i) => {
          // Calculate unit vector from start to end
          const dx = arrow.end.x - arrow.start.x;
          const dy = arrow.end.y - arrow.start.y;
          const len = Math.sqrt(dx * dx + dy * dy);
          const ux = dx / len;
          const uy = dy / len;
          // Offset start/end by node radius (26px)
          const nr = 26;
          const sx = arrow.start.x + ux * nr;
          const sy = arrow.start.y + uy * nr;
          const ex = arrow.end.x - ux * nr;
          const ey = arrow.end.y - uy * nr;

          return (
            <g key={i}>
              <defs>
                <marker
                  id={`arrowGrey${i}`}
                  markerWidth="8"
                  markerHeight="8"
                  refX="6"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0,0 L0,6 L8,3 z" fill="#9CA3AF" />
                </marker>
              </defs>
              <path
                d={`M ${sx},${sy} Q ${arrow.cpX},${arrow.cpY} ${ex},${ey}`}
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                markerEnd={`url(#arrowGrey${i})`}
              />
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={i}>
            <circle cx={node.x} cy={node.y} r={26} fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1.5" />
            <text
              x={node.x}
              y={node.y - 3}
              textAnchor="middle"
              fontSize="7.5"
              fontWeight="500"
              fill="#6B7280"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              {nodeLabels[i].includes(" ") ? (
                <>
                  <tspan x={node.x} dy="0">{nodeLabels[i].split(" ")[0]}</tspan>
                  <tspan x={node.x} dy="9">{nodeLabels[i].split(" ").slice(1).join(" ")}</tspan>
                </>
              ) : (
                nodeLabels[i]
              )}
            </text>
          </g>
        ))}

        {/* ─── Divider ─── */}
        <line
          x1="420"
          y1="40"
          x2="420"
          y2="290"
          stroke="#E5E3DC"
          strokeWidth="1.5"
          strokeDasharray="6,4"
        />

        {/* ─── RIGHT HALF: The PsynapseMD Way ─── */}
        {/* Title */}
        <text
          x="620"
          y="28"
          textAnchor="middle"
          fontSize="13"
          fontWeight="600"
          fill="#0A7C6E"
          style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
        >
          The PsynapseMD Way
        </text>

        {/* Arrow markers for right side */}
        <defs>
          <marker
            id="arrowTeal"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L8,3 z" fill="#0A7C6E" />
          </marker>
        </defs>

        {/* Connecting arrows */}
        {[0, 1].map((i) => {
          const start = rightNodes[i];
          const end = rightNodes[i + 1];
          const nr = 34;
          return (
            <line
              key={i}
              x1={start.x + nr}
              y1={start.y}
              x2={end.x - nr}
              y2={end.y}
              stroke="#0A7C6E"
              strokeWidth="2"
              markerEnd="url(#arrowTeal)"
            />
          );
        })}

        {/* Right nodes */}
        {rightNodes.map((node, i) => (
          <g key={i}>
            <circle cx={node.x} cy={node.y} r={34} fill="#0A7C6E" />
            <text
              x={node.x}
              y={node.y + 5}
              textAnchor="middle"
              fontSize="10"
              fontWeight="600"
              fill="white"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Subtitles */}
        <text
          x="200"
          y="290"
          textAnchor="middle"
          fontSize="11"
          fill="#9CA3AF"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Repeated denials, rework, lost revenue
        </text>
        <text
          x="620"
          y="290"
          textAnchor="middle"
          fontSize="11"
          fill="#0A7C6E"
          fontWeight="500"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Structured for authorization from the start
        </text>
      </svg>
    </div>
  );
}
