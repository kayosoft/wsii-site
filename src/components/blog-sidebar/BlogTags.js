import React from 'react';
import {Link} from 'react-router-dom';

export default class BlogTags extends React.Component {
    render(){
        return (
            <>
                <div className="sidebar__single sidebar__tags">
                    <h3 className="sidebar__title">Tags</h3>
                    <div className="sidebar__tags-list">
                        <Link to={`/`}>Fundraising</Link>
                        <Link to={`/`}>Charity</Link>
                        <Link to={`/`}>Water</Link>
                        <Link to={`/`}>Donation</Link>
                        <Link to={`/`}>Education</Link>
                    </div>
                </div>
            </>
        )
    }
}