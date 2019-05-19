
import React, { Component } from 'react';

import {Form } from 'reactstrap';
export default class Cycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            globalTitle:''
         
          
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
    }



    onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
       }
   
       changeTitle(e){
           this.setState({
             globalTitle: `Mon Formulaire - ${this.state.title}`
           });
       }



       submitForm(e) {
        e.preventDefault();
    
       }
   
       componentDidMount() {
           console.log('Formulaire rendu');
       }
   
       componentDidUpdate() {
           console.log('Titre changé');
       }
       
   



    render() {
        return (

            <div >
             
              


          

                  <h2>------ {this.state.globalTitle} ------ </h2>


               



                  <Form onSubmit={this.submitForm}>  

        <label>
          Name:
          <input
          type="text"
          id="title"
          name="title"
          onChange={this.onChange}
          value={this.state.title}
          />
        </label>
        <input  onClick={this.changeTitle} type="submit" value="Submit" />
        <h1>oo{this.state.title} oo</h1>
      </Form>



</div>




        );
    }
}

