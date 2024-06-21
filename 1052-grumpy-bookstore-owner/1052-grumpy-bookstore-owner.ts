
const  maxSatisfied = function(customers, grumpy, minutes) {
    let totalSatisfied = 0;
    let additionalSatisfied = 0;
    let maxAdditionalSatisfied = 0;

    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 0) {
            totalSatisfied += customers[i];
        } else {
            additionalSatisfied += customers[i];
        }

        if (i >= minutes) {
            additionalSatisfied -= grumpy[i - minutes] === 1 ? customers[i - minutes] : 0;
        }

        maxAdditionalSatisfied = Math.max(maxAdditionalSatisfied, additionalSatisfied);
    }

    return totalSatisfied + maxAdditionalSatisfied;
};

