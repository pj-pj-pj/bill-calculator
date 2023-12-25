import { useState } from 'react';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friendsList, setFriendsList] = useState(initialFriends);

  function handleAddFriend(newFriend) {
    setFriendsList((friendsList) => [...friendsList, newFriend]);
  }

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList list={friendsList} />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add friend'}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendsList({ list }) {
  const friends = list;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img
        src={friend.image}
        alt={friend.name}
      />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className='red'>
          You owe {friend.name} ${Math.abs(friend.balance)}{' '}
        </p>
      )}
      {friend.balance > 0 && (
        <p className='green'>
          {friend.name} owes you ${friend.balance}{' '}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button>Select</Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button
      className='button'
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState('');
  const [image, setImgUrl] = useState('https://i.pravatar.cc/48');

  function handleAddFriend(e) {
    e.preventDefault();
    const newFriend = { name, image, id: Date().now, balance: 0 };
    onAddFriend(newFriend);

    setName('');
    setImgUrl('https://i.pravatar.cc/48');
  }

  return (
    <form className='form-add-friend'>
      <label>👯 Friend name</label>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🖼️ Image URL</label>
      <input
        type='text'
        value={image}
        onChange={(e) => setImgUrl(e.target.value)}
      />
      <Button onClick={(e) => handleAddFriend(e)}>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with friend.name</h2>
      <label>💵 Bill value</label>
      <input type='text' />
      <label>🕴️ Your expense </label>
      <input type='text' />
      <label>👯 friend.name's expense</label>
      <input
        type='text'
        disabled
      />

      <label>💸 Who is paying the bill</label>
      <select>
        <option value='user'>You</option>
        <option value='friend'>friend.name</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}