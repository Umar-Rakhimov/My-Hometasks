let weather
let clothes

switch (weather) {
    case 36:
    case 35:
    case 34:
        clothes = "футболка"
        break;
    
    case 20:
    case 19:
    case 18:
        clothes = "свитер"
        break;

    case 15:
    case 14:
    case 13:
        clothes = "куртка"
        break;

    case 5:
    case 4:
    case 3:
        clothes = "пуховик"
        break;
        
    default:
        clothes = "неверная температура погоды"
    
 }

 console.log(`номер градуса принадлежащий погоде = ${clothes}`)