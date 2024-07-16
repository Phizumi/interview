export function createHeading() {
  const heading = document.createElement('h1')
  heading.textContent = 'Hello World'
  heading.addEventListener('click', () => {
    console.log(heading.textContent)
  })
  return heading
}