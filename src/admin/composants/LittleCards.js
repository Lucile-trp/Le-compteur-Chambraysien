import '../styles/LittleCard.css'
function LittleCard({title, content}){

    return (
        <div className="card">
            <h4 className="card-title">{title}</h4>
            <p className="card-content">{content}</p>
        </div>

    )
}

export default LittleCard
