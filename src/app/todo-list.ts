export class TodoList{

name: string;

tasks: TodoItem[] = [
    new TodoItem('Wymienic opony', true),
    new TodoItem('Posprzątać garaż'),
    new TodoItem('Nauka do egzaminu'),
    new TodoItem('Posprzątać kuchnię'),
    new TodoItem('Pościelić łóżko'),
]

constructor(name: string){
    this.name = name;
}

}


export class TodoItem {
    name: string;
    completed: boolean;

    constructor(name: string, completed: boolean = false){
        this.name = name;
        this.completed = completed;
    }
}
