'use server';

import {revalidatePath} from "next/cache";
import {Todo} from "@/app/components/TodoList";
import sleep from "@/lib/sleep";

export async function addTodo(data: FormData){
    //get('title') gets the value assigned to the title prop in the <input/>
    const title = data.get('title');

    await fetch('http://localhost:3001/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId: 1, title, completed:false
        })
    })

    revalidatePath("/");
}

export async function deleteTodo(todo: Todo) {
    const res = await fetch(`http://localhost:3001/todos/${todo.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: todo.id
        })
    })

    await res.json()
    revalidatePath("/");
}

export async function updateTodo(todo: Todo) {
    const res = await fetch(`http://localhost:3001/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...todo, completed: !todo.completed,
        })
    })

    await res.json();
    await sleep(500);
    revalidatePath('/');
}