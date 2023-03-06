
    const billEntry = document.getElementById('bill-total');
    let activeButton;
    let customValue;
    const tipPercentSelection = document.querySelector('.grid-container');
    const customInput = document.querySelector('.custom');

    //CLICKING ANY OF THE TIP PERCENT BUTTONS
    tipPercentSelection.addEventListener('click', function(event){
        const target = event.target;
        if(target.matches('.btn')){
          if(activeButton){
            activeButton.style.backgroundColor = '';
            activeButton.style.color = '';
          }
          target.style.backgroundColor = '#9FE8DF';
          target.style.color = '#000';
          activeButton = target;
        }
    })

    //ENTERING A CUSTOM TIP PERCENT VALUE
    customInput.addEventListener('input', function(event){
        customValue = event.target.value;
        console.log(`Custom value: ${customValue}`);
        activeButton.style.backgroundColor = '';
        activeButton.style.color = '';
        activeButton = null;
    })

   