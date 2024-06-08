// Card.js
import React from 'react';
import PropTypes from 'prop-types';
function Card() {
    return (
        <div className="card">
            <img className="card-img" src="https://615film.com/wp-content/uploads/2017/01/savitar.jpg" alt="Profile Pic" />
            <h2 className="card-title">Madhav Dalal</h2>
            <p className="card-description">Hi! My name is Madhav and I am the fastest Man alive</p>
        </div>
    );
}

function Card2(props) {
    return (
        <div className="card">
            <img className = "card-img"src={props.src} alt="Profile pic" />
            <h2 className="card-title">{props.name}</h2>
            <p className="card-description">{props.desc}</p>
            <p className="card-description">{props.alive ? "Alive" : "Not Alive"}</p>
        </div>
    );
}

Card2.propTypes = {
    name : PropTypes.string,
    src : PropTypes.string,
    desc : PropTypes.string,
    alive : PropTypes.bool,
}

Card2.defaultProps = {
    name: "Caitlyn",
    src: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Caitlin-Snow.The-Flash.webp",
    desc: "I am a cold hearted Killer Frost",
    alive: true,
}
export { Card, Card2 };
