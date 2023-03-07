
    const billEntry = document.getElementById('bill-total');
    const tipPercentSelection = document.querySelector('.grid-container');
    const customInput = document.querySelector('.custom');
    const peopleCount = document.querySelector('#people-count');
    const warning = document.querySelector('.no-zero');
    const tipButtons = document.querySelectorAll('.tip-select .btn');
    const tipAmount = document.querySelector('.tip-sum');
    const total = document.querySelector('.cash-sum');
    const resetButton = document.querySelector('.reset');
    console.log(resetButton);
    const inputFields = document.querySelectorAll('input');
    console.log(inputFields);
    let activeButton;
    let customValue;

    //CLICKING ANY OF THE TIP PERCENT BUTTONS
    tipPercentSelection.addEventListener('click', function(event){
        const target = event.target;
        if(target.matches('.btn')){
          if(activeButton){
            activeButton.style.backgroundColor = '';
            activeButton.style.color = '';
            activeButton.classList.remove('active');
          }
          target.style.backgroundColor = '#9FE8DF';
          target.style.color = '#000';
          target.classList.add('active');
          activeButton = target;
          customInput.value = '';
          calculateTip();
        }
    })

    //ENTERING A CUSTOM TIP PERCENT VALUE
    customInput.addEventListener('input', function(event){
        customValue = event.target.value;
        console.log(`Custom value: ${customValue}`);
        activeButton.style.backgroundColor = '';
        activeButton.style.color = '';
        activeButton.classList.remove('active');
        activeButton = null;
    })

   //CHECKING IF A NUMEBR LESS THAN ZERO IS ENTERED IN THE PEOPLE COUNT
    peopleCount.addEventListener('input', function(event){
        peopleValue = event.target.value;
        if(peopleValue<=0){
            warning.style.display = 'block';
        } else if(peopleValue==''){
            warning.style.display = 'none';
        } else{
            warning.style.display = 'none';
        }
    })


    //FUNCTION TO CALCULATE TIP PER PERSON AND TOTAL PER PERSON && DISPLAY THE SAME
    function calculateTip(){
        if(billEntry.value !== '' && peopleCount.value >0){
            let tipPercentage = 0;
            for(let i=0; i<tipButtons.length; i++){
                if(tipButtons[i].classList.contains('active')){
                    tipPercentage = parseInt(tipButtons[i].textContent);
                    break;
                }
            }
            if(customInput.value !== ''){
                tipPercentage = parseInt(customInput.value);
            }
             let finalTip = ((billEntry.value * tipPercentage)/100)/peopleCount.value;
             tipAmount.textContent = Math.ceil(finalTip);
             let totalBillAmount = (billEntry.value * (100 + tipPercentage)) / 100;
             let finalAmount = parseInt(totalBillAmount / peopleCount.value);
             total.textContent = finalAmount;
        }
    }

    //ADDING EVENT LISTENERS SO THAT calculateTip FUNCTION IS CALLED
    billEntry.addEventListener('input', calculateTip);
    peopleCount.addEventListener('input', calculateTip);
    customInput.addEventListener('input', calculateTip);
   


    //RESET BUTTON

    resetButton.addEventListener('click', ()=>{
        inputFields.forEach(input => {
            input.value = '';
          });
          if(activeButton){
            activeButton.style.backgroundColor = '';
            activeButton.style.color = '';
            activeButton.classList.remove('active');
          };
          warning.style.display = 'none';
          tipAmount.textContent= '0.00';
          total.textContent = '0.00';
    });

    
      

   
