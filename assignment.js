
function kilometerToMeter(km){
    var m=km*1000;
    return m;
}

//console.log(kilometerToMeter(5));

function budgetCalculator(clock,phone,laptop){
    var total=clock*50+phone*100+laptop*500;
    return total;
}

//console.log(budgetCalculator(2,3,1));

function hotelCost(day){
    var cost=0;
    if(day<=10){
        cost=day*100;
    }
    else if(day<=20){
        var first=10*100;
        var rest=(day-10)*80;
        cost=first+rest;
    }
    else
    {
        var first=10*100;
        var second=10*80;
        var rest=(day-20)*50;
        cost=first+second+rest;
    }

    return cost;
}

//console.log(hotelCost(21));

function megaFriend(name){
        var maxsize=name[0].length;
        var maxPosition=0;
        for(var i=0;i<name.length;i++){
            var size=name[i].length;
            
            if(maxsize<size){
                maxPosition=i;
                
            }
        }

        return name[maxPosition];
}

// var name =['kamal','jamal','abdullah','simi'];
// console.log(megaFriend(name));



