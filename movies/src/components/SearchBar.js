import React from "react";


class SearchBar extends React.Component {
    render() {
        return (
        <div className="row">
            <div className="col-lg-12">
            <form>
                <div className="form-group">
                <input
                    type="text"
                    className="form-control bg-secondary text-white"
                    placeholder="Search a movie"
                />
                </div>
            </form>
            </div>
        </div>
        );
    }
    }   

export default SearchBar;


