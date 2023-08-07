import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchIndices } from '../REDUX_API/api';
import { Card, CardContent, Typography } from "@material-ui/core";

class API extends Component {
  componentDidMount() {
    this.props.fetchIndices();
  }

  render() {
    const { indices, loading, error } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <>
        {indices.map((item, key) => (
          <Card key={key} style={{ margin: "10px" }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography color="textSecondary">{item.body}</Typography>
            </CardContent>
          </Card>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  indices: state.indices,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  fetchIndices,
};

export default connect(mapStateToProps, mapDispatchToProps)(API);
