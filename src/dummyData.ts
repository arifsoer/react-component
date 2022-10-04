export const tableHeader: IHeader[] = [
  {
    key: "policyName",
    name: "Policy Name",
    theme: {
      width: "128px",
    },
  },
  {
    key: "policyNumber",
    name: "Policy Number",
    theme: {
      width: "128px",
    },
  },
  {
    key: "inceptionDate",
    name: "Inception Date",
    theme: {
      width: "128px",
    },
  },
  {
    key: "coverage",
    name: "Coverage",
    childs: [
      {
        key: "hospitalization",
        name: "Hospitalization",
        theme: {
          backgroundColor: "#ce425c",
          fontColor: "#ffffff",
          width: "128px",
        },
      },
      {
        key: "hospitalInc",
        name: "Hospital Inc (AIA Only)",
        theme: {
          backgroundColor: "#ce425c",
          fontColor: "#ffffff",
          width: "128px",
        },
      },
      {
        key: "death",
        name: "Death",
        theme: {
          backgroundColor: "#4c4794",
          fontColor: "#ffffff",
          width: "128px",
        },
      },
      {
        key: "majorCI",
        name: "Major CI (AIA Only)",
        theme: {
          backgroundColor: "#1f78ad",
          fontColor: "#ffffff",
          width: "128px",
        },
      },
      {
        key: "earlyCI",
        name: "Early CI (AIA Only)",
        theme: {
          backgroundColor: "#1f78ad",
          fontColor: "#ffffff",
          width: "128px",
        },
      },
    ],
  },
];

export const tableData: ITableData[] = [
  {
    category: "Protection",
    policyName: "Direct - AIA term cover",
    policyNumber: 1234567,
    inceptionDate: "11 Dec 2020 (Age 30)",
    hospitalization: "Private Hospitals",
    hospitalInc: "SGD / 100",
    death: "-",
    majorCI: "SGD 100,000",
    earlyCI: "-",
  },
  {
    category: "Protection",
    policyName: "Direct - AIA term cover",
    policyNumber: 1234567,
    inceptionDate: "11 Dec 2020 (Age 30)",
    hospitalization: "Private Hospitals",
    hospitalInc: "SGD / 100",
    death: "-",
    majorCI: "SGD 100,000",
    earlyCI: "-",
  },
  {
    category: "Protection",
    policyName: "Direct - AIA term cover",
    policyNumber: 1234567,
    inceptionDate: "11 Dec 2020 (Age 30)",
    hospitalization: "Private Hospitals",
    hospitalInc: "SGD / 100",
    death: "-",
    majorCI: "SGD 100,000",
    earlyCI: "-",
  },
  {
    category: "Protection",
    policyName: "Direct - AIA term cover",
    policyNumber: 1234567,
    inceptionDate: "11 Dec 2020 (Age 30)",
    hospitalization: "Private Hospitals",
    hospitalInc: "SGD / 100",
    death: "-",
    majorCI: "SGD 100,000",
    earlyCI: "-",
  },
  {
    category: "Savings & Investments",
    policyName: "Direct - AIA term cover",
    policyNumber: 1234567,
    inceptionDate: "11 Dec 2020 (Age 30)",
    hospitalization: "Private Hospitals",
    hospitalInc: "SGD / 100",
    death: "-",
    majorCI: "SGD 100,000",
    earlyCI: "-",
  },
  {
    category: "Savings & Investments",
    policyName: "Direct - AIA term cover",
    policyNumber: 1234567,
    inceptionDate: "11 Dec 2020 (Age 30)",
    hospitalization: "Private Hospitals",
    hospitalInc: "SGD / 100",
    death: "-",
    majorCI: "SGD 100,000",
    earlyCI: "-",
  },
  {
    category: "Savings & Investments",
    policyName: "Direct - AIA term cover",
    policyNumber: 1234567,
    inceptionDate: "11 Dec 2020 (Age 30)",
    hospitalization: "Private Hospitals",
    hospitalInc: "SGD / 100",
    death: "-",
    majorCI: "SGD 100,000",
    earlyCI: "-",
  },
];
