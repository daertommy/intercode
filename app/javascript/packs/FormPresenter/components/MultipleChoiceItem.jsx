// @flow

import React from 'react';
import classNames from 'classnames';
import { enableUniqueIds } from 'react-html-id';

export type Choice = {
  caption: string,
  value: string,
};

export type MultipleChoiceFormItem = {
  identifier: string,
  caption: string,
  style?: string,
  choices: Array<Choice>,
};

type Props = {
  formItem: MultipleChoiceFormItem,
  onChange: (any) => undefined,
  value?: string,
};

class MultipleChoiceItem extends React.Component {
  constructor(props: Props) {
    super(props);
    enableUniqueIds(this);
  }

  props: Props
  nextUniqueId: () => string

  inputDidChange = (event: SyntheticInputEvent) => {
    this.props.onChange(event.target.value);
  }

  renderChoice = (choice: Choice) => {
    const domId: string = this.nextUniqueId();

    return (
      <div
        className={
          classNames(
            'form-check',
            { 'form-check-inline': this.props.formItem.style === 'radio_horizontal' },
          )
        }
        key={choice.value}
      >
        <label className="form-check-label" htmlFor={domId}>
          <input
            id={domId}
            className="form-check-input"
            type="radio"
            name={this.props.formItem.identifier}
            value={choice.value}
            checked={this.props.value === choice.value.toString()}
            onChange={this.inputDidChange}
          /> {choice.caption}
        </label>
      </div>
    );
  }

  render = () => {
    const choices = this.props.formItem.choices.map(
      choice => this.renderChoice(choice),
    );

    return (
      <fieldset className="form-group">
        <legend
          className="col-form-legend"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: this.props.formItem.caption }}
        />
        {choices}
      </fieldset>
    );
  };
}

export default MultipleChoiceItem;
