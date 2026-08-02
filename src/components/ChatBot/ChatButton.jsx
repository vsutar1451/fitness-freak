import { Fab, Badge } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";

function ChatButton({ open, setOpen }) {
  return (
    <Badge
      color="error"
      variant="dot"
      invisible={open}
      sx={{
        position: "fixed",
        bottom: { xs: 20, sm: 30 },
        right: { xs: 20, sm: 30 },
        zIndex: 9999,
      }}
    >
      <Fab
        onClick={() => setOpen(!open)}
        sx={{
          backgroundColor: "#D4AF37",
          color: "#000000",
          boxShadow: "0 10px 25px rgba(212, 175, 55, 0.4)",
          transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          "&:hover": {
            backgroundColor: "#E5C158",
            transform: "scale(1.1)",
            boxShadow: "0 15px 30px rgba(212, 175, 55, 0.6)",
          },
        }}
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </Fab>
    </Badge>
  );
}

export default ChatButton;