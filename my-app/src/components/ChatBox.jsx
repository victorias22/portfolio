import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import staticAnswers from "./staticAnswers";
import ProjectsFolders from "./ProjectsFolders";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  IconButton,
  Chip,
  Stack,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

export default function VictoriaBotFullPage() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const suggestions = [
    "Can you tell me about yourself?",
    "What was the last project you worked on?",
    "What tools and technologies do you typically use?",
    "Have you worked with systems like FortiGate, VMware ESXi, Azure, or AWS? If so, in what context?",
    "This is a full-time, on-site position (not hybrid). Would that work for you?",
    "How do you usually learn new technologies?",
    "Do you have experience working in a team?",
  ];

  const ask = async (promptText) => {
    const question = promptText || input;
    if (!question) return;

    if (staticAnswers[question]) {
      setResponse(staticAnswers[question]);
      setInput("");
      return;
    }
    try {
      const endpoint =
        suggestions.includes(question) || question.includes("?")
          ? "/api/general-question"
          : "/api/chat";
      const res = await axios.post(endpoint, { prompt: question });
      setResponse(res.data.answer);
      setInput("");
    } catch (err) {
      console.error(err);
      setResponse("😕 מחילה, לא הצלחתי להבין את הבקשה שלך.");
    }
  };

  return (
    <Box sx={{ transform: "scale(1.02)", transformOrigin: "top center" }}>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          background: "linear-gradient(180deg, #fff9fb 0%, #fffbe8 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          px: 2,
        }}
      >
        {/* 🔹 פרופיל */}
        <Avatar
          src="/victoria.png"
          alt="victoria"
          sx={{
            width: 180,
            height: 180,
            mb: 1,
            border: "3px solid #ff4d88",
            boxShadow: "0 4px 10px rgba(255,77,136,0.2)",
          }}
        />

        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: "#ff4d88",
            mb: 3,
          }}
        >
          Victoria Solomtin
        </Typography>
<Paper
  elevation={0}
  sx={{
    background: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(10px)",
    border: "1px solid #ffd1dc",
    borderRadius: "12px",
    p: 3,
    my: 2,
    width: "100%",
    maxWidth: 700,
    fontFamily: "monospace",
    lineHeight: 1.8,
    whiteSpace: "pre-line",
    color: "#333",
    boxShadow: "0 4px 25px rgba(255, 182, 193, 0.15)",
    fontWeight: "bold"
  }}
>
  {`Victoria Solomtin – Software Engineer
📍 Tel Aviv, Israel    ✉️ victoria.solomtin@gmail.com
🎓 B.Sc. in Software Engineering
💻 Full Stack Developer with a focus on web and mobile app development.
🌐 Git: `}
  <a href="https://github.com/victorias22" style={{ color: "#ff4d88", fontWeight: "bold" }}>
    github.com/victorias22
  </a>
  {`
🔗 LinkedIn: `}
  <a href="https://www.linkedin.com/in/victoria-solomtin/" style={{ color: "#ff4d88", fontWeight: "bold" }}>
    linkedin.com/in/victoria-solomtin
  </a>
</Paper>

        {/* 🔹 חץ אלגנטי */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
            mb: 1,
            animation: "bounce 2s infinite",
            "@keyframes bounce": {
              "0%, 100%": { transform: "translateY(0)" },
              "50%": { transform: "translateY(8px)" },
            },
          }}
        >
          <KeyboardArrowDownIcon sx={{ fontSize: 50, color: "#ffd84d" }} />
        </Box>

        {/* 🔹 אזור פרויקטים */}
        <Paper
          elevation={1}
          sx={{
            backgroundColor: "#fff",
            borderRadius: 3,
            p: 3,
            my: 3,
            width: "100%",
            maxWidth: 800,
            border: "1px solid #fff0f5",
            boxShadow: "0 2px 15px rgba(0,0,0,0.05)",
            "&:hover": {
              boxShadow: "0 4px 25px rgba(255,77,136,0.15)",
              transform: "scale(1.01)",
              transition: "0.3s",
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#ff4d88",
              mb: 3,
            }}
          >
            📂 My projects
          </Typography>
          <ProjectsFolders />
        </Paper>

        {/* 🔹 אזור שאלות */}
        <Box
          sx={{
            minHeight: "100vh",
            width: "100%",
            backgroundColor: "#fffef9",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 5,
            px: 2,
            fontFamily: "Arial, sans-serif",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#222",
              textAlign: "center",
              fontWeight: 700,
              maxWidth: 700,
              mb: 2,
            }}
          >
            Hi! I'm Viki ✨
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              textAlign: "center",
              maxWidth: 700,
              lineHeight: 1.6,
              mb: 4,
            }}
          >
            Ask me anything about my experience, my skills, or the projects I've built!
          </Typography>

          {/* 🔹 שדה קלט */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              maxWidth: 600,
              backgroundColor: "#fff",
              border: "1px solid #ffd8d8",
              borderRadius: "25px",
              px: 2,
              py: 1,
              mb: 3,
              boxShadow: "0 2px 6px rgba(255,216,72,0.15)",
            }}
          >
            <TextField
              fullWidth
              variant="standard"
              placeholder="שאלו אותי משהו..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && ask()}
              sx={{ input: { color: "#222", fontSize: "1rem" } }}
              InputProps={{ disableUnderline: true }}
            />
            <IconButton onClick={() => ask()} sx={{ color: "#ff4d88" }}>
              <SendIcon />
            </IconButton>
          </Box>

          {/* 🔹 תגיות שאלות */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              flexWrap: "wrap",
              justifyContent: "center",
              maxWidth: 700,
              mb: 4,
            }}
          >
            {suggestions.map((s, i) => (
              <Chip
                key={i}
                label={s}
                variant="outlined"
                sx={{
                  color: "#ff4d88",
                  borderColor: "#ffd84d",
                  fontSize: "0.9rem",
                  px: 1,
                  py: 0.5,
                  borderRadius: "20px",
                  backgroundColor: "#fff",
                  "&:hover": {
                    backgroundColor: "#fff8e7",
                    transform: "scale(1.05)",
                  },
                }}
                onClick={() => ask(s)}
              />
            ))}
          </Stack>

          {/* 🔹 תשובת הבוט */}
          {response && (
            <Paper
              sx={{
                p: 3,
                backgroundColor: "#fffdfc",
                borderRadius: "12px",
                border: "1px solid #ffe0eb",
                color: "#333",
                maxWidth: 700,
                width: "100%",
                textAlign: "right",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "bold", textAlign: "center", color: "#ff4d88" }}
              >
                viki
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                {response}
              </Typography>
            </Paper>
          )}
        </Box>
      </Box>
    </Box>
  );
}
