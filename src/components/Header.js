function Header({ isDarkMode, onDarkModeClick }){
  return(
    <header>
    <h2>Shopster</h2>
    <button onClick={onDarkModeClick}>
      {isDarkMode ? "Dark" : "Light"} Mode
    </button>
  </header>
  )
}
// You will need to pass a _callback function_ as a prop called `onDarkModeClick`
// to the `Header` component in order for the test to pass.


export default Header