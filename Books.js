import React from 'react'
const books=[
  {id:1,title:"nithish books", author:"meghana"},
  {id:2,title:"ramyana books", author:"ankitha"},
  {id:3,title:"nayaasimha books", author:"ramya"},
  {id:4,title:"shiva books", author:"namaratha"},
]



function Books() {
  const bookStyle={
    border:"5px green solid",
    margin:10,
    padding:10,
    borderRadius:5,
    width:280,
    dispaly:'inline-block'
  }
  return (
    <div>
      {books.map(title=><div style={bookStyle}>
       <h2>{title.title}</h2>
        <p>{title.author}</p>
      </div>)}
    </div>
  )
}

export default Books;
