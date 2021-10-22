const tasksDOM = document.querySelector('.tasks')
const loadingDOM = document.querySelector('.loading-text')
const formDOM = document.querySelector('.task-form')
const taskInputDOM = document.querySelector('.task-input')
const formAlertDOM = document.querySelector('.form-alert')

const showTasks = async () => {
    loadingDOM.style.visibility = 'visible'
    try {
        const {
            data: {tasks},
        } = await axios.get('/api/v1/tasks')
    } catch (error) {
        
    }
}