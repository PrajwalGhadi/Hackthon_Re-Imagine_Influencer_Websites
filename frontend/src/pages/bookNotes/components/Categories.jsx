import BookNotesCard from "../../../components/carousels/BookNotesCard"

const Categories = ({item}) => {
  console.log('I came to category')
  return (
    <>
      {item.map((item, index)=> {
          <BookNotesCard key={index} item={item}/>
      })}      
    </>
  )
}

export default Categories