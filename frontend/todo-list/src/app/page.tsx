import Image from "next/image";
import TodoList from "@/components/ui/TodoList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {/* <h1>TODO LIST</h1> */}
      {/* <div> */}
      {/* <Input /> */}
      {/* <Button>Click me</Button> */}
      {/* </div> */}
      <TodoList />
    </main>
  );
}
