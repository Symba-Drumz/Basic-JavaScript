function getDayOfWeek(number) {
    if (number === 1) {
        console.log("Sunday");
    } else {
        if (number === 2) {
            console.log("Monday");
        } else {
            if (number === 3) {
                console.log("Tuesday");
            } else {
                if (number === 4) {
                    console.log("Wednesday");
                } else {
                    if (number === 5) {
                        console.log("Thursday");
                    } else {
                        if (number === 6) {
                            console.log("Friday");
                        } else {
                            if (number === 7) {
                                console.log("Saturday");
                            } else {
                                console.log("Out of bounds exception (1-7)");
                            }
                        }
                    }
                }
            }
        }
    }
}




function getMonthOfYear(number) {
    switch (number) {
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("June");
            break;
        case 7:
            console.log("July");
        case 8:
            console.log("August");
            break;
        case 9:
            console.log("September");
            break;
        case 10:
            console.log("October");
            break;
        case 11:
            console.log("November");
            break;
        case 12:
            console.log("December");
            break;
        default:
            console.log("Out of bounds exception (1-12)");
    }
}
