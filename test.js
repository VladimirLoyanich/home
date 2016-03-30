/**
 * Created by student on 30.03.16.
 */
/**
 * Created by student on 30.03.16.
 */

var url_JSON_test = '{"startdate": "0","stopdate": "1","limit": "10","offset": "10","sort": "10","filename": "10","period": "10"}';
function bodyparser(url_JSON) {
    try {
        url_JSON = JSON.parse(url_JSON);
    } catch (err) {
        console.log("JSON hes error " + err)
    }
    if (url_JSON.startdate){
        date_validator(url_JSON.startdate);
    }else{valid_JSON.startdate=date_validator()}

    if (url_JSON.stopdate){
        date_validator(url_JSON.stopdate);
    }else{valid_JSON.stopdate=date_validator()}

    
    if (url_JSON.sort=="value" || url_JSON.sort=="-value"){
        valid_JSON.sort=url_JSON.sort;
    }else{valid_JSON.sort="value";}


    function date_validator (date){
        if (!date){
        var today = new Date;
            console.log(Date.now());
            today.setDate(today.getDay()-1);
            today.setHours(0);
            today.setMinutes(0);
            today.setSeconds(0);
            today.setMilliseconds(0);
            console.log(today.getUTCDate());
        return today.getTime();}
        else{

        }
    }
    valid_JSON = {
        startData: (new Date().getDay()-1),
        endData: (new Date().getDay()-1),
        limit: 10,
        page: 1,
        sort: "value",
        period: 1,
        filename: null
    };
    for (var item in valid_JSON) {
        if (url_JSON[item]) {
            valid_JSON[item]=url_JSON[item];

        };
    }
    console.log(date_validator());
    return JSON.stringify(valid_JSON);
}
bodyparser(url_JSON_test);

