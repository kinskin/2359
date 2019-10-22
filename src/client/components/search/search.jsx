import React from 'react';
import style from './style.scss';

import Form from './form/form.jsx'
import Display from './display/display.jsx'

export default class Search extends React.Component{


    searchValue(value){
        console.log('this is the value in the search component: ', value)
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