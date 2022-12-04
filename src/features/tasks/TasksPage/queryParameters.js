import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = (key) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search).get(key);

  return searchParams;
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  return ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);

    value === undefined
      ? searchParams.delete(key)
      : searchParams.set(key, value);

    const newSearch = searchParams.toString();
    history.push(`${location.pathname}?${newSearch}`);
  };
};
