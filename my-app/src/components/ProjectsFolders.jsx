import React from "react";
import { Box, Typography, Paper, Tooltip } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";

// 🔹 רשימת הפרויקטים
const projects = [
  {
    title: "Mikveh Management",
    description: "A web app for managing mikveh appointments and user interactions.",
    github: "https://github.com/victorias22/mikveh",
  },
  {
    title: "Mini Compiler",
    description: "A mini compiler demonstrating parsing and code generation.",
    github: "https://github.com/victorias22/mini-Compiler",
  },
  {
    title: "Game OOP",
    description: "A game developed with OOP principles, showing design patterns and mechanics.",
    github: "https://github.com/victorias22/Game-OOP",
  },
  {
    title: "FreelanceCenter",
    description: "MERN freelance platform with chat, orders, and real-time collaboration.",
    github: "https://github.com/victorias22/freelancer_center",
  },
];

export default function ProjectsFolders() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 3,
        mt: 1,
      }}
    >
      {projects.map((p, i) => (
        <a
          key={i}
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Tooltip title={p.description} arrow>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                width: 130,
                height: 120,
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fffefc",
                border: "1px solid #fff4c4",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#fffce8",
                  transform: "scale(1.07) rotate(-2deg)",
                  boxShadow:
                    "0 4px 15px rgba(255,216,72,0.3), 0 0 20px rgba(255,216,72,0.2)",
                },
              }}
            >
              {/* אייקון תיקיה צהוב */}
              <FolderIcon
                sx={{
                  fontSize: 45,
                  color: "#ffd84d",
                  filter: "drop-shadow(0 1px 2px rgba(255,200,0,0.3))",
                  mb: 1,
                }}
              />
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#444",
                  textAlign: "center",
                }}
              >
                {p.title}
              </Typography>
            </Paper>
          </Tooltip>
        </a>
      ))}
    </Box>
  );
}
