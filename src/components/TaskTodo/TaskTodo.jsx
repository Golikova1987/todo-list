import { Button, Checkbox } from '@mui/material';
import './TaskTodo.css';

export const TaskTodo = (props) => {

    return (
        <div className='task-todo' key={props.id}>
			{
				props.edit === props.id ? 
					<div className='task-todo__container'>
						<Button color={'inherit'} variant={'outlined'} className='task-todo__save-button' onClick={() =>props.saveTodo(props.id)}>Save</Button>
						<input
							className='task-todo__input'
							onChange={(e) => props.setValue(e.target.value)}
							value={props.value}
						>
						</input>
					</div> :

					<div className='task-todo__container'>
					<Checkbox 
						className='task-todo__checkbox-real'
						color="success"
						// type={"checkbox"}
						onClick={()=> props.toggleTask(props.id)}
						defaultChecked={props.status}
					>
					</Checkbox>

					<p onDoubleClick={()=> props.editTodo(props.id, props.title)} style={props.status ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{props.title}</p>
				</div>
			}

					<Button className='task-todo__button' variant={'text'} onClick={()=> props.deleteTask(props.id)}><img className='task-todo__button-img' src='./close-icon.svg' alt='Close Icon'></img></Button>

        </div>
    )
}
