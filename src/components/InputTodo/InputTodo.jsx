// import { TextField } from '@mui/material';
import './InputTodo.css';

export const InputTodo = (props) => {
    return (
        <div className="input-todo">
          <img className='input-todo__icon' src="./check-icon.svg" alt="Check Icon" />
          <input className="input" 
            value={props.todo}
			    	onChange={(e)=> props.setTodo(e.target.value)}
						placeholder="What needs to be done?"
            onKeyDown={props.handleKeyPress}
            variant="standard"
          />
        </div>
    )
}
