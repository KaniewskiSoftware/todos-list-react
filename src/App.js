import Form from "./Form";
import Tasks from "./Tasks";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <main className="container">
      <header>
        <h1>Lista Zadań</h1>
      </header>
      <section className="section">
        <h2 className="section__header">Dodaj nowe zadanie</h2>
        <Form />
      </section>
      <section className="section">
        <div className="section__box">
          <h2 className="section__header">Lista zadań</h2>
          <div className="section__buttons"></div>
        </div>
        <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
      </section>
    </main>
  );
}

export default App;
