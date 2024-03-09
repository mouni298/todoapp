import React,{Component} from 'react';
import { FaPlus } from "react-icons/fa6";


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
            <div style={{display:"flex",justifyContent:"flex-start",paddingLeft:"17px"}}>
            <input type="checkbox" id={task.name} checked={task.status==='completed'} onChange={this.updateTaskStatus(index)}/>
            <label htmlFor={task.name}>{task.name}</label>
            </div>
            {(this.state.tasks.length-1 !== index) && <hr style={{width:"95%"}}/>}
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
            <div style={{display:"flex",justifyContent:"center",marginTop:"50px"}}>
                <div style={{backgroundColor:"aliceblue", border:"1px solid grey", borderRadius:"10px",width:"75%"}}>
                <h1>THINGS TO DO</h1>
                <input type = "text" placeholder = "ADD NEW" onChange={this.changeInput} value={this.state.inputValue} style={{border:"1px solid #1b78b3",width:"96%", height:"30px", borderRadius:"5px"}}/><br/>
                <h4>{this.displayTasks()}</h4>
                <div style={{display:"flex", justifyContent:"space-between",borderTop:"1px solid grey",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px",backgroundColor:"#d9fa9b"}}>
                <div style={{display:"flex", justifyContent:"flex-start",alignItems:"center",paddingLeft:"10px"}}>
                <button type ="submit" onClick={this.addTask} style={{border:"none", backgroundColor:"transparent"}}><FaPlus /></button>
                <hr style={{width:"0px", height:"12px"}} />
                <div style={{padding:"0px 5px 1px 5px"}}>{this.state.tasks.filter(task=>task.status === "active").length} Items left</div>
                </div>
                <div>
                <button type="submit" onClick={()=>this.viewTasks("all")} style={{border: this.state.buttonType==="all"?'1px solid grey':"none", backgroundColor:"transparent"}}>All</button>
                <button type="submit"onClick={()=>this.viewTasks("active")} style={{border: this.state.buttonType==="active"?'1px solid grey':"none", backgroundColor:"transparent"}}>Active</button>
                <button type="submit"onClick={()=>this.viewTasks("completed")} style={{border: this.state.buttonType==="completed"?'1px solid grey':"none", backgroundColor:"transparent"}}>Completed</button>
                </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Todoapp