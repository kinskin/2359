import React from 'react';
import style from './style.scss';

class Form extends React.Component{

    constructor(){
        super()
        this.state = {
            placeholder: 'Start searching for images!',
            inputValue: ''
        }
    }

    onChangeHandler(event){
        this.setState({inputValue: event.target.value})
    }

    enterHandler(event){
        if(event.keyCode === 13){
            this.props.searchValue(this.state.inputValue)
        }
    }

    render(){

        return(
            <div className='text-center my-2'>
                <input className={style.inputBox} placeholder={this.state.placeholder} onChange={(event)=>{this.onChangeHandler(event)}} onKeyDown={(event)=>this.enterHandler(event)}/>
            </div>
        );
    };
};

export default Form;