import React from 'react';

export interface ButtonProps {
  text: React.ReactNode;
  onClick: React.EventHandler<React.SyntheticEvent<HTMLButtonElement>>;
}

export class Button extends React.Component<ButtonProps, {}> {
  render() {
    return (
      <button type="button" onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}
