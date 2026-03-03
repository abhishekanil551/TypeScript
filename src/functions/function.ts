function calculateTax(income: number): number{
    if(income < 50_000) //if its false return undefined
    return income * 1.2;
    return income * 1.3;
}
calculateTax(100);