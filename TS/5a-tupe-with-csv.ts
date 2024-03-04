type CSVRow = [string, number, boolean];

// Function to parse a CSV row into a tuple
function parseCSVRow(row: string[]): CSVRow {
    const name = row[0];
    const age = parseInt(row[1]);
    const isActive = row[2] === 'true';
    return [name, age, isActive];
}

// Example CSV data
const csvData: string[][] = [
    ['John', '30', 'true'],
    ['Jane', '25', 'false'],
];

// Parse CSV data into tuples
const parsedData: CSVRow[] = csvData.map(parseCSVRow);

// Log the parsed data
console.log(parsedData);