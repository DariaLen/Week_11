const input = document.querySelector('input');
const btn = document.querySelector('button');
const container = document.querySelector('.wrapperlist');

btn.addEventListener('click', createTask);

function createTask() {
  if (input.value.trim() === '') {
    alert('The task field cannot be emply');
    return false;
  }

  const li = document.createElement('li');
  li.innerText = input.value; 

  container.appendChild(li);

  input.value = '';
}

container.addEventListener('click', (event) => {
  console.log(event.target.tagName);
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
});