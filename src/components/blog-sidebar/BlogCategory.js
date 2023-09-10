import React from 'react';
import {Link} from 'react-router-dom';

export default class BlogCategory extends React.Component {
    render(){
        return (
            <>
                <div className="sidebar__single sidebar__category">
                    <h3 className="sidebar__title">Categories</h3>
                    <ul className="sidebar__category-list list-unstyled">
                        <li><Link to={`/blog-details`}>Donations <span>(12)</span></Link></li>
                        <li className="active"><Link to={`/blog-details`}>Charity <span>(10)</span></Link></li>
                        <li><Link to={`/blog-details`}>Fundraising <span>(20)</span></Link></li>
                        <li><Link to={`/blog-details`}>Food &amp; Water<span>(30)</span></Link></li>
                        <li><Link to={`/blog-details`}>Kids Education <span>(15)</span></Link></li>
                    </ul>
                </div>
            </>
        )
    }
}