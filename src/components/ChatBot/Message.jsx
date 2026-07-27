import { Box } from "@mui/material";

function Message({ mine, text }) {
    return (
        <Box
            sx={{
                alignSelf: mine
                    ? "flex-end"
                    : "flex-start",

                bgcolor: mine
                    ? "primary.main"
                    : "#2A2A2A",

                color: mine
                    ? "#000"
                    : "#FFF",

                px: 2,
                py: 1,
                borderRadius: 3,
                maxWidth: "80%",
                mb: 1,
            }}
        >
            {text}
        </Box>
    );
}

export default Message;