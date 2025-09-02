


export default function RecipeCard(props) {

  return (
    <div className="recipe-card">
        <div className="recipe-header">
            <h2>{props.RecipeName}</h2>
            <p className="prep-cook">{props.Time}</p>
        </div>      
        <div className="recipe-body">
          <div>
            <p>{props.Serving}</p>
            <p>{props.difficult}</p>
            <p>{props.type}</p>
          </div>
          <img className="foodimg" src={props.Src}></img>
        </div>
        <div className="recipe-footer">
            <small>Made by {props.ChefName}</small>
        </div> 
    </div>
  );
}


