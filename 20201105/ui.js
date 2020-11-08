import React, {useState} from 'react';

const style = {
  table: {
    borderCollapse: 'collapse',
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px',
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px',
    },
    inputs: {
      marginBottom: '5px',
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px',
    },
  },
};

const DEFAULT_INPUT = {
  firstName: 'Coder',
  lastName: 'Byte',
  phone: '8885559999',
};

function PhoneBookForm({addEntryToPhoneBook}) {
  const [inputData, setInputData] = useState(DEFAULT_INPUT);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addEntryToPhoneBook(inputData);
        setInputData(DEFAULT_INPUT);
      }}
      style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname'
        type='text'
        value={inputData.firstName}
        onChange={(e) => {
          setInputData({
            ...inputData,
            firstName: e.target.value,
          });
        }}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userLastname'
        name='userLastname'
        type='text'
        value={inputData.lastName}
        onChange={(e) => {
          setInputData({
            ...inputData,
            lastName: e.target.value,
          });
        }}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone'
        name='userPhone'
        type='text'
        value={inputData.phone}
        onChange={(e) => {
          setInputData({
            ...inputData,
            phone: e.target.value,
          });
        }}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className='submitButton'
        type='submit'
        value='Add User'
      />
    </form>
  );
}

function InformationTable({contacts}) {
  contacts.sort((a, b) => {
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;
    return 0;
  });
  return (
    <table style={style.table} className='informationTable'>
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, i) => (
          <tr key={`contact-${i}`}>
            <th style={style.tableCell}>{contact.firstName}</th>
            <th style={style.tableCell}>{contact.lastName}</th>
            <th style={style.tableCell}>{contact.phone}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Application(props) {
  const [contacts, setContacts] = useState([]);
  const addEntryToPhoneBook = (inputData) => {
    setContacts([...contacts, inputData]);
  };
  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} /> //这个是fuction fill out the required property of the component
      <InformationTable contacts={contacts} />
    </section>
  );
}

ReactDOM.render(<Application />, document.getElementById('root'));
