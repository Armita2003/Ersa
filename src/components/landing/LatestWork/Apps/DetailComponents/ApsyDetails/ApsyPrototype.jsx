import { Stack } from "@mui/material";
import { useState } from "react";
import { LoadingIcon } from "../../../../../../../public/Icons/LoadingIcon";

const ApsyPrototype = () => {
    const [loading, setLoading] = useState(true);

    return (
        <Stack width="100vw" height="100vh" alignItems="center" justifyContent="center" sx={{ overflow: "hidden" }}>
            {loading && <LoadingIcon />}
            <iframe
                style={{
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                }}
                src="https://embed.figma.com/proto/jbfhT6uQw3Q9nk371JiAca/R?page-id=&node-id=995-19261&node-type=frame&viewport=-2599%2C6425%2C0.17&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=995%3A19258&show-proto-sidebar=1&embed-host=share"
                allowfullscreen
                onLoad={() => setLoading(false)}
            ></iframe>
        </Stack>
    );
};

export default ApsyPrototype;
