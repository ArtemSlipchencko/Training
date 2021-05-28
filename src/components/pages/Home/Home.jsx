import React, { Component } from "react";
import { connect } from "react-redux";
import getPosts from "../../../redux/service/service-operations";

class Home extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <div className="container">
        <h1>News</h1>
        <ul>
          {this.props.posts.map((post, i) => (
            <>
              <li key={i}>
                <h2>{post.title}</h2>
                <span>{post.author}</span>
                <p>{post.text}</p>
              </li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getPosts: getPosts,
};

const mapStateToProps = function (state) {
  return {
    posts: state.service.posts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
