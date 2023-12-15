import React from "react";

function List() {
    const isTrue = true;
    const names = [
        {name: "first", age:21},
        {name: "second",age:34},
        {name: "third",age:27},
        {name: "fourth",age:52}
    ];
 
    return(
        <div className="App">
            {names.map((user) => {
                return (
                    isTrue && //condition
                <div>
                    <Name name={user.name} age={user.age}/>
                </div>);
            })}
        </div>
    );
}

const Name= (props) => {
    return (<div>{props.name} {props.age}</div>);
}
export default List;