const db = [
  {
    "id": 1,
   "phoneNumber": "333-962-7516",
    "email": "jenny.chan@email.com"
  },
  {
    "id": 2,
   "phoneNumber": "011-211-7516",
    "email": "jessica.warren@email.com"
  },
  {
    "id": 3,
    "phoneNumber": "788-962-7516",
    "email": "tony.frank@email.com"
  },
  {
    "id": 4,
    "phoneNumber": "011-962-111",
    "email": "jeremy.clark@email.com"
  },
  {
    "id": 5,
    "phoneNumber": "3231-962-7516",
    "email": "raymon.edwards@email.com"
  }
]

function Glossary() {
  return (
    db.map(item => (
      <div key={item.id}>
        {item.email}
        {item.phoneNumber}
      </div>
    ))
  )
}

export default Glossary
