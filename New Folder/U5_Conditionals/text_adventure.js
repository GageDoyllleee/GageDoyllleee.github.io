alert("You are a father and want to find gold for your family and saw the gold being put down in a huge forest.")

let trees_or_swamp = prompt("Do you (1) go through the trees to reach the back side of the swamp, or do you (2) climb over the mountain? Please type 1 for trees or 2 for swim")

if(trees_or_swamp == 1) {
    let dark_or_easy = prompt("As you walk through the trees you are presented with two paths. Do you (1) go down the dark tunnel with a tiny bit of light, where it looks like it goes toward the back of the forest and behind the swamp, or do you (2) go down the easier well lit tunnel that appears to go away from your destination?")
    if(dark_or_easy==1){
        alert("Game over.....");
    } else{
        let cliff_or_easy = prompt("As you go down the easier tunnel you notice the backside of the forest has a cliff that apperas to be where the gold is. the cliff is very steep. The other path will take you away from the back of the forest and cliff. Do you (1) take the easy path or (2) climb the hill?")
        if (cliff_or_easy==1){
        alert("You get lost and eventually killed by a gator. Game over......")
        } else,{
            alert("You climb the hill and find the GOLD!!!! You Win")
        }
    }
} else {
    alert("As you swim through the swamp you end up getting bit by a gator and end up drowning. Game over.....")
}
