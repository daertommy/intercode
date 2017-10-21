import React from 'react';
import PropTypes from 'prop-types';
import NumberInput from 'react-number-input';
import BootstrapFormInput from '../BuiltInFormControls/BootstrapFormInput';
import ResourceForm from './ResourceForm';
import ScheduledValueEditor from '../BuiltInFormControls/ScheduledValueEditor';
import { ScheduledValuePropType } from '../ScheduledValuePropTypes';

const buildScheduledMoneyValueInput = (value, onChange) => {
  const processNumberInputChangeEvent = (event, newValue) => {
    const moneyValue = {
      ...(value || {}),
      fractional: newValue * 100.0,
    };

    onChange(moneyValue);
  };

  let dollarValue = null;

  if (value && value.fractional !== null) {
    dollarValue = (value.fractional / 100.0).toFixed(2);
  }

  return (
    <td className="w-25">
      <div className="input-group">
        <span className="input-group-addon">$</span>
        <NumberInput
          className="form-control"
          value={dollarValue}
          onChange={processNumberInputChangeEvent}
          format="0,0.00"
        />
      </div>
    </td>
  );
};

class TicketTypeForm extends React.Component {
  static propTypes = {
    initialTicketType: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      pricing_schedule: ScheduledValuePropType.isRequired,
    }).isRequired,
    baseUrl: PropTypes.string.isRequired,
    timezone: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      ticketType: this.props.initialTicketType,
    };
  }

  getSubmitRequestBody = () => ({
    ticket_type: this.state.ticketType,
  })

  setTicketTypeAttribute = (attribute, value) => {
    this.setState({ ticketType: Object.assign({}, this.state.ticketType, { [attribute]: value }) });
  }

  inputChanged = (event) => {
    const { name, value } = event.target;
    this.setTicketTypeAttribute(name, value);
  }

  pricingScheduleChanged = (newPricingSchedule) => {
    this.setTicketTypeAttribute('pricing_schedule', newPricingSchedule);
  }

  render = () => {
    const disableSubmit = !ScheduledValueEditor.isValid(this.state.ticketType.pricing_schedule);

    return (
      <ResourceForm
        baseUrl={this.props.baseUrl}
        resourceId={this.state.ticketType.id}
        getSubmitRequestBody={this.getSubmitRequestBody}
        submitText="Save ticket type configuration"
        submitDisabled={disableSubmit}
      >
        <BootstrapFormInput
          label="Name (no spaces allowed &mdash; only letters, numbers, and underscores)"
          name="name"
          type="text"
          style={{ fontFamily: 'monospace' }}
          value={this.state.ticketType.name}
          onChange={this.inputChanged}
        />

        <BootstrapFormInput
          label="Description"
          name="description"
          type="text"
          value={this.state.ticketType.description}
          onChange={this.inputChanged}
        />

        <fieldset>
          <p>Pricing schedule</p>

          <ScheduledValueEditor
            timezone={this.props.timezone}
            scheduledValue={this.state.ticketType.pricing_schedule}
            setScheduledValue={this.pricingScheduleChanged}
            buildValueInput={buildScheduledMoneyValueInput}
          />
        </fieldset>
      </ResourceForm>
    );
  }
}

export default TicketTypeForm;
