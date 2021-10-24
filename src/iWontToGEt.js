function iWantToGet(sum){
    const availablesNotes = [100,50,20,10];
    const result  = []


    for (let i =0 ; i < availablesNotes.length ; i++){
        while (sum - availablesNotes[i] >= 0){
            sum -= availablesNotes[i];
            result.push(availablesNotes[i])
        }
    }

    console.log(result)
}

iWantToGet(480)