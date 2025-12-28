import { Grid } from "@mui/material";
import { ExtensionCard } from "../../components/ExtensionCard/ExtensionCard";
import {EXTENSIONS_DATA} from "../../data/extensionCardData.ts";
import {ExtensionMainHeader} from "../../components/ExtensionHeader/ExtensionHeader.tsx";
import {ExtensitonList} from "../../components/ExtensitonList/ExtensitonList.tsx";
import {useState} from "react";

type HomeProps = {
    toggleMode: () => void;
    mode?: "light" | "dark";
};

type FilterType = "all" | "active" | "inactive";

function Home({ toggleMode,mode }: HomeProps) {
    const [extensions, setExtensions] = useState(EXTENSIONS_DATA);
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredExtensions = extensions.filter((extension) => {
        if (filter === "active") return extension.enabled;
        if (filter === "inactive") return !extension.enabled;
        return true;
    });

    const handleToggle = (index: number) => {
        setExtensions(prev =>
            prev.map((ext, i) =>
                i === index ? { ...ext, enabled: !ext.enabled } : ext
            )
        );
    };

    const handleRemove = (index: number) => {
        setExtensions(prev => prev.filter((_, i) => i !== index));
    }

    return (
        <>
            {/*<Users/>*/}
            <ExtensionMainHeader toggleMode={toggleMode} mode={mode}/>
            <ExtensitonList setFilter={setFilter} filter={filter} filteredCount={filteredExtensions.length}/>
        <Grid container spacing={1.5}>
            {filteredExtensions.map((extension, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}
                >
                    <ExtensionCard
                        key={index}
                        name={extension.name}
                        description={extension.description}
                        icon={<img src={extension.icon} alt={extension.name} />}
                        colorIcon={extension.colorIcon}
                        enabled={extension.enabled}
                        buttonText={extension.buttonText}
                        onToggle={()=>handleToggle(index)}
                        onRemove={()=>handleRemove(index)}
                    />
                </Grid>
            ))}
        </Grid>
            </>
    );
}

export default Home;
