import {Typography} from "@mui/material";
import {ExtensionRow, ExtensionStatus} from "./ExtenstionList.styles.ts";

type FilterType = "all" | "active" | "inactive";

type ExtensitonListProps = {
    filteredCount: number;
    filter: FilterType;
    setFilter: (value: FilterType) => void;
};

export const ExtensitonList = ({filteredCount, filter, setFilter}: ExtensitonListProps) => {

    return (
        <ExtensionRow>
            <Typography>
                Extensions List {filteredCount} {filter}
            </Typography>
            <ExtensionStatus>
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("active")}>Active</button>
                <button onClick={() => setFilter("inactive")}>Inactive</button>
            </ExtensionStatus>
        </ExtensionRow>
    );
}