import {styled} from "@mui/material/styles";
import {Stack} from "@mui/material";

export const ExtensionHeader = styled(Stack)(({ theme }) => ({
    maxWidth: '100%',
    padding: '16.5px 66px 16.5px 16px',
    backgroundColor: theme.palette.background.paper,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'row',
}));

export const Title = styled('h1')(({ theme }) => ({
    fontSize: '32px',
    fontWeight: theme.typography.fontWeightBold || 700,
    color: theme.palette.primary.main,
    paddingLeft: '12px',
}));
