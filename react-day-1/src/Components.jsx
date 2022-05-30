import React, { Component } from 'react'
import Student from './Components/Student';

export default class Components extends Component {
  constructor(){
      super();
      this.state = {
          student: [
            {name: 'Abhay', marks: 10},
            {name: 'Abhishek M.', marks: 8},
            {name: 'Abhishek T.', marks: 7},
            {name: 'Vaibhav', marks: 9},
            {name: 'Abhiraj', marks: 6},
          ]
      }
  }

  increment = (name) => {
      let ppl = this.state.student.map((s) => {
          if(s.name === name){
              s.marks++
          }
          return s
      })
      this.setState({student: ppl})
  }

  render(){
      return (
          <div className='flex flex-row w-screen p-5 h-fit bg-blue-500 justify-around items-center flex-wrap'>
              {this.state.student.map((stu) => (
                  <Student 
                    name={stu.name}
                    marks = {stu.marks}
                    increment = {this.increment}
                  />
              ))}
          </div>
      )
  }
}