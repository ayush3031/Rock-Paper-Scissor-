
        const score =  JSON.parse(localStorage.getItem('score'))||
        {
            wins : 0,
            loose : 0,
            tie : 0
        };
        //console.log(JSON.parse(localStorage.getItem('score')));

        function updatScore()
        {
            document.querySelector('.js-score')
                .innerHTML = `Wins :${score.wins}, Losses: ${score.loose} ,  Ties: ${score.tie}`;
        }

        function comMove()
        {
            const mov=Math.random();
            if(mov<=1/3)
            {
                result='rock';
            }
            else if(mov>1/3&&mov<=2/3)
            {
                result='paper';
            }
            else if(mov>2/3)
            {
                result='Scissor';
            }
            return result;
        }
        function playGame(playermov)
        {
            let comp = comMove();
            let result = '';
            if(playermov === 'rock'&& comp === 'rock')
            {
                result = 'Tie!';
            }
            else if(playermov === 'rock' && comp ==='paper')
            {
                result = 'You Loose!';
            }
            else if(playermov === 'rock' && comp ==='Scissor')
            {
                result = 'You Win!';
            }
            else if(playermov === 'paper' && comp ==='paper')
            {
                result = 'Tie!';
            }
            else if(playermov === 'paper' && comp ==='rock')
            {
                result = 'You Win!';
            }
            else if(playermov === 'paper' && comp ==='Scissor')
            {
                result = 'You Loose!';
            }
            else if(playermov === 'Scissor' && comp ==='paper')
            {
                result = 'You Win!';
            }
            else if(playermov === 'Scissor' && comp ==='rock')
            {
                result = 'You Loose!';
            }
            else if(playermov === 'Scissor' && comp ==='Scissor')
            {
                result = 'Tie!';
            }

            if(result === 'You Win!')
            {
                score.wins++;
            }
            else if(result === 'You Loose!')
            {
                score.loose++;
            }
            else if(result === 'Tie!')
            {
                score.tie++;
            }
            if(playermov === 'reset')
            {
                score.wins = 0;
                score.loose = 0;
                score.tie = 0;
            }
            //  console.log(comp);
            localStorage.setItem('score',JSON.stringify(score));

            if(playermov != 'reset')
            {

            document.querySelector('.js-result')
                .innerHTML = result;
            //console.log(playermov);
            document.querySelector('.js-move')
                .innerHTML = `Your move : <img src="images/${playermov}-emoji.png" class="mve-icon">      Comp move : <img src="images/${comp}-emoji.png" class="mve-icon">`;
            }
            else
            {
                document.querySelector('.js-result')
                    .innerHTML = '';
                
                document.querySelector('.js-move')
                    .innerHTML = '';
            }  
            
            updatScore();
            /*if(playermov !== 'reset')
            {
            alert(`You picked ${playermov}. Computer picked ${comp}. ${result} \n  Wins :${score.wins} Losses: ${score.loose} Ties: ${score.tie}`);
            }
            else
            {
                alert('Score Reset');
            }*/
        }
        updatScore();
   