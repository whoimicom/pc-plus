import * as path from "path";
import {defineConfig} from 'rspress/config';
import katex from 'rspress-plugin-katex';
import alignImage from 'rspress-plugin-align-image';

export default defineConfig({
    // root: path.join(__dirname, "docs"),
    root: "docs",
    title: "pc-plus",
    description: "How to make your computer run faster",
    base: "/website/pc-plus",
    themeConfig: {
        socialLinks: [
            {
                icon: "github",
                mode: "link",
                content: "https://github.com/vuepress/core",
            },
        ],
    },
    plugins: [
        katex(),
        // alignImage({justify: 'left', containerClassNames: ['left-img-class'],}),
    ],
});

