import "styled-components";

interface Colors {
    readonly [index: string]: string;
}

interface Breakpoints {
    readonly [index: string]: number;
}

declare module "styled-components" {
    export interface DefaultTheme {
        color: Colors,
        breakpoint: Breakpoints,

    }
}