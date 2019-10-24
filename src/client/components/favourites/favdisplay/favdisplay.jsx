import React from 'react';
import style from './style.scss'

export default class Favdisplay extends React.Component{

    imgClickHandler(){
        this.props.imgClickHandler(event.target.id)
    }

    render(){
        let favourites = this.props.favourites.map((favourite,index)=>{
            console.log(favourite.id)
            let path = favourite.images['480w_still'].url
            return(
                <div className={style.frames} key={index}>
                    <img className={style.img} src={path} id={favourite.id} onClick={()=>{this.imgClickHandler()}}/>
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