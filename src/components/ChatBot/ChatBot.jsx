import { useState } from "react";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

function ChatBot() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <ChatButton
                open={open}
                setOpen={setOpen}
            />

            {open && (
                <ChatWindow
                    setOpen={setOpen}
                />
            )}
        </>
    );
}

export default ChatBot;