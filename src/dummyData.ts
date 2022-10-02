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
        backgroundColor: "#db4673",
      },
      {
        key: "hospitalInc",
        name: "Hospital Inc (AIA Only)",
        backgroundColor: "#39bd3d",
      },
      {
        key: "death",
        name: "Death",
        backgroundColor: "#f53e2a",
      },
      {
        key: "majorCI",
        name: "Major CI (AIA Only)",
        backgroundColor: "#f5a72a",
      },
      {
        key: "earlyCI",
        name: "Early CI (AIA Only)",
        backgroundColor: "#26cbd1",
      },
    ],
  },
];
