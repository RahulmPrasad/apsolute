import React from "react";

const ProjectCard = ({ content, title, description, tag, src, index, total }) => {
  return (
    <article className="projcard">
      <div className="projcard-media">
        <img className="projcard-img" src={src} alt={title} loading="lazy" />
        {tag && <span className="projcard-tag">{tag}</span>}
      </div>

      <div className="projcard-textbox">
        {index != null && (
          <span className="projcard-count">
            {String(index).padStart(2, "0")}
            {total != null && <em> / {String(total).padStart(2, "0")}</em>}
          </span>
        )}
        <h3 className="projcard-title">{title}</h3>
        <p className="projcard-subtitle">{description}</p>
        <div className="projcard-bar"></div>
        <p className="projcard-description">{content}</p>
        <button className="project-button">
          Learn More <span className="material-symbols-outlined">north_east</span>
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
