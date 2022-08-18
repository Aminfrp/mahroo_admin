interface IColors {
    parimary: string;
    backGround: string;
    secondary: string;
    base: string;
}

export const COLORS:IColors = {
    parimary: "#DDDDDD",
    backGround:"#f5f5f5",
    secondary: "#F25287",
    base:"#F7D9D9"
}

export const baseURL = process.env.REACT_APP_URL;