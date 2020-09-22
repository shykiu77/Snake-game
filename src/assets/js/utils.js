export function makeMatrix(m,n){
    const matrix = []
    for(let i=0;i<m;i++)
        matrix[i] = new Array(n)
    return matrix
}

export function concat(i,j){
    return `${i},${j}`
}

export function deconcat(position){
    return position.split(',')
}

export function directionToPosition(direction){
    switch(direction){
        case 'left':
            return  '0,-1'
        case 'right':
            return '0,1'
        case 'up':
            return '-1,0'
        case 'down':
            return'1,0'
        default:
            console.log('ops')
    }
}

