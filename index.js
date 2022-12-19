const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(sum, batches) {
    return batches + sum;
})

// Code your solution here
console.log(totalBatteries);