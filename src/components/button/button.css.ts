import { style } from '@vanilla-extract/css';
import { lightTheme } from "../../common/theme.css";

export const primary = style({
    backgroundColor: lightTheme.colors.primary[500],
    color: lightTheme.colors.greyscale[0]
})