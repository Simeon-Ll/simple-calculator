import '/style.css'

let screen = document.getElementById('screen')

let clicks = document.getElementsByClassName('press')
let input = []
for (const click of clicks) {
    click.addEventListener('click', function(){
        if (click.id == 'clear') {
            input = [] 
            
        }else if(click.id == 'delete'){
            input.pop()
           
        }else if (click.id =='equal') {
            input = [eval(input.join(''))]
            
        }
        else{
            input.push(click.innerHTML)
        }
        console.log(input)
        screen.innerHTML = input.join('')


        
    })
}