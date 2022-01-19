import React from "react";
import "./pagination.css";

export class Pagination extends React.Component {
    constructor(props) {
        super(props);

        this.numOfPage = 0;
        this.flipLeft = this.flipLeft.bind(this);
        this.flipRight = this.flipRight.bind(this);
        this.flip = this.flip.bind(this);
    }

    render() {
        const { currentPage, numPerPage, projects } = this.props;
        this.numOfPage = Math.ceil(projects.length / numPerPage);

        return (
            <div className="pagination">
                <button className="left" onClick={this.flipLeft}>{`<`}</button>
                {Array.from(Array(this.numOfPage)).map((item, index) => (
                    <button
                        className={`number${index + 1 === currentPage ? " selected" : ""}`}
                        onClick={() => this.flip(index + 1)}>{index + 1}
                    </button>
                ))}
                <button className="right" onClick={this.flipRight}>{`>`}</button>
            </div>
        )
    }

    flipLeft() {
        if (this.props.currentPage <= 1) return;
        this.props.onPageChanged(this.props.currentPage - 1);
    }

    flipRight() {
        if (this.props.currentPage >= this.numOfPage) return;
        this.props.onPageChanged(this.props.currentPage + 1);
    }

    flip(newPage) {
        this.props.onPageChanged(newPage);
    }
}