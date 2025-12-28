import { ExtensionHeader, Title } from "./ExtensionHeader.styles.ts";
import { EXTENSION_HEADER } from "../../data/ExtensionMainHeaderData.ts";
import { Button, Stack } from "@mui/material";

type ExtensionMainHeaderProps = {
    toggleMode: () => void;
    mode?: "light" | "dark";
};

export const ExtensionMainHeader = ({ toggleMode, mode }: ExtensionMainHeaderProps) => {
    const data = EXTENSION_HEADER;
    const iconSrc = mode === "light" ? data.settingIcon : data.sunIcon;

    return (
        <ExtensionHeader>
            <img src={data.icon} alt="logo" />
            <Title>{data.title}</Title>
            <Stack alignItems="center" justifyContent="flex-end">
                <Button onClick={toggleMode}>
                    <img src={iconSrc} alt="setting" />
                </Button>
            </Stack>
        </ExtensionHeader>
    );
};
