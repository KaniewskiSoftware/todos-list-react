import { useHistory, useLocation } from "react-router-dom";
import { StyledInput, StyledForm } from "../../StyledComponents";
import searchQueryParamName from "../searchQueryParamName";

const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete(searchQueryParamName);
    } else {
      searchParams.set(searchQueryParamName, target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <StyledForm as="div">
    <StyledInput
      placeholder="Filtruj zadania"
      value={query || ""}
      onChange={onInputChange}
    />
    </StyledForm>
  );
};

export default Search;
