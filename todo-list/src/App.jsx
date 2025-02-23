import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  
  return (
    <>
      <form className="new-item-form">
        <div className='form-row'>
          <label htmlFor="item">New Item</label>
          <input type='text' id='item' />
        </div>

        <button className="btn">Add</button>
      </form>
      <h1 className="header">To Do</h1>
      <ul className='list'>
        <li>
          <label>
            <input type="checkbox" />
            Item1
          </label>
          <button className="btn">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item2
          </label>
          <button className="btn">Delete</button>
        </li>
      </ul>
    </>
  )
}