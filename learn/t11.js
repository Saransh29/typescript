let rawData =
  "[(45, 'Software Subscription', 'Credit', 'Web3 Hosting Payment', Decimal('14.00'), 'Web3 Host', Decimal('1937.04'), datetime.date(2023, 4, 15), 2, 'T007', 'Payment for web3 hosting'), (46, 'E-commerce', 'Debit', 'NFT Purchase', Decimal('79.99'), 'OpenSea', Decimal('1857.05'), datetime.date(2023, 4, 22), 2, 'T008', 'Purchase of NFT art')]";
const columns = [
  "id",
  "category",
  "transaction_type",
  "description",
  "amount",
  "merchant",
  "balance",
  "date",
  "user_id",
  "transaction_id",
  "note",
];

// Remove the "Decimal" and "datetime.date" parts for simplicity
rawData = rawData.replace(/Decimal\('(\d+\.\d+)'\)/g, "$1");
rawData = rawData.replace(
  /datetime\.date\((\d+), (\d+), (\d+)\)/g,
  '"$1-$2-$3"'
);

// Convert tuple parentheses to list brackets, and single quotes to double quotes
rawData = rawData.replace(/\(/g, "[").replace(/\)/g, "]");
rawData = rawData.replace(/'/g, '"');

// Now parse the JSON
const data = JSON.parse(rawData);

// Convert to an array of objects for easier handling in React
const rows = data.map((row) => {
  let rowObj = {};
  columns.forEach((col, index) => {
    rowObj[col] = row[index];
  });
  return rowObj;
});
