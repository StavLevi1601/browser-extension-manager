import { Stack } from "@mui/material";
import {
    CardContainer,
    UpSection,
    DownSection,
    IconBox,
    Title
} from "./ExtensionCard.styles";
import { Button, Switch } from "@mui/material";
import type {ExtensionCardProps} from "./ExtensionCard.types.ts";

export function ExtensionCard({name, description, icon,colorIcon,enabled, buttonText,onToggle, onRemove,}: ExtensionCardProps) {

    return (
        <CardContainer>
            <UpSection>
                <IconBox color={colorIcon}>{icon}</IconBox>
                <Stack direction={"column"} spacing={4} >
                    <Title variant={"body1"}>
                        {name}
                    </Title>
                    <Title variant={"body2"}>
                        {description}
                    </Title>
                </Stack>
            </UpSection>
            <DownSection>
                <Button
                    variant="outlined"
                    onClick={onRemove}
                    sx={{
                        px: 3,
                        borderRadius: 999,
                        flexShrink: 0,       // לא להתמתח
                        width: "auto",
                        whiteSpace: "nowrap" // שלא ישבור את המילה REMOVE
                    }}
                >
                    {buttonText}
                </Button>

                <Switch
                    checked={enabled}
                    onChange={onToggle}
                    color="error"
                />
            </DownSection>
        </CardContainer>
    );
}
