import React from "react";
import {StyledMain} from "./styled";

type ContainerProps = {
    children: React.ReactNode;
}
const Container: React.FC <ContainerProps> = ({children}) => <StyledMain>{children}</StyledMain>;

export default Container;
