class FixOneOffSyntaxErrors < ActiveRecord::Migration[7.0]
  CMS_CONTENT_COLUMNS = {
    pages: 'content',
    cms_partials: 'content',
    cms_layouts: 'content'
  }

  UP_REGEXP_REPLACEMENTS = [
    ['\\{% if show_games_with_openings\' %\\}', '{% if show_games_with_openings %}'],
    ['user_con_profile.privileges contains \'Con Com\'\\) %}', 'user_con_profile.privileges contains \'Con Com\' %}']
  ]

   def up
    CMS_CONTENT_COLUMNS.each do |table_name, column_name|
      execute <<~SQL
        UPDATE #{quote_table_name(table_name)}
        SET #{quote_column_name(column_name)} = #{generate_nested_regexp_replace(column_name, UP_REGEXP_REPLACEMENTS)};
      SQL
    end
  end

  def down ; end

  private

  def generate_nested_regexp_replace(column_name, replacements)
    replacements.inject(quote_column_name(column_name)) do |sql, (pattern, replacement)|
      <<~SQL
        regexp_replace(#{sql}, #{quote(pattern)}, #{quote(replacement)}, 'g')
      SQL
    end
  end
end
