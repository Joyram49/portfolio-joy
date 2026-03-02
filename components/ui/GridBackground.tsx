"use client";

export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Radial glow top-left */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-10 blur-[100px]"
        style={{
          background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)",
        }}
      />

      {/* Radial glow bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-8 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #7928ca 0%, transparent 70%)",
        }}
      />

      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-5 blur-[150px]"
        style={{
          background: "radial-gradient(ellipse, #00d4ff 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
