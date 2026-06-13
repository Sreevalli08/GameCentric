import React, { useEffect, useState } from "react";
import {
  LuPanelLeft,
  LuTrophy,
  LuPlay,
  LuGamepad2,
  LuShieldAlert,
  LuReceiptText,
  LuCircleHelp,
  LuChartColumnIncreasing,
  LuShieldQuestion,
  LuSearch,
  LuBell,
  LuLogOut,
} from "react-icons/lu";

const mainNavItems = [
  { icon: <LuTrophy size={20} />, label: "Tournaments" },
  { icon: <LuPlay size={20} />, label: "Play Hub" },
  { icon: <LuGamepad2 size={20} />, label: "Casual Games" },
  { icon: <LuChartColumnIncreasing size={20} />, label: "Platform Games" },
];

const supportNavItems = [
  { icon: <LuReceiptText size={20} />, label: "Terms of Service" },
  { icon: <LuCircleHelp size={20} />, label: "Help & Support" },
  { icon: <LuShieldAlert size={20} />, label: "Privacy Policy" },
  { icon: <LuShieldQuestion size={20} />, label: "FAQ" },
];

//  NavItem 
const NavItem = ({ icon, label, active, setActive, collapsed}) => (
  <div
    onClick={() => setActive(label)}
    style={{
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 14px",
      cursor: "pointer",
      background: active === label ? "#1a1a1a" : "transparent",
      borderLeft: active === label ? "2px solid #4ade80" : "2px solid transparent",
      color: active === label ? "#4ade80" : "#fdf8f8",
      whiteSpace: "nowrap",
      transition: "background 0.15s, color 0.15s",
      fontSize: 13,
    }}
    onMouseEnter={(e) => {
      if (active !== label) e.currentTarget.style.background = "#1f1f1f";
    }}
    onMouseLeave={(e) => {
      if (active !== label) e.currentTarget.style.background = "transparent";
    }}
  >
    {icon}
   {!collapsed && <span>{label}</span>}
  </div>
);

function Navbar() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Play Hub");
  const [supportOpen, setSupportOpen] = useState(false);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [platform, setPlatform] = useState("all");
  const [genre, setGenre] = useState("");
  const [sort, setSort] = useState("relevance");

useEffect(() => {
  const fetchGames = async () => {
    try {
      setLoading(true);
       const apiPlatform = platform === "mobile" ? "all" : platform;

      let apiUrl = `https://www.freetogame.com/api/games`;

      if (apiPlatform !== "all") {
        apiUrl += `?platform=${apiPlatform}`;
      }

    if (genre) {
  apiUrl += `${apiUrl.includes("?") ? "&" : "?"}category=${genre}`;
}

if (sort) {
  apiUrl += `${apiUrl.includes("?") ? "&" : "?"}sort-by=${sort}`;
}

      console.log(apiUrl);

      const res = await fetch(apiUrl);
      const data = await res.json();

      console.log("SUCCESS:", data);
      if (Array.isArray(data)) {
  setGames(data);
} else {
  console.error("API returned:", data);
  setGames([]);
}
    } catch (err) {
      console.error("ERROR", err);
    } finally {
      setLoading(false);
    }
  };

  fetchGames();
}, [platform, genre, sort]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: "#0e0e0e" }}>

      {/* ── Topbar ── */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "0 10px",
        height: 56,
        background: "#111",
        borderBottom: "1px solid #2a2a2a",
        flexShrink: 0,
      }}>

        {/* G Logo */}
        <div style={{
          width: 34, height: 34, borderRadius: 8, background: "#1a1a1a",
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
          <span style={{ color: "#4ade80", fontSize: 30, fontStyle: "italic", fontWeight: 700, lineHeight: 1 }}>G</span>
        </div>

            {!collapsed && (
          <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
            <div style={{ color: "#fff", fontSize: 13, fontWeight: 600, letterSpacing: "0.05em" }}>
              GAME CENTRIC
            </div>
          </div>
        )}

        <div style={{flex:0.5}}/>

        {/* Toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{ background: "none", border: "none", cursor: "pointer",
            color: "#888", display: "flex", alignItems: "center", padding: 4, flexShrink: 0 }}
        >
          <LuPanelLeft size={20} />
        </button>

        {/* Search */}
        <div style={{
          flex: 1, maxWidth: 320, display: "flex", alignItems: "center", gap: 8,
          background: "#1a1a1a", border: "1px solid #2a2a2a",
          borderRadius: 8, padding: "0 12px", height: 36,
        }}>
          <LuSearch size={15} color="#444" />
          <input
            type="text"
            placeholder="Search..."
            style={{ flex: 1, background: "none", border: "none",
              outline: "none", color: "#ccc", fontSize: 13 }}
          />
        </div>
        <div style={{flex:1}}/>

        {/* Bell */}
        <button style={{ background: "none", border: "none", cursor: "pointer",
          color: "#888", display: "flex", alignItems: "center", padding: 4 }}>
          <LuBell size={20} />
        </button>

        {/* Profile */}
        <div style={{
          width: 32, height: 32, borderRadius: "50%", background: "#4ade80",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#0e0e0e", fontSize: 18, fontWeight: 600, cursor: "pointer",
        }}>
          P
        </div>

      </div>

      {/* ── Body ── */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* Sidebar */}
        <div style={{
          width: collapsed ? 52 : 220,
          transition: "width 0.25s ease",
          background: "#161616",
          borderRight: collapsed ? "none" : "1px solid #2a2a2a",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          flexShrink: 0,
        }}>

          {/* Main Nav */}
          <nav style={{ paddingTop: 12 }}>
            {mainNavItems.map((item) => (
              <NavItem key={item.label} {...item} active={active} setActive={setActive} collapsed={collapsed}/>
            ))}
          </nav>

          {/* Support Section */}
          <div style={{ marginTop: 8 }}>

            {!collapsed &&(
            <div
              onClick={() => setSupportOpen(!supportOpen)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "8px 16px", cursor: "pointer", userSelect: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1f1f1f")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <span style={{ fontSize: 10, color: "#f1ecec", letterSpacing: "0.1em" }}>SUPPORT</span>
              <span style={{
                color: "#f0eaea", fontSize: 10, display: "inline-block",
                transition: "transform 0.2s",
                transform: supportOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}>▾</span>
            </div>
            )}

            <div style={{
              maxHeight: supportOpen || collapsed ? 300 : 0,
              overflow: "hidden",
              transition: "max-height 0.25s ease",
            }}>
              {supportNavItems.map((item) => (
                <NavItem key={item.label} {...item} active={active} setActive={setActive} collapsed={collapsed}/>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div style={{ flex: 1 }} />


           <div style={{
              width: 30, height: 30, borderRadius: "50%", background: "#4ade80",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#0e0e0e", fontSize: 18, fontWeight: 600, flexShrink: 0, margin: 10,
            }}>U</div>

          {/* Sign Out */}
          <div
            style={{
              borderTop: "1px solid #2a2a2a",
              padding: "12px 14px",
              display: "flex", alignItems: "center", gap: 10,
              cursor: "pointer", color: "#888",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ccc")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
          >
           
            <LuLogOut size={14} />
            {!collapsed && (
              <span style={{fontSize:13, display: "flex", alignItems: "center", justifyContent:"center",}}>Sign Out</span>
            )}
          </div>

        </div>

        {/* Main content */}
<div style={{ flex: 1, padding: 24, color: "#fff", overflowY: "auto" }}>

  {/* Filters */}
  <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginBottom: 20 }}>

    {/* Platform */}
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <span style={{ fontSize: 14, color: "#f3eded" }}>Platform:</span>
      <div style={{ position: "relative" }}>
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          style={{ background: "#1a1a1a", border: "1px solid #4ade80",
            borderRadius: 8, color: "#f2f5f3", fontSize: 13,
            padding: "7px 28px 7px 10px", cursor: "pointer",
            outline: "none", appearance: "none", width: 180 }}
        >

          <option value="mobile">Mobile</option>
          <option value="pc">PC (Windows) </option>
          <option value="all">PC (Windows), Web Browser</option>
          <option value="browser">Web Browser</option>
        </select>
        <span style={{ position: "absolute", right: 10, top: "50%",
          transform: "translateY(-50%)", color: "#edf4f0",
          fontSize: 11, pointerEvents: "none" }}>▾</span>
      </div>
    </div>

    {/* Genre */}
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <span style={{ fontSize: 11, color: "#f8f4f4" }}>Genre/Tag:</span>
      <div style={{ position: "relative" }}>
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          style={{ background: "#1a1a1a", border: "1px solid #2a2a2a",
            borderRadius: 8, color: "#ccc", fontSize: 13,
            padding: "7px 28px 7px 10px", cursor: "pointer",
            outline: "none", appearance: "none", width: 180 }}
        >
          <option value="">All Genres</option>
          <option value="shooter">Shooter</option>
          <option value="battle-royale">Battle Royale</option>
          <option value="moba">MOBA</option>
          <option value="mmorpg">MMORPG</option>
          <option value="strategy">Strategy</option>
          <option value="racing">Racing</option>
          <option value="sports">Sports</option>
          <option value="fighting">Fighting</option>
          <option value="action-rpg">Action RPG</option>
          <option value="anime">Anime</option>
        </select>
        <span style={{ position: "absolute", right: 10, top: "50%",
          transform: "translateY(-50%)", color: "#555",
          fontSize: 11, pointerEvents: "none" }}>▾</span>
      </div>
    </div>

    {/* Sort By */}
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <span style={{ fontSize: 11, color: "#f7f4f4" }}>Sort By:</span>
      <div style={{ position: "relative" }}>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          style={{ background: "#1a1a1a", border: "1px solid #2a2a2a",
            borderRadius: 8, color: "#ccc", fontSize: 13,
            padding: "7px 28px 7px 10px", cursor: "pointer",
            outline: "none", appearance: "none", width: 180 }}
        >
          <option value="relevance">Relevance</option>
          <option value="popularity">Popularity</option>
          <option value="release-date">Release Date</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
        <span style={{ position: "absolute", right: 10, top: "50%",
          transform: "translateY(-50%)", color: "#555",
          fontSize: 11, pointerEvents: "none" }}>▾</span>
      </div>
    </div>

  </div>

  {/* Games Grid */}
  {loading ? (
    <p style={{ color: "#d3d0d0", fontSize: 13 }}>Loading games...</p>
  ) : (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: 16,
    }}>
      {Array.isArray(games) && games.map((game) => (
        <div key={game.id} style={{
          background: "#161616", border: "1px solid #222",
          borderRadius: 10, overflow: "hidden", cursor: "pointer",
        }}>
          {/* Thumbnail */}
          <img
            src={game.thumbnail}
            alt={game.title}
            style={{ width: "100%", height: 110, objectFit: "cover" }}
          />

          {/* Tags */}
          <div style={{ display: "flex", margin: "8px 10px 4px" }}>
            <span style={{ background: "#f97316", color: "#fff",
              fontSize: 10, fontWeight: 600, padding: "3px 8px",
              borderRadius: "4px 0 0 4px" }}>Free</span>
            <span style={{ background: "#2a2a2a", color: "#aaa",
              fontSize: 10, padding: "3px 8px",
              borderRadius: "0 4px 4px 0" }}>{game.platform}</span>
          </div>

          {/* Genre */}
          <p style={{ padding: "2px 10px", fontSize: 10,
            color: "#4ade80", fontWeight: 600, margin: 0 }}>{game.genre}</p>

          {/* Title */}
          <p style={{ padding: "2px 10px 4px", fontSize: 13,
            fontWeight: 600, color: "#fff", margin: 0 }}>{game.title}</p>

          {/* Description */}
          <p style={{ padding: "0 10px 8px", fontSize: 11,
            color: "#555", margin: 0, lineHeight: 1.5,
            display: "-webkit-box", WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical", overflow: "hidden" }}>
            {game.short_description}
          </p>

          {/* Play button */}
          <div style={{ padding: "0 10px 10px" }}>
            <a href={game.game_url} target="_blank" rel="noreferrer"
              style={{ display: "block", textAlign: "center",
                background: "#4ade80", color: "#0e0e0e",
                borderRadius: 6, padding: "6px 0", fontSize: 12,
                fontWeight: 600, textDecoration: "none" }}>
              Play Free
            </a>
          </div>

        </div>
      ))}
    </div>
  )}

</div>

  </div>

      </div>
  );
}

export default Navbar;