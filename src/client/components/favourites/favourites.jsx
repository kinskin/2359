import React from 'react';
import style from './style.scss';

import Display from './display/display.jsx'

export default class Favourites extends React.Component{

    constructor(){
        super()
        this.state = {
            apiKey: '7i4KgSemwP8WZSYtPePlpVoVbJeHE8EO',
            favourites: []
        }
    }

    componentDidMount(){
        let apiKey = this.state.apiKey
        let favouritesId = JSON.parse(localStorage.getItem('favouritesId'))
        let favourites = this.state.favourites
        if(favouritesId !== null){
            for(let i = 0; i < favouritesId.length; i++){
                let url = `http://api.giphy.com/v1/gifs/${favouritesId[i]}?&api_key=${apiKey}`
                fetch(url,{
                    header:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
                })
                .then(response => response.json())
                .then(data => favourites.push(data.data))
                .catch(err=>console.log('error: ', error))
            }
            this.setState({favourites: favourites},()=>{
                console.log('this is the favourites: ', this.state.favourites)
            })
        }
    }

    render(){
        let display;
        if(this.state.favourites.length > 0){
            display = <Display favourites={this.state.favourites}/>
        }
        else{
            display = <p> No favourites images </p>
        }

        return(
            <div>
                <div className='text-center'>
                    <h4>Favourites</h4>
                </div>
                {display}
            </div>
        );
    };
};