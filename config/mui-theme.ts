import { createTheme } from "@mui/material/styles";
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    "tacvue-primary": true;
    "tacvue-outlined": true;
  }
}

export const MUI_DARK_THEME = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "tacvue-primary" },
          style: {
            textTransform: "uppercase",
            background: "linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%)",
            color: "white",
            borderRadius: "35px",
            ":hover": {
              background: "linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%)",
              opacity: "0.9",
            },
          },
        },
        {
          props: { variant: "tacvue-outlined" },
          style: {
            textTransform: "uppercase",
            border: "1px solid",
            borderImageSlice: 1,
            borderImageSource: "linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%)",
            color: "white",
            borderRadius: "35px",
            ":hover": {
              borderImageSlice: 1,
              background: "none",
              borderImageSource: "linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%)",
              opacity: "0.9",
            },
          },
        },
      ],
    },
  },
});

export const MUI_MODAL =
  "absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 p-6 bg-gray-900 rounded outline-none";
