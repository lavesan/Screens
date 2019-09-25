import React from 'react';
import './styles.scss';

export const MiniCard = ({ title, description, author, section, date, aproxReadTime, imgUrl }) => {
    return (
        <article className="card-box">
            <img src={imgUrl} alt={`${title} image`} className="image" />
            <div className="info-box">
                <p className="title">{title}</p>
                <p className="description">{description}</p>
                <aside className="footer-box">
                    <p>{author} in {section}</p>
                    <p>{date} . {aproxReadTime} min read</p>
                </aside>
            </div>
        </article>
    )
}