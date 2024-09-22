import PropTypes from 'prop-types';

const BlogContent = ({ blogData, status }) => {
    const formatContent = (content) => {
        return content.split("\n\n").map((paragraph, index) => (
            <p key={index}>
                {paragraph.split("\n").map((line, lineIndex) => (
                    <span key={lineIndex}>
                        {line}
                        {lineIndex < paragraph.split("\n").length - 1 && <br />}
                    </span>
                ))}
            </p>
        ));
    };

    return (
        <div className='blog-detail'>
            <h1>{blogData.title}</h1>
            <button onClick={() => status(true)}>⇐ Go Back</button>
            <div className='blog-body'>
                {formatContent(blogData.blog)}
            </div>
        </div>
    );
};

BlogContent.propTypes = {
    blogData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        blog: PropTypes.string.isRequired,
    }).isRequired,
    status: PropTypes.func.isRequired
};

export default BlogContent;
