import React from "react";
import { StyledButtons, StyledButton } from "../../StyledComponents";
import { fetchExampleTasks, selectIsPending } from "../../tasksSlice";
import { useAppDispatch, useAppSelector} from "../../../../hooks";
const ExampleTasksButton = () => {
  const isPending = useAppSelector(selectIsPending);
  const dispatch = useAppDispatch();
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
