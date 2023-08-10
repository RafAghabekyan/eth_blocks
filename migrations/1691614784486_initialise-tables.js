exports.up = (pgm) => {
  pgm.createTable(
    "blocks",
    {
      id: "id",
      blockNumber: { type: "bytea", notNull: true },
    },
    {
      ifNotExists: true,
    }
  );
  pgm.createTable(
    "transactions",
    {
      id: "id",
      blockId: { type: 'serial', references: "blocks", notNull: true },
      from: {
        type: "bytea",
        notNull: true,
      },
      to: { type: "bytea", notNull: true },
      value: {
        type: "bytea",
        notNull: true,
      },
    },
    { ifNotExists: true }
  );
};
