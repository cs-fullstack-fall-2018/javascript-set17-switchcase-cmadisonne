function main(){
    var userGrade = prompt("Enter your letter grade: A, B, C, D, or F");
    switch (userGrade) {
        case 'A':
            document.write("Your grade may range between: 90- 100.");
            break;
        case 'B':
            document.write("Your grade may range between: 80- 89.");
            break;
        case 'C':
            document.write("Your grade may range between: 70- 79");
            break;
        case 'D':
            document.write("Your grade may range between 60- 69.");
            break;
        case 'F':
            document.write("Your grade may range between 0-59");
            break;

    }
}

main();