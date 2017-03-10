/**
 * Created by sagar on 3/9/17.
 */
import React, {Component} from 'react';

export default ({data, filterText, addFavourite})=>  {
        //const {data} = this.props;   ES6 code
        //console.log("our data is ", this.props.data)
        const nameList = data
            .filter(name=>{
                return name.name.toLowerCase().indexOf(filterText.toLowerCase())>=0

            })
            .map(name=>{
            return (
                <li key={name.id} className={name.sex}
                onClick={()=>addFavourite(name.id)}>{name.name}</li>
            );
        })
        return (
        <div>
            <ul>
            {nameList}
        </ul>
        </div>
                    );
    }

