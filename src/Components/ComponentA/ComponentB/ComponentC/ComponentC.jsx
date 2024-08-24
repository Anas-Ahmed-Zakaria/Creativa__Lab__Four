import React, { Component } from 'react'
import { UseConsumer } from '../../../../Context/Context';


export default class ComponentC extends Component {
  render() {
    return (
      <>
       <div className=' container mx-auto text-center my-4'>
        <UseConsumer>
        {(value) => {
                  console.log(value);
                  return <h1 className=' text-danger'>Component C: {value}</h1>
                }
        }
        </UseConsumer>
        </div> 
      </>
    )
  }
}
