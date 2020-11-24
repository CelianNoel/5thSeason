import React from 'react';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = { likes: 0 };
        this.addLike = this.addLike.bind(this);
    }

    addLike() {
        this.setState(state => ({
          likes: state.likes + 1
        }));
      }

    render() {
        return (
            <div>
                Like this
                <div>
                    likes : {this.state.likes}
                        <button onClick={this.addLike}>
                            like
                        </button>
                </div>
            </div>
        );
    }
}

export default Test;