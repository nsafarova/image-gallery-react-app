
const Image = ({data}) => {
  return (
    <div className="relative mb-6 before:content-[''] before:absolute before:inset-0">
      <a href={data.urls.regular} target="_blank" rel="noreferrer">
        <img className="w-full shadow-md" src={data.urls.small} alt={data.alt_description} />
    </a>
    </div>
    
  )
}
export default Image