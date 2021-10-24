const arr = [
    {
        original_name: 'Маска',
        russian_name: 'Mask',
        years:1999 ,
        actors: [
            "Сенюк Макс",
            "Сенюк Макс",
            "Сенюк Макс"
        ]
    },
    {
        original_name: 'Маска 2',
        russian_name: 'Mask',
        years:1999 ,
        actors: [
            "Николов Михаил",
            "Николов Михаил",
            "Николов Михаил"
        ]
    },
    {
        original_name: 'Маска 3',
        russian_name: 'Mask',
        years:1999 ,
        actors: [
            "Котелевич Иван",
            "Котелевич Иван",
            "Котелевич Иван",
            "Котелевич Иван",
            "Котелевич Иван"
        ]
    }
]
for( let i =0 ; i < arr.length; i++){
    console.log("==========film №" +(i+1)+ '===============');
    for(let key in arr[i]){
        if(key == 'actors'){
            for( let j =0 ; j < arr[i][key].length; j++){
                console.log("актор " + (j+1) +": " + arr[i][key][j]);
            }
        }else if(key == "original_name"){
            console.log("оригинальное название" + ": " +arr[i][key] v);
        }else if(key == "russian_name"){
            console.log("Название на русском" + ": " +arr[i][key]);
        }else if(key == "years"){
            console.log("год" + ": " +arr[i][key]);
        }
    }
}