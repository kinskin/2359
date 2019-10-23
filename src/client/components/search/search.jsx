import React from 'react';
import style from './style.scss';

import Form from './form/form.jsx'
import Display from './display/display.jsx'

export default class Search extends React.Component{

    constructor(){
        super()
        this.state = {
            searchValue: '',
            apiKey: '7i4KgSemwP8WZSYtPePlpVoVbJeHE8EO',
            searchResult: '',
            favouritesId: []
        }
    }

    componentDidMount(){
        let favouritesId = JSON.parse(localStorage.getItem('favouritesId'))
        if(favouritesId !== null){
            this.setState({favouritesId: favouritesId},()=>{
                this.favouritesLength()
            })
        }
    }

    searchValue(value){
        let searchValue = JSON.parse(localStorage.getItem(value));
        if(searchValue === null){
            this.getData(value)
        }
        else{
            this.setState({searchResult:searchValue})
        }
    };

    getData(value){
        let apiKey = this.state.apiKey
        let url = `http://api.giphy.com/v1/gifs/search?q=${value}&api_key=${apiKey}`
        fetch(url,{
            header:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => this.setState({searchResult:data.data}))
        .then(()=>
            localStorage.setItem(value,JSON.stringify(this.state.searchResult)))
        .catch(err => console.log('error: ', err))
    }

    favouriteId(id){
        let favouritesId = this.state.favouritesId
        let favouriteIndex = favouritesId.findIndex(favourite=>favourite===id)
        if(favouriteIndex === -1){
            favouritesId.push(id)
            this.setState({favouritesId:favouritesId},()=>{
                localStorage.setItem('favouritesId', JSON.stringify(this.state.favouritesId))
                this.favouritesLength()
            })
        }
        else{
            favouritesId.splice(favouriteIndex,1)
            this.setState({favouritesId:favouritesId},()=>{
                localStorage.setItem('favouritesId', JSON.stringify(this.state.favouritesId))
                this.favouritesLength()
            })
        }
    }

    favouritesLength(){
        this.props.favouritesLength(this.state.favouritesId)
    }


    render(){

        let display;
        if(this.state.searchResult !== null){
            display = <Display searchResult={this.state.searchResult} favouriteId={(id)=>this.favouriteId(id)}/>
        }
        else{
            display = <h1>No search result</h1>
        }

        return(
            <div>
                <Form searchValue={(value)=>{this.searchValue(value)}}/>
                {display}
            </div>
        );
    };
};