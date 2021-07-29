class Quiz{
    constructor(){

    }
    getState(){
        var contestantCountRef = database.ref('constestantCount');
        contestantCountRef.on("value",function (data) {
            gameState = data.val();
        })
    }

    update(state){
        dataase.ref('/').update({
            gameState:state
        });
    }

    async start(){
        if(gameState===0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }
    }


}