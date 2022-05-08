import React from 'react'

export default function Results(props) {
  const {results}= props

  console.log(results)

  const renderResults =() => {
    return results.map((item,index) => {
     return <img ket={index} src={item} className="img-fluid" alt="..."/> 
    })
  }


  return (
    <div>
      {renderResults()}
    </div>
  )
}
