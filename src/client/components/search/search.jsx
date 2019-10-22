import React from 'react';
import style from './style.scss';

import Form from './form/form.jsx'
import Display from './display/display.jsx'

export default class Search extends React.Component{

    constructor(){
        super()
        this.state = {
            searchValue: '',
            apiKey: '7i4KgSemwP8WZSYtPePlpVoVbJeHE8EO'
        }
    }

    searchValue(value){
        let apiKey = this.state.apiKey
        let url = `http://api.giphy.com/v1/gifs/search?q=${value}&api_key=${apiKey}`
        fetch(url,{
            header:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log('error: ', err))
    }



    render(){

        return(
            <div>
                <Form searchValue={(value)=>{this.searchValue(value)}}/>
                <Display/>
            </div>
        );
    };
};