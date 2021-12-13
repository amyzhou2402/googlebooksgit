//want the parent class to be able to parse in values rather than having own state

//BUtton label
// Button callback (this is the click handler)

// need curly brackets because it signifies one object with 2 members from the properties object.
// 'destructuring' where you take the key;value inside that object by using bracket
// rather than props.label and props.clickHandler
const Button = ({ label, clickHandler }) => {
    return (
        <>
            <button onClick={clickHandler}>{label}</button>
        </>
    );
};

export default Button;
