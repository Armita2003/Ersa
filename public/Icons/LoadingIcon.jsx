import { Stack } from "@mui/material";

export function LoadingIcon() {
    return (
        <Stack
            position="absolute"
            width="100vw"
            height="100vh"
            alignItems="center"
            justifyContent="center"
            bgcolor="rgba(255, 255, 255, 0.8)"
            zIndex={1}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                }}
            >
                <img src="/LoadingCatGif.gif" />
            </div>
        </Stack>
    );
}
