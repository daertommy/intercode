# frozen_string_literal: true
class RecordLoader < GraphQL::Batch::Loader
  def initialize(model, column: model.primary_key, where: nil, includes: nil)
    @model = model
    @column = column.to_s
    @column_type = model.type_for_attribute(@column)
    @where = where
    @includes = includes
  end

  def load(key)
    super(@column_type.cast(key))
  end

  def perform(keys)
    query(keys).each { |record| fulfill(record.public_send(@column), record) }
    keys.each { |key| fulfill(key, nil) unless fulfilled?(key) }
  end

  private

  def query(keys)
    scope = @model
    scope = scope.where(@where) if @where
    scope = scope.includes(@includes) if @includes
    scope.where(@column => keys)
  end
end
