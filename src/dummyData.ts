export const tableHeader: IHeader[] = [
  {
    key: "policyName",
    name: "Policy Name",
  },
  {
    key: "policyNumber",
    name: "Policy Number",
  },
  {
    key: "inceptionDate",
    name: "Inception Date",
  },
  {
    key: "coverage",
    name: "Coverage",
    childs: [
      {
        key: "hospitalization",
        name: "Hospitalization",
      },
      {
        key: "hospitalInc",
        name: "Hospital Inc (AIA Only)",
      },
      {
        key: "death",
        name: "Death",
      },
      {
        key: "majorCI",
        name: "Major CI (AIA Only)",
      },
      {
        key: "earlyCI",
        name: "Early CI (AIA Only)",
      },
    ],
  },
];
