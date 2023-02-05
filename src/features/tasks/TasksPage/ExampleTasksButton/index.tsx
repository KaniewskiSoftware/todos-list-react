import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledButtons, StyledButton } from "../../StyledComponents";
import { fetchExampleTasks, selectIsPending } from "../../tasksSlice";

const ExampleTasksButton = () => {
  const isPending = useSelector(selectIsPending);
  const dispatch = useDispatch();
  return (
    <StyledButtons>
      <StyledButton
        onClick={() => dispatch(fetchExampleTasks())}
        disabled={isPending}
      >
        {isPending ? "Ładowanie..." : "Pobierz przykładowe zadania"}
      </StyledButton>
    </StyledButtons>
  );
};

export default ExampleTasksButton;
