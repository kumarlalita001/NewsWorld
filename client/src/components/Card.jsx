import React, { useState } from "react";
// import PropTypes from "prop-types";

const ArticleCard = ({ data }) => {
  const { title, description, content, url, image, publishedAt, source } = data;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto my-4 sm:max-w-md lg:max-w-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">{description}</p>
        <p className={`text-gray-600 ${expanded ? "block" : "line-clamp-3"}`}>
          {content}
        </p>
        {!expanded && content.length > 200 && (
          <button
            onClick={handleExpandClick}
            className="text-blue-500 hover:underline mt-2 block"
          >
            Read more
          </button>
        )}
        {expanded && (
          <button
            onClick={handleExpandClick}
            className="text-blue-500 hover:underline mt-2 block"
          >
            Show less
          </button>
        )}
        <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
          <span>{new Date(publishedAt).toLocaleDateString()}</span>
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            {source.name}
          </a>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 text-blue-500 hover:underline"
        >
          Read full article
        </a>
      </div>
    </div>
  );
};

// ArticleCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   publishedAt: PropTypes.string.isRequired,
//   source: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired
//   }).isRequired
// };

export default ArticleCard;
