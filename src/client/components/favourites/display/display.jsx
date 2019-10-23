import React from 'react';
import style from './style.scss'

export default class Display extends React.Component{

    render(){
        let favourites = this.props.favourites.map((favourite,index)=>{
            let path = favourite.images['480w_still'].url
            return(
                <div className={style.frames} key={index}>
                    <img className={style.img} src={path}/>
                </div>
            )
        })

        return(
            <div className='d-flex flex-wrap justify-content-center'>
                {favourites}
            </div>
        )
    }
}