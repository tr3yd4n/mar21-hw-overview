import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import WarningSign from './components/WarningSign'
// import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'
import fantasyBooks from './fantasy.json'
import BookList from './components/BookList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WarningSign text="Watch out!" />
        {/* <MyBadge color="success" text="NEW!" /> */}
        <SingleBook book={fantasyBooks[0]} />
        <BookList books={fantasyBooks} />
      </header>
    </div>
  )
}

export default App
