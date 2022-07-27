let area = document.getElementById('area');
buttons = document.querySelectorAll('button');
let areaValue = '';
for(item of buttons)
{
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        
        if(buttonText=='X'){
            buttonText = '*';
            areaValue += buttonText;
            area.value = areaValue;
        }
        else if (buttonText == 'C'){
            areaValue = "";
            area.value =areaValue;
        }
        else if (buttonText =='='){
            area.value = eval(areaValue);
        }
        else if (buttonText == 'Back') {
            areaValue = areaValue.slice(0,-1);
            area.value = areaValue;
        }
        else{
            areaValue += buttonText;
            area.value = areaValue;
        }
    })
}