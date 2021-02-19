import React from "react";

const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
  links: { download },
}) => {
  const downloadLink = `${download}?force=true`;
  return (
    <article className="photo">
      <img src={regular} alt={alt_description} />
      <div className="photo-info">
        <div>
          <h6>{name}</h6>
          <p className="mb-0">{likes} likes </p>
          <a
            className="h6"
            href={downloadLink}
            download
            target="_blank"
            rel="noreferrer"
          >
            <i class="fas fa-download text-white"></i>
          </a>
        </div>
        <a href={portfolio_url}>
          <img src={medium} alt="" className="user-img" />
        </a>
      </div>
    </article>
  );
};

export default Photo;
