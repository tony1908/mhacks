class CreateStatuses < ActiveRecord::Migration
  def change
    create_table :statuses do |t|
      t.string :status
      t.string :latitude
      t.string :longitude

      t.timestamps
    end
  end
end
