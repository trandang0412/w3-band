import React, { ChangeEvent, ReactNode, createContext, useEffect, useState, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { initialState, todoReducer } from "../reducer/TodoReducer";
import { NEW_DATE, NEW_TIME, NEW_TODO } from "../reducer/types";

export interface ITodoType {
    id: string,
    todo: string,
    time: string,
    date: string,
    isCompleted: boolean,
    isEditing: boolean,
    isChecked: boolean,
}

interface ITodoContext {
    handleOpenAdd: () => void,
    handleCloseAdd: () => void,
    isAdd: boolean,
    todoList: ITodoType[];
    isShowConfirmDelete: boolean,
    handleAddTodo: () => void;
    handleCompleted: (todoId: string) => void;
    todoChange: (e: ChangeEvent<HTMLInputElement>) => void;
    timeChange: (e: ChangeEvent<HTMLInputElement>) => void;
    dateChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleDelete: (deleteId: string) => void;
    handleConfirmDelete: () => void;
    handleCancelDelete: () => void;
    displayTodo: object;
    displayDone: object;
    handleEditTodo: (editId: string, title: string) => void;
    editTodoId: string | null;
    newTitle: string | null;
    handleSaveEdit: () => void,
}


export const TodoContext = createContext<ITodoContext>({  // <> gọi là type parameter
    todoList: [],
    isAdd: false,
    isShowConfirmDelete: false,
    displayTodo: {},
    displayDone: {},
    editTodoId: '',
    newTitle: '',
    todoChange: () => { },
    timeChange: () => { },
    dateChange: () => { },
    handleOpenAdd: () => { },
    handleCloseAdd: () => { },
    handleAddTodo: () => { },
    handleCompleted: () => { },
    handleDelete: () => { },
    handleConfirmDelete: () => { },
    handleCancelDelete: () => { },
    handleEditTodo: () => { },
    handleSaveEdit: () => { },
    })
    
    
    
    interface Props {
        children: ReactNode; // reactNode là 1 kiểu dữ liệu rộng lớn nó có thể bao gồm tất cả như mảng, chuỗi, components, các fragment
    }

    const TodoContextProvider: React.FC<Props> = ({ children }) => {

    //use Reducer
    const [state, dispatch] = useReducer(todoReducer, initialState)


    const [todoList, setTodoList] = useState<ITodoType[]>(() => {
        const localStorageDate = JSON.parse(localStorage.getItem('todoList') ?? '[]');
        if (localStorageDate?.length) {
            return localStorageDate;
        }
        return [];
    });

    //save todoList in localStorage
    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }, [todoList])


    //open add todo  
    const [isAdd, setIsAdd] = useState(false)
    const handleOpenAdd = () => {
        setIsAdd(true)
    }
    const handleCloseAdd = () => {
        setIsAdd(false)
        setEditTodoId(null)
    }

    //add to do
    const handleAddTodo = () => {

        const todoItems: ITodoType = {
            id: uuidv4(),
            todo: state.newTodo,
            time: state.newTime,
            date: state.newDate,
            isCompleted: false,
            isEditing: false,
            isChecked: false
        }

        setTodoList([todoItems, ...todoList]);

    }

    //edit todo
    const [editTodoId, setEditTodoId] = useState<string | null>(null)
    const [newTitle, setNewTitle] = useState<string | null>(null)

    const handleEditTodo = (editId: string, title: string) => {
        setEditTodoId(editId);
        setNewTitle(title)
        setIsAdd(true)
    }

    const handleSaveEdit = () => {

        const todoItems: ITodoType = {
            id: uuidv4(),
            todo: state.newTodo,
            time: state.newTime,
            date: state.newDate,
            isCompleted: false,
            isEditing: false,
            isChecked: false
        }

        setTodoList(todoList.map((todo) => {
            if (todo.id !== editTodoId) return (todo)
            return todoItems;
        }))

    }

    //add todo, time, date from htmlInputElement
    const todoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: NEW_TODO,
            payload: e.target.value
        })
    }

    const dateChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: NEW_DATE,
            payload: e.target.value
        })
    }

    const timeChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: NEW_TIME,
            payload: e.target.value
        })
    }

    //check to complete
    const handleCompleted = (todoId: string) => {
        setTodoList((prev) => {
            return prev.map((todo) => {
                if (todoId === todo.id) {
                    return { ...todo, isCompleted: !todo.isCompleted }
                } return todo;
            })
        })
    }

    //display done hoặc do
    const displayDone = todoList.filter(todo => todo.isCompleted);
    const displayTodo = todoList.filter(todo => !todo.isCompleted);

    //delete todo
    const [newDeleteId, setNewDeleteID] = useState('')
    const [isShowConfirmDelete, setIsShowConfirmDelete] = useState(false);

    const handleDelete = (deleteId: string) => {
        setIsShowConfirmDelete(true);
        setNewDeleteID(deleteId)
    }

    const handleConfirmDelete = () => {
        const deleteId = newDeleteId;
        setTodoList(todoList.filter(item => item.id !== deleteId));
        setIsShowConfirmDelete(false);
    }

    const handleCancelDelete = () => {
        setIsShowConfirmDelete(false)
    }

    //create contextdata to props
    const todoContextData = {
        newTitle,
        todoList,
        isAdd,
        isShowConfirmDelete,
        displayTodo,
        displayDone,
        editTodoId,
        handleOpenAdd,
        handleCloseAdd,
        handleAddTodo,
        todoChange,
        timeChange,
        dateChange,
        handleCompleted,
        handleDelete,
        handleConfirmDelete,
        handleCancelDelete,
        handleEditTodo,
        handleSaveEdit
    }

    return (
        <TodoContext.Provider value={todoContextData}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;