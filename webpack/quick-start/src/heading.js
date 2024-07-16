import './heading.css'

export function createHeading() {
  const heading = document.createElement('h1')
  heading.textContent = 'Hello World'
  heading.classList.add('heading')
  heading.addEventListener('click', () => {
    console.log(heading.textContent)
  })
  return heading
}