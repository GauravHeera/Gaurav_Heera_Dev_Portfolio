import { Helmet } from "react-helmet";

const Blogs = () => {
    return(
        <div className="blogs page" data-page="blogs">

            <Helmet>
                <title>Gaurav Heera · Blogs</title>
                <meta name="description" content="Read blogs by Gaurav Heera—React.js developer and full-stack learner. Explore web development insights, project breakdowns, and personal reflections on coding, design, and career growth."></meta>
            </Helmet>

            <h1>No Blogs Yet</h1>
        </div>
    )
}
export default Blogs;