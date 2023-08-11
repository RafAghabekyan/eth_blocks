exports.up = (pgm) => {
  pgm.createTable(
    "blocks",
    {
      id: "id",
      blockNumber: { type: "string", notNull: true },
    },
    {
      ifNotExists: true,
    }
  );
  pgm.createTable(
    "transactions",
    {
      id: "id",
      blockId: { type: "serial", references: "blocks", notNull: true },
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
