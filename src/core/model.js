export default ({ INTEGER, DATE, STRING }) => [{
  model: 'Car',
  table: 'cars',
  fields: {
    id: { type: INTEGER, primaryKey: true },
    name: { type: STRING },
    createdAt: { type: DATE, field: 'created_at' },
    updatedAt: { type: DATE, field: 'updated_at' },
  },
  options: {
    created_at: 'created_at',
    updated_at: 'updated_at',
  },
}]
