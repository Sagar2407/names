import React, { Component } from 'react';
import './App.css';
import NameList from './components/NameList';
import Credit from './components/Credit';
import Search from './components/Search';
import ShortList from './components/ShortList';

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            filterText:'',
            favourites:[]
        }
    }

    filterUpdate(value){
        this.setState({
            filterText:value
    })

    }
    addFavourite(id){
        console.log("the id is ", id)
        const favList = this.state.favourites.concat([id])
        this.setState({
            favourites:favList
        })
    }
    render() {
       // console.log("value from the parent component", this.state.filterText)

    return(
        <div>
            <Search filterText={this.state.filterText}
            filterUpdate = {this.filterUpdate.bind(this)}/>
            <main>
            <ShortList
                favourite={this.state.favourites}
                data={this.props.data}
            />
            <NameList data = {this.props.data}
            filterText={this.state.filterText}
                      favourites={this.state.favourites}
                      addFavourite={this.addFavourite.bind(this)}/>
            </main>
            <Credit/>
        </div>
    )
  }
}

export default App;
