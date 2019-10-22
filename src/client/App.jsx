import React from 'react';
import { hot } from 'react-hot-loader';


import Navbar from './components/navbar/navbar.jsx';
import Search from './components/search/search.jsx';
import Favourites from './components/favourites/favourites.jsx';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
          showSearch: true,
          showFavourites:false
        };
    }

    searchHandler(){
        this.setState({showSearch:true,showFavourites:false}, ()=>{
            console.log('this is the state: ', this.state.showSearch);
            console.log('this is the state: ', this.state.showFavourites);
        });
    };

    favouritesHandler(){
        this.setState({showSearch:false,showFavourites:true},()=>{
            console.log('this is the state: ', this.state.showSearch);
            console.log('this is the state: ', this.state.showFavourites);
        });
    };

    render() {

        let display;
        if(this.state.showSearch === true && this.state.showFavourites === false){
            display = <Search />;
        } else {
            display = <Favourites />;
        }

        return (
            <div className='container'>
                <Navbar
                    searchHandler={()=>this.searchHandler()}
                    favouritesHandler={()=>this.favouritesHandler()}>
                </Navbar>
                {display}
            </div>
        );
    }
}

export default hot(module)(App);