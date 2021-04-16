import React, { Component } from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: '',
    }

    onSubmit1 = e => {
        // console.log(this.state)
        e.preventDefault();
    }

    onChange1 = e => {
    //    console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <form onSubmit={this.onSubmit1}>
                <input 
                    type="text" 
                    name= "title"
                    placeholder="write a task"
                    onChange={this.onChange1}
                    value={this.state.title}
                  />
                <br/>
                <br/>
                <textarea 
                    name="description"
                    placeholder="write a description" 
                    onChange={this.onChange1}
                    value={this.state.description}>
                </textarea>
                <br/>
                <input type="submit"/>
            
            </form>
        )
    }

}

