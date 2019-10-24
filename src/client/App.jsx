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
          showFavourites:false,
          favouritesLength: 0,
        };
    }

    componentDidMount(){
        let favouritesId = JSON.parse(localStorage.getItem('favouritesId'))
        if( favouritesId !== null){
            this.setState({favouritesLength: favouritesId.length})
        }
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

    favouritesLength(value){
        this.setState({favouritesLength: value.length})
    }

    updateFavLength(value){
        this.setState({favouritesLength: value})
    }

    render() {

        let display;
        if(this.state.showSearch === true && this.state.showFavourites === false){
            display = <Search favouritesLength={(value)=>{this.favouritesLength(value)}}/>;
        } else {
            display = <Favourites updateFavLength={(value)=>{this.updateFavLength(value)}}/>;
        }

        return (
            <div className='container'>
                <Navbar
                    searchHandler={()=>this.searchHandler()}
                    favouritesHandler={()=>this.favouritesHandler()}
                    favourites={this.state.favouritesLength}>
                </Navbar>
                {display}
            </div>
        );
    }
}

export default hot(module)(App);