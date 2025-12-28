import { styled } from "@mui/material/styles";
import {Box, Typography} from "@mui/material";
import {stopForwardProps} from "../../util/stopForward.ts";

interface IconBoxProps {
    color: string;
}

interface TitleProps {
    color?: string;
}

export const CardContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: ${({theme}) => theme.palette.background.paper};
    border-radius: 20px;
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0px 16px 40px rgba(10, 37, 64, 0.12);
    min-height: 200px;
    box-sizing: border-box;
    //gap: 160px;
    //width: 382px;
    //height: 200px;
    `;


export const UpSection = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
`;

export const DownSection = styled(Box)`
  display: flex;
  justify-content:space-between;
    flex-shrink: 0;
    width: 100%;
    margin-top: 8px;
`;

export const IconBox = styled(Box,
    stopForwardProps("color"))<IconBoxProps>`
  width: 84px;
  height: 60px;
  border-radius: 16px;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

export const Title = styled(Typography,
    stopForwardProps("color"))<TitleProps>`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    color: ${({ color, theme }) => color || theme.palette.text.primary};
`;