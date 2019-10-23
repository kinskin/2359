import React from 'react';
import style from './style.scss';

class Navbar extends React.Component{


    searchHandler(){
        this.props.searchHandler();
    };

    favouritesHandler(){
        this.props.favouritesHandler();
    };

    render(){
        let favouriteNumber;
        if(this.props.favourites === ''){
            favouriteNumber = <p onClick={()=>this.favouritesHandler()}>Favourites</p>
        }
        else{
            favouriteNumber = <p onClick={()=>this.favouritesHandler()}>Favourites ({this.props.favourites})</p>
        }


        return(
            <div className={style.navigation}>
                <div className={style.appName}>
                    <p>Galler</p><p style={{fontWeight: 'bold'}}>easy</p>
                </div>
                ||
                <div className={style.navbar}>
                    <p onClick={()=>this.searchHandler()}>Search</p>
                    {favouriteNumber}
                </div>
            </div>
        )
    }
}

export default Navbar;