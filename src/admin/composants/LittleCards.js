import '../styles/LittleCard.css'

function LittleCard({title, content, date}){

    return (
        <div className="card">
            <h4 className="card-title">{title}</h4>
             <p className="card-content">{content}</p> 
            <p className="card-date"> Dernière mise-à-jour : {date} </p>
        </div>

    )
}

export default LittleCard
