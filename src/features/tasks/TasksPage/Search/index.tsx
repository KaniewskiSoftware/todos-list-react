import React from "react";
import {StyledInput, StyledForm} from "../../StyledComponents";
import {
    useQueryParameter,
    useReplaceQueryParameter,
} from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";

const Search = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <StyledForm>
            <StyledInput
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </StyledForm>
    );
};

export default Search;
