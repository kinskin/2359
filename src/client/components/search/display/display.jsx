import React from 'react';
import style from './style.scss';

export default class Display extends React.Component{

    clickHandler(){
        console.log(event.target.id)
    }

    render(){
        console.log(this.props.searchResult)
        let results;
        if(this.props.searchResult !== ''){
            results = this.props.searchResult.map((result,index)=>{
                let path = result.images['480w_still'].url
                return(
                    <div className={style.frame} key={index} >
                        <img src={path} onClick={()=>{this.clickHandler()}}/>
                        <div className={style.overlay} id={result.id}></div>
                    </div>
                )
            })
        }
        return(
            <div className='d-flex flex-wrap justify-content-center my-3'>
                {results}
            </div>
        )
    }
}