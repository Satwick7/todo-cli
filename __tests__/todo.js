
const todolist = require("../todo");

const { all, add, markAsComplete } = todolist();

describe("TodoList Test Suite", () => {
    beforeAll(()=>{
        add(
            { 
                title: "test todo",
                completed: false,
                dueDate: new Date().toLocaleDateString("en-CA"),  
            }
        )
    })

    test("should add new todo", () => {
        const todoitem = all.length;
        add({
            title: "test todo",
            completed: false,
            dueDate: new Date().toLocaleDateString("en-CA"),
        });
        expect(all.length).toBe(todoitem+1);
    });

    test("should mark tasks as complete",()=>{
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    })
});
