//callback
//
// function buttonClick() {
//     return console.log('click!')
// }
// let button = document.querySelector('.btn')
//
// button.addEventListener('click', buttonClick)
//
// function getNum(...numbs) {
//     let newArray=[]
//     for (let i = 0;i<numbs.length; i++){
//         newArray.push(numbs[i] ** 2)
//     }
//     return newArray
// }
//
// console.log(getNum(1,2,3,54))
//
// function doMath(array,todo) {
//     let newArray=[]
//     for (let i=0;i<array.length;i++){
//         newArray.push(todo(array[i]))
//     }
//     return newArray
// }
//
// function sum(num) {
//     return num+2
// }
//
// console.log(doMath([2,3,4], sum))



const input= document.querySelector('#input');
const createButton=document.querySelector('.create_button');
const todoList=document.querySelector('.todo_list')

const createTodo=()=> {
    if (!input.value.trim()){
        return false
    } else {
        const div = document.createElement('div')
        const text= document.createElement('h3')
        const divButton= document.createElement('div')
        const deleteButton= document.createElement('button')
        const editButton= document.createElement('button')

        div.setAttribute('class','block_text')
        deleteButton.setAttribute('class','delete_text')
        editButton.setAttribute('class','edite_button')
        divButton.setAttribute('class','div_button')

        deleteButton.innerHTML='delete'
        editButton.innerHTML='edit'
        text.innerHTML=input.value

        divButton.append(deleteButton,editButton)
        div.append(text,divButton)
        todoList.prepend(div)

        deleteButton.onclick=()=> div.remove()
        editButton.onclick=()=>{
            const editText=prompt()
            if(editText.trim()){
                text.textContent=editText
            }else {
                return false
            }
        }
        input.value=''
    }
}
createButton.onclick=()=>createTodo()
window.addEventListener('keydown',(e)=>{
    if (e.code==='Enter') createTodo()
})









