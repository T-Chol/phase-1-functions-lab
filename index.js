// // Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    // Implementation logic to calculate distance
    return Math.abs(blocks - 42);
}

// Export the function
module.exports = {
    distanceFromHqInBlocks,
    // Other functions you might have
};
// index.js

// Function to calculate distance from headquarters in feet
function distanceFromHqInFeet(blocks) {
    return Math.abs(blocks - 42) * 264; // Assuming 1 block = 264 feet
}

// Function to calculate total distance travelled in feet
function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(startBlock - endBlock);
    return blocksTravelled * 264; // Assuming 1 block = 264 feet
}

// Function to calculate fare price based on distance travelled
function calculatesFarePrice(start, destination) {
    const distance = Math.abs(start - destination) * 264; // Assuming 1 block = 264 feet

    if (distance <= 400) {
        return 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // $25 for distance over 2000 feet
    } else {
        return 'cannot travel that far'; // Limitation over 2500 feet
    }
}

module.exports = {
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
};
