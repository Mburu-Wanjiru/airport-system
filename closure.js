const secureBooking=function(){
    let passCount=0;

    return function(){
        passCount++;
        console.log(`${passCount}  passangers`);
    }
}

const booker=secureBooking();

booker();
booker();
booker();