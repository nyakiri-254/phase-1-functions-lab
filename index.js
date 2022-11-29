function distanceFromHqInBlocks(blocks) {
if (blocks>42){
    return blocks-42;
}else {
    return 42- blocks;


}
}

function distanceFromHqInFeet (blocks) {
    if (blocks > 42){
        const distanceFromHqInBlocks =blocks -42;
        return distanceFromHqInBlocks*264;
    } else if (blocks < 42){
    const blocks = 42 - distanceFromHqInBlocks;
    return distanceFromHqInBlocks * 264;

}
}
    function distanceTravelledInFeet(start,destination) {
        if ( start > destination) {
            const distanceTravelledInFeet =start -destination ;
            return blocks *264;
            
        }else if (destination< start){
            const distanceFromHqInFeet =destination-start;
 return distanceFromHqInFeet * 264
        }
    }

        function calculatFareprice(start ,destination) 
        { const distance =distanceTravelledInFeet(start,destination);

            if (distance <= 400){
                return 0;
            }
            if (distance >= 400 && distance <= 2000){
                return (distance-400)*0.02;
            }
            else if (distance>=2000 && distance<=2500){
                return 25;
            }
else if (distance > 2500){
    return "cannot travel that far";
}
        }



    
    
     
    
   
	
    
    
