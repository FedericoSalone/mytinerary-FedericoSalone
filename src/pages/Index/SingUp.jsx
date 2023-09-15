// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { userSignUp } from "../../redux/actions/userActions";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

const SignUp = () => {
    const dispatch = useDispatch();
    const message = useRef(null);

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const photoURLRef = useRef(null);
    const countryRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            photoURL: photoURLRef.current.value,
            country: countryRef.current.value,
        };

        console.log("Form Data:", formData);

        dispatch(userSignUp(formData))
            .unwrap()
            .then(() => {
                firstNameRef.current.value = "";
                lastNameRef.current.value = "";
                emailRef.current.value = "";
                passwordRef.current.value = "";
                photoURLRef.current.value = "";
                countryRef.current.value = "";

                message.current.textContent = "";
            })
            .catch((error) => {
                console.error("Error during signup", error);
                message.current.textContent = "Error during signup";
            });
    };

    const handleGoogleLoginSuccess = async (credentialResponse) => {
        console.log(credentialResponse);
        const infoUser = jwtDecode(credentialResponse.credential);
        console.log(infoUser);

        const formData = {
            firstName: infoUser.given_name,
            lastName: infoUser.family_name,
            email: infoUser.email,
            password: "Ff@123456",
            photoURL: "",
            country: "",
        };

        console.log("Form Data:", formData);

        try {
            const response = await fetch("http://localhost:3000/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Usuario registrado en la base de datos");
            } else {
                console.error("Error al registrar al usuario en la base de datos");
            }
        } catch (error) {
            console.error("Error al enviar la solicitud al servidor", error);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1200&h=854&dpr=1)' }}>
            <div className="bg-opacity-70 bg-white rounded-lg shadow-md w-full sm:w-96 p-6 mt-3 mb-3">
                <h1 className="text-3xl font-bold mb-4">Register</h1>
                <p ref={message} className="text-red-600 mb-4"></p>
                <p className="text-gray-700 text-lg mb-4">
                    Do you already have an account?{" "}
                    <Link to="/signin" className="text-blue-500 hover:underline">Sign In</Link>
                </p>
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-700 text-lg mb-1">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            ref={firstNameRef}
                            placeholder="Enter your first name"
                            className="w-full border-gray-300 rounded-md p-3 text-lg focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-700 text-lg mb-1">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            ref={lastNameRef}
                            placeholder="Enter your last name"
                            className="w-full border-gray-300 rounded-md p-3 text-lg focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-lg mb-1">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            ref={emailRef}
                            placeholder="Enter your email"
                            className="w-full border-gray-300 rounded-md p-3 text-lg focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-lg mb-1">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            ref={passwordRef}
                            placeholder="Enter your password"
                            className="w-full border-gray-300 rounded-md p-3 text-lg focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photoURL" className="block text-gray-700 text-lg mb-3">Photo:</label>
                        <label className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-md cursor-pointer text-center mt-2">
                            Upload Photo
                            <input
                                type="file"
                                accept="image/*"
                                id="photoURL"
                                name="photoURL"
                                ref={photoURLRef}
                                className="hidden"
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="country" className="block text-gray-700 text-lg mb-1">Country:</label>
                        <select
                            id="country"
                            name="country"
                            ref={countryRef}
                            className="w-full border-gray-300 rounded-md p-3 text-lg focus:ring focus:ring-blue-200"
                        >
                            <option value="usa">USA</option>
                            <option value="canada">Canada</option>
                            <option value="uk">UK</option>
                            <option value="australia">Australia</option>
                            <option value="germany">Germany</option>
                            <option value="france">France</option>
                            <option value="spain">Spain</option>
                            <option value="italy">Italy</option>
                            <option value="japan">Japan</option>
                            <option value="brazil">Brazil</option>
                            <option value="argentina">Argentina</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 w-full"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-4">
                    <GoogleOAuthProvider clientId="857224480491-tdot6sr1jqnho91g1ebhu8gjhvnkoiq4.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={handleGoogleLoginSuccess}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </GoogleOAuthProvider>
                </div>
            </div>
        </div>
    );
};

export default SignUp;











