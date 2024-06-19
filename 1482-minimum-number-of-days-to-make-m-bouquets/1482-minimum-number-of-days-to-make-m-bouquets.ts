function minDays(bloomDay: number[], m: number, k: number): number {
    if(bloomDay.length < m * k) return -1
    
    function canMakeBouquets(days: number): boolean {
        let flowers = 0
        let bouquets = 0
        for (let bloom of bloomDay) {{
            if(bloom <= days) {
                flowers += 1
                if(flowers === k) {
                    bouquets += 1
                    flowers = 0
                }
            } else {
                flowers = 0
            }
            if (bouquets >= m) return true
        }}
        return false
    }

    let left = 1
    let right = Math.max(...bloomDay)
    

    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if(canMakeBouquets(mid)) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
};