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


        return(
            <div className={style.navigation}>
                <div className={style.appName}>
                    <p>Galler</p><p style={{fontWeight: 'bold'}}>easy</p>
                </div>
                ||
                <div className={style.navbar}>
                    <p onClick={()=>this.searchHandler()}>Search</p>
                    <p onClick={()=>this.favouritesHandler()}>Favourites</p>
                </div>
            </div>
        )
    }
}

export default Navbar;