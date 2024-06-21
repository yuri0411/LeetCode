function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    let alwaysSatisfied = customers.reduce((prev,curr, index) => {
        let sum = prev
        
        if(grumpy[index] === 0) {
            sum += curr
        }
        return sum
    }, 0)
    let addSatisfied = 0
    const newCustomers = customers.map((customer, idx) => {
        if(grumpy[idx] === 0) return 0
        return customer
    })
    let sum = 0
    for(let i = 0; i < minutes; i++){
            sum += newCustomers[i]
    }
    addSatisfied = sum

    for(let i = minutes; i < newCustomers.length; i++) {
        sum += newCustomers[i] - newCustomers[i - minutes]

        addSatisfied = Math.max(sum, addSatisfied)
    }
    return alwaysSatisfied + addSatisfied
};