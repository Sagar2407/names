/**
 * Created by sagar on 3/9/17.
 */
import React, {Component} from 'react';

class Search extends Component{


    filterUpdate()
    {
        const val = this.myValue.value;
        console.log(val);
        this.props.filterUpdate(val);
    }

    render(){
       // console.log("the filterText is", this.props.filterText);

            return(
            <form>
                <input type="text"
                       ref = {(value)=> {this.myValue = value}} //ES6 code
                       //ref="myValue"
                placeholder="Enter the name to filter..."
                       onChange={this.filterUpdate.bind(this)}
                />
            </form>
        );
    }

}

export default Search;