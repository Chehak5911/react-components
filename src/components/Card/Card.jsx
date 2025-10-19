import './card-styles.css';

const Card = ({ 
  image, 
  svg, 
  title, 
  description, 
  type = 'image',
  clickHandler = ()=>{}
}) => {
  return (
    <div onClick={clickHandler} className="card">
      <div className="card-image-container">
        {type === 'image' && image && (
          <img 
            src={image} 
            alt={title} 
            className="card-image" 
          />
        )}

        {type === 'svg' && svg && (
          <div className="card-svg">
            {svg}
          </div>
        )}
      </div>

      <div className="card-content">
        <h3 className="card-title">{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
