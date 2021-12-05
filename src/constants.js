export const COLORS = {
    white: "0deg 0% 100%",
    gray: {
        100: "185deg 5% 95%",
        300: "190deg 5% 80%",
        500: "196deg 4% 60%",
        700: "220deg 5% 40%",
        900: "220deg 3% 20%",
    },
    primary: "340deg 65% 47%",
    secondary: "240deg 60% 63%",
};

export const WEIGHTS = {
    normal: 500,
    medium: 600,
    bold: 800,
};

export const PHONE = "phone";
export const TABLET = "tablet";
export const LAPTOP = "laptop";

const SIZES = {
    [PHONE]: 600,
    [TABLET]: 950,
    [LAPTOP]: 1300,
};

export const QUERIES = {
    [PHONE]: `@media (max-width: ${SIZES[PHONE] / 16}rem)`,
    [TABLET]: `@media (max-width: ${SIZES[TABLET] / 16}rem)`,
    [LAPTOP]: `@media (max-width: ${SIZES[LAPTOP] / 16}rem)`,
};
