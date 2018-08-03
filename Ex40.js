function main()
{
var userInput = prompt("Enter a 3-digit binary number");
switch (userInput) {
    case '1':
        document.write("1");
        break;
    case '10':
        document.write("2");
        break;
    case '11':
        document.write("3");
        break;
    case '100':
        document.write("4");
        break;
    case '101':
        document.write("5");
        break;
}
}

main();