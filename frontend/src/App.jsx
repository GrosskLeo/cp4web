import TaskBoard from "./components/TaskBoard";

function App() {
  return (
    <div className="bg-pink-50 min-h-screen font-sans p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-pink-500 my-8">
          Quadro de Tarefas
        </h1>
        <TaskBoard />
      </div>
    </div>
  );
}

export default App;