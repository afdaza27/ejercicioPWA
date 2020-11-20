import React, { useState } from "react";

const Character = (props) => {
  const [name, setCharacter] = useState(props.character.name);
  const [image, setImage] = useState(
    props.character.thumbnail.path + "." + props.character.thumbnail.extension
  );
  const [description, setDescription] = useState(props.character.description);

  return (
    <div className="col-4">
      <div className="card">
        <img src={image} className="card-img-top" alt={name} />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Character;
