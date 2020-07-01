const isCaseAvailableToBuy = (singleCaseData, userCasesData) =>
    userCasesData
        .map(
            (item) =>
                item.name === singleCaseData.name &&
                item.keys > 0 &&
                item.cases > 0
        )
        .includes(true);

export default isCaseAvailableToBuy;
