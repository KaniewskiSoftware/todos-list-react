import { useDispatch } from "react-redux";
import { StyledButtons, StyledButton } from "../Buttons/styled";
import { fetchExampleTasks } from "../tasksSlice";

const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  return (
    <StyledButtons>
      <StyledButton onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </StyledButton>
    </StyledButtons>
  );
};

export default ExampleTasksButton;
