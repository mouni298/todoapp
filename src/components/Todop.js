import React,{Component} from 'react';

class Todoapp extends Component{
    constructor(){
        super()
        this.state = {
           tasks : [],
           inputValue : "",
           buttonType : "all"
        }
        this.changeInput = this.changeInput.bind(this)
        this.addTask = this.addTask.bind(this)
        this.displayTasks = this.displayTasks.bind(this)
        this.updateTaskStatus = this.updateTaskStatus.bind(this)
        this.viewTasks = this.viewTasks.bind(this)

    }
    updateTaskStatus=(index)=> event =>{
        console.log(event,index)
        let tasks = [...this.state.tasks]
        tasks[index]['status'] = event.target.checked?'completed':'active'
        this.setState({
            tasks: tasks
        },()=>console.log(this.state.tasks))
    }

    addTask(){
        if(this.state.inputValue !== ''){
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
        }
    }
    displayTasks(){
        return this.state.tasks.map((task,index)=>((this.state.buttonType === "all" ?true:this.state.buttonType === task.status) &&
            <>
            <input type="checkbox" id={task.name} checked={task.status==='completed'} onChange={this.updateTaskStatus(index)}/>
            <label htmlFor={task.name}>{task.name}</label><br/>
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
    viewTasks(type){
        this.setState({
            buttonType : type
        })
    }
    render(){
        return(
                <>
                <h1>THINGS TO DO</h1>
                <input type = "text" placeholder = "ADD NEW" onChange={this.changeInput} value={this.state.inputValue}/><br/>
                <button type ="submit" onClick={this.addTask}>+</button>
                <h2>{this.displayTasks()}</h2>
                <button type="submit" onClick={()=>this.viewTasks("all")}>All</button>
                <button type="submit"onClick={()=>this.viewTasks("active")} >Active</button>
                <button type="submit"onClick={()=>this.viewTasks("completed")} >Completed</button>
                </>
        )
    }
}
export default Todoapp