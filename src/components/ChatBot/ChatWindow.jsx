import { useState } from "react";

import {
    Box,
    Typography,
    IconButton,
    TextField,
    Button,
    CircularProgress,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

function ChatWindow({ setOpen }) {
    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text: "👋 Hi! I'm Fitness Freak AI. How can I help you today?",
        },
    ]);

    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!message.trim()) return;

        const userMessage = {
            sender: "user",
            text: message,
        };

        setMessages((prev) => [...prev, userMessage]);

        setLoading(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: message,
                }),
            });

            const data = await response.json();

            setMessages((prev) => [
                ...prev,
                {
                    sender: "ai",
                    text: data.answer,
                },
            ]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    sender: "ai",
                    text: "Something went wrong. Please try again.",
                },
            ]);
        }

        setLoading(false);
        setMessage("");
    };

    return (
        <Box
            sx={{
                position: "fixed",
                bottom: 100,
                right: 30,
                width: 380,
                height: 600,
                bgcolor: "#1A1A1A",
                borderRadius: 4,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                border: "1px solid rgba(255,255,255,.1)",
                boxShadow: "0 20px 50px rgba(0,0,0,.45)",
                zIndex: 9999,
            }}
        >
            {/* Header */}

            <Box
                sx={{
                    bgcolor: "primary.main",
                    color: "#000",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 2,
                    py: 1.5,
                }}
            >
                <Typography fontWeight={700}>
                    Fitness Freak AI
                </Typography>

                <IconButton
                    onClick={() => setOpen(false)}
                    sx={{ color: "#000" }}
                >
                    <CloseIcon />
                </IconButton>
            </Box>

            {/* Messages */}

            <Box
                sx={{
                    flex: 1,
                    overflowY: "auto",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                {messages.map((msg, index) => (
                    <Box
                        key={index}
                        sx={{
                            alignSelf:
                                msg.sender === "user"
                                    ? "flex-end"
                                    : "flex-start",

                            bgcolor:
                                msg.sender === "user"
                                    ? "primary.main"
                                    : "#2A2A2A",

                            color:
                                msg.sender === "user"
                                    ? "#000"
                                    : "#FFF",

                            px: 2,
                            py: 1.5,
                            borderRadius: 3,
                            maxWidth: "80%",
                        }}
                    >
                        {msg.text}
                    </Box>
                ))}

                {loading && (
                    <CircularProgress
                        size={22}
                        sx={{
                            alignSelf: "flex-start",
                        }}
                    />
                )}
            </Box>

            {/* Input */}

            <Box
                sx={{
                    display: "flex",
                    gap: 1,
                    p: 2,
                    borderTop: "1px solid rgba(255,255,255,.08)",
                }}
            >
                <TextField
                    fullWidth
                    size="small"
                    placeholder="Ask anything..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            sendMessage();
                        }
                    }}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            color: "white",

                            "& fieldset": {
                                borderColor: "rgba(255,255,255,.15)",
                            },

                            "&:hover fieldset": {
                                borderColor: "primary.main",
                            },

                            "&.Mui-focused fieldset": {
                                borderColor: "primary.main",
                            },
                        },

                        "& input::placeholder": {
                            color: "#999",
                            opacity: 1,
                        },
                    }}
                />

                <Button
                    variant="contained"
                    onClick={sendMessage}
                >
                    Send
                </Button>
            </Box>
        </Box>
    );
}

export default ChatWindow;