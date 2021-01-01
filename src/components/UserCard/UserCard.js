const UserCard = ({ sender, receiver }) => {
  return (
    <div>
      <div className="card">
        <div>
          <h3>Sender: {sender ? sender : "No one."}</h3>
          <h3>Receiver: {receiver ? receiver : "No one."}</h3>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
