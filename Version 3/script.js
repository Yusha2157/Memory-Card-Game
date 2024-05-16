var a1 = document.getElementById('flip-card');
            var a2 = document.getElementById('flip-card1.0');
            var a3 = document.getElementById('flip-card2');
            var a4 = document.getElementById('flip-card2.0');
            var a5 = document.getElementById('flip-card3');
            var a6 = document.getElementById('flip-card3.0');
            var a7 = document.getElementById('flip-card4');
            var a8 = document.getElementById('flip-card4.0');

            let match1 = [a1 , a2];
            let match2 = [a3 , a4];
            let match3 = [a5 , a6];
            let match4 = [a7 , a8];

            let allmatches = [match1 , match2 , match3 , match4];
            const cards = document.querySelectorAll('.card');

            let SelectedCards = [];
        
            cards.forEach(card => {
                card.addEventListener('click', function(){
                    if (!this.classList.contains("flipped") && SelectedCards.length < 2){
                        this.classList.toggle("flipped");
                        SelectedCards.push(this);

                        if (SelectedCards.length == 2){
                            const [card1 ,card2] = SelectedCards;

                            let ismatch = allmatches.some(match => match.includes(card1) && match.includes(card2));
                            if(ismatch){
                                SelectedCards = [];
                            

                                let allmatchesfound = allmatches.every(match => match.every(card => card.classList.contains('flipped')))
                                setTimeout(() => {
                                    if (allmatchesfound){
                                        alert('Congratulations!! you won :)')
                                    }
                                },1000)   
                            }
                            else {
                                setTimeout(() => {
                                    card1.classList.toggle("flipped");
                                    card2.classList.toggle("flipped");
                                    SelectedCards = [];
                                }, 1000)
                            }
                        }
                    };
                });
            });

            if (a1.classList.contains('flipped') && a2.classList.contains('flipped') && a3.classList.contains('flipped') && 
            a4.classList.contains('flipped') && a5.classList.contains('flipped') && a6.classList.contains('flipped') && 
            a7.classList.contains('flipped') && a8.classList.contains('flipped')){
                alert('congratulations')
            }
