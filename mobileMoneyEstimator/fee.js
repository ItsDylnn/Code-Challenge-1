function estimateTransactionFee(amountToSend) {
  const feePercentage = 0.015; // 1.5%
  const minFee = 10;           // KES
  const maxFee = 70;           // KES

  // Calculate raw fee
  let fee = amountToSend * feePercentage;

  // Apply min and max limits
  fee = Math.max(minFee, Math.min(fee, maxFee));

  // Calculate total amount debited
  const totalDebit = amountToSend + fee;

  // Print results with the specified format
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalDebit}`);
}

// Prompt the user for input and run the function
const userInput = prompt("Unatuma Ngapi? (KES):");
const amountToSend = parseFloat(userInput);

if (!isNaN(amountToSend) && amountToSend > 0) {
  estimateTransactionFee(amountToSend);
} else {
  console.log("Please enter a valid positive number for the amount.");
}
