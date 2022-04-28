let storiesCreated = 0; 
$(".submit").click(function(){
    storiesCreated = storiesCreated + 1;
    $(".count").text(storiesCreated);
    let personsName = $(".name-input").val();
    let transportation = $(".transport-input").val();
    let adjective = $(".adjective-input").val();
    let number = $(".number-input").val();
    console.log();
    $(".story").append("One day my friend " + personsName + " and I decided to take a trip to the beach, so we packed our bags and took the " + transportation + " over. It was a " + adjective + " day at the beach! We ended up staying for " + number +  " hours! ");
});