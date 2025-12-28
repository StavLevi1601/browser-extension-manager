import {styled} from "@mui/material/styles";
import {Stack} from "@mui/material";

export const ExtensionRow = styled(Stack)({
    maxWidth: '100%',
    padding: '16.5px 16px',
    backgroundColor: '#F9F9F9',
    color: '#091540',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '12px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'row',
});

export const ExtensionStatus = styled('div')({
    display: 'flex',
    gap: '8px',
});
