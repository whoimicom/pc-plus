// import * as path from "path";
import { defineConfig } from 'rspress/config';

export default defineConfig({
    // root: path.join(__dirname, "docs"),
    root: "docs",
    title: "pc-plus",
    description: "Rspack-based Static Site Generator",
    base: "/pc-plus",
    themeConfig: {
        socialLinks: [
            {
                icon: "github",
                mode: "link",
                content: "https://github.com/web-infra-dev/rspress",
            },
        ],
    },
});

