import React from "react";
import {StyledMain} from "./styled";

type ContainerProps = {
    children: React.ReactNode;
}
const Container = ({children}: ContainerProps) => <StyledMain>{children}</StyledMain>;

export default Container;
