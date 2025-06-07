function calculateChaiIngredients(numberOfCups) {
    // Standard recipe amounts per cup
    const waterPerCup = 200;           // ml
    const milkPerCup = 50;             // ml
    const teaLeavesPerCup = 1;         // tablespoon
    const sugarPerCup = 2;             // teaspoons

    // Calculate totals
    const totalWater = waterPerCup * numberOfCups;
    const totalMilk = milkPerCup * numberOfCups;
    const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
    const totalSugar = sugarPerCup * numberOfCups;

    // Output the results
    console.log(`To make ${numberOfCups} cup(s) of chai, you will need:`);
    console.log(`- Water: ${totalWater} ml`);
    console.log(`- Milk: ${totalMilk} ml`);
    console.log(`- Tea Leaves (Majani): ${totalTeaLeaves} tablespoon(s)`);
    console.log(`- Sugar (Sukari): ${totalSugar} teaspoon(s)`);
}

// Prompt the user and run the function
const userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?:");
const numberOfCups = parseInt(userInput, 10);

if (!isNaN(numberOfCups) && numberOfCups > 0) {
    calculateChaiIngredients(numberOfCups);
} else {
    console.log("Please enter a valid positive number for the cups.");
}
