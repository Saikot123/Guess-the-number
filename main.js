let secret_Num = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let Highest_score = 0;

let msg = function(message){
    document.querySelector(".message").textContent = message;
}

let check = document.querySelector(".check");
let guess_input = document.querySelector(".guess");
let main_num = document.querySelector(".number");
let high_score = document.querySelector(".highscore");
let show_score = document.querySelector(".score");

check.addEventListener("click",function(){
    let guess = Number(guess_input.value);

    if(!guess){
        msg("No number");
    }else if(guess == secret_Num){
        msg("Correct Number");
        main_num.textContent = secret_Num;
        document.body.style.background = "green";
        if(score > Highest_score){
            Highest_score = score;
            high_score.textContent = Highest_score;
        }
    }else if(guess > 20){
        msg('Give From 1-20');
    }else{
        if(score < 1){
            msg('You Lost!');
        }else{
            if(guess < secret_Num){
               msg('Low Number'); 
            }else{
                msg('High Number');
            }
            --score;
            show_score.textContent = score;
        }
    }
});

let again = document.querySelector(".again");
again.addEventListener("click",function(){
    secret_Num = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    msg("Start guessing...");
    document.body.style.background = '#222';
    main_num.textContent = "?";
    show_score.textContent = score;
    guess_input.value = " ";
});