
import { Component } from "react";
import toDoImageOne from './to-do-list1.png';
import toDoImageTwo from './to-do-list2.png';
import myLogo from './My-new-Logo.png';

export class ToDoList extends Component {
    
    state = {
        userInput: "",
        toDoList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
        
    }

    addItem(input) {
        if(input === "") {
            alert("Please add a task!")
        }
        else {
            let listArray = this.state.toDoList;
            listArray.push(input)
            this.setState({toDoList: listArray, userInput: ""})
            
        }
    }

    crossedWord(event) {
        const li = event.target;
        const check = event.target;
        li.classList.toggle("crossed");
        check.classList.toggle("delete")
    }

    deleteItem() {
        let listArray = this.state.toDoList;
        // listArray = []; or you can wright like this:--->
        // listArray.length = 0;
        listArray = [];
        this.setState({toDoList: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render () {
        return (
            <div className="mainBox">
                <div className="Container">
                    <h1>TO-DO LIST</h1>
                </div>
                <div className="Container">
                    <img src={toDoImageOne} alt="logoImage" width="250px" />
                </div>
                <form onSubmit={this.onFormSubmit}>
                <div className="buttons">
                    <button onClick={() => this.addItem(this.state.userInput)}>Add</button>
                    <button onClick={() => this.deleteItem()}>Del</button>
                </div>

                <div className="tcontainer">
                    <div className="ticker-wrap">
                        <div className="ticker-move">
                        <div className="ticker">
                            <div className="ticker__item date"> ADD YOUR TASKS IN THE FIELD BELOW. </div>
                            <div className="ticker__item hours"> CLICK ON A ADD BUTTON TO ADD IT TO THE TASK-LIST. </div>
                            <div className="ticker__item"> CLICK ON A TASK TO MARK IT AS COMPLETED. </div>
                            <div className="ticker__item"> CLICK DEL BUTTON TO REMOVE ALL TASKS FROM THE TASK-LIST. </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="separator"></div>
                <div className="Container">
                    <input type="text" placeholder="Add your task in the list" onChange={(e) => {this.onChangeEvent(e.target.value)}} value={this.state.userInput} />
                </div>
                
                <ul>
                    {this.state.toDoList.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}>
                        <span></span>
                        {item}
                        </li>
                    ))
                    }
                </ul>
                <div className="Container">
                    <img src={toDoImageTwo} alt="logoImage" width="250px" />
                </div>
                </form>
                <div className="Footer">
                    <p>Made with <span className="heart"></span> by</p>
                    <img className="myLogoImg" src={myLogo} alt="my-logo" width="60px" />
                </div>
            </div>
        )
    }


    // -----------------------!SECTION

    //------------------------
}