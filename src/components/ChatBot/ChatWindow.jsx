import { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  CircularProgress,
  Avatar,
  Chip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Message from "./Message";

const SUGGESTIONS = [
  "Membership Plans",
  "Working Hours",
  "Personal Training",
  "Gym Location",
];

function ChatWindow({ setOpen }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hi! I'm Fitness Freak AI. How can I assist your workout journey today?",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const sendMessage = async (textToSend) => {
    const query = textToSend || message;
    if (!query.trim()) return;

    const userMessage = { sender: "user", text: query };
    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setMessage("");
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: query }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.answer || "I'm ready to help! What else would you like to know?",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Something went wrong sending your request. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: { xs: 80, sm: 100 },
        right: { xs: 15, sm: 30 },
        width: { xs: "calc(100vw - 30px)", sm: 380 },
        maxHeight: { xs: "75vh", sm: 580 },
        height: 580,
        backgroundColor: "rgba(18, 18, 18, 0.95)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: "24px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        border: "1px solid rgba(212, 175, 55, 0.3)",
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.8)",
        zIndex: 9999,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          background: "linear-gradient(90deg, #D4AF37 0%, #E5C158 100%)",
          color: "#000000",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2.5,
          py: 1.75,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Avatar
            sx={{
              bgcolor: "#000000",
              color: "#D4AF37",
              width: 34,
              height: 34,
            }}
          >
            <SmartToyIcon fontSize="small" />
          </Avatar>
          <Box>
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "0.95rem",
                lineHeight: 1.1,
              }}
            >
              FITNESS FREAK AI
            </Typography>
            <Typography
              sx={{
                fontSize: "0.7rem",
                fontWeight: 600,
                opacity: 0.8,
              }}
            >
              Online • Assistant
            </Typography>
          </Box>
        </Box>

        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            color: "#000000",
            p: 0.5,
            "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Messages Area */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2.5,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          "&::-webkit-scrollbar": { width: "6px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: "10px",
          },
        }}
      >
        {messages.map((msg, index) => (
          <Message key={index} mine={msg.sender === "user"} text={msg.text} />
        ))}

        {loading && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              alignSelf: "flex-start",
              mt: 1,
            }}
          >
            <CircularProgress size={18} sx={{ color: "#D4AF37" }} />
            <Typography sx={{ color: "#9CA3AF", fontSize: "0.8rem" }}>
              Fitness Freak AI is typing...
            </Typography>
          </Box>
        )}
        <div ref={messagesEndRef} />
      </Box>

      {/* Suggested Quick Chips */}
      {messages.length < 3 && (
        <Box
          sx={{
            px: 2,
            pb: 1,
            display: "flex",
            gap: 1,
            overflowX: "auto",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {SUGGESTIONS.map((chipText) => (
            <Chip
              key={chipText}
              label={chipText}
              onClick={() => sendMessage(chipText)}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "#D1D5DB",
                borderColor: "rgba(255, 255, 255, 0.15)",
                fontSize: "0.75rem",
                "&:hover": {
                  backgroundColor: "rgba(212, 175, 55, 0.2)",
                  color: "#D4AF37",
                  borderColor: "#D4AF37",
                },
              }}
              variant="outlined"
              size="small"
            />
          ))}
        </Box>
      )}

      {/* Input Box */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          p: 2,
          borderTop: "1px solid rgba(255,255,255,.08)",
          backgroundColor: "rgba(10, 10, 10, 0.8)",
        }}
      >
        <TextField
          fullWidth
          size="small"
          placeholder="Ask anything about gym..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#FFFFFF",
              borderRadius: "12px",
              backgroundColor: "rgba(255,255,255,0.05)",
              "& fieldset": {
                borderColor: "rgba(255,255,255,.15)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(212,175,55,0.5)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#D4AF37",
              },
            },
            "& input::placeholder": {
              color: "#6B7280",
              opacity: 1,
              fontSize: "0.85rem",
            },
          }}
        />

        <Button
          variant="contained"
          onClick={() => sendMessage()}
          disabled={loading || !message.trim()}
          sx={{
            minWidth: 44,
            width: 44,
            height: 40,
            borderRadius: "12px",
            backgroundColor: "#D4AF37",
            color: "#000000",
            p: 0,
            "&:hover": {
              backgroundColor: "#E5C158",
            },
            "&.Mui-disabled": {
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.3)",
            },
          }}
        >
          <SendRoundedIcon fontSize="small" />
        </Button>
      </Box>
    </Box>
  );
}

export default ChatWindow;