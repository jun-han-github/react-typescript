import InputGeneral from "../components/InputGeneral";
import image from "../assets/images/forest.jpg";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [emailExist, setEmailExist]  = useState(false);
    const [register, setRegister] = useState(false);

    const [loading, setLoading] = useState(false);

    const checkThis = (name: string, pw: string) => {
        setLoading(true);
        setInterval(() => {
            setLoading(false);
        }, 1000);
        if (name === 'admin@admin') {
            setEmailExist(true);
        } else {
            setRegister(true);
        }
        console.log('Hello', name, pw);
    }

    return (
        <div className="text-white h-screen flex flex-col justify-center items-left px-3 bg-cover" style={{ backgroundImage:`url(${image})`}}>
            <h1 className="text-4xl px-3 mb-6 flex justify-between">
                { register ? 'Register' : 'Login' }
            </h1>
            <div>
                <InputGeneral title={'email'} type={'email'} inputHandler={setEmail} />
                { emailExist && <InputGeneral title={'password'} type={'password'} inputHandler={setPassword} /> }
                {
                    !loading && register &&
                    <>
                        <InputGeneral title={'password'} type={'password'} inputHandler={setPassword} />
                        <InputGeneral title={'password'} type={'password'} inputHandler={setConfirmPassword} />
                        <InputGeneral title={'first name'} type={'text'} inputHandler={setFirstName} />
                        <InputGeneral title={'last name'} type={'text'} inputHandler={setLastName} />
                        <div>Toggle</div>
                        <InputGeneral title={'gender'} type={'text'} inputHandler={setGender} />
                    </>
                }
            </div>
            <button className="flex justify-center items-center h-10 bg-teal-900 my-6 mx-3" onClick={() => checkThis(email, password)}>
                { loading && <FaSpinner className="animate-spin" /> }
                { !loading && <p>Next</p> }
            </button>
        </div>
    )
}
