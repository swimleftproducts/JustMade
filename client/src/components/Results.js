import React from 'react'

export default function Results(props) {
  const {results}= props

  const renderResults =() => {
    return results.map((item,index) => {
     return (
      <div>
       <img  src={item} className="img-fluid" alt="..."/> 
      </div>)
    })
  }

  return (
    <div>
      {renderResults()}
    </div>
  )
}
