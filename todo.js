const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      return all.filter((todo)=> todo.dueDate < new Date().toISOString().slice(0,10));
    }
  
    const dueToday = () => {
      return all.filter((todo)=>todo.dueDate == new Date().toISOString().slice(0,10));
    }
  
    const dueLater = () => {
      return all.filter((todo)=>todo.dueDate > new Date().toISOString().slice(0,10));
    }
  
    const toDisplayableList = (list) => {

      return list.map((todo)=>{
        `${todo.completed?'[x]':'[]'} ${todo.title} ${todo.dueDate === today?" ":todo.dueDate}`
      }).join("\n");
      
    }
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };
  
module.exports = todoList