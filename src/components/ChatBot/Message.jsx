import { Box, Typography } from "@mui/material";

function Message({ mine, text }) {
  return (
    <Box
      sx={{
        alignSelf: mine ? "flex-end" : "flex-start",
        backgroundColor: mine ? "#D4AF37" : "rgba(255, 255, 255, 0.08)",
        color: mine ? "#000000" : "#FFFFFF",
        px: 2,
        py: 1.25,
        borderRadius: mine ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
        maxWidth: "85%",
        boxShadow: mine
          ? "0 4px 15px rgba(212, 175, 55, 0.2)"
          : "0 4px 15px rgba(0,0,0,0.2)",
        border: mine ? "none" : "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Typography
        sx={{
          fontSize: "0.875rem",
          fontWeight: mine ? 600 : 400,
          lineHeight: 1.45,
          wordBreak: "break-word",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

export default Message;