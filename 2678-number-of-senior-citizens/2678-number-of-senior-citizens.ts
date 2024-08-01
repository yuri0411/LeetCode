function countSeniors(details: string[]): number {
    return details.filter((detail) => {
        const age = detail.substring(detail.length -4, detail.length -2)
        return +age > 60
    }).length
};