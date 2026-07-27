import { Fab } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

function ChatButton({ open, setOpen }) {
    return (
        <Fab
            color="primary"
            onClick={() => setOpen(!open)}
            sx={{
                position: "fixed",
                bottom: 30,
                right: 30,
                zIndex: 9999,
            }}
        >
            <ChatIcon />
        </Fab>
    );
}

export default ChatButton;