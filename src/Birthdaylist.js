import React,{ useState }  from 'react';
import data from './data'
const Birthdaylist = () => {
    const [people, setPeople] = useState(data)

    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople)
    };
   
      return (
        <>
          {people.map((person) => {
            const { id, name, age, image } = person;
            return (
              <article key={id} className='person float-container'>
                <img src={image} alt={name} />
                <div className='float-child'>
                  <h4>{name}</h4>
                  <p>{age} years</p>
                </div>
                <div className='float-child'>
                <button onClick={() => removeItem(id)}>remove</button>
                </div>
              </article>
            );
          })}
        </>
      );
    };


export default Birthdaylist;