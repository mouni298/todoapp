import React,{Component} from 'react';

class Todoapp extends Component{
    constructor(){
        super()
        this.state = {
           tasks : [],
           inputValue : "",
        }
        this.changeInput = this.changeInput.bind(this)
        this.addTask = this.addTask.bind(this)
        this.displayTasks = this.displayTasks.bind(this)

    }
    addTask(){
        this.setState({
            tasks : [...this.state.tasks,{
                name : this.state.inputValue,
                status : "active"
            }],

        },()=>{
            this.setState({
                inputValue : ''
            })
            console.log(this.state.tasks)}
        )

    }s
    displayTasks(){
        return this.state.tasks.map(task=>(
            <>
            <input type="checkbox" id={task.name} checked={false}/>
            <label htmlFor={task.name}>{task.name}</label>
            </>
        ))
    }
    changeInput(event){
        this.setState(
            {
                inputValue : event.target.value
            }
        )
    }
    render(){
        return(
                <>
                <h1>THINGS TO DO</h1>
                <input type = "text" placeholder = "ADD NEW" onChange={this.changeInput} value={this.state.inputValue}/>
                <button type ="submit" onClick={this.addTask}>+</button>
                <h2>{this.displayTasks()}</h2>
                </>
        )
    }
}
export default Todoapp