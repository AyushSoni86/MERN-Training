import { useState } from "react";
import { Greetings1, Greetings2 } from "./components/Greetings";
import { UserCard } from "./components/UserCard";
import Weather from "./components/Weather";
import Counter from "./components/Counter";
import TaskList from "./components/TaskList";
import Button from "./components/Button";
import PersonForm from "./components/PersonForm";
import ToDoList from "./components/ToDoList";
import Clock from "./components/Clock";
import ProductsList from "./components/ProductsList";
import ThemeCard from "./components/ThemeCard";
import { ThemeContextProvider } from "./contexts/themeContext";
import Parent from "./components/UseCallBackHook/Parent";
import StudentList from "./components/UseMemoHook/StudentList";
// import { ThemeContextProvider } from "./components/Parent";
export default function App() {
  const tasks = ["gym", "study", "sleep"];
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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

      {/* <ToDoList /> */}
      {/* <Clock /> */}
      {/* <PersonForm /> */}
      {/* <ThemeCard /> */}
      {/* <ThemeContextProvider>
        <ProductsList />
      </ThemeContextProvider> */}
      {/* <Parent /> */}
      <StudentList />
    </div>
  );
}
