// swich(exp) {
//      case value: statement;
// }

let text;

switch (new Date().getDay) { // input is current day
    case 1: // if (day == 1)
        text = 'Monday';
        break;
    case 2: // if (day == 2)
        text = 'Tuesday';
        break;
    case 3: // if (day == 3)
        text = 'Wednesday';
        break;
    case 4: // if (day == 4)
        text = 'Thursday';
        break;
    case 5: // if (day == 5)
        text = 'Friday';
        break;
    case 6: // if (day == 6)
        text = "Saturday";
        break;
    case 0: // if (day == 0)
        text = "Sunday";
        break;
    default: // else...
        text = "Invalid Day";
}

console.log(text);