import React from 'react';
import style from './style.scss';

export default class Display extends React.Component{


    clickHandler(){
        this.props.favouriteId(event.target.id)
    }

    render(){
        let results;
        if(this.props.searchResult !== ''){
            results = this.props.searchResult.map((result,index)=>{
                let path = result.images['480w_still'].url
                return(
                    <div className={style.frame} key={index}>
                        <img className={style.img}src={path} id={result.id} onClick={()=>{this.clickHandler()}}/>
                        <div className={style.baseHeart}></div>
                    </div>
                )
            })
        }
        return(
            <div className='d-flex flex-wrap justify-content-center'>
                {results}
            </div>
        )
    }
}