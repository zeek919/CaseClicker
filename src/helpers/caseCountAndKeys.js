const caseCountAndKeys = (singleCaseData, userCasesData) =>
    userCasesData
        .map((item) => {
            if (item.name === singleCaseData.name)
                return {
                    cases: item.cases,
                    keys: item.keys,
                };
        })
        .filter((item) => typeof item === 'object')[0];

export default caseCountAndKeys;
