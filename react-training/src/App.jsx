import { useState } from "react";
import { Greetings1, Greetings2 } from "./components/Greetings";
import { UserCard } from "./components/UserCard";
import Weather from "./components/Weather";
import Counter from "./components/Counter";
import TaskList from "./components/TaskList";
import Button from "./components/Button";
import PersonForm from "./components/PersonForm";
import ToDoList from "./components/ToDoList";
export default function App() {
  const [count, setCount] = useState(0);
  const tasks = ["gym", "study", "sleep"];
  return (
    <div>
      <h1>React Training</h1>
      {/* <Greetings1 />
      <Greetings1 />

      <Greetings2 /> */}
      {/* <h2>Count: {count}</h2>
       This timestamp renders only once 
      <p>Timestamp: {Date.now()}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button> */}
      {/* <UserCard
        name="Sumit"
        email="sumit@gmail.com"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4QA2eHPuibcNr9YjFeW-kfVNkOhU4HSd4kw&s"
      /> */}
      {/* UserCard(name, email) */}
      {/* <Weather temperature={9} /> */}
      {/* <Counter /> */}
      {/* <TaskList code={tasks} /> */}
      {/* <Button text={"click me!"} color={"green"} /> */}
      {/* <PersonForm /> */}
      <ToDoList />
    </div>
  );
}
