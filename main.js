import './style.css'

let initialInput = [];

let expression = document.getElementById('expression')



let clicks = document.querySelectorAll('.press')

for(let click of clicks){
    click.addEventListener('click', function(){
        if (click.id == 'clear') {
            initialInput = [] 
            
        }
        else if(click.id == 'delete'){
            initialInput.pop()
           state = true
        }else if (click.id =='equal') {
            solve()
        }
        else{
            initialInput.push(click.innerHTML)
        }
        expression.innerHTML = initialInput.join('')
        state = false
        
       
    })
}

let signs = document.querySelectorAll('.sign')
let state = false

for (const sign of signs) {
    sign.addEventListener('click', function(){
        if (state) {
            initialInput.pop()
        }
        state = sign.innerHTML
        initialInput.push(state)
        expression.innerHTML = initialInput.join('')
        state = true
    })
}

const solve = () => {
    

    let split = initialInput

    if (split.indexOf('-') != -1) {
        let e = split.indexOf('-')
        
        split = split.join('').split('-')
        split[e + 1] += '-'
        console.log(split)
        for (let i = 0; i < split.length; i++) {
            if(split[i].includes('+')){
                split[i] = split[i].split('+')

                let sum = split[i].map(function(num){
                    return parseInt(num)
                })
                split[i] = sum.reduce(function(total, num){
                    return total+num
                })
            }
            
        }

        let sub = split.map(function(num){
            return parseInt(num)
        })
        split = sub.reduce(function(total, num){
            return total + num
        })
    }else if(split.indexOf('+') != -1){
        split = split.join('').split('+')

        let sum = split.map(function(num){
            return parseInt(num)
        })
        split = sum.reduce(function(total, num){
            return total+num
        })
    }else if(split.indexOf('x') != -1){
        split = split.join('').split('x')

        let times = split.map(function(num){
            return parseInt(num)
        })
        split = times.reduce(function(total, num){
            return total*num
        })
    }else if(split.indexOf('/') != -1){
        split = split.join('').split('/')

        let div = split.map(function(num){
            return parseInt(num)
        })
        split = div.reduce(function(total, num){
            return total/num
        })
    }

    console.log(split)
}

    //DM
    // function multiVision(e) {
        
    //     
           
  
    //       }else if (e.includes('/')) {
    //           let over = e.split('/').map(function(str){
    //               return parseInt(str)
    //             })
      
    //             e = over.reduce(function(total, num){
    //               return total / num
    //             })
      
    //       }else{
    //         return e
    //       }
    //       return e
    // }
    //split by addition 

    
    
    

    

