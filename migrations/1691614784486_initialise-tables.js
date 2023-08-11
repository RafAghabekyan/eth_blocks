exports.up = (pgm) => {
  pgm.createTable(
    "blocks",
    {
      id: { type: "serial" },
      blockNumber: {
        type: "string",
        notNull: true,
        unique: true,
        primaryKey: true,
      },
    },
    {
      ifNotExists: true,
    }
  );
  pgm.createTable(
    "transactions",
    {
      id: "id",
      blockNumber: { type: "string", references: "blocks", notNull: true },
      from: {
        type: "string",
        notNull: true,
      },
      to: { type: "string", notNull: true },
      value: {
        type: "string",
        notNull: true,
      },
    },
    { ifNotExists: true }
  );
};
