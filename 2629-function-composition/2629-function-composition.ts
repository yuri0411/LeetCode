type F = (x: number) => number;

function compose(functions: F[]): F {
    
    
    return function(x) {
        console.log(x)
        const reverseArr = [...functions].reverse()

        let result = x
        for(const fn of reverseArr) {
            result = fn(result)
        }

        return result
    }
};
