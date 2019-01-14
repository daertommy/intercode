Types::EventInputType = GraphQL::InputObjectType.define do
  name 'EventInput'

  input_field :event_category_id, types.Int
  input_field :form_response_attrs_json, types.String
end
