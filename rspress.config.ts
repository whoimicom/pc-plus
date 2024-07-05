// import * as path from "path";
import { defineConfig } from 'rspress/config';

export default defineConfig({
    // root: path.join(__dirname, "docs"),
    root: "docs",
    title: "pc-plus",
    description: "How to make your computer run faster",
    base: "/pc-plus",
    themeConfig: {
        socialLinks: [
            {
                icon: "github",
                mode: "link",
                content: "https://whoimi.com",
            },
        ],
    },
});

